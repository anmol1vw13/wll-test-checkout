import { useDispatch } from "react-redux";
import { Product } from "../../models/Product";
import { addItem } from "../../store/order/reducer";

interface Props {
  product: Product;
}

export function ProductItem({ product }: Props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addItem(product));
  };

  return (
    <div
      className="flex justify-between py-3 px-4 bg-indianred text-white m-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="font-bold">{product.name}</div>
      <div className="font-mono">£{product.getFormattedPrice()}</div>
    </div>
  );
}
