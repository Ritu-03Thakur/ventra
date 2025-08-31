"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/Component/ui/button";
import { ShoppingBag } from 'lucide-react';

import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    }
  }
};

const EmptyCart = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto px-4 py-12 text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        className="relative w-64 h-64 mx-auto mb-8 mt-header"
        variants={item}
      >
        <Image
          src="/images/emptyCart.jpg"
          alt="Empty shopping cart"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-textHeading mb-4"
        variants={item}
      >
        Your cart is empty
      </motion.h2>
      
      <motion.p 
        className="text-textColor/80 mb-8 max-w-md mx-auto"
        variants={item}
      >
        Looks like you haven&apos;t added anything to your cart yet. Let&apos;s find something special for you!
      </motion.p>
      
      <motion.div variants={item}>
        <Link href="/products">
          <Button 
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium"
            size="lg"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
          </Button>
        </Link>
      </motion.div>
      
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-100"
        variants={item}
      >
        <h3 className="text-lg font-medium text-textHeading mb-4">Need help shopping?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="text-sm text-accent hover:underline">
            Contact Support
          </Link>
          <span className="text-gray-300">•</span>
          <Link href="/faq" className="text-sm text-accent hover:underline">
            FAQs
          </Link>
          <span className="text-gray-300">•</span>
          <Link href="/shipping" className="text-sm text-accent hover:underline">
            Shipping Info
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmptyCart;
