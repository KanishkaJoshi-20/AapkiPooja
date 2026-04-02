import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../../data/products.json';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const RelatedProducts = ({ product }) => {
  const scrollRef = useRef(null);
  const [sectionRef, sectionVisible] = useScrollReveal();

  // Get products from same category, excluding current product
  const related = allProducts.filter(
    p => p.category === product.category && p.id !== product.id
  );

  // If not enough from same category, pad with other products
  const displayProducts = related.length >= 2
    ? related
    : [...related, ...allProducts.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - related.length)];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (displayProducts.length === 0) return null;

  return (
    <section ref={sectionRef} className={`mt-24 reveal ${sectionVisible ? 'visible' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-headline italic">You May Also Adore</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-8"
      >
        {displayProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="flex-none w-64 md:w-72 space-y-4 group cursor-pointer block hover-lift"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-lowest relative ring-1 ring-black/5">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.name}
                src={item.images[0]}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur-sm text-primary font-label uppercase text-[10px] tracking-widest px-6 py-2 rounded-full shadow-lg">
                  View Product
                </span>
              </div>
            </div>
            <div className="px-1">
              <h4 className="text-sm font-medium text-on-surface leading-tight group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              <p className="text-xs font-bold text-primary mt-1">
                ₹{item.price.toLocaleString('en-IN')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
