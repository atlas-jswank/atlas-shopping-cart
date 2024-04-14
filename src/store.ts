/**
 * Type Definitions
 */

type Merchandise = {
  id: string;
  name: string;
  price: number;
};

type CartItem = Merchandise & {
  quantity: number;
};

type CartState = {
  items: {
    [key: string]: CartItem;
  };
};

/**
 * Initial state
 */

export const options: Array<{ value: Merchandise; label: string }> = [
  { value: { id: "tshirt", price: 9.99, name: "T-Shirt" }, label: "T-Shirt" },
  {
    value: { id: "stickers", price: 2.49, name: "Sticker Pack" },
    label: "Sticker Pack",
  },
  {
    value: { id: "water-bottle", price: 5.99, name: "Water Bottle" },
    label: "Water Bottle",
  },
  {
    value: { id: "hoodie", price: 12.99, name: "Hoodie" },
    label: "Hoodie",
  },
  {
    value: { id: "hat", price: 8.99, name: "Hat" },
    label: "Hat",
  },
  {
    value: { id: "mug", price: 7.0, name: "Coffee Mug" },
    label: "Coffee Mug",
  },
  {
    value: { id: "bag", price: 15.5, name: "Backpack" },
    label: "Backpack",
  },
];

export const initialState: CartState = {
  items: {
    tshirt: {
      id: "tshirt",
      name: "T-Shirt",
      price: 9.99,
      quantity: 5,
    },
    stickers: {
      id: "stickers",
      name: "Sticker Pack",
      price: 2.49,
      quantity: 3,
    },
  },
};
