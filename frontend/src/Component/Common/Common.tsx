import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { RiShoppingBag4Fill } from "react-icons/ri";


const TextPara = ({ words }: { words: string }) => {
  return (
    <div>
      <TextGenerateEffect words={words} />
    </div>
  );
};

const Heading = ({ heading }: { heading: string }) => {
  return (
    <>
      <div className=" items-center gap-2 inline-flex justify-center w-full">
        <hr className="w-64 h-[2px] my-8 bg-[#a0a3a7] border-0  rounded-md" />
        <h1 className="mb-4 text-4xl font-semibold leading-none  tracking-tight text-textHeading md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <hr className="w-64 h-[2px] my-8 bg-[#a0a3a7] border-0  rounded-md" />
      </div>
    </>
  );
};
const SubHeading = ({ subheading }: { subheading: string }) => {
  return (
    <>
      <p className=" p-1.5 mb-3 text-[#817e7e]  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-700  first-letter:me-3 first-letter:float-start md:max-w-[600px]">
        {subheading}
      </p>
    </>
  );
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
