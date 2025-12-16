import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalWishlist = wishlistItems.length;

  const hoverColor = "#beaf7b"; 

  return (
    <nav className="w-full bg-black text-white font-sans">
      {/* ===== TOP BAR ===== */}
      <div className="grid grid-cols-3 items-center px-6 py-2 border-b border-white/20">
        {/* Colonne gauche (vide pour équilibre) */}
        <div />

        {/* Logo centré avec h1 dessous */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src="/LogoLallaHouse.png"
              alt="Lalla House Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          {/* Texte sous le logo */}
          <h1
            className="mt-1 text-sm font-semibold uppercase"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            LALLA HOUSE
          </h1>
        </div>

        {/* Icônes à droite */}
        <div className="flex justify-end items-center gap-4">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative group transition-colors"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <Heart className="w-5 h-5 stroke-[1.5] transition-colors" />
            {totalWishlist > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {totalWishlist}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative group transition-colors"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5] transition-colors" />
            {totalCartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {totalCartQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="flex justify-center py-1">
        <ul
          className="flex gap-10 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          <li>
            <Link
              to="/"
              className="transition-colors"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalogue"
              className="transition-colors"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              Catalogue
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
