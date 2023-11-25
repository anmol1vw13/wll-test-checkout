import { ProductItem } from "../Product/ProductItem";
import { Product } from "../../models/Product";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <div className="ml-2.5 border-2 border-solid border-dark-black px-2.5 py-4 w-2/5 max-w-[600px] max-h-[250px] overflow-y-scroll">
      <h2 className="mt-0">Our Products</h2>
      {products.map((x) => (
        <ProductItem product={x} key={x.code} />
      ))}
    </div>
  );
}
