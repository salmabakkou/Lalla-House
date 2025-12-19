import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSearch, resetFiltres } from "../store/slices/productSlice";
import ProductCard from "../components/ProductCard";

export default function Catalogue() {
  const dispatch = useDispatch();

  const { products, selectedCategory, searchQuery } = useSelector(
    (state) => state.products
  );

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryOk =
      selectedCategory === "all" || product.category === selectedCategory;

    const searchOk = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryOk && searchOk;
  });

  return (
    <div className="min-h-screen p-6 font-serif bg-[#0C0C0C] text-white">
      {/* Recherche */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full p-2 mb-4 rounded bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#beaf7b]"
      />

      {/* Dropdown catégories */}
      <div className="relative inline-block mb-6">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-4 py-2 bg-[#1a1a1a] text-white rounded border border-white/20 hover:border-[#beaf7b]"
        >
          {selectedCategory}
        </button>

        {isDropdownOpen && (
          <ul className="absolute mt-2 w-48 bg-[#1a1a1a] shadow-lg rounded border border-white/20 z-10">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  dispatch(setCategory(cat));
                  setIsDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-[#beaf7b] hover:text-black cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Reset */}
      <button
        onClick={() => dispatch(resetFiltres())}
        className="px-4 py-2 ml-2 bg-[#1a1a1a] text-white rounded border border-white/20 hover:border-[#beaf7b]"
      >
        Reset
      </button>

      {/* Produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
