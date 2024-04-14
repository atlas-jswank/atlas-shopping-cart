import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartRow from "./ShoppingCartRow";
import ShoppingCartSelect from "./ShoppingCartSelect";
import Logo from "./assets/logo.png";

export default function ShoppingCart() {
  const items = ["tshirt", "hoody", "sticker-pack"];
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <img src={Logo} alt="Atlas Logo" className="logo" />
      </div>
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
    </>
  );
}
