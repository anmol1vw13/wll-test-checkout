import { ProductList } from "../ProductList/ProductList";
import { Order } from "../Order/Order";
import { productData } from "../../config/data";

export function App() {
  return (
    <div className="text-center">
      <div className="bg-black h-[135px] p-5 text-white">
        <h1>Welcome to the Checkout</h1>
      </div>
      <div className="flex justify-around my-5">
        <ProductList products={productData} />
        <Order />
      </div>
    </div>
  );
}
