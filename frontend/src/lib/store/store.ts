
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/lib/store/FeaturedSlice/cart";
import authSlice from "@/lib/store/FeaturedSlice/auth"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user : authSlice , 
  },
});
