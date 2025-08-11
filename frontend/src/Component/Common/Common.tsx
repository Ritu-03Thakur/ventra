import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { RiShoppingBag4Fill } from "react-icons/ri";

interface HeadingProps {
  heading: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const Heading = ({ 
  heading, 
  className = "",
  align = "center" 
}: HeadingProps) => {
  const alignClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right"
  };

  return (
    <motion.div 
      className={cn("w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("flex items-center gap-4", alignClasses[align])}>
        {align !== "left" && (
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}
        <h2 className="text-3xl font-bold tracking-tight text-textHeading sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {align !== "right" && (
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
        )}
      </div>
    </motion.div>
  );
};

interface SubHeadingProps {
  subheading: string;
  className?: string;
  align?: "left" | "center" | "right";
  maxWidth?: string;
}

const SubHeading = ({ 
  subheading, 
  className = "",
  align = "center",
  maxWidth = "max-w-2xl"
}: SubHeadingProps) => {
  const alignClasses = {
    left: "text-left ml-0 mr-auto",
    center: "text-center mx-auto",
    right: "text-right ml-auto mr-0"
  };

  return (
    <motion.div
      className={cn("w-full mt-4", className)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <p className={cn(
        "text-lg text-textColor/80 leading-relaxed",
        maxWidth,
        alignClasses[align]
      )}>
        {subheading}
      </p>
    </motion.div>
  );
};

// Deprecated - kept for backward compatibility
const TextPara = ({ words }: { words: string }) => {
  return <TextGenerateEffect words={words} />;
};

const CartButton = ({ mybutton , onClick }: 
  { mybutton: string , 
    onClick : () => void;
   }) => {
  return (
    <button
    onClick={onClick}
     className=" h-10 flex items-center gap-2 mt-4 w-full rounded-lg bg-textHeading px-2 py-1.5 text-sm font-bold justify-center text-[#c9bcbc] shadow-sm hover:bg-hoverTextColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">

      <RiShoppingBag4Fill size={20} />
      {mybutton}
    </button>
  );
};



export { Heading, TextPara, SubHeading, CartButton };
