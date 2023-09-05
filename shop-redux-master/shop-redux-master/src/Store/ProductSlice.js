import { createSlice } from "@reduxjs/toolkit";
import { FAKEDATA } from "../Products";

const StoreProduct = createSlice({
  name: "storeProduct",
  initialState: [...FAKEDATA.products],
  reducers: {
    searchQuery(state, action) {
      console.log("--Running-->", action);
      if (action.payload.name === undefined || action.payload.name === "") {
        console.log("in");
        return [...FAKEDATA.products];
      } else {
        return FAKEDATA.products.filter((product) =>
          product.title
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        );
      }
    },
  },
});

export const StoreProducts = StoreProduct.reducer;
export const { searchQuery } = StoreProduct.actions;
