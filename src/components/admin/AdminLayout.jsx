import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

// Central Dummy Initial State
const initialProducts = [
  {
    id: 'PRD-001',
    name: 'Banarasi Silk Saree',
    category: 'Ethnic Wear',
    stock: 4,
    price: 45000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChKUa6sVTiHWmwuMODkH-Y93JfQ4DbcNqhRX-xgAw-3ZXcY96kEyj6DurHaJ77yQlVt6NBpDMtyqW5-1x5NeU4b_9FfpzSiN3d_j4SIp6T4dyJ4E9fcfR_Q2Ec-gKSDusuDyZ4cr7bDoGEuYdyYR27CdyrvhuS8LNAnI7DiY5mKT1Ssr5iuLVF87LYu9XVYW7bsIqDAo_o8TWx_LEasup5qIpVq84QXhHpSb7FdNIHs8D45Ijbz1jA0TpgWKh0vaVmJSpfuCj7xwv6'
  },
  {
    id: 'PRD-002',
    name: 'Temple Brass Diya',
    category: 'Pooja Essentials',
    stock: 42,
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS9nyjlA5zFI2gXqtDJBcjwnOBB9D2p3BImlkQzBXW7UQf7Oqkls_LrZaUD0AKq4ct8AQ8brG1IquDva2jkv-nTT1fRe9aHCT5pnrhb5tVDuz-XS_nkW2Yns9jvvTzt9PhIdkyFGWT1wHlWQZ03YA3u171cFf6SPvtZPrrZxsk3HsmL5HbJxtKJhjBhby-k8Av30wepc6FGdSXsN_ZYZMMHvR1bVj3CWX5r61BSLkvWnQRaGxWTTudC5bJozj0Vp3r9pty6esY4Ekm'
  }
];

const initialOrders = [
  { id: '#AP-9821', customer: 'Priya Venkat', amount: 12400, status: 'SHIPPED' },
  { id: '#AP-9820', customer: 'Rohan Mehta', amount: 4250, status: 'PENDING' },
  { id: '#AP-9819', customer: 'Ananya Iyer', amount: 28900, status: 'PAID' }
];

const AdminLayout = () => {
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);

  const stats = {
    totalOrders: orders.length + 1281, // fake large base
    monthlyRevenue: orders.reduce((acc, text) => acc + text.amount, 800700),
    lowStock: products.filter(p => p.stock < 10).length + 13 // fake large base
  };

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="bg-surface text-on-surface antialiased flex font-body">
      <Sidebar />
      
      <main className="flex-1 min-h-screen flex flex-col max-w-[100vw] md:max-w-[calc(100vw-256px)]">
        {/* Top Header */}
        <header className="flex justify-between items-center h-20 px-8 sticky top-0 z-40 w-full bg-[#fff8f3]/80 dark:bg-stone-900/80 backdrop-blur-md">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
              <input 
                type="text" 
                placeholder="SEARCH ORDERS OR PRODUCTS..." 
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border-none rounded-lg text-[10px] tracking-widest uppercase focus:ring-1 focus:ring-primary/20 placeholder:text-stone-400 font-sans"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-[#8b4c50]">
            <button className="relative hover:opacity-100 opacity-80 transition-opacity">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full"></span>
            </button>
            <button className="hover:opacity-100 opacity-80 transition-opacity">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Dashboard Canvas -> Renders the matched child route */}
        <div className="p-8 space-y-12 flex-1 relative">
          <Outlet context={{ products, addProduct, deleteProduct, orders, stats }} />
        </div>

        {/* Footer */}
        <footer className="mt-auto py-12 px-8 border-t border-outline-variant/10 text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-stone-400">
            © 2023 Aapki Pooja • Curating Sacred Traditions
          </p>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
