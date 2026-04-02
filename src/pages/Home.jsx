import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import TrendingNow from '../components/TrendingNow';
import CustomerLove from '../components/CustomerLove';
import StoreHighlights from '../components/StoreHighlights';
import InstagramFeed from '../components/InstagramFeed';

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <TrendingNow />
      <CustomerLove />
      <StoreHighlights />
      <InstagramFeed />
    </main>
  );
}

export default Home;
