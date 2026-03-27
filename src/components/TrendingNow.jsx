import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    name: 'Gulbahar Anarkali Set',
    price: '₹ 12,499',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrTsvPPITV5YSGxyl-RLeJGJwzn1bvvrPtkyCFu4tlvip0dvmXWMnGnShg3v61F7_SnnLng63_lU-6pOkD0B6zYa2N6J8ugDYdze4dFAI4z6bc07xVTmq-WTsh20t-O3ge7BIudBeS9HUO8EmTrAE77RVrX_0hZLj8AhPx6rdXJALn-byUcGv96jtVKgAoDcCz5cGKUI7ZWP2rjOSeZB64mFsTRaHbhLMS0bdd-yE_XQ1Fy2PxF2YB3kZULDDiODX6QamOJp25J_K-',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD48gSyqBOibthc8ZydL3OCtPVllm2RGJd7ZZtnYGnTL4QLBKqGYhNBf2gFGSRI7iuGhyuXs-Id16TkSYAtXmYCPPgJsfObTFnyKW9SYdjazQ42GVR6B30BC1UAPIq8ncyfNOlSeZilgX-G2kxvD7C-q9k-DxD1USbGh6-QOmLgrJBu6NfHMa4MdB1tMzMhX-8GHkLzBi_sNL9MB4VzPzaedvsNhf2eHI6PbUoyYfGqCLchTqkO93q6pmT0Ze2oC6T7kLwkb_R6W8V4',
    alt: 'full length shot of a model wearing a soft peach designer anarkali suit',
    hoverAlt: 'back profile detail of a peach designer anarkali suit',
    tag: 'Selling Fast',
    tagStyle: 'bg-error text-white',
    colors: ['#f8d7da', '#e2e3e5'],
    hoverType: 'swap',
  },
  {
    name: 'Vana Chanderi Saree',
    price: '₹ 8,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-xsIjG9ZLV4E1eiCJs8msjFok-rHlDmEpPBJ12dX_dKNUrdHLAD3I1YrawkfekcC1krc0IonPmml-WyU5LU-KlGmML3sBt2mRlLSwRM8PPGR1V4ISxQ9H0pvOJdT2O0CoSYJhvJfvR2lMTvEy4jmLp8li2gFycAbhdVJ_RV6oOFx7c-C9NFfaeMu42f96f_jWlbbMCuvduTP0XjiROzhkM1NyKZ4GwnwrbvQ7SSbQqGZy4q2W2RM4dJm2abIyGB6cxD27SblcMDCN',
    alt: 'woman in a deep emerald green silk saree',
    tag: 'Only 3 Left',
    tagStyle: 'bg-primary-container text-on-primary-container',
    hoverType: 'zoom',
  },
  {
    name: 'Noor Organza Suit',
    price: '₹ 15,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAs1maaSlz3dVOolRzuoVtDVivy-5FVD8hfkFvthpCVClr1RrTZoq5LwvG6ekRQ9k4ZQaDUJ1kCdDuVdwO5bupm8ISWIF-ZgjUOvGbNF7fGg1mx0361-MyMDRbfPnYnlOTc5YiVmqVVovvegM32n_CnAZYQvK_3hwTtorO8SS4j9lwQdHdW32ROtqW3xHSZFLBJMyWklQxDMl7tsJWz4Xp7Uuclj9AUjphNNvlaiOipja9NQ_FCz0JB2wZmTI0wthWZXn2BuaCkYxU',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANFfzMxkR-_Lth9qzTk-IPBbJagTYL0kdt2GnwiwoxC_k641TDF7NqTlbq0InsK4NV-OeE5qOdmUisKlc67sjCF5s6BHMgwwVzd9d0cUAWIlJBvhS1VuwXkRY-_z7mbMxcFAil1B23oLdQmFwGeRWAUlSqXqLcr66tYgvYTtbjeGEGoCLmVTsorbFDVGYVU-79nGIGmGiSy0yOUwvCb4C_uaBQz41atTL7x6UQ7mMDrWhQ5ZoR1iIdaguh5CGZZuwxJy8RnAnMgU6O',
    alt: 'soft pink organza suit',
    hoverAlt: 'close up look of hand-painted floral motifs',
    hoverType: 'swap',
  },
  {
    name: 'Heritage Banarasi',
    price: '₹ 24,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4PfAoXYonqbJyFTYmOgDUHboY_wECUNRpz4YqlhyYxajuX1INGs5QB7hlSX5ywzSiQWdHtKN21BRvAlivz5v3SrO7SL9EBnZgjHGxF3hvtK9vVSURF5e3d00KQxOnE5MDcYGGb6FV40kfAlD_J6yFqJgY3uu6OfhATQSBLRiCsk3eLJrovRXV4doiwSg47NXFaHJDnYElUixAOLTBneByRYdyHfBjFV8rj1RF02WV6MSkiGKcA4HmSMX3PYu1Dk2RgmE45QK6WtAc',
    alt: 'stately woman in a traditional banarasi silk saree',
    hoverType: 'zoom',
  },
];

const TrendingNow = () => {
  return (
    <section className="bg-surface-container-low py-28 px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl mb-4 italic">Trending Now</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <Link key={product.name} to={`/product/${encodeURIComponent(product.name.toLowerCase().replace(/ /g, '-'))}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white mb-6">
                {/* Primary Image */}
                <img
                  className={`absolute inset-0 w-full h-full object-cover ${
                    product.hoverType === 'swap'
                      ? 'group-hover:opacity-0 transition-opacity duration-500'
                      : 'group-hover:scale-105 transition-transform duration-700'
                  }`}
                  alt={product.alt}
                  src={product.image}
                  loading="lazy"
                />
                {/* Hover Image (swap type only) */}
                {product.hoverImage && (
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    alt={product.hoverAlt}
                    src={product.hoverImage}
                    loading="lazy"
                  />
                )}

                {/* Tag Badge */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${product.tagStyle} text-[10px] font-bold px-2 py-1 uppercase tracking-tighter rounded-sm`}
                    >
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick Add Button */}
                <button className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-sm py-3 rounded-lg text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <h4 className="font-headline text-lg">{product.name}</h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-secondary font-medium">{product.price}</span>
                {product.colors && (
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-3 h-3 rounded-full border border-stone-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
