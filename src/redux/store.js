import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cartSlice";
import productReduser from "./pageSlice";

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    product: productReduser,
  },
});
