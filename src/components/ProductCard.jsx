import { useDispatch, useSelector } from "react-redux";
import { Heart, ShoppingBag } from "lucide-react";
import { addToCart } from "../store/slices/cartSlice";
import { addToWishlist, removeFromWishlist, } from "../store/slices/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-white/10 hover:border-[#beaf7b] transition-all duration-300 flex flex-col overflow-hidden">
    
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <button
          onClick={() =>
            isInWishlist
              ? dispatch(removeFromWishlist(product.id))
              : dispatch(addToWishlist(product))
          }
          className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-[#beaf7b] transition"
        >
          <Heart
            className={`w-5 h-5 transition ${
              isInWishlist
                ? "fill-red-500 text-red-500"
                : "text-white"
            }`}
          />
        </button>

      </div>
      <div className="flex flex-col flex-1 p-4 text-center text-white">
        
        <h3 className="text-sm uppercase tracking-widest line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <p
          className="text-[#beaf7b] mt-2 mb-4 min-h-[24px] text-sm tracking-widest"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          {product.price} MAD
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-auto w-full flex items-center justify-center gap-2 py-2 text-sm border border-[#beaf7b] rounded-full text-[#beaf7b] hover:bg-[#beaf7b] hover:text-black transition-all"
        >
          <ShoppingBag size={16} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
