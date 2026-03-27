import React, { useEffect } from 'react';
import CartItemList from '../components/cart/CartItemList';
import OrderSummary from '../components/cart/OrderSummary';

const ShoppingCart = () => {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight mb-2">
          Your Shopping Bag
        </h1>
        <p className="font-label text-sm uppercase tracking-widest text-outline">
          2 Items curated for you
        </p>
      </div>

      {/* Main Cart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Items List */}
        <CartItemList />

        {/* Right Column: Order Summary (Sticky) */}
        <OrderSummary />
      </div>
    </main>
  );
};

export default ShoppingCart;
