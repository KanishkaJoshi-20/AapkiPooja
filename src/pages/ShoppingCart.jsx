import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItemList from '../components/cart/CartItemList';
import OrderSummary from '../components/cart/OrderSummary';

const ShoppingCart = () => {
  const { cartCount } = useCart();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen">
      {/* Header */}
      <div className={`mb-12 transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h1 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight mb-2">
          Your Shopping Bag
        </h1>
        <p className="font-label text-sm uppercase tracking-widest text-outline">
          {cartCount === 0
            ? 'No items yet'
            : `${cartCount} ${cartCount === 1 ? 'Item' : 'Items'} curated for you`}
        </p>
      </div>

      {/* Main Cart Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start transition-all duration-700 delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <CartItemList />
        <OrderSummary />
      </div>
    </main>
  );
};

export default ShoppingCart;

