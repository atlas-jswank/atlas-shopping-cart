import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

/**
 * Initial State
 */
const initialState = {
  items: {},
};

/**
 * Slice
 */
export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, { payload: { itemId } }) => {
      state.items[itemId].quantity++;
    },
    decrementItem: (state, { payload: { itemId } }) => {
      if (state.items[itemId].quantity > 0) {
        state.items[itemId].quantity--;
      }
    },
    deleteItem: (state, { payload: { itemId } }) => {
      delete state.items[itemId];
    },
    addItem: (state, { payload: { item } }) => {
      if (state.items[item.id]) {
        return;
      }
      state.items[item.id] = {
        name: item.name,
        price: item.price,
        quantity: 0,
      };
    },
  },
});

/**
 * Actions
 */
export const { incrementItem, decrementItem, deleteItem, addItem } =
  shoppingCartSlice.actions;

export const useShoppingCart = () => {
  const dispatch = useDispatch();
  return {
    decrement: (itemId) => dispatch(decrementItem({ itemId })),
    increment: (itemId) => dispatch(incrementItem({ itemId })),
    remove: (itemId) => dispatch(deleteItem({ itemId })),
    add: (item) => dispatch(addItem({ item })),
  };
};

/**
 * Selectors
 */
export const useCartItem = (itemId) =>
  useSelector((state) => {
    const quantity = state.cart.items[itemId].quantity;
    const price = state.cart.items[itemId].price;
    return {
      ...state.cart.items[itemId],
      total: quantity * price,
    };
  });

export const useAllItems = () =>
  useSelector((state) => Object.keys(state.cart.items));

export const useTotalCount = (state) =>
  useSelector((state) => {
    const quantity = Object.values(state.cart.items).reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    const total = Object.values(state.cart.items).reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    return {
      quantity,
      total,
    };
  });

/**
 * Reducer
 */
export const shoppingCartReducer = shoppingCartSlice.reducer;

export const store = configureStore({
  reducer: {
    cart: shoppingCartReducer,
  },
});
