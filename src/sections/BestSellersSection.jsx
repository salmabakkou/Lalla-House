import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function BestSellersSection() {
  const products = useSelector((state) => state.products.products);

  const bestSellerIds = [1, 6, 13, 8]; 

  const bestSellers = products.filter((product) =>
    bestSellerIds.includes(product.id)
  );

  return (
    <section className="bg-black pb-20 px-6">
      <h2
        className="text-center text-sm uppercase tracking-widest text-[#beaf7b] mb-12"
        style={{ fontFamily: "'Bodoni Moda', serif" }}
      >
        Best Sellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
