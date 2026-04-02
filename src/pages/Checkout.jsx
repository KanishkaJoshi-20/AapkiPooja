import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const shipping = cartTotal >= 5000 ? 0 : 499;
  const tax = Math.round(cartTotal * 0.12);
  const total = cartTotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="pt-32 pb-32 px-8 max-w-2xl mx-auto text-center min-h-screen">
        <div>
          <div className="w-24 h-24 mx-auto mb-8 rounded-full silk-gradient flex items-center justify-center shadow-xl shadow-primary/20 animate-bounce-in">
            <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Order Confirmed!</h1>
          <p className="text-on-surface-variant mb-2 text-lg animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            Thank you for your order, <span className="font-semibold text-on-surface">{formData.name || 'Guest'}</span>!
          </p>
          <p className="text-on-surface-variant mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            Your order #AP{Date.now().toString().slice(-6)} has been placed successfully.
            You will receive a confirmation email shortly.
          </p>
          <div className="bg-surface-container-low p-6 rounded-xl mb-10 inline-block animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <p className="text-sm text-on-surface-variant">Estimated Delivery</p>
            <p className="font-headline text-xl text-primary">7-10 Business Days</p>
          </div>
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Link
              to="/"
              className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-lg hover:opacity-90 transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="bg-surface border-2 border-primary text-primary px-10 py-4 rounded-xl font-medium tracking-wide hover:bg-primary-container/10 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 pb-32 px-8 max-w-2xl mx-auto text-center min-h-screen">
        <span className="material-symbols-outlined text-8xl text-outline-variant/40 mb-8 block animate-bounce-in">
          shopping_bag
        </span>
        <h1 className="font-headline text-4xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>Your bag is empty</h1>
        <p className="text-on-surface-variant mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          Add some products to your cart before checking out.
        </p>
        <Link
          to="/shop"
          className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-lg hover:opacity-90 transition-all animate-fade-in-up animate-pulse-glow"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-xl mx-auto min-h-screen">
      <h1 className={`font-headline text-4xl md:text-5xl text-on-surface tracking-tight mb-12 transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        Checkout
      </h1>

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 transition-all duration-700 delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="font-headline text-2xl mb-6">Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                  Pincode *
                </label>
                <input
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="110001"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                placeholder="House/Flat No., Street, Landmark"
              />
            </div>
            <div className="mt-6">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                City *
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your city"
              />
            </div>
          </div>

          <button
            type="submit"
            className="silk-gradient w-full text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Place Order — ₹{total.toLocaleString('en-IN')}
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="bg-surface-container-low rounded-xl p-8 shadow-sm">
            <h2 className="font-headline text-xl mb-6">Order Summary</h2>

            {/* Items */}
            <div className="space-y-4 mb-6 max-h-72 overflow-y-auto hide-scrollbar">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-[10px] text-on-surface-variant">
                      {item.size} • {item.color.name} • Qty: {item.quantity}
                    </p>
                    <p className="text-sm font-bold text-primary mt-1">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-outline-variant/20 pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Subtotal</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Shipping</span>
                <span className={shipping === 0 ? 'text-primary font-medium' : ''}>
                  {shipping === 0 ? 'Free' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">GST (12%)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-end pt-3 border-t border-outline-variant/20">
                <span className="font-headline text-lg">Total</span>
                <span className="font-headline text-2xl text-primary">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
