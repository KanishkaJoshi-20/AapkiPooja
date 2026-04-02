import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal >= 5000 ? 0 : 499;
  const taxRate = 0.12;
  const tax = Math.round(cartTotal * taxRate);
  const total = cartTotal + shipping + tax;

  if (cartItems.length === 0) return null;

  return (
    <div className="lg:col-span-4 sticky top-32">
      <div className="bg-surface-container-low rounded-xl p-8 shadow-sm">
        <h2 className="font-headline text-2xl mb-8">Order Summary</h2>

        {/* Pricing Rows */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">Subtotal</span>
            <span className="font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">Estimated Shipping</span>
            <span className={`font-medium ${shipping === 0 ? 'text-primary' : ''}`}>
              {shipping === 0 ? 'Free' : `₹${shipping}`}
            </span>
          </div>
          {shipping === 0 && (
            <p className="text-[10px] text-primary font-medium">
              ✓ Free shipping on orders above ₹5,000
            </p>
          )}
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant">Estimated Tax (GST 12%)</span>
            <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] mb-3 text-outline">
            Promo Code
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter code"
              className="flex-1 bg-surface-container-lowest border-none rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-outline/50"
            />
            <button className="bg-surface-container-highest px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-outline-variant/30 transition-colors">
              Apply
            </button>
          </div>
        </div>

        {/* Total & Checkout */}
        <div className="pt-6 border-t border-outline-variant/30 mb-10">
          <div className="flex justify-between items-end">
            <span className="font-headline text-xl">Total</span>
            <span className="font-headline text-3xl text-primary">
              ₹{total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="silk-gradient w-full text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          Proceed to Checkout
        </button>

        {/* Trust Badges */}
        <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
          <span className="material-symbols-outlined text-3xl">payments</span>
          <span className="material-symbols-outlined text-3xl">security</span>
          <span className="material-symbols-outlined text-3xl">
            local_shipping
          </span>
        </div>
      </div>

      {/* Info Notice */}
      <div className="mt-8 p-6 bg-surface-container rounded-xl flex items-start gap-4">
        <span className="material-symbols-outlined text-primary">info</span>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Digital Silk Guarantee: Every piece is handcrafted by master artisans.
          Shipping takes 7-10 business days for hand-embroidered items.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
