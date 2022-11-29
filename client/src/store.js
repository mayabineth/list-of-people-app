import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice.ts";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
