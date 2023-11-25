import { Product } from "./Product";

export type Item = {
  product: Product;
  quantity: number;
  price: number;
};

export interface Order {
  items: Item[];
  total: number;
  finalTotal: number;
}
