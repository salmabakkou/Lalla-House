import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalWishlist = wishlistItems.length;

  const hoverColor = "#beaf7b"; 
  const navBgColor = "#0C0C0C"; 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full text-white font-sans" style={{ backgroundColor: navBgColor }}>
      {/* ===== TOP BAR ===== */}
      <div className="grid grid-cols-3 items-center px-4 sm:px-6 py-2 border-b border-white/20">
        <div />

        {/* Logo centré */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src="/LogoLallaHouse.png"
              alt="Lalla House Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <h1
            className="mt-1 text-[12px] sm:text-sm font-semibold uppercase text-center"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            LALLA HOUSE
          </h1>
        </div>

        {/* Icônes à droite */}
        <div className="flex justify-end items-center gap-2 sm:gap-4">
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative group transition-colors"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] transition-colors" />
            {totalWishlist > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-[8px] sm:text-xs w-4 h-4 sm:w-4 sm:h-4 flex items-center justify-center rounded-full">
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
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] transition-colors" />
            {totalCartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-[8px] sm:text-xs w-4 h-4 sm:w-4 sm:h-4 flex items-center justify-center rounded-full">
                {totalCartQuantity}
              </span>
            )}
          </Link>

          {/* Icône Dropdown mobile */}
          <button
            className="sm:hidden relative group transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Menu className="w-5 h-5 stroke-[1.5] transition-colors" />
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {isDropdownOpen && (
        <div className="sm:hidden flex flex-col items-center bg-[#0C0C0C] py-2">
          <Link
            to="/"
            className="py-1 text-[12px] w-full text-center transition-colors"
            style={{ color: "white", fontFamily: "'Bodoni Moda', serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            onClick={() => setIsDropdownOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/catalogue"
            className="py-1 text-[12px] w-full text-center transition-colors"
            style={{ color: "white", fontFamily: "'Bodoni Moda', serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            onClick={() => setIsDropdownOpen(false)}
          >
            Catalogue
          </Link>
        </div>
      )}

      {/* Sur écran moyen et grand : menu classique */}
      <div className="hidden sm:flex justify-center py-1 px-4 sm:px-6">
        <ul
          className="flex gap-10 text-xs uppercase tracking-widest items-center text-center"
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
