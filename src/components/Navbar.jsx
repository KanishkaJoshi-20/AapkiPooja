import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import allProducts from '../data/products.json';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showWishlistTip, setShowWishlistTip] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '#about', label: 'About', isHash: true },
    { to: '#contact', label: 'Contact', isHash: true },
  ];

  const isActive = (link) => {
    if (link.isHash) return false;
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  // Search results
  const searchResults = searchQuery.trim().length >= 2
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSelect = (productId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  const handleWishlistClick = () => {
    setShowWishlistTip(true);
    setTimeout(() => setShowWishlistTip(false), 2000);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Aapki Pooja"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-headline italic tracking-tighter text-primary">
              Aapki Pooja
            </span>
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
          {/* Search */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">
                {isSearchOpen ? 'close' : 'search'}
              </span>
            </button>

            {/* Search Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-outline-variant/20 transition-all duration-300 origin-top-right ${
                isSearchOpen
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">
                    search
                  </span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary/30 placeholder:text-outline-variant/70"
                  />
                </div>
              </div>

              {searchQuery.trim().length >= 2 && (
                <div className="border-t border-outline-variant/10">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSearchSelect(product.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low transition-colors text-left"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-10 h-12 object-cover rounded-md"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{product.name}</p>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                              {product.category} • ₹{product.price.toLocaleString('en-IN')}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <p className="text-sm text-on-surface-variant">No products found</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Wishlist */}
          <div className="relative">
            <button
              onClick={handleWishlistClick}
              className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
            {/* Tooltip */}
            <div
              className={`absolute right-0 top-full mt-2 bg-on-surface text-surface text-xs px-4 py-2 rounded-lg whitespace-nowrap shadow-lg transition-all duration-200 ${
                showWishlistTip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              Coming Soon ✨
            </div>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="text-stone-600 hover:opacity-80 transition-opacity p-2 flex items-center justify-center relative"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-[10px] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
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
