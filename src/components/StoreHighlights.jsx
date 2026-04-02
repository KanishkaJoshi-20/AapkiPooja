import React from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';

const STORES = [
  {
    label: 'Our Heritage Store',
    name: 'Rajwada Store',
    description:
      "Located in the heart of the city's royal district, experience ethnic fashion in a setting of grandeur.",
    cta: 'Get Directions',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDat_E3ImTHsU_2EgaKErkMDacDgo44SDxU0FrCr1UsFJwIPtAIJhTUnQzlyKvjaRN60IaJVFQYuGeJ9AU5DuHLhj012W0QOgTvFV0_IhhYgj-l332a3X4-IXn2JI2VhdkQh-5F_PPj2N1GB394L3BLPO1F3BCPgnDE8s3iTVXwRlU-I4nKHWhx2KZiZpjEouFeQVEe3KM5MMLMwFlT2qneU3Ud-PNuylUGINkazaOSFERgjLmZpv9ExyOGsM8t6qsFDQmzha6wqR3q',
    alt: 'luxurious interior of an ethnic wear boutique',
  },
  {
    label: "Indore's Favorite Destination",
    name: 'South Tukoganj',
    description:
      'A modern sanctuary for the bespoke shopper, featuring our exclusive couture collections.',
    cta: 'Explore Store',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpn7lrDFPIRcuJjL6nh-Rif3PCyFSfV--70HkXbFIUiq7FKG-sTE1VwQu4jpBLCd6othNkHMR290GIrT5ya_IuEA8biknk4TN0zs7ePrxeBrtfQAyh4AQEDQO06qqJ6EYDhqIy7DhMdzmZulI1tWIPkR-1FTPl31z1dPdugds4eRSglVgO7-toXfT0U48Rnao--EcFc1RN8rafI1gbtDaO49XxbF6XuObH4LG_5sgHRFQxqzf2MCmvH6RGmHLQRyXrkdD28qvxokDt',
    alt: 'contemporary minimalist boutique interior',
  },
];

const StoreHighlights = () => {
  const [gridRef, gridVisible, getStaggerStyle] = useStaggerReveal({ staggerDelay: 250 });

  return (
    <section className="py-28 bg-surface-container">
      <div ref={gridRef} className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {STORES.map((store, index) => (
            <div
              key={store.name}
              className={`relative group h-[500px] overflow-hidden rounded-2xl stagger-item hover-glow ${gridVisible ? 'visible' : ''} ${index === 1 ? 'md:mt-20' : ''}`}
              style={getStaggerStyle(index)}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt={store.alt}
                src={store.image}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <span className="font-label text-xs text-primary-container tracking-[0.4em] uppercase mb-4">
                  {store.label}
                </span>
                <h3 className="font-headline text-4xl text-white mb-6">
                  {store.name}
                </h3>
                <p className="text-white/80 max-w-sm mb-8">{store.description}</p>
                <button className="w-fit text-white flex items-center gap-3 group/btn">
                  <span className="material-symbols-outlined p-2 border border-white/30 rounded-full group-hover/btn:bg-white group-hover/btn:text-primary transition-colors">
                    location_on
                  </span>
                  <span className="text-sm font-label uppercase tracking-widest">
                    {store.cta}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreHighlights;
