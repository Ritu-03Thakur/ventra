"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from 'next/link';
import { Button } from "@/Component/ui/button";
import { cn } from "@/lib/utils";
import FeaturedCard from './FeaturedCard';

interface SectionProps {
  heading: string;
  subHeading: string;
  bgcolor?: string;
  productItems: any[];
}

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

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.5
    }
  },
};

const FeaturedSection = ({ heading, subHeading, bgcolor = 'bg-gradient-to-br from-white via-green-50 to-white', productItems }: SectionProps) => {
  return (
    <section className={`relative overflow-hidden py-16 md:py-24 ${bgcolor}`}>
      {/* Animated background elements */}
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute rounded-full -z-10",
              i % 3 === 0 ? "bg-accent/10" : "bg-green-100/30",
              i % 2 === 0 ? "blur-xl" : "blur-2xl"
            )}
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1 + Math.random() * 0.5,
              opacity: 0.2 + Math.random() * 0.3,
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            variants={item}
          >
            Featured Collection
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-textHeading mb-4"
            variants={item}
          >
            {heading}
          </motion.h2>
          <motion.p 
            className="text-lg text-textColor/80 max-w-3xl mx-auto"
            variants={item}
          >
            {subHeading}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {productItems.slice(0, 3).map((item) => (
            <motion.div 
              key={item.id} 
              className="group relative"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Link href={`/product/${item.id}`}>
                <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <FeaturedCard {...item} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button variant="outline" className="px-8 py-6 text-base font-medium">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
