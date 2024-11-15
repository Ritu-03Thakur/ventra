"use client"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showTotalAmount, showTotalQuantity } from "@/lib/store/FeaturedSlice/cart";
import Link from "next/link";
import { RiShoppingBag4Fill } from "react-icons/ri";

const CartOrderTotal = () => {
  const totalPrice = useSelector(showTotalAmount);
  const totalQuantity = useSelector(showTotalQuantity);

  // Flag to check if it's client-side rendering
  const [isClient, setIsClient] = useState(false);

  // UseEffect to set client-side rendering after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOrder = () => {
    // Order handling logic
  };

  // Render only when it's client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className="md:mt-12 mt-2 text-textColor w-[400px] flex flex-col items-center p-2 rounded-2xl border border-gray-700">
      <h3 className="text-textHeading mb-4 text-2xl p-2 leading-none tracking-tight md:text-4xl">
        Order Summary
      </h3>

      <div>
        <span className="flex items-center justify-between">
          <span className="text-sm text-gray-800">SubTotal</span>
          <span className="text-sm font-medium text-gray-900">₹{totalPrice}.00</span>
        </span>
        <span className="flex items-center justify-between">
          <span className="text-sm text-gray-800">Quantity</span>
          <span className="text-sm font-medium text-gray-900">{totalQuantity}</span>
        </span>
        <span className="flex items-center justify-between">
          <span className="text-sm text-gray-800">Delivery Charges</span>
          {totalPrice > 1000 ? (
            <span className="text-xl font-medium text-[#26c125]">FREE</span>
          ) : (
            <span className="text-sm font-medium text-gray-900">₹550</span>
          )}
        </span>
        <hr className="w-64 h-[2px] my-8 bg-[#a0a3a7] border-0 rounded-md" />
        <span className="flex items-center justify-between">
          <span className="text-sm text-gray-800">Total</span>
          <span className="text-sm font-medium text-gray-900">₹{totalPrice}.00</span>
        </span>
      </div>
      <Link href={"/place-order"}>
      <button className=" h-10 flex items-center gap-2 mt-4 w-full rounded-lg bg-textHeading px-2 py-1.5 text-sm font-bold justify-center text-[#c9bcbc] shadow-sm hover:bg-[#b237ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
      <RiShoppingBag4Fill size={20} />
      PLACE ORDER
      </button>
      </Link>

    </div>
  );
};

export default CartOrderTotal;
