import React from "react";
import { useTotalCount } from "./store";

export default function ShoppingCartTotal() {
  const { total, quantity } = useTotalCount();
  return (
    <tr className="shopping-cart-total">
      <td className="cart-item-name">Total</td>
      <td className="total-column">
        <span className="badge">{quantity}</span>
        <span className="badge">{Math.round(total * 100) / 100}</span>
      </td>
      <td></td>
    </tr>
  );
}
