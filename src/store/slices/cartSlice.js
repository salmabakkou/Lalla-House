import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart ? JSON.parse(storedCart) : [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQty(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQty(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
