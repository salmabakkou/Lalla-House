import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
  },

  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const exists = state.items.find((item) => item.id === newItem.id);

      if (!exists) {
        state.items.push(newItem);
      }
    },

    removeFromWishlist(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    moveToCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveToCart } = wishlistSlice.actions;

export default wishlistSlice.reducer;
