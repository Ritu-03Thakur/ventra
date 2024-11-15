import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Dropdown from "../Common/Dropdown";

const menuItems = [
  {
    name: "COLLECTIONS",
    href: "/product",
  },
];

const Navbar = () => {
  return (
    <div className="fixed w-full bg-bgColor z-50 rounded-md  ">
      <div className="mx-auto flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center space-x-2">       
            <Image src={"/logo.png"} width={40} height={40} alt={"Logo"} />
        </Link>
      

        <div className="flex">
          <ul className="md:ml-12 inline-flex ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center  smooth"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex gap-2 items-center ">
            <Dropdown/>
          <Link href={"/cart"} className="smooth text-2xl ">
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
