import { Product } from "../../models/Product";
import "./Product.css";

interface Props {
  product: Product;
}

export function ProductItem({ product }: Props) {
  return (
    <div className="Product">
      <div className="Product-name">{product.name}</div>
      <div className="Product-price">£{product.getFormattedPrice()}</div>
    </div>
  );
}
