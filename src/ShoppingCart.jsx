import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartRow from "./ShoppingCartRow";
import ShoppingCartSelect from "./ShoppingCartSelect";

export default function ShoppingCart() {
  const items = ["apple", "banana", "orange"];
  return (
    <div className="shopping-cart">
      <ShoppingCartSelect />
      <table style={{ width: "1000px" }}>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>

          {items.map((item) => (
            <ShoppingCartRow key={item} item={item} />
          ))}
          {items.length === 0 && (
            <tr>
              <td></td>
              <td className="error">
                You have no items in your cart. Add some items to your cart to
                continue.
              </td>
              <td></td>
            </tr>
          )}
          <ShoppingCartTotal />
        </tbody>
      </table>
    </div>
  );
}
