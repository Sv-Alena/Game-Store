import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemInCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.itemInCart.push(action.payload);
    },

    removeItemFromCart: (state, action) => {
      state.itemInCart = state.itemInCart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
