import {
  AddItemButton,
  DecrementItemButton,
  DeleteItemButton,
} from "./ShoppingCartButtons";
import { useCartItem } from "./store";

export default function CartItem({ item }) {
  const { name, quantity, price, total } = useCartItem(item);
  return (
    <tr className="cart-item">
      <td className="cart-item-name">
        {name} (${price})
      </td>
      <td className="total-column">
        <span className="badge cart-item-total">{quantity}</span>
        <span className="badge cart-item-total">
          {Math.round(total * 100) / 100}
        </span>
      </td>
      <td>
        <DecrementItemButton item={item} />
        <AddItemButton item={item} />
        <DeleteItemButton item={item} />
      </td>
    </tr>
  );
}
