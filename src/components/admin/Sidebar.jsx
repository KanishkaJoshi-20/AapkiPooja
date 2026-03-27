import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { to: '/admin/orders', icon: 'shopping_bag', label: 'Orders' },
    { to: '/admin/products', icon: 'inventory_2', label: 'Products' },
    { to: '#', icon: 'group', label: 'Customers' },
    { to: '#', icon: 'insights', label: 'Analytics' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant/20 bg-[#fff8f3] dark:bg-stone-900 font-['Noto_Serif'] tracking-tight py-8 sticky top-0 shrink-0">
      <div className="px-8 mb-12">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Aapki Pooja"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-2xl font-serif italic text-[#8b4c50] dark:text-[#e5989b]">Aapki Pooja</h1>
        </Link>
        <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-stone-500 mt-1">
          Luxury Admin Portal
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={`flex items-center px-8 py-4 space-x-4 transition-colors duration-300 ${
              isActive(link.to) && link.to !== '#'
                ? 'text-[#8b4c50] dark:text-[#e5989b] font-bold border-r-2 border-[#8b4c50] bg-[#fcf2e7] dark:bg-stone-800/50'
                : 'text-stone-500 dark:text-stone-400 font-medium hover:bg-[#fcf2e7] dark:hover:bg-stone-800'
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="text-sm font-sans">{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="px-8 mt-auto pt-8 border-t border-outline-variant/10">
        <div className="flex items-center space-x-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk4cWZO8CoFpuDmrzaA-2Fis1ulumBIoo47DZc3FnTQcTHLeuO3AC_ET09XuIEGVOqcVa6Nxn_6biqtLxkUOsmsPBNtndCP6Ttil6OdamgKByAqKtST0KuoHGfJSr-6Daqx1MBW0ldpLgaetZxpxMwNlEkv16KfpeF9VDtaTRmi7id8fcIKN7l0GBHYg7ByOMJQhwGfbk54ihmWHfdSVv1ro1kpgj1H7RYgQgD2D03DY80O0LSGQzDjDS-XTlCKCvzLNfLqvlltzW7"
            alt="Admin Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="font-sans">
            <p className="text-sm font-bold text-on-surface">Aditi Sharma</p>
            <p className="text-[10px] text-stone-500">Chief Curator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
