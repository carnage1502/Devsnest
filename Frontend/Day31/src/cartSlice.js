import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExists = state.items.some(
        (item) => item.id === action.payload.id
      );

      state.items = isItemExists
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          )
        : [...state.items, action.payload];
    },
    adjustQty: (state, action) => {
      console.log("Adjust Quantity");
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + action.payload.qty }
          : item
      );
    },
  },
});

export const { addToCart, adjustQty } = cartSlice.actions;
export default cartSlice.reducer;