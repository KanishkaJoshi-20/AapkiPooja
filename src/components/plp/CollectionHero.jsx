import React from 'react';

const CollectionHero = () => {
  return (
    <section className="px-8 mt-4">
      <div className="relative h-[450px] min-h-[350px] w-full rounded-2xl overflow-hidden bg-surface-container-low flex items-center justify-center text-center p-12">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            alt="Soft focused elegant silk fabric textures in blush pink and cream"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdTGqjjyZH_fQogr2_lzs_-OQq8ZWKLG4oJnxyKlK6JKq8VKMFAjxYSADKKtSXq57oAtV9MHfQelW2OS_CS_S_GQZTjrHNLc4GSh5CYe5jonwbXJCPJpiWK-5YaZ4tmEmMxzNeDjuSL6xvWidHLSgxDkenwH2lDVBZjZbJ_jJCZ0JhU8sP-SW5Yd-Y88Qs4GlhOWTrrmEx_pCI0DcElRy5AKdTTuwZ7yG0dgIblOAUvbmrbMZub4eHf5bkz-YF6yIM3KuMEklpOej-"
          />
        </div>
        <div className="relative z-10 space-y-6">
          <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary">
            Luxury Curation
          </span>
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface tracking-tight">
            The Signature Collection
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-light text-lg">
            From heritage weaves to contemporary silhouettes, explore a wardrobe
            curated for every facet of the modern muse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
