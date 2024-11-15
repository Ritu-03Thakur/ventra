"use client";
import { useEffect, useState } from "react";
import { decrementItem, incrementItem, removeFromCart, showCartItems } from "@/lib/store/FeaturedSlice/cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartCard = () => {
  const [isClient, setIsClient] = useState(false); // Client-side check

  useEffect(() => {
    setIsClient(true); // Ensure it's running after hydration
  }, []);

  const cartItems = useSelector(showCartItems);
  const dispatch = useDispatch();

  const RemoveItem = (id: string) => {
    toast.error("Item Removed from Cart 😲");
    dispatch(removeFromCart({ id }));
  };
  
  const IncrementQuantity = (id: string) => {
    dispatch(incrementItem(id));
  };
  
  const DecrementQuantity = (id: string) => {
    dispatch(decrementItem(id));
  };

  // Return null if it's not client-side rendering
  if (!isClient) {
    return null;
  }

  return (
    <div className="mt-12 gap-3 flex flex-col items-center justify-center">
      {cartItems.map((product: any) => (
        <div
          key={product.id}
          className="w-full md:w-[550px] flex justify-between items-center   p-2 rounded-lg border border-borderColor "
        >
          <Image
            src={product.srcImage}
            alt={product.title || "Product Image"}
            width={200}
            height={200}
            className="sm:h-36 sm:w-38 h-48 w-48 rounded-md object-contain object-center"
          />
          <div className="flex flex-col gap-2">
            <div>
              <span>{product.title}</span>
              <span>₹{product.price}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <button
                  onClick={() => DecrementQuantity(product.id)}
                  className="w-8 bg-textHeading text-textPrimary rounded-md flex justify-center items-center"
                >
                  <FaMinus />
                </button>
                <span className="w-8 border border-textSecondary text-textPrimary rounded-lg flex justify-center items-center text-xl">
                  {product.quantity}
                </span>
                <button
                  onClick={() => IncrementQuantity(product.id)}
                  className="w-8 bg-textHeading text-textPrimary rounded-md flex justify-center items-center "
                >
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={() => RemoveItem(product.id)}
                className="w-[100px] flex gap-1 text-textPrimary items-center p-1.5 rounded-lg border border-textSecondary"
              >
                <Trash size={12} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
