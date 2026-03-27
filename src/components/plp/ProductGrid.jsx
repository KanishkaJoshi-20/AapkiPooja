import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    name: 'Desert Rose Midi',
    price: '₹7,499',
    label: 'New Season',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5NAoyeyNkIDNtfuOxtejKkSKjGCRRfq-vdE7KcFauC7r3JSm-COQ-HhS0Wf5Gchorkb0M5KshhH0TZNHygWMLQKmg440FlGAakFfO3NmdB4vFM7NG3ZkKr5R9yvHA0PnMUf4fQpDkOoAp6kbdiAZTxArpggxTLdnjUrpDFFc-T3gYm9FvXZksprSWDAm04Zd3I2wobnodeXOzdDjR9UD9Ds6ek8PraWR73WY4gD5aCuIvnfXnpMrhJom-WdBh26K_jejkaILTp4pE',
    alt: 'Modern minimalist midi dress in a soft desert rose linen fabric',
    hasQuickView: true,
  },
  {
    name: 'Heritage Banarasi',
    price: '₹24,000',
    label: 'Artisan Made',
    tag: 'Selling Fast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4PfAoXYonqbJyFTYmOgDUHboY_wECUNRpz4YqlhyYxajuX1INGs5QB7hlSX5ywzSiQWdHtKN21BRvAlivz5v3SrO7SL9EBnZgjHGxF3hvtK9vVSURF5e3d00KQxOnE5MDcYGGb6FV40kfAlD_J6yFqJgY3uu6OfhATQSBLRiCsk3eLJrovRXV4doiwSg47NXFaHJDnYElUixAOLTBneByRYdyHfBjFV8rj1RF02WV6MSkiGKcA4HmSMX3PYu1Dk2RgmE45QK6WtAc',
    alt: 'Heritage Banarasi saree in ivory and gold',
  },
  {
    name: 'Zeba Fusion Cape',
    price: '₹15,800',
    label: 'Bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATn5reDAVW1ELvM-ampNfHMPTiqnpcanhlt9OM_xpShrjvqw6ygQuAt8tDlNjGw4H-6JDjnxeGcTMajGQrERxbzHKkdoty2VRiR2-36tkF3wN05m4uRhnx6qOsbT4F33TVu75uqGYSBHqqeE98ef9a0LLTzSGEFTqREp7wrnnKkGRNl7hafuF-4YloPdY7xgAikMe0V3aV2FvrgkMXrFQ9ITqY09Gr3-T6OKSLIQAuKKHfFX0bmvK1EbZs1SQWskhdwLy4g41IhRE9',
    alt: 'Ochre fusion cape set with embroidered trousers',
  },
];

const ProductCard = ({ product }) => (
  <Link to={`/product/${encodeURIComponent(product.name.toLowerCase().replace(/ /g, '-'))}`} className="group block">
    <div className="relative aspect-[3/4] bg-surface-container-lowest rounded-xl overflow-hidden mb-4">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={product.alt}
        src={product.image}
        loading="lazy"
      />

      {/* Quick View overlay */}
      {product.hasQuickView && (
        <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full font-label text-[10px] uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </button>
        </div>
      )}

      {/* Tag badge */}
      {product.tag && (
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[9px] font-bold uppercase tracking-tighter px-2 py-1 rounded-sm">
            {product.tag}
          </span>
        </div>
      )}

      {/* Wishlist button */}
      <button className="absolute top-4 right-4 text-[#8b4c50] bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
        <span className="material-symbols-outlined text-lg">favorite</span>
      </button>
    </div>

    {/* Product info */}
    <div className="space-y-1">
      <h3 className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors">{product.name}</h3>
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-semibold text-secondary">
          {product.price}
        </span>
        {product.label && (
          <span className="text-[10px] font-label uppercase text-on-surface-variant/60 tracking-widest">
            {product.label}
          </span>
        )}
      </div>
    </div>
  </Link>
);

const ProductGrid = ({ sortOption, onSortChange }) => {
  return (
    <section className="flex-1">
      {/* Sort bar */}
      <div className="flex justify-between items-center mb-8">
        <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
          Showing {PRODUCTS.length} items
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-16 flex justify-center">
        <button className="px-12 py-4 rounded-full silk-gradient text-white font-label text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all">
          Explore Full Range
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
