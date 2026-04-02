import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const CATEGORIES = [
  {
    name: 'Tops & Tees',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'stylish woman wearing a trendy crop top',
  },
  {
    name: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'high waist wide leg jeans flatlay',
  },
  {
    name: 'Western Dress',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'elegant floral midi dress on display',
  },
  {
    name: 'Indo-Western',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrTsvPPITV5YSGxyl-RLeJGJwzn1bvvrPtkyCFu4tlvip0dvmXWMnGnShg3v61F7_SnnLng63_lU-6pOkD0B6zYa2N6J8ugDYdze4dFAI4z6bc07xVTmq-WTsh20t-O3ge7BIudBeS9HUO8EmTrAE77RVrX_0hZLj8AhPx6rdXJALn-byUcGv96jtVKgAoDcCz5cGKUI7ZWP2rjOSeZB64mFsTRaHbhLMS0bdd-yE_XQ1Fy2PxF2YB3kZULDDiODX6QamOJp25J_K-',
    alt: 'fusion indo-western outfit with modern styling',
  },
  {
    name: 'Ethnic Wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoNH7ZTRhKKlmwhzm-P58PaXSS1Phx1KKNXCrefTgZ5J1PvV3pTNEO_R6ZlEG93W85NFdtD2_6sH9mdzXb78HlkEnL5_7lB_LyBtODhYj1TDXtXSL-v_ev4QfthMna3-VP4LGPV7J_8wZCXLuUtnFsmcY-ng1xR4F1rl48Y1yJRsfQ2vsF0nqyGk78O-iI3_Tn9Y_iGegCx3AGEkioKNGHX54kpVjbPVpjdqw64vcIEHo5GKoKSUCYAdGUoDFVgIl13b_V5iQIbe6j',
    alt: 'stunning floral printed saree draped elegantly',
  },
  {
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'strappy block heels in nude color',
  },
  {
    name: 'Sunglasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'trendy cat-eye sunglasses on display',
  },
  {
    name: 'Jewelry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbLVRmVsIqnnUkVKl6EO4kOJ6QQgfFfQwUW-2EdeJOS1yRHePcxnV27VgTMZyRnhLakcqDoCyPt2na-I_kHpG47ND8v6HVjpOSl3ROy5V805Cx_01biIf2iKVZ4neAkN_KhPVEFENwLECHvJFrakbUeCPk4XTOV2pUqD_I27kA9xoPXtCP8Yzg_NiFGV-okKCtU6t7YzAxmPyyF2AdQu0Gk3zodBGrN_HAAvxoWzXygLWLRr3rLWEixPQKuPwxozmdCb6dfkYBk5fg',
    alt: 'model wearing traditional gold jewelry set',
  },
];

const FeaturedCategories = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible, getStaggerStyle] = useStaggerReveal({ staggerDelay: 100 });

  return (
    <section className="py-28 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row gap-12 items-end mb-20 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <h2 className="font-headline text-5xl max-w-lg">
          Shop by <span className="italic">Category</span>
        </h2>
        <p className="font-body text-on-surface-variant max-w-md pb-2">
          From everyday essentials to statement pieces — explore curated
          collections designed for the modern woman.
        </p>
      </div>

      {/* Category Grid — 4 columns, 2 rows */}
      <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {CATEGORIES.map((cat, index) => (
          <Link
            key={cat.name}
            to={`/shop?category=${encodeURIComponent(cat.name)}`}
            className={`group relative overflow-hidden rounded-xl bg-surface-container-low block stagger-item hover-lift ${gridVisible ? 'visible' : ''} ${index < 4 ? 'aspect-[3/4]' : 'aspect-square'}`}
            style={getStaggerStyle(index)}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={cat.alt}
              src={cat.image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-headline text-xl lg:text-2xl mb-3">{cat.name}</h3>
              <span className="text-[10px] font-label uppercase tracking-widest border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
