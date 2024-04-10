import React from "react";
import { useShoppingCart } from "./store";

const options = [
  { value: { id: "apple", price: 1.99, name: "Apple" }, label: "Apple" },
  { value: { id: "banana", price: 1.99, name: "Banana" }, label: "Banana" },
  { value: { id: "orange", price: 1.99, name: "Orange" }, label: "Orange" },
  { value: { id: "grape", price: 1.99, name: "Grape" }, label: "Grape" },
  { value: { id: "kiwi", price: 1.99, name: "Kiwi" }, label: "Kiwi" },
  { value: { id: "pear", price: 1.99, name: "Pear" }, label: "Pear" },
  {
    value: { id: "pineapple", price: 1.99, name: "Pineapple" },
    label: "Pineapple",
  },
  { value: { id: "mango", price: 1.99, name: "Mango" }, label: "Mango" },
  {
    value: { id: "watermelon", price: 1.99, name: "Watermelon" },
    label: "Watermelon",
  },
];

export default function ShoppingCartSelect() {
  const { add } = useShoppingCart();
  return (
    <>
      <div className="shopping-cart-select">
        <label htmlFor="add-item">
          <span>Select an item</span>
        </label>
        <select
          className="add-item-select"
          onChange={(e) => {
            const value = options.filter(
              (option) => option.label === e.target.value
            )[0].value;
            add(value);
          }}
        >
          {options.map((option) => (
            <option key={option.value.name} value={option.value.name}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
