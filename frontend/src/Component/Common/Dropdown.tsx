"use client";
import { setName, showName } from "@/lib/store/FeaturedSlice/auth";
// import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Dropdown = () => {
  const username = useSelector(showName);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropMenu = [
    { id: 1, label: "Orders", link: "/order-histroy" },
    { id: 2, label: "Cart", link: "/cart" },
  ];

  const HandleLogout = async (e : any) => {
    try {
      e.preventDefault();
      // const response = await axios.post(`${backend_api}/api/users/log-out`)
      // if(response.status == 200){
        dispatch(setName(""));
        toast.success("Log Out Successfully 🥲");
        localStorage.removeItem('token')
        localStorage.removeItem('cart')
      // }
      
    } catch (error) {
      console.log(" Logout Failed :( ")
    }
  }

  return (
    <div className="relative inline-block text-left">
      <button
        className="dropTransition rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        onClick={toggleDropdown}
      >
        {username ? username : "Guest"}
        <RiArrowDropDownLine size={25} />
      </button>

      {/* Conditionally render the dropdown menu */}
      {isOpen && (
        <div className="z-10 bg-bgColor text-textColor rounded-lg w-44 absolute mt-2">
          <ul className="p-2 flex flex-col gap-2">
            {dropMenu.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="px-4 py-2 hover:text-hoverTextColor">
                  {item.label}
                </Link>
              </li>
            ))}
            <hr className="h-[1px] text-textColor w-[70%]" />
            <li>
            {username ? (
                <button
                  onClick={HandleLogout}
                  className="px-4 py-2 hover:text-hoverTextColor w-full text-left"
                >
                  Log Out
                </button>
              ) : (
                <Link href="/login" className="px-4 py-2 hover:text-hoverTextColor">
                  Log In
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
