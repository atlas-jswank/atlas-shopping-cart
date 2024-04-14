import React from "react";

export default function ShoppingCartTotal() {
  return (
    <tr className="shopping-cart-total">
      <td className="cart-item-name">Total</td>
      <td className="total-column">
        <span className="badge">3</span>
        <span className="badge">23.67</span>
      </td>
      <td></td>
    </tr>
  );
}
