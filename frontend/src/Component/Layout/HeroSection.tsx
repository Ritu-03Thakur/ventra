"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants, Transition, TargetAndTransition } from "framer-motion";
import { Button } from "../ui/button";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FloatingElementAnimation = {
  initial: { y: number };
  animate: { y: number[] };
  transition: Transition & { repeat: number; repeatType: 'reverse' | 'loop' | 'mirror' };
  className?: string;
};

type OfferItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
};

type BannerItem = {
  name: string;
  className?: string;
};

const HeroSection = () => {
  const offers: OfferItem[] = [
    { 
      id: 1,
      title: "SUMMER SALE",
      subtitle: "Up to 50% OFF",
      description: "On all new arrivals. Limited time offer!",
      buttonText: "Shop Now",
      image: "/images/homeFront1.png"
    },
    { 
      id: 2,
      title: "NEW COLLECTION",
      subtitle: "Spring/Summer 2024",
      description: "Discover the latest trends in fashion",
      buttonText: "Explore",
      image: "/images/homeFront1.png"
    }
  ];
  
  const bannerItems: BannerItem[] = [
    { 
      name: "FREE SHIPPING on orders over ₹1999",
      className: "bg-accent text-white"
    },
    { 
      name: "NEW CUSTOMERS GET 15% OFF",
      className: "bg-textHeading text-white"
    },
    { 
      name: "EASY RETURNS - 30 Days Return Policy",
      className: "bg-accent text-white"
    }
  ];

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

  const floatingImage: TargetAndTransition = {
    y: [0, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  const getFloatingElement = (delay = 0): FloatingElementAnimation => ({
    initial: { y: 0 },
    animate: { 
      y: [0, -15, 0],
    },
    transition: {
      duration: 6 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    },
    className: ""
  });
  
  const floatingElement1 = getFloatingElement(0.5);
  const floatingElement2 = getFloatingElement(1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-20 md:py-36">
      {/* Animated background elements */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
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
              opacity: 0.3 + Math.random() * 0.3,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1 + Math.random() * 0.5,
              opacity: 0.3 + Math.random() * 0.3,
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
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center"
        >
          {/* Left column - Text content */}
          <motion.div variants={item} className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Summer Collection 2024
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-textHeading leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Elevate Your <span className="text-accent">Style</span> Game
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-textColor/80 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Discover curated collections that blend timeless elegance with modern trends. Quality craftsmanship meets contemporary design.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href="/product"
                className={cn(
                  "px-8 py-3.5 text-base font-medium text-white bg-accent hover:bg-accent/90",
                  "transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg",
                  "focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                )}
              >
                Shop Now
                <span className="ml-2 text-lg">→</span>
              </Link>
              <Link 
                href="/contact"
                className={cn(
                  "px-8 py-3.5 text-base font-medium border-2 border-textColor/20 hover:border-textColor/30",
                  "bg-white/50 hover:bg-white/70 text-textColor hover:text-textColor/90",
                  "transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg",
                  "focus-visible:ring-2 focus-visible:ring-textColor/20 focus-visible:ring-offset-2"
                )}
              >
                View Collection
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-textColor/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      style={{
                        zIndex: 3 - i,
                        marginLeft: i > 0 ? '-0.75rem' : 0,
                      }}
                    >
                      <div className="w-full h-full bg-gray-200"></div>
                    </div>
                  ))}
                </div>
                <span>10k+ Happy Customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="relative h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center"
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-accent/5 to-green-50 rounded-[40px] -rotate-6 scale-95"
              animate={floatingImage}
            />
            
            <motion.div 
              className="relative z-10 w-full h-full max-w-md lg:max-w-none"
              animate={{
                ...floatingImage,
                transition: { ...floatingImage.transition, delay: 0.5 }
              }}
            >
              <Image
                src={"/images/homeFront1.png"}
                alt="Fashion Collection"
                width={800}
                height={1000}
                priority
                className="w-full h-full object-contain object-center"
              />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-white px-6 py-3 rounded-full shadow-xl flex items-center backdrop-blur-sm bg-white/80"
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                delay: 0.8, 
                type: 'spring', 
                stiffness: 300,
                damping: 15
              }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="font-medium text-textColor">New Collection</span>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-16 -left-8 w-40 h-40 bg-accent/5 rounded-full -z-10"
              initial={floatingElement1.initial}
              animate={floatingElement1.animate}
              transition={floatingElement1.transition}
            />
            <motion.div 
              className="absolute bottom-16 -right-8 w-48 h-48 bg-green-100/30 rounded-full -z-10"
              initial={floatingElement2.initial}
              animate={floatingElement2.animate}
              transition={floatingElement2.transition}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Special Offers Banner */}
      <div className="mt-24 lg:mt-32 line-clamp-2 h-32">
        <InfiniteMovingCards
          items={bannerItems}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="p-2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
