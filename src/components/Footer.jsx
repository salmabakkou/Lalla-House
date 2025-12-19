import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white pt-6">
      {/* Fine gold line */}
      <div className="w-full border-t border-[#beaf7b] mb-6"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-6">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3 text-center md:text-left">
          <img
            src="/LogoLallaHouse.png"
            alt="Lalla House Logo"
            className="h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
          <p className="max-w-xs text-gray-300 text-sm">
            Discover Lalla House, your destination for authentic Moroccan caftans, blending tradition with modern elegance.
          </p>
        </div>

        {/* Site links */}
        <div className="flex flex-col sm:flex-row gap-6 text-gray-300 text-sm justify-center items-center md:w-1/3 text-center">
          <a href="/" className="hover:text-[#beaf7b] transition">Home</a>
          <a href="/catalogue" className="hover:text-[#beaf7b] transition">Catalogue</a>
          <a href="/wishlist" className="hover:text-[#beaf7b] transition">Wishlist</a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 justify-center items-center md:w-1/3">
          <a href="#" className="hover:text-[#beaf7b] transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-[#beaf7b] transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-[#beaf7b] transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-xs pb-6">
        &copy; 2025 Lalla House. All rights reserved.
      </div>
    </footer>
  );
}
