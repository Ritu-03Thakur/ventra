"use client";

import { motion, Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showTotalAmount, showTotalQuantity } from "@/lib/store/FeaturedSlice/cart";
import Link from "next/link";
import { ShoppingBag, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/Component/ui/button";

const CartOrderTotal = () => {
  const totalPrice = useSelector(showTotalAmount);
  const totalQuantity = useSelector(showTotalQuantity);
  const [isClient, setIsClient] = useState(false);
  const deliveryCharge = totalPrice > 1000 ? 0 : 550;
  const total = totalPrice + deliveryCharge;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden self-start sticky top-24"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-bold text-textHeading mb-6"
          variants={item}
        >
          Order Summary
        </motion.h3>

        <motion.div className="space-y-4 mb-6" variants={container}>
          <motion.div className="flex justify-between" variants={item}>
            <span className="text-textColor/80">Subtotal ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})</span>
            <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
          </motion.div>
          
          <motion.div className="flex justify-between" variants={item}>
            <span className="text-textColor/80">Delivery</span>
            {deliveryCharge === 0 ? (
              <span className="flex items-center gap-1 text-green-500">
                <CheckCircle size={16} />
                FREE
              </span>
            ) : (
              <span>₹{deliveryCharge}</span>
            )}
          </motion.div>
          
          {deliveryCharge === 0 && (
            <motion.div 
              className="text-sm text-green-600 bg-green-50 p-2 rounded-lg flex items-center gap-2"
              variants={item}
            >
              <Truck size={16} />
              <span>Free delivery on orders over ₹1,000</span>
            </motion.div>
          )}
          
          <motion.div className="border-t border-gray-100 my-4" variants={item} />
          
          <motion.div className="flex justify-between text-lg font-semibold" variants={item}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/place-order" className="block">
            <Button 
              className="w-full py-6 text-base font-medium flex items-center justify-center gap-2"
              size="lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Proceed to Checkout
            </Button>
          </Link>
        </motion.div>
        
        <motion.p 
          className="text-xs text-textColor/60 text-center mt-4"
          variants={item}
        >
          By placing your order, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100">
        <motion.div 
          className="flex items-center gap-3 text-sm text-textColor/80"
          variants={item}
        >
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Secure Checkout</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartOrderTotal;
