import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from '../hooks/useScrollReveal';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [parallaxRef, parallaxOffset] = useParallax(0.25);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={parallaxRef} className="relative h-[921px] w-full overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center transition-transform duration-[1.5s]"
          style={{ transform: `scale(1.05) translateY(${parallaxOffset}px)` }}
          alt="elegant woman in a luxury embroidered pastel silk saree posing in a sun-drenched heritage palace balcony with soft architectural shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5NAoyeyNkIDNtfuOxtejKkSKjGCRRfq-vdE7KcFauC7r3JSm-COQ-HhS0Wf5Gchorkb0M5KshhH0TZNHygWMLQKmg440FlGAakFfO3NmdB4vFM7NG3ZkKr5R9yvHA0PnMUf4fQpDkOoAp6kbdiAZTxArpggxTLdnjUrpDFFc-T3gYm9FvXZksprSWDAm04Zd3I2wobnodeXOzdDjR9UD9Ds6ek8PraWR73WY4gD5aCuIvnfXnpMrhJom-WdBh26K_jejkaILTp4pE"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span
            className={`font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            New Season Arrival
          </span>
          <h1
            className={`font-headline text-6xl md:text-8xl leading-tight text-on-surface mb-8 -ml-1 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Celebrate Every <br />
            <span className="italic font-normal">Moment</span> in Style
          </h1>
          <div
            className={`flex gap-6 items-center transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/shop"
              className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300 active:scale-95 animate-pulse-glow"
            >
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="font-headline text-lg italic text-primary group flex items-center gap-2"
            >
              <span className="editorial-underline">Explore Collection</span>
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          loaded ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Scroll</span>
        <span className="material-symbols-outlined text-primary animate-float text-lg">
          expand_more
        </span>
      </div>
    </section>
  );
};

export default Hero;
