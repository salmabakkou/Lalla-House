import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/slices/cartSlice";

export default function CartSidebar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#0C0C0C] text-white z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: "'Bodoni Moda', serif" }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b border-white/20">
          <h2 className="uppercase tracking-widest text-sm">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="hover:text-[#beaf7b] transition"
          >
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col gap-5 overflow-y-auto h-[calc(100%-170px)]">
          {cartItems.length === 0 && (
            <p className="text-center text-xs tracking-widest text-gray-400 uppercase">
              Your cart is empty
            </p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-white/10 pb-5"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-20 object-cover rounded"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="text-xs uppercase tracking-widest leading-tight line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-[#beaf7b] text-sm mt-2">
                  {item.price} MAD
                </p>

                {/* QTY */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="p-1 border border-white/30 rounded hover:bg-[#beaf7b] hover:text-black transition"
                  >
                    <Minus size={12} />
                  </button>

                  <span className="text-sm tracking-widest">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="p-1 border border-white/30 rounded hover:bg-[#beaf7b] hover:text-black transition"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {/* DELETE */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="hover:text-red-500 transition mt-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER : uniquement si il y a des articles */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/20">
            <div className="flex justify-between mb-5 text-xs uppercase tracking-widest">
              <span>Total</span>
              <span className="text-[#beaf7b]">{total} MAD</span>
            </div>

            <button className="w-full py-3 bg-[#beaf7b] text-black uppercase text-xs tracking-widest hover:opacity-90 transition rounded-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
