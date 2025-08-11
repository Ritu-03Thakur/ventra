"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { decrementItem, incrementItem, removeFromCart, showCartItems } from "@/lib/store/FeaturedSlice/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      mass: 0.5,
    },
  },
  exit: { opacity: 0, x: -100 },
};

const CartCard = () => {
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector(showCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const RemoveItem = (id: string) => {
    toast.error("Item removed from cart");
    dispatch(removeFromCart({ id }));
  };
  
  const IncrementQuantity = (id: string) => {
    dispatch(incrementItem(id));
    toast.success("Quantity increased");
  };
  
  const DecrementQuantity = (id: string, quantity: number) => {
    if (quantity > 1) {
      dispatch(decrementItem(id));
      toast.info("Quantity decreased");
    } else {
      RemoveItem(id);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-textHeading mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
      </motion.h2>
      
      <motion.div 
        className="space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {cartItems.map((product: any) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              layout
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full md:w-48 h-48 bg-gray-50 flex-shrink-0">
                <Image
                  src={product.srcImage}
                  alt={product.title || "Product Image"}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-6 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-textHeading">{product.title}</h3>
                    <p className="text-accent font-bold text-xl">₹{product.price}</p>
                    <p className="text-sm text-textColor/80">Size: {product.size || 'One Size'}</p>
                    <p className="text-sm text-textColor/80">Color: {product.color || 'Default'}</p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2 mb-4">
                      <button
                        onClick={() => DecrementQuantity(product.id, product.quantity)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-textHeading hover:bg-gray-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center text-textHeading font-medium">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => IncrementQuantity(product.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-textHeading hover:bg-gray-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => RemoveItem(product.id)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CartCard;
