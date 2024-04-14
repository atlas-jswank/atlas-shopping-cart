import {
  DecrementItemButton,
  DeleteItemButton,
  IncrementItemButton,
} from "./ShoppingCartButtons";

export default function CartItem({ item }) {
  return (
    <tr className="cart-item">
      <td className="cart-item-name">T-Shirt (10.99)</td>
      <td className="total-column">
        <span className="badge cart-item-total">3</span>
        <span className="badge cart-item-total">23.67</span>
      </td>
      <td>
        <DecrementItemButton item={item} />
        <IncrementItemButton item={item} />
        <DeleteItemButton item={item} />
      </td>
    </tr>
  );
}
