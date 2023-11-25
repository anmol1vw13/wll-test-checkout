import { Product } from "../../models/Product";

interface Props {
  product: Product;
}

export function ProductItem({ product }: Props) {
  return (
    <div className="flex justify-between py-3 px-4 bg-indianred text-white m-2 cursor-pointer">
      <div className="font-bold">{product.name}</div>
      <div className="font-mono">£{product.getFormattedPrice()}</div>
    </div>
  );
}
