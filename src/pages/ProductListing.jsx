import React, { useState } from 'react';
import CollectionHero from '../components/plp/CollectionHero';
import CategoryScroll from '../components/plp/CategoryScroll';
import FilterSidebar from '../components/plp/FilterSidebar';
import ProductGrid from '../components/plp/ProductGrid';
import MostWanted from '../components/plp/MostWanted';
import StylingLook from '../components/plp/StylingLook';

const ProductListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('New Arrivals');

  return (
    <main className="pt-20 pb-32">
      {/* Hero Banner */}
      <CollectionHero />

      {/* Category Pill Scroll */}
      <CategoryScroll
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Sidebar + Product Grid Layout */}
      <div className="px-8 flex flex-col lg:flex-row gap-12">
        <FilterSidebar />
        <ProductGrid sortOption={sortOption} onSortChange={setSortOption} />
      </div>

      {/* Most Wanted Carousel */}
      <MostWanted />

      {/* Styling the Look Editorial */}
      <StylingLook />
    </main>
  );
};

export default ProductListing;
