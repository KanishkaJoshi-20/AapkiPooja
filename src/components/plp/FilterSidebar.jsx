import React, { useMemo, useState } from 'react';

const FilterSidebar = ({
  products,
  selectedSizes,
  onSizesChange,
  selectedColors,
  onColorsChange,
  priceRange,
  onPriceRangeChange,
  onClearAll,
}) => {
  // Derive all unique sizes and colors from data
  const allSizes = useMemo(() => {
    const sizes = new Set();
    products.forEach(p => p.sizes.forEach(s => sizes.add(s)));
    return [...sizes];
  }, [products]);

  const allColors = useMemo(() => {
    const colorMap = new Map();
    products.forEach(p =>
      p.colors.forEach(c => {
        if (!colorMap.has(c.hex)) colorMap.set(c.hex, c.name);
      })
    );
    return [...colorMap.entries()].map(([hex, name]) => ({ hex, name }));
  }, [products]);

  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), [products]);

  const [localMaxPrice, setLocalMaxPrice] = useState(priceRange[1] || maxPrice);

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      onSizesChange(selectedSizes.filter(s => s !== size));
    } else {
      onSizesChange([...selectedSizes, size]);
    }
  };

  const toggleColor = (hex) => {
    if (selectedColors.includes(hex)) {
      onColorsChange(selectedColors.filter(c => c !== hex));
    } else {
      onColorsChange([...selectedColors, hex]);
    }
  };

  const handlePriceChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setLocalMaxPrice(val);
    onPriceRangeChange([0, val]);
  };

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[1] < maxPrice;

  return (
    <aside className="hidden lg:flex flex-col p-6 gap-8 h-fit sticky top-28 bg-surface-container-low w-64 rounded-xl border border-outline-variant/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-label uppercase text-[10px] tracking-widest text-primary font-bold">
            Filters
          </h2>
          <p className="text-[11px] text-on-surface-variant mt-1">Refine your search</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-error transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Size */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">straighten</span>
          <span className="font-label uppercase text-[10px] tracking-widest">Size</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1.5 rounded-full text-[10px] flex items-center justify-center transition-colors ${
                selectedSizes.includes(size)
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
          {allColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => toggleColor(color.hex)}
              title={color.name}
              className={`w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                selectedColors.includes(color.hex)
                  ? 'ring-offset-2 ring-2 ring-primary scale-110'
                  : 'ring-1 ring-outline-variant'
              }`}
              style={{ backgroundColor: color.hex }}
            ></button>
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
        <input
          className="w-full accent-primary"
          type="range"
          min="0"
          max={maxPrice}
          value={localMaxPrice}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between text-[10px] font-medium text-on-surface-variant">
          <span>₹0</span>
          <span className="text-primary font-bold">₹{localMaxPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
