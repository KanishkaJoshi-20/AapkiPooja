import React from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../data/products.json';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const TrendingNow = () => {
  const products = allProducts.slice(0, 4);
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible, getStaggerStyle] = useStaggerReveal({ staggerDelay: 120 });

  return (
    <section className="bg-surface-container-low py-28 px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="font-headline text-4xl mb-4 italic">Trending Now</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto"></div>
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={`group block stagger-item hover-lift ${gridVisible ? 'visible' : ''}`}
              style={getStaggerStyle(index)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white mb-6">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={product.name}
                  src={product.images[0]}
                  loading="lazy"
                />

                {/* Tag Badge */}
                {product.stock > 0 && product.stock < 5 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-error text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter rounded-sm">
                      Only {product.stock} Left
                    </span>
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-1 uppercase tracking-tighter rounded-sm">
                      New Arrival
                    </span>
                  </div>
                )}

                {/* Quick Add Button */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-sm py-3 rounded-lg text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Quick View
                </button>
              </div>

              {/* Product Info */}
              <h4 className="font-headline text-lg">{product.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-secondary font-medium">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <div className="flex gap-1">
                  {product.colors.slice(0, 3).map((color) => (
                    <div
                      key={color.hex}
                      className="w-3 h-3 rounded-full border border-stone-200 transition-transform duration-200 hover:scale-125"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
