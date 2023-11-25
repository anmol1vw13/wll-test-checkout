import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";
import { addProduct, baseOrder, computeTotal } from "../../utils/order";

const slice = createSlice({
  name: "order",
  initialState: baseOrder(),
  reducers: {
    addItem(order: Order, action: PayloadAction<Product>) {
      addProduct(order, action.payload);
      computeTotal(order);
    },
  },
});

export const { addItem } = slice.actions;
export default slice.reducer;
