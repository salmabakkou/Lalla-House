import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },

    // ⚡ Nouvelle fonction pour augmenter la quantité
    increaseQty(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    // ⚡ Nouvelle fonction pour diminuer la quantité
    decreaseQty(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    }
  },
});

// Export des actions
export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
