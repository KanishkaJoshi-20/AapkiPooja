import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('aapkiCart');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse cart from local storage", error);
      return [];
    }
  });

  // Sync to localstorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('aapkiCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCartItems(prev => {
      // Create a composite unique ID based on product + size + color
      const uniqueId = `${product.id}-${size}-${color.name}`;
      
      const existingItemIndex = prev.findIndex(item => item.cartId === uniqueId);
      
      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      // Add new item
      return [...prev, {
        cartId: uniqueId,
        productId: product.id,
        name: product.name,
        details: product.description.split('.')[0], // just take the short prefix
        price: product.price,
        image: product.images[0],
        size,
        color,
        quantity
      }];
    });
  };

  const updateQuantity = (cartId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
