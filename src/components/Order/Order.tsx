import { useSelector } from "react-redux";
import { RootState } from "../../store/configure-store";
import { OrderItem } from "./OrderItem";
import { OrderTotal } from "./OrderTotal";

export function Order() {
  const order = useSelector((state: RootState) => state.order);

  return (
    <div className="mr-2.5 border-2 border-solid border-dark-black px-2.5 py-4 w-2/5 max-w-[600px]">
      <h2 className="mt-0">Your Order</h2>

      {order.items.map((item) => (
        <OrderItem item={item} key={item.product.code} />
      ))}
      {order.total > 0 && (
        <>
          <OrderTotal label="Amount" total={order.total} />
          <OrderTotal label="Discount" total={order.total - order.finalTotal} />
        </>
      )}
      <OrderTotal label="Payable" total={order.finalTotal} />
    </div>
  );
}
