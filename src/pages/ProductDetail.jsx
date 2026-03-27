import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageGallery from '../components/pdp/ImageGallery';
import ProductInfo from '../components/pdp/ProductInfo';
import DetailsTabs from '../components/pdp/DetailsTabs';
import ReviewsPreview from '../components/pdp/ReviewsPreview';
import RelatedProducts from '../components/pdp/RelatedProducts';
import allProducts from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const [pageLoaded, setPageLoaded] = useState(false);

  const product = allProducts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoaded(false);
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-32 pb-32 px-8 max-w-7xl mx-auto text-center">
        <span className="material-symbols-outlined text-7xl text-outline-variant mb-6 block">
          search_off
        </span>
        <h1 className="font-headline text-4xl mb-4">Product Not Found</h1>
        <p className="text-on-surface-variant mb-10 max-w-md mx-auto">
          The product you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/shop"
          className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-lg hover:opacity-90 transition-all"
        >
          Browse All Products
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className={`mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant font-label transition-all duration-500 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-primary transition-colors">
          {product.category}
        </Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="text-on-surface font-semibold">{product.name}</span>
      </nav>

      {/* Main PDP Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-700 delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <ImageGallery product={product} />
        <ProductInfo product={product} />
      </div>

      <DetailsTabs product={product} />
      <ReviewsPreview />
      <RelatedProducts product={product} />
    </main>
  );
};

export default ProductDetail;
