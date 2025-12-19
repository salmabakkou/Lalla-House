import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setSearch,
  resetFiltres,
} from "../store/slices/productSlice";
import ProductCard from "../components/ProductCard";

export default function Catalogue() {
  const dispatch = useDispatch();

  const { products, selectedCategory, searchQuery } = useSelector(
    (state) => state.products
  );

  // catégories uniques
  const categories = [...new Set(products.map((p) => p.category))];

  // filtrage produits
  const filteredProducts = products.filter((product) => {
    const categoryOk =
      selectedCategory === "all" || product.category === selectedCategory;

    const searchOk = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryOk && searchOk;
  });

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white px-6 py-12">

      {/* SEARCH */}
      <div className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full px-5 py-4 rounded-md bg-[#151515] text-white
          placeholder:text-white/40 text-sm tracking-wide
          focus:outline-none focus:ring-1 focus:ring-[#beaf7b]"
        />
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">

        {categories.map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`px-7 py-2.5 rounded-full border
                text-[12px]   tracking-[0.1em]
                transition-all duration-300
                ${
                  isActive
                    ? "bg-[#beaf7b] text-black border-[#beaf7b]"
                    : "border-white/20 text-white/70 hover:border-[#beaf7b] hover:text-[#beaf7b]"
                }`}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
              }}
            >
              {cat}
            </button>
          );
        })}

        {/* RESET */}
        {(selectedCategory !== "all" || searchQuery !== "") && (
          <button
            onClick={() => dispatch(resetFiltres())}
            className="ml-4 px-7 py-2.5 rounded-full
            border border-[#beaf7b]
            text-[#beaf7b] text-[12px]  tracking-[0.1em]
            hover:bg-[#beaf7b] hover:text-black transition-all duration-300"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
