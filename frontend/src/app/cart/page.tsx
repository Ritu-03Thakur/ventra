"use client"
import CartCard from "@/Component/Cart/CartCard"
import CartOrderTotal from "@/Component/Cart/CartOrderTotal"
import EmptyCart from "@/Component/Cart/EmptyCart"
import { showCartItems } from "@/lib/store/FeaturedSlice/cart"
import { useSelector } from "react-redux"


const Cart = () => {
  const isCartEmpty = useSelector(showCartItems)
  

    return (
      <>  
     
      <div className="flex flex-col items-center md:flex-row mx-auto justify-center md:justify-between p-3 md:p-5 ">
        {
        ( isCartEmpty.length == 0) ?
         <EmptyCart/>:
         <>  
         <CartCard/>
         <CartOrderTotal/>
         </>

        }
        </div>
     
      
    </>
  )
}

export default Cart
