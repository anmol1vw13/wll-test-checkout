import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order/reducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
