import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartItemList = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="lg:col-span-12 flex flex-col items-center justify-center py-20 text-center">
        <span className="material-symbols-outlined text-8xl text-outline-variant/40 mb-8 animate-bounce-in">
          shopping_bag
        </span>
        <h2 className="font-headline text-3xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>Your bag is empty</h2>
        <p className="text-on-surface-variant mb-10 max-w-sm animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          It looks like you haven't discovered your next masterpiece yet. Explore
          our latest heritage collections.
        </p>
        <Link
          to="/shop"
          className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform animate-fade-in-up animate-pulse-glow"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 space-y-12">
      {cartItems.map((item) => (
        <div
          key={item.cartId}
          className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/20 animate-fade-in"
        >
          {/* Image */}
          <Link
            to={`/product/${item.productId}`}
            className="w-full md:w-48 aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low block"
          >
            <img
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={item.image}
            />
          </Link>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="flex justify-between items-start">
              <div>
                <Link to={`/product/${item.productId}`}>
                  <h3 className="font-headline text-2xl text-on-surface mb-2 hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-on-surface-variant font-label text-sm tracking-wide">
                  {item.details}
                </p>

                <div className="mt-4 flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-outline uppercase text-[10px] tracking-widest">
                      Size:
                    </span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-outline uppercase text-[10px] tracking-widest">
                      Color:
                    </span>
                    <span
                      className="w-3 h-3 rounded-full shadow-inner"
                      style={{ backgroundColor: item.color.hex }}
                    ></span>
                    <span className="font-medium">{item.color.name}</span>
                  </div>
                </div>
              </div>
              <p className="font-headline text-xl text-primary">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-8">
              {/* Quantity */}
              <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant/10">
                <button
                  onClick={() => updateQuantity(item.cartId, -1)}
                  className="hover:text-primary transition-colors px-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    remove
                  </span>
                </button>
                <span className="px-6 font-medium text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.cartId, 1)}
                  className="hover:text-primary transition-colors px-2"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.cartId)}
                className="flex items-center gap-2 text-outline hover:text-error transition-colors uppercase font-label text-[11px] tracking-widest"
              >
                <span className="material-symbols-outlined text-lg">
                  delete
                </span>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
