import { formatAsPennies } from "../../utils/number";

interface Props {
  label: string;
  total: number;
}

export function OrderTotal({ label, total }: Props) {
  return (
    <div className="flex justify-between py-3 px-4 bg-columbia-blue text-black m-2 cursor-pointer">
      <div className="font-bold">{label}</div>
      <div className="font-mono">£{formatAsPennies(total)}</div>
    </div>
  );
}
