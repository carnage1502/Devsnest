import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: null,
};

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    resetCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: {
    [loadProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { resetCurrentProduct } = productSlice.actions;
export default productSlice.reducer;