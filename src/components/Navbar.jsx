import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/collections', label: 'Shop' },
    { to: '#about', label: 'About', isHash: true },
    { to: '#contact', label: 'Contact', isHash: true },
  ];

  const isActive = (link) => {
    if (link.isHash) return false;
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-headline italic tracking-tighter text-primary"
          >
            Aapki Pooja
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="text-stone-600 font-normal hover:text-primary transition-colors font-headline text-sm tracking-tight"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={
                    isActive(link)
                      ? 'text-primary border-b border-primary pb-1 font-semibold font-headline text-sm tracking-tight'
                      : 'text-stone-600 font-normal hover:text-primary transition-colors font-headline text-sm tracking-tight'
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <Link
            to="/cart"
            className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center relative"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-primary text-[10px] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-stone-600 hover:opacity-80 transition-opacity p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col px-8 py-4 transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? 'scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) =>
          link.isHash ? (
            <a
              key={link.label}
              href={link.to}
              className="py-4 border-b border-gray-100 uppercase text-sm font-medium tracking-wide text-stone-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.to}
              className="py-4 border-b border-gray-100 uppercase text-sm font-medium tracking-wide text-stone-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
