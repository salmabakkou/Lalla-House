import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import CartSidebar from "../components/CartSidebar";

// Badge réutilisable
function Badge({ value }) {
  if (!value || value <= 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-600 text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
      {value}
    </span>
  );
}

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const totalCartQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalWishlist = wishlistItems.length;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-[#0C0C0C] text-white font-sans">
        {/* TOP BAR */}
        <div className="grid grid-cols-3 items-center px-4 sm:px-6 py-2 border-b border-white/20">
          <div />

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <Link to="/">
              <img
                src="/LogoLallaHouse.png"
                alt="Lalla House Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <h1
              className="mt-1 text-[12px] sm:text-sm font-semibold uppercase"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              LALLA HOUSE
            </h1>
          </div>

          {/* ICONS */}
          <div className="flex justify-end items-center gap-4">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative hover:text-[#beaf7b] transition-colors"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              <Badge value={totalWishlist} />
            </Link>

            {/* Cart (Sidebar) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative hover:text-[#beaf7b] transition-colors"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              <Badge value={totalCartQuantity} />
            </button>

            {/* Mobile menu */}
            <button
              className="sm:hidden hover:text-[#beaf7b] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="sm:hidden flex flex-col items-center py-2 bg-[#0C0C0C]">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-1 text-xs uppercase hover:text-[#beaf7b]"
            >
              Home
            </Link>
            <Link
              to="/catalogue"
              onClick={() => setIsMenuOpen(false)}
              className="py-1 text-xs uppercase hover:text-[#beaf7b]"
            >
              Catalogue
            </Link>
          </div>
        )}

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex justify-center py-1">
          <ul
            className="flex gap-10 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            <li>
              <Link to="/" className="hover:text-[#beaf7b] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalogue"
                className="hover:text-[#beaf7b] transition-colors"
              >
                Catalogue
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= CART SIDEBAR ================= */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
