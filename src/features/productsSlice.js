import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data/products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: productsData,
    filteredItems: productsData,
    category: "All",
    search: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;

      state.filteredItems =
        action.payload === "All"
          ? state.items
          : state.items.filter(
              (product) =>
                product.category === action.payload
            );
    },

    setSearch: (state, action) => {
      state.search = action.payload.toLowerCase();

      state.filteredItems = state.items.filter((product) =>
        product.name
          .toLowerCase()
          .includes(state.search)
      );
    },
  },
});

export const { setCategory, setSearch } =
  productsSlice.actions;

export default productsSlice.reducer;
