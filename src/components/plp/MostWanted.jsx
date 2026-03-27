import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SPOTLIGHT_ITEMS = [
  {
    name: 'Luxe Bloom Set',
    price: '₹18,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr_qOK1GdZuVhwHVFOpzyFTXKbRwl9fUF6ZnmbLL4oVkLugQUoq7ZA9OxHXfvLBma8ccgJlO_KGLNvhr9x5vx4zzm7PWWe8AR_5bKnNoVj1m6FpotIrWhKS-bSM6vEOooGBb12mBhHq5QGwbOrBYsgXaI0Qxewcp9cUOz_vMuLZVXsJjFJSxaj04qOLRpgGf_pNWn5gGF0jYzhaQ_q717nUTKObL2nn7XfIyWZuTkZ2YH7oXLi8br66X-yT4Cpr3nGXaAew7XeG9VB',
    alt: 'Close up of intricate embroidery',
  },
  {
    name: 'Modern Muse Co-ord',
    price: '₹9,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA248zmBJNXvDCzIThwTUussrJCBw0-QqAKA4v38fpSfpb_tncjux6qTDX5_aPjktHGy0fee3MSNwtS12H4NnA0j33Yt16AOvHhzT4qAFoFSHqx78yQyW5gINGBYw4fQ8No73fuPZERMncYlZZ6hKaViMo25OGcE1dytMh3zI1PTW0bfX8VN0YUL6B2A2x3EJom-WwSv4aqz6e-p_FbbPXxSOlL-dDDdPcJJnEUqUA3SDL8s9NGcNzD4Mpv1cCvE2JGS1RWTo7PkXUM',
    alt: 'Model in contemporary wear',
  },
  {
    name: 'Gold Thread Jutti',
    price: '₹4,499',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB5Cv8qXxW2oHEQvPLhFtpuDFx-4sV_Es8gdgDsFc3_dzuaxSnQ4l8CY61YRoqxUXtLkCE2QFyXm_snv3rXyH7CIBNBRdNCfJSjfAURYELaXlvkfOvteOPaSYSRUkSPyz5jHe14V62iHnjtev83Fc-Bb2C06UTEuQjBOhcrIVyhYUmibcrnA_IdDiwdIaxph8ac8m3grPiobXJpeA61nJJK2pSq3Zh9hXR7ZlPxpD4gNCYbY-57E5xZUbKnSFQcx6N_hpF-o9qzlez',
    alt: 'Heritage silk detail',
  },
  {
    name: 'Airy Bloom Kurta',
    price: '₹12,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAs1maaSlz3dVOolRzuoVtDVivy-5FVD8hfkFvthpCVClr1RrTZoq5LwvG6ekRQ9k4ZQaDUJ1kCdDuVdwO5bupm8ISWIF-ZgjUOvGbNF7fGg1mx0361-MyMDRbfPnYnlOTc5YiVmqVVovvegM32n_CnAZYQvK_3hwTtorO8SS4j9lwQdHdW32ROtqW3xHSZFLBJMyWklQxDMl7tsJWz4Xp7Uuclj9AUjphNNvlaiOipja9NQ_FCz0JB2wZmTI0wthWZXn2BuaCkYxU',
    alt: 'Fluid chiffon dress',
  },
];

const MostWanted = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mt-24 bg-surface-container-low py-20 overflow-hidden">
      <div className="px-8 max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-xs text-primary tracking-widest uppercase">
              The Spotlight
            </span>
            <h2 className="font-headline text-4xl mt-2 italic">Most Wanted</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-8"
        >
          {SPOTLIGHT_ITEMS.map((item) => (
            <Link to={`/product/${encodeURIComponent(item.name.toLowerCase().replace(/ /g, '-'))}`} key={item.name} className="min-w-[320px] group cursor-pointer block">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item.alt}
                  src={item.image}
                  loading="lazy"
                />
              </div>
              <h4 className="font-headline text-xl group-hover:text-primary transition-colors">{item.name}</h4>
              <p className="text-secondary font-semibold">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostWanted;
