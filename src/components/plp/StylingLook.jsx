import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const EDITORIALS = [
  {
    title: 'The Modern Muse',
    description:
      'Pair our structured linen co-ords with bold gold accents for a day-to-night transition that breathes effortless luxury.',
    cta: 'Read The Story',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_r3GRmfZeowCRuBc4bI2-RcLWjAxDL9PF45j__dki8ylJO-uRrqUkO82QC3iBKmTdSgKLt8CUAxf1W-c1Y0-T5wRNXd_f9le_NNW95Cd_lGPLAooOn6CteRgZZzXrzpO7PpOaWzBocwNQa6vZgAZzw72W6iES11RjpDg2zwsS4CcyPPWSAlRaxNFxbvRe48wUExVZ3FOo62Twu4dvlR1VMMgKAcuSyGoqV2OEJ_3A6dp2GypKTU3hSEAdn7PjDX3a0qTrgdnuDlrE',
    alt: 'Elegant woman posing in a modern fusion outfit in a high-fashion editorial style',
  },
  {
    title: 'Evening Elegance',
    description:
      'Master the art of the drape. Our silk staples find their peak when paired with vintage jewelry and a soft, dewy glow.',
    cta: 'View Lookbook',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7G-do2sItrwaLPHfTfANXxonpxNs0e0EGpmjdTJyn6rOqx2Hod0cqRJvV5LhfIaJ0F82pJh9HbLMFAL_9hsNlSQtsPs3pLuZJ-HGf4s67iQPFRgJCutfXcXnvK6-YQyubPQvRmZ0hQOB7qyl-FRplv8S42Xpix-x8rW3RuohRd3cTd_sSJ-lPaHq11wZ0A-sx4LWfDJvbXYb3495b0q33nPV0BHNPJ0m83ngi5ccVGvHOIdJHcbI53ZdZcSB-1J-lCe_4nxKcmP-q',
    alt: 'Beautifully draped heritage garment in a luxury evening setting',
  },
];

const StylingLook = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible, getStaggerStyle] = useStaggerReveal({ staggerDelay: 200 });

  return (
    <section className="mt-28 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
      >
        <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">
          Inspiration
        </span>
        <h2 className="font-headline text-5xl mt-4">
          Styling <span className="italic">The Look</span>
        </h2>
      </div>

      {/* Editorial Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {EDITORIALS.map((item, index) => (
          <div
            key={item.title}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl aspect-[16/10] hover-glow stagger-item ${gridVisible ? 'visible' : ''}`}
            style={getStaggerStyle(index)}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={item.alt}
              src={item.image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
              <h3 className="font-headline text-3xl text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm max-w-sm mb-6">
                {item.description}
              </p>
              <span className="font-label text-xs uppercase tracking-widest text-white border-b border-white w-fit pb-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {item.cta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StylingLook;
