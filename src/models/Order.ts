import { Product } from "./Product";

export type Item = {
  product: Product;
  quantity: number;
  price: number;
};

export type Order = {
  items: Item[];
  total: number;
  finalTotal: number;
};
