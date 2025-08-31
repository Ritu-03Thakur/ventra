"use client";
import { productItems } from "@/Data/Data";
import Image from "next/image";
import { FC } from "react";
import { Heart, Share } from "lucide-react";
import { CartButton } from "@/Component/Common/Common";
import Navbar from "@/Component/Layout/Navbar";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "@/lib/store/FeaturedSlice/cart";
import { MdCurrencyRupee } from "react-icons/md";


interface pageProps {
  params: { item: string };
}

const ProductId: FC<pageProps> = ({ params }) => {
  const dispatch = useDispatch();

  const handleCart = (product : any) => {
    toast.success("Item Added to Cart 😸");
    dispatch(
      addToCart({
        ...product , 
        quantity: 1,  
      })
    )


  };
  return (
    <>
    <Navbar/>
      {productItems
        .filter((d) => d.id === params.item)
        .map((product) => {
          return (
            <div
              className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0"
              key={product.id}
            >
              <div className="overflow-hidden">
                <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10 mt-header">
                  <div className="items-start justify-between lg:flex lg:space-x-8">
                    <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                      <div className="w-full xl:flex xl:flex-row-reverse">
                        <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                          <div className="relative flex items-center justify-center">
                            <Image
                              alt="Product gallery 1"
                              src= {product.srcImage}
                              width={650}
                              height={590}
                              className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 xl:flex-col">
                          
                            <div
                            
                              className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 "
                            >
                              <Image
                                alt= "Product Image"
                                src={product.srcImage}
                                width={100}
                                height={100}
                                decoding="async"
                                loading="lazy"
                                className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                              />
                            </div>
                         
                        </div>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                      <div className="pb-5">
                        <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                          {product.title}
                        </h2>
                        <div className='flex gap-1 items-center'>
                        <p className="flex text-xl items-center font-bold justify-center ">
            <MdCurrencyRupee size={22} />
            {product.price}
          </p>
          </div>
                      
                      </div>
                      
                      <div className="pb-2" />
                      <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                      <CartButton mybutton="ADD TO BAG" onClick={()=> {handleCart(product)}} />

                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            type="button"
                            className="primary inline-flex items-center justify-center rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                          >
                            <Heart size={16} className="mr-3" />
                            <span className="block">Wishlist</span>
                          </button>
                          <div className="relative">
                            <button
                              type="button"
                              className=" primary inline-flex w-full items-center justify-center  px-3 py-2 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                            >
                              <Share size={16} className="mr-3 " />
                              <span className="block">Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 xl:pt-8">
                        <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                          Product Details:
                        </h3>
                        <p className="text-sm">
                         {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductId;
