"use client";
import Image from "next/image";
import { CartButton } from "./Common";
import { MdCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/FeaturedSlice/cart";
import Link from "next/link";
import { toast } from "react-toastify";

interface CardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  srcImage: string;
}

const Card = ({ id, title, description, price, srcImage }: CardProps) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    toast.success("Item Added to Cart 😸");
    dispatch(
      addToCart({
        id: id,
        quantity: 1,
        price: price,
        title: title,
        srcImage: srcImage,
      })
    )


  };

  return (
    <div className="w-[300px] backdrop-blur-sm  inset-0 bg-white/30">
      <Link
        href={`/product/${id}`}
        style={{
          boxShadow: "1px 2px 11px 8px '#c8c0d3'",
        }}
        className="rounded-md bg-[#bcaac5]"
      >
        <div className="overflow-hidden">
          <Image
            src={srcImage}
            alt="product"
            width={300}
            height={300}
            // layout="responsive"
            className="h-[300px] w-full rounded-t-md object-cover imgTransition"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4 text-[#938e8e]">
        <div className="flex justify-between">
          <h1 className=" truncate text-sm font-bold ">
            {title}
          </h1>
          <span className="flex gap-1 items-center text-textHeading font-bold">
            <FaStar /> 4.1
          </span>
        </div>
        <p className="text-sm  truncate ">{description}</p>
        <div className="flex items-center  ">
          <p className="flex text-xl items-center font-bold justify-center ">
            <MdCurrencyRupee size={22} />
            {price}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <CartButton mybutton="ADD TO BAG" onClick={handleCart} />
          
        </div>
      </div>
    </div>
  );
};

export default Card;
