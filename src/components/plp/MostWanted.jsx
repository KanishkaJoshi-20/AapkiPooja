import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../../data/products.json';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const MostWanted = () => {
  const scrollRef = useRef(null);
  const [sectionRef, sectionVisible] = useScrollReveal();

  // Show highest rated products
  const spotlightItems = [...allProducts]
    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    .slice(0, 4);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className={`mt-24 bg-surface-container-low py-20 overflow-hidden reveal ${sectionVisible ? 'visible' : ''}`}>
      <div className="px-8 max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-xs text-primary tracking-widest uppercase">
              The Spotlight
            </span>
            <h2 className="font-headline text-4xl mt-2 italic">Most Wanted</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-8"
        >
          {spotlightItems.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="min-w-[320px] group cursor-pointer block hover-lift">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item.name}
                  src={item.images[0]}
                  loading="lazy"
                />
              </div>
              <h4 className="font-headline text-xl group-hover:text-primary transition-colors">{item.name}</h4>
              <p className="text-secondary font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostWanted;
