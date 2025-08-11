"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { policyText } from '@/Data';
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

interface PolicyItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

const ExploreFeatured = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-16 md:py-24">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              New Collection
            </motion.span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textHeading">
              Discover Your Perfect Style
            </h1>
            <p className="text-lg text-textColor/80">
              Dive into our curated collections and find your perfect fit.
              From casual wear to glamorous evening outfits, we have something for every occasion.
              Explore and revamp your wardrobe with our handpicked pieces.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-200">
              Explore More
            </button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <img 
                src={"/images/explore.gif"}
                alt="Explore Featured Image"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PolicyFeatured = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-16 md:py-24">
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
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textHeading mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-textColor/80 max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with our premium services
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center flex-wrap gap-8 items-center "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {(policyText as PolicyItem[]).map((item) => (
            <motion.div 
              key={item.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item as any}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full mb-4 mx-auto">
                <item.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-textHeading mb-2">{item.title}</h3>
              <p className="text-sm text-textColor/80">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { ExploreFeatured, PolicyFeatured };
