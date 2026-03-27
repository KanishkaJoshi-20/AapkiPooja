import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState('#fce4ec');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const colors = [
    { hex: '#fce4ec', value: 'Rose Blush' },
    { hex: '#fff9c4', value: 'Cream Gold' },
    { hex: '#e1f5fe', value: 'Ice Blue' },
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const selectedColorName = colors.find((c) => c.hex === selectedColor)?.value || '';

  return (
    <div className="lg:col-span-5 sticky top-28 space-y-8">
      {/* Title & Price */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-primary-container/20 text-on-primary-container text-[10px] font-bold uppercase tracking-widest rounded">
            Best Seller
          </span>
          <div className="flex items-center gap-1 text-primary">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-bold">4.9</span>
            <span className="text-on-surface-variant text-[10px] font-medium">
              (12 Reviews)
            </span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-headline text-on-surface mb-4 leading-tight">
          Rose Petal Anarkali Set
        </h1>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-3xl font-light text-primary tracking-tighter">
            ₹18,500
          </span>
          <span className="text-lg text-on-surface-variant line-through font-light decoration-primary/30">
            ₹24,999
          </span>
        </div>
        <p className="text-on-surface-variant leading-relaxed font-body">
          An exquisite hand-embroidered silk anarkali set, crafted from the finest
          mulberry silk. Features delicate zardosi work and a sweeping silhouette
          designed for festive elegance and timeless grace.
        </p>
      </div>

      {/* Stock Indicator */}
      <div className="flex items-center gap-2 py-3 px-4 bg-error-container/10 border border-error-container/20 rounded-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
        </span>
        <span className="text-sm font-medium text-on-error-container uppercase tracking-wider">
          Only 2 left in stock
        </span>
      </div>

      {/* Selectors */}
      <div className="space-y-6">
        {/* Color */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">
            Color: {selectedColorName}
          </label>
          <div className="flex gap-3">
            {colors.map((color) => (
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
            {sizes.map((size) => (
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
              onClick={() => setQuantity(quantity + 1)}
              className="flex-1 py-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/cart')}
          className="silk-gradient text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate('/cart')}
          className="bg-surface border-2 border-primary text-primary py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary-container/10 transition-all active:scale-[0.98]"
        >
          Buy Now
        </button>
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
            <p className="text-xs font-medium">Pure Mulberry Silk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
