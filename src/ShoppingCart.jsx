import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartRow from "./ShoppingCartRow";
import ShoppingCartSelect from "./ShoppingCartSelect";
import Logo from "./Logo";
import ShopingCartTable from "./ShopingCartTable";

export default function ShoppingCart() {
  const items = ["tshirt", "hat", "mug", "bag"];
  return (
    <>
      <Logo />
      <div className="shopping-cart">
        <ShoppingCartSelect />
        <ShopingCartTable>
          {items.map((item) => (
            <ShoppingCartRow key={item} item={item} />
          ))}
          {items.length === 0 && <EmptyState />}
          <ShoppingCartTotal />
        </ShopingCartTable>
      </div>
    </>
  );
}

function EmptyState() {
  return (
    <tr>
      <td></td>
      <td className="error">
        You have no items in your cart. Add some items to your cart to continue.
      </td>
      <td></td>
    </tr>
  );
}
