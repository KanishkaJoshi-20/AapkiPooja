import React, { useState } from 'react';

const ImageGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product?.images || [];
  const mainImage = images[activeIndex] || images[0];

  return (
    <div className="lg:col-span-7 grid grid-cols-12 gap-4">
      {/* Thumbnails Desktop */}
      {images.length > 1 && (
        <div className="hidden md:flex flex-col gap-4 col-span-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden cursor-pointer transition-all ${
                idx === activeIndex
                  ? 'ring-1 ring-primary'
                  : 'hover:ring-1 hover:ring-outline-variant'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt={`${product.name} view ${idx + 1}`}
                src={img}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Display Image */}
      <div className={`${images.length > 1 ? 'col-span-12 md:col-span-10' : 'col-span-12'} group relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm`}>
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={product.name}
          src={mainImage}
        />
        <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-sm p-3 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-primary">zoom_in</span>
        </div>
      </div>

      {/* Thumbnails Mobile */}
      {images.length > 1 && (
        <div className="col-span-12 flex md:hidden gap-3 overflow-x-auto hide-scrollbar py-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-none w-20 aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden ${
                idx === activeIndex ? 'ring-1 ring-primary' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt={`${product.name} thumbnail ${idx + 1}`}
                src={img}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
