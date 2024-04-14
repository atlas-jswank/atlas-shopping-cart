import React from "react";
import { options } from "./store";

export default function ShoppingCartSelect() {
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
            console.log(value);
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
