import { ProductList } from "../ProductList/ProductList";
import { Order } from "../Order/Order";
import { productData } from "../../config/products";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to the Checkout</h1>
      </div>
      <div className="App-body">
        <ProductList products={productData} />
        <Order />
      </div>
    </div>
  );
}
