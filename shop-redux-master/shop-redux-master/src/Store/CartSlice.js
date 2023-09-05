import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cartslice",
  initialState: { product: [], totalItems: 0 },
  reducers: {
    test(state, action) {
      console.log("hello");
    },
    addToCart(state, action) {
      state.product = [...state.product, action.payload];
      state.totalItems = state.totalItems * 1 + 1;
    },
    removeFromCart(state, action) {
      state.product = state.product.filter(
        (item) => item.randomID * 1 !== action.payload.id * 1
      );
      state.totalItems = state.totalItems * 1 - 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const CartSlice = cartSlice.reducer;
