import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Chatbot from './components/Chatbot';
import { CartProvider } from './context/CartContext';

// Admin Imports
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';
import Products from './pages/admin/Products';

const PublicLayout = () => (
  <CartProvider>
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
    </div>
  </CartProvider>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Storefront Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/collections" element={<Navigate to="/shop" replace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Admin Portal Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
