import React, { useState } from 'react';

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <section className="mt-24 max-w-4xl">
      {/* Tabs Header */}
      <div className="border-b border-outline-variant mb-8 flex gap-8">
        <button
          onClick={() => setActiveTab('details')}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${
            activeTab === 'details'
              ? 'border-b-2 border-primary text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab('care')}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${
            activeTab === 'care'
              ? 'border-b-2 border-primary text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Fabric & Care
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${
            activeTab === 'reviews'
              ? 'border-b-2 border-primary text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Reviews (12)
        </button>
      </div>

      {/* Tab Content Placeholder / Actual Content */}
      {activeTab === 'details' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
          <div className="space-y-6">
            <div>
              <h4 className="font-headline text-lg mb-2">Artisan Craftsmanship</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Each petal is hand-cut and appliquéd using the traditional 'Gota
                Patti' technique. The silhouette is inspired by the royal Mughal
                courts, refined for the modern woman.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                Set includes: Anarkali, Churidar & Dupatta
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                Neckline: Sweetheart with sheer mesh
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                Sleeve: Full length sheer sleeves
              </li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10">
            <h4 className="font-headline text-lg mb-4">Fabric Details</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Material
                </span>
                <span className="text-sm font-medium">100% Pure Silk</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Lining
                </span>
                <span className="text-sm font-medium">Butter Crepe</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Care
                </span>
                <span className="text-sm font-medium">Dry Clean Only</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'care' && (
        <div className="space-y-6 animate-fade-in">
          <h4 className="font-headline text-lg mb-2">Fabric & Care Guide</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Due to the delicate nature of the hand embroidery, this garment requires
            specialized dry cleaning. Do not iron directly on the zardosi work.
            Store in the provided muslin bag away from direct sunlight to preserve
            the silk fibers.
          </p>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="animate-fade-in text-sm text-on-surface-variant">
          <p>Please scroll down to read our customer whispers.</p>
        </div>
      )}
    </section>
  );
};

export default DetailsTabs;
