import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.hex || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const selectedColorObj = product.colors.find((c) => c.hex === selectedColor);
  const selectedColorName = selectedColorObj?.name || '';
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock < 5;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product, selectedSize, selectedColorObj || product.colors[0], quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    addToCart(product, selectedSize, selectedColorObj || product.colors[0], quantity);
    navigate('/cart');
  };

  return (
    <div className="lg:col-span-5 sticky top-28 space-y-8">
      {/* Toast Notification */}
      <div
        className={`fixed top-24 right-6 z-50 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 ${
          showToast
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[120%] opacity-0'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <span className="text-sm font-medium">Added to cart!</span>
      </div>

      {/* Title & Price */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-primary-container/20 text-on-primary-container text-[10px] font-bold uppercase tracking-widest rounded">
              New Arrival
            </span>
          )}
          <div className="flex items-center gap-1 text-primary">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-bold">{product.rating}</span>
            <span className="text-on-surface-variant text-[10px] font-medium">
              ({product.reviews} Reviews)
            </span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-headline text-on-surface mb-4 leading-tight">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-3xl font-light text-primary tracking-tighter">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
        <p className="text-on-surface-variant leading-relaxed font-body">
          {product.description}
        </p>
      </div>

      {/* Stock Indicator */}
      {isOutOfStock && (
        <div className="flex items-center gap-2 py-3 px-4 bg-stone-100 border border-stone-300 rounded-lg">
          <span className="material-symbols-outlined text-stone-500 text-sm">block</span>
          <span className="text-sm font-medium text-stone-600 uppercase tracking-wider">
            Out of Stock
          </span>
        </div>
      )}
      {isLowStock && (
        <div className="flex items-center gap-2 py-3 px-4 bg-error-container/10 border border-error-container/20 rounded-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
          <span className="text-sm font-medium text-on-error-container uppercase tracking-wider">
            Only {product.stock} left in stock
          </span>
        </div>
      )}
      {!isOutOfStock && !isLowStock && (
        <div className="flex items-center gap-2 py-3 px-4 bg-green-50 border border-green-200 rounded-lg">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-700 uppercase tracking-wider">
            In Stock
          </span>
        </div>
      )}

      {/* Selectors */}
      <div className="space-y-6">
        {/* Color */}
        {product.colors.length > 0 && (
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">
              Color: {selectedColorName}
            </label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  className={`w-8 h-8 rounded-full transition-transform active:scale-90 ${
                    selectedColor === color.hex
                      ? 'ring-2 ring-primary ring-offset-2'
                      : 'ring-1 ring-outline-variant hover:ring-primary/40'
                  }`}
                  style={{ backgroundColor: color.hex }}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Size */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Select Size
            </label>
            <button className="text-[10px] font-bold text-primary underline underline-offset-4 uppercase tracking-widest hover:opacity-80 transition-opacity">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 text-sm font-medium rounded-lg uppercase transition-colors ${
                  selectedSize === size
                    ? 'bg-primary text-white shadow-sm border border-primary'
                    : 'border border-outline-variant hover:border-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        {!isOutOfStock && (
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">
              Quantity
            </label>
            <div className="flex items-center w-32 border border-outline-variant rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex-1 py-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="flex-1 py-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg transition-all active:scale-[0.98] ${
            isOutOfStock
              ? 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
              : 'silk-gradient text-white shadow-primary/20 hover:opacity-90'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
        {!isOutOfStock && (
          <button
            onClick={handleBuyNow}
            className="bg-surface border-2 border-primary text-primary py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary-container/10 transition-all active:scale-[0.98]"
          >
            Buy Now
          </button>
        )}
      </div>

      {/* Secondary Info */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary">
            local_shipping
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
              Delivery
            </p>
            <p className="text-xs font-medium">3-5 Business Days</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary">verified</span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
              Authentic
            </p>
            <p className="text-xs font-medium">Certified Genuine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
