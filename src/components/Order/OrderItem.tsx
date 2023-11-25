import { Item } from "../../models/Order";
import { formatAsPrice } from "../../utils/NumberUtil";

interface Props {
  item: Item;
}

export function OrderItem({ item }: Props) {
  return (
    <div className="flex justify-between py-3 px-4 bg-nyanza text-black m-2 cursor-pointer">
      <span className="font-bold">{item.product.name}</span>
      <div className="w-1/5 flex justify-between">
        <span className="font-mono">x{item.quantity}</span>
        <span className="font-mono">£{formatAsPrice(item.price)}</span>
      </div>
    </div>
  );
}
