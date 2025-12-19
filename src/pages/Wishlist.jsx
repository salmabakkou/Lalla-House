import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag, Trash2 } from "lucide-react";
import { removeFromWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="min-h-screen bg-black px-6 py-10">
      {/* TITRE PAGE */}
      <h2
        className="text-center text-sm uppercase tracking-widest mb-10"
        style={{ fontFamily: "'Bodoni Moda', serif", color: "#beaf7b" }}
      >
        Wishlist
      </h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">
          Your wishlist is empty
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-xl border border-white/10 hover:border-[#beaf7b] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* REMOVE FROM WISHLIST */}
                <button
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                  className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-red-600 transition"
                >
                  <Trash2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-4 text-center text-white">
                {/* NOM PRODUIT - style navbar */}
                <h3
                  className="text-sm uppercase tracking-widest line-clamp-2 min-h-[40px]"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {product.name}
                </h3>

                {/* PRIX */}
                <p
                  className="text-[#beaf7b] mt-2 mb-4 min-h-[24px] text-sm tracking-widest"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {product.price} MAD
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2 text-sm border border-[#beaf7b] rounded-full text-[#beaf7b] hover:bg-[#beaf7b] hover:text-black transition-all"
                >
                  <ShoppingBag size={16} />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
