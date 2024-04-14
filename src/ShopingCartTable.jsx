export default function ShopingCartTable({ children }) {
  return (
    <table style={{ width: "1000px" }}>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>

        {children}
      </tbody>
    </table>
  );
}
