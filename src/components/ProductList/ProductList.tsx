import { ProductItem } from "../Product/ProductItem";
import { Product } from "../../models/Product";
import "./ProductList.css";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <div className="ProductList">
      <h2 className="ProductList-title">Our Products</h2>
      {products.map((x) => (
        <ProductItem product={x} key={x.code} />
      ))}
    </div>
  );
}
