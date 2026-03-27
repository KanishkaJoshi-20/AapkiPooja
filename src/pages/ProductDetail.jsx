import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageGallery from '../components/pdp/ImageGallery';
import ProductInfo from '../components/pdp/ProductInfo';
import DetailsTabs from '../components/pdp/DetailsTabs';
import ReviewsPreview from '../components/pdp/ReviewsPreview';
import RelatedProducts from '../components/pdp/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();

  // Scroll to top on mount (since routing to a new page might persist scroll position)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant font-label">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <Link to="/collections" className="hover:text-primary transition-colors">
          Ethnic Wear
        </Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="text-on-surface font-semibold">Anarkali Sets</span>
      </nav>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Image Gallery */}
        <ImageGallery />

        {/* Right: Product Info & Actions */}
        <ProductInfo />
      </div>

      {/* Details & Care Tabs */}
      <DetailsTabs />

      {/* Reviews Section */}
      <ReviewsPreview />

      {/* Related Products Carousel */}
      <RelatedProducts />
    </main>
  );
};

export default ProductDetail;
