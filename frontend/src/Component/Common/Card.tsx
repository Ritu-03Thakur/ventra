"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/lib/store/FeaturedSlice/cart";
import { Button } from "@/Component/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  srcImage: string;
  className?: string;
}

const Card = ({ id, title, description, price, srcImage, className }: CardProps) => {
  const dispatch = useDispatch();

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast.success("Item added to cart!");
    dispatch(
      addToCart({
        id,
        quantity: 1,
        price,
        title,
        srcImage,
        description,
      })
    );
  };

  return (
    <motion.div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/product/${id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden bg-gray-50">
          <Image
            src={srcImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          
          <motion.div 
            className="absolute bottom-4 right-4"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <Button 
              size="icon" 
              variant="default" 
              className="rounded-full h-10 w-10 shadow-lg"
              onClick={handleCart}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-textHeading line-clamp-1">
              {title}
            </h3>
            <div className="flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              <Star className="mr-1 h-3 w-3 fill-current" />
              <span>4.8</span>
            </div>
          </div>
          
          <p className="mb-3 text-sm text-textColor/70 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-textHeading">
              ${price.toFixed(2)}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              className="group-hover:bg-accent group-hover:text-white"
              onClick={handleCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
