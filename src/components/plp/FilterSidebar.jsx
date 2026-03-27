import React, { useState } from 'react';

const CATEGORIES_FILTER = [
  { label: 'Contemporary Wear', defaultChecked: true },
  { label: 'Heritage Classics', defaultChecked: false },
  { label: 'Resort & Luxe', defaultChecked: false },
];

const SIZES = ['S', 'M', 'L', 'XL'];

const COLORS = [
  { hex: '#8b4c50', selected: true },
  { hex: '#fce4ec', selected: false },
  { hex: '#E9DCC9', selected: false },
  { hex: '#2a241c', selected: false },
];

const FilterSidebar = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('#8b4c50');

  return (
    <aside className="hidden lg:flex flex-col p-6 gap-8 h-fit sticky top-28 bg-surface-container-low w-64 rounded-xl border border-outline-variant/10">
      {/* Header */}
      <div>
        <h2 className="font-label uppercase text-[10px] tracking-widest text-primary font-bold">
          Filters
        </h2>
        <p className="text-[11px] text-on-surface-variant mt-1">Refine your search</p>
      </div>

      {/* Category */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-sm">category</span>
          <span className="font-label uppercase text-[10px] tracking-widest font-bold">
            Category
          </span>
        </div>
        <div className="space-y-2 text-[12px] text-on-surface-variant">
          {CATEGORIES_FILTER.map((cat) => (
            <label key={cat.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                defaultChecked={cat.defaultChecked}
                className="rounded-sm border-outline-variant text-primary focus:ring-primary h-4 w-4"
                type="checkbox"
              />
              <span className="group-hover:text-primary transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">straighten</span>
          <span className="font-label uppercase text-[10px] tracking-widest">Size</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 rounded-full text-[10px] flex items-center justify-center transition-colors ${
                selectedSize === size
                  ? 'bg-primary text-white'
                  : 'border border-outline-variant hover:border-primary hover:text-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">palette</span>
          <span className="font-label uppercase text-[10px] tracking-widest">Color</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <div
              key={color.hex}
              onClick={() => setSelectedColor(color.hex)}
              className={`w-6 h-6 rounded-full cursor-pointer ${
                selectedColor === color.hex
                  ? 'ring-offset-2 ring-1 ring-[#8b4c50]'
                  : 'border border-outline-variant'
              }`}
              style={{ backgroundColor: color.hex }}
            ></div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">payments</span>
          <span className="font-label uppercase text-[10px] tracking-widest">
            Price Range
          </span>
        </div>
        <input className="w-full accent-primary" type="range" min="2000" max="80000" />
        <div className="flex justify-between text-[10px] font-medium text-on-surface-variant">
          <span>₹2,000</span>
          <span>₹80,000</span>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
