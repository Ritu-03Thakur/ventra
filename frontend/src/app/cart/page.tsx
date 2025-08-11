"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartCard from "@/Component/Cart/CartCard"
import CartOrderTotal from "@/Component/Cart/CartOrderTotal"
import EmptyCart from "@/Component/Cart/EmptyCart"
import { showCartItems } from "@/lib/store/FeaturedSlice/cart"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const Cart = () => {
  const [isClient, setIsClient] = useState(false)
  const cartItems = useSelector(showCartItems)
  const isCartEmpty = cartItems.length === 0

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {isCartEmpty ? (
            <motion.div
              key="empty-cart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EmptyCart />
            </motion.div>
          ) : (
            <motion.div
              key="cart-content"
              className="flex flex-col lg:flex-row gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div className="lg:w-2/3">
                <CartCard />
              </motion.div>
              <motion.div 
                className="lg:w-1/3 lg:sticky lg:top-24 h-fit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
              >
                <CartOrderTotal />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Cart
