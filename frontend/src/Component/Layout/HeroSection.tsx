 import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const HeroSection = () => {
  const testimonials = [
    { name: "FLAT 50% OFF" },
    { name: "UPTO ₹500 CASHBACK" },
  ];
 
  return (
    <>
      <div className="flex items-center justify-center mt-12 relative w-full">
        <Image
         src={"/images/homeFront1.png"}
         alt="Image"
         width={1000}
         height={500}
         className=" imgTransition w-full md:w-[80%] "
        />
      </div>
  <div className=" rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  
    </>
  );
};

export default HeroSection;
