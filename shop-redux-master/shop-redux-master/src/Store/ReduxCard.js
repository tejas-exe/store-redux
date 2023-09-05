import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import { StoreProducts } from "./ProductSlice";

export const Store = configureStore({
  reducer: {
    CartSlice: CartSlice,
    StoreProducts: StoreProducts,
  },
});
