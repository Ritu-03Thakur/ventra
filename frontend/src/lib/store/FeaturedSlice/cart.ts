import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
  price: number;
  title: string;
  srcImage: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}
const getInitialCartItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};



const initialState: CartState = {
  items: getInitialCartItems(),
  totalQuantity: 0,
  totalAmount: 0,
};

const calTotalAmount = (state: CartState) => {
  const { totalQuantity, totalAmount } = state.items.reduce(
    (cartTotal, item) => {
      const { price, quantity } = item;
      const totalPrice = price * quantity;

      cartTotal.totalAmount += totalPrice;
      cartTotal.totalQuantity += quantity;
      return cartTotal;
    },
    {
      totalAmount: 0,
      totalQuantity: 0,
    }
  );

  state.totalAmount = totalAmount;
  state.totalQuantity = totalQuantity;
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action) => {
      const newItem = action.payload;
      const existItem = state.items.find((item: any) => item.id === newItem.id);
      if (existItem) {
        existItem.quantity += newItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          quantity: newItem.quantity,
          price: newItem.price,
          title: newItem.title,
          srcImage: newItem.srcImage,
        });
      } 
      state.totalQuantity += 1;
      calTotalAmount(state);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state: CartState, action) => {
      const removeItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === removeItem.id
      );

      if (existingItem) {
          state.items = state.items.filter(
            (item: any) => item.id !== removeItem.id
          );
      }
      state.totalQuantity -= 1;
      calTotalAmount(state);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incrementItem: (state: CartState, action) => {
      const itemId = action.payload;
      const existingItemIdx = state.items.findIndex(
        (item: any) => item.id === itemId
      );
      if (existingItemIdx >= 0) {
        state.items[existingItemIdx].quantity += 1;
      }
      calTotalAmount(state);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrementItem: (state: CartState, action) => {
      const itemId = action.payload;
      const existingItemIdx = state.items.findIndex(
        (item: any) => item.id === itemId
      );
      if (state.items[existingItemIdx].quantity > 1) {
        state.items[existingItemIdx].quantity -= 1;
      }
      calTotalAmount(state);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;

export const showCartItems = (state: any) => state.cart.items;
export const showTotalQuantity = (state: any) => state.cart.totalQuantity;
export const showTotalAmount = (state: any) => state.cart.totalAmount;

export default cartSlice.reducer;
