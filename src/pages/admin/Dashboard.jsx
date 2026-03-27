import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import StatsCard from '../../components/admin/StatsCard';
import OrdersTable from '../../components/admin/OrdersTable';
import ProductTable from '../../components/admin/ProductTable';

const Dashboard = () => {
  const { products, orders, stats, deleteProduct } = useOutletContext();

  // Show only top 3 items for preview on dashboard
  const recentOrders = orders.slice(0, 3);
  const lowStockProducts = products.filter((p) => p.stock < 10).slice(0, 3);

  return (
    <>
      {/* Welcome Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-fade-in">
        <div>
          <h2 className="text-4xl font-headline tracking-tight text-on-surface">
            Digital Atelier <span className="italic font-normal">Overview</span>
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 font-body">
            Curation performance and artisan metrics for October 2023.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-2.5 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container transition-colors font-sans">
            Export Report
          </button>
          <Link
            to="/admin/products"
            className="px-6 py-2.5 block rounded-full silk-gradient text-white text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform font-sans text-center leading-normal"
          >
            Manage Products
          </Link>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <StatsCard
          icon="shopping_basket"
          colorClass="bg-surface-container-low text-primary"
          change="+12.5%"
          title="Total Orders"
          value={stats.totalOrders.toLocaleString()}
        />
        <StatsCard
          icon="payments"
          colorClass="bg-surface-container-low text-primary"
          customChart={true}
          title="Monthly Revenue"
          value={`₹${stats.monthlyRevenue.toLocaleString()}`}
        />
        <StatsCard
          icon="inventory_2"
          colorClass="bg-error-container/30 text-error"
          highlight="View All"
          title="Low Stock Alerts"
          value={
            <>
              {stats.lowStock}{' '}
              <span className="text-sm font-body text-stone-400 font-normal">
                items
              </span>
            </>
          }
        />
      </section>

      {/* Dual Table Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
        {/* Recent Orders */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-headline italic">Recent Orders</h4>
            <Link
              to="/admin/orders"
              className="text-[10px] font-bold tracking-widest uppercase text-primary hover:opacity-80 transition-opacity font-sans"
            >
              View Full Ledger
            </Link>
          </div>
          <OrdersTable orders={recentOrders} />
        </section>

        {/* Product Inventory */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-headline italic">Inventory Pulse</h4>
            <Link
              to="/admin/products"
              className="text-[10px] font-bold tracking-widest uppercase text-primary hover:opacity-80 transition-opacity font-sans"
            >
              Manage Stock
            </Link>
          </div>
          <ProductTable products={lowStockProducts} onDelete={deleteProduct} />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
