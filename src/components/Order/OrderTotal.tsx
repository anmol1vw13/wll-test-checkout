import { Order } from "../../models/Order";
import { formatAsPrice } from "../../utils/NumberUtil";

interface Props {
  label: string;
  total: number;
}

export function OrderTotal({ label, total }: Props) {
  return (
    <div className="flex justify-between py-3 px-4 bg-columbia-blue text-black m-2 cursor-pointer">
      <div className="font-bold">{label}</div>
      <div className="font-mono">£{formatAsPrice(total)}</div>
    </div>
  );
}
