import React, { useState } from 'react';

const CATEGORIES = [
  'All',
  'New In',
  'Dresses',
  'Modern Ethnic',
  'Accessories',
  'Festive',
  'Co-ord Sets',
];

const CategoryScroll = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="px-8 mt-12 mb-8 overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-3 whitespace-nowrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-8 py-3 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-primary text-white silk-gradient'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryScroll;
