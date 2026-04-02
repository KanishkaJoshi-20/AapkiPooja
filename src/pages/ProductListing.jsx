import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CollectionHero from '../components/plp/CollectionHero';
import CategoryScroll from '../components/plp/CategoryScroll';
import FilterSidebar from '../components/plp/FilterSidebar';
import ProductGrid from '../components/plp/ProductGrid';
import MostWanted from '../components/plp/MostWanted';
import StylingLook from '../components/plp/StylingLook';
import allProducts from '../data/products.json';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);

  // Sync activeCategory when URL search params change (e.g. navigating from homepage category links)
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);
  const [sortOption, setSortOption] = useState('New Arrivals');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  // Derive available categories from data
  const categories = useMemo(() => {
    const cats = [...new Set(allProducts.map(p => p.category))];
    return ['All', ...cats];
  }, []);

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 100000]);
    setActiveCategory('All');
  };

  return (
    <main className="pt-20 pb-32">
      <CollectionHero />

      <CategoryScroll
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="px-8 flex flex-col lg:flex-row gap-12">
        <FilterSidebar
          products={allProducts}
          selectedSizes={selectedSizes}
          onSizesChange={setSelectedSizes}
          selectedColors={selectedColors}
          onColorsChange={setSelectedColors}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          onClearAll={clearFilters}
        />
        <ProductGrid
          products={allProducts}
          sortOption={sortOption}
          onSortChange={setSortOption}
          activeCategory={activeCategory}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          priceRange={priceRange}
        />
      </div>

      <MostWanted />
      <StylingLook />
    </main>
  );
};

export default ProductListing;
