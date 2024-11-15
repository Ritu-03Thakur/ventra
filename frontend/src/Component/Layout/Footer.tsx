import Link from "next/link";

const  Footer = () => {
  

  return (
   
    <div className="p-4">
   <hr className="w-full h-[2px] my-8 bg-[#454647] border-0  rounded-md" />
        <div className="flex justify-between mt-8">
          <ul className="space-y-2">
            <li>VENTRA</li>
            <li>Collections</li>
          </ul>
          <ul className="space-y-2">
            <li>Shipping & Returns</li>
            <li>Paying Methods</li>
          </ul>
        </div>
    
      <div className="p-4 mt-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <Link href="/" className="text-white">
              PURE GLOW
            </Link>
          </div>
          <div>
            <p className="text-white">
              © copyright 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

 

export default Footer ; 
