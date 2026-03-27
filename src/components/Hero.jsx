import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[921px] w-full overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center scale-105"
          alt="elegant woman in a luxury embroidered pastel silk saree posing in a sun-drenched heritage palace balcony with soft architectural shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5NAoyeyNkIDNtfuOxtejKkSKjGCRRfq-vdE7KcFauC7r3JSm-COQ-HhS0Wf5Gchorkb0M5KshhH0TZNHygWMLQKmg440FlGAakFfO3NmdB4vFM7NG3ZkKr5R9yvHA0PnMUf4fQpDkOoAp6kbdiAZTxArpggxTLdnjUrpDFFc-T3gYm9FvXZksprSWDAm04Zd3I2wobnodeXOzdDjR9UD9Ds6ek8PraWR73WY4gD5aCuIvnfXnpMrhJom-WdBh26K_jejkaILTp4pE"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
            New Season Arrival
          </span>
          <h1 className="font-headline text-6xl md:text-8xl leading-tight text-on-surface mb-8 -ml-1">
            Celebrate Every <br />
            <span className="italic font-normal">Moment</span> in Style
          </h1>
          <div className="flex gap-6 items-center">
            <Link
              to="/collections"
              className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              to="/collections"
              className="font-headline text-lg italic text-primary group flex items-center gap-2"
            >
              <span className="editorial-underline">Explore Collection</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
