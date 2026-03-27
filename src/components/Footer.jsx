import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const [footerRef, footerVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <footer ref={footerRef} className={`bg-inverse-surface text-inverse-on-surface pt-20 pb-8 reveal ${footerVisible ? 'visible' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6"
            >
              <img
                src="/logo.png"
                alt="Aapki Pooja"
                className="h-12 w-auto object-contain brightness-110"
              />
              <span className="text-2xl font-headline italic tracking-tighter text-primary-fixed-dim">
                Aapki Pooja
              </span>
            </Link>
            <p className="text-inverse-on-surface/70 text-sm leading-relaxed mb-8 max-w-sm">
              Redefining modern aesthetics with timeless tradition. Our pieces
              are more than garments—they are heirlooms for the soul.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-inverse-on-surface/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-primary-fixed-dim"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  photo_camera
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-inverse-on-surface/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-primary-fixed-dim"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-inverse-on-surface/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors text-primary-fixed-dim"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-primary-fixed-dim text-xs font-semibold tracking-widest uppercase mb-6">
              CUSTOMER CARE
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Return &amp; Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Explore + Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-primary-fixed-dim text-xs font-semibold tracking-widest uppercase mb-6">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-4 mb-10">
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Craftsmanship
                </a>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-inverse-on-surface/70 hover:text-white text-sm transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>

            <h4 className="text-primary-fixed-dim text-xs font-semibold tracking-widest uppercase mb-6">
              NEWSLETTER
            </h4>
            <p className="text-inverse-on-surface/70 text-sm mb-4">
              Subscribe for exclusive drops and updates.
            </p>
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-inverse-on-surface/30 py-3 pr-10 text-inverse-on-surface placeholder:text-inverse-on-surface/40 focus:outline-none focus:border-white transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-fixed-dim hover:text-white transition-colors p-2"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-inverse-on-surface/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-inverse-on-surface/40 text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} AAPKI POOJA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-inverse-on-surface/40 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-inverse-on-surface/40 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
