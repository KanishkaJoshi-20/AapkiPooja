import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../../hooks/useScrollReveal';

const ProductCard = ({ product, className = '', style = {} }) => (
  <Link to={`/product/${product.id}`} className={`group block hover-lift ${className}`} style={style}>
    <div className="relative aspect-[3/4] bg-surface-container-lowest rounded-xl overflow-hidden mb-4">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={product.name}
        src={product.images[0]}
        loading="lazy"
      />

      {/* Quick View overlay */}
      <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full font-label text-[10px] uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          Quick View
        </span>
      </div>

      {/* Stock / New badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-primary text-white text-[9px] font-bold uppercase tracking-tighter px-2 py-1 rounded-sm">
            New
          </span>
        )}
        {product.stock === 0 && (
          <span className="bg-stone-700 text-white text-[9px] font-bold uppercase tracking-tighter px-2 py-1 rounded-sm">
            Out of Stock
          </span>
        )}
        {product.stock > 0 && product.stock < 5 && (
          <span className="bg-error text-white text-[9px] font-bold uppercase tracking-tighter px-2 py-1 rounded-sm">
            Only {product.stock} Left
          </span>
        )}
      </div>

      {/* Wishlist button */}
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute top-4 right-4 text-[#8b4c50] bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
      >
        <span className="material-symbols-outlined text-lg">favorite</span>
      </button>
    </div>

    {/* Product info */}
    <div className="space-y-1">
      <h3 className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-semibold text-secondary">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
        <div className="flex items-center gap-1">
          <span
            className="material-symbols-outlined text-primary text-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-[10px] font-label text-on-surface-variant/60 tracking-widest">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const ProductGrid = ({
  products,
  sortOption,
  onSortChange,
  activeCategory,
  selectedSizes,
  selectedColors,
  priceRange,
}) => {
  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory && activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by sizes
    if (selectedSizes && selectedSizes.length > 0) {
      result = result.filter(p =>
        p.sizes.some(s => selectedSizes.includes(s))
      );
    }

    // Filter by colors
    if (selectedColors && selectedColors.length > 0) {
      result = result.filter(p =>
        p.colors.some(c => selectedColors.includes(c.hex))
      );
    }

    // Filter by price range
    if (priceRange && priceRange.length === 2) {
      result = result.filter(
        p => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
    }

    // Sort
    switch (sortOption) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Best Sellers':
        result.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      case 'New Arrivals':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [products, activeCategory, selectedSizes, selectedColors, priceRange, sortOption]);

  return (
    <section className="flex-1">
      {/* Sort bar */}
      <div className="flex justify-between items-center mb-8">
        <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
          Showing {filteredAndSorted.length} {filteredAndSorted.length === 1 ? 'item' : 'items'}
        </p>
        <div className="flex items-center gap-4">
          <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Sort by:
          </label>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent border-none font-label text-xs uppercase tracking-widest focus:ring-0 cursor-pointer text-primary font-bold"
          >
            <option>New Arrivals</option>
            <option>Best Sellers</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredAndSorted.length > 0 ? (
        <ProductGridInner products={filteredAndSorted} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-6">
            search_off
          </span>
          <h3 className="font-headline text-2xl mb-2">No products found</h3>
          <p className="text-on-surface-variant text-sm max-w-sm">
            Try adjusting your filters or browse a different category to discover something you'll love.
          </p>
        </div>
      )}
    </section>
  );
};

const ProductGridInner = ({ products }) => {
  const [gridRef, gridVisible, getStaggerStyle] = useStaggerReveal({ staggerDelay: 80 });
  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          className={`stagger-item ${gridVisible ? 'visible' : ''}`}
          style={getStaggerStyle(index)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
