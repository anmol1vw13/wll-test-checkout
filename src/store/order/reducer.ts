import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";

const slice = createSlice({
  name: "order",
  initialState: Order.initialState(),
  reducers: {
    addItem(order: Order, action: PayloadAction<Product>) {
      Order.addItem(order, action.payload);
      Order.computeTotal(order);
    },
  },
});

export const { addItem } = slice.actions;
export default slice.reducer;
