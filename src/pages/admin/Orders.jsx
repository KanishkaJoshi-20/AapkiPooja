import React from 'react';
import { useOutletContext } from 'react-router-dom';
import OrdersTable from '../../components/admin/OrdersTable';

const Orders = () => {
  const { orders } = useOutletContext();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-headline tracking-tight text-on-surface">
            Customer <span className="italic font-normal">Ledger</span>
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 font-body">
            Manage and track all customer orders across the platform.
          </p>
        </div>
        <button className="px-6 py-2.5 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container transition-colors font-sans">
          Export CSV
        </button>
      </div>

      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
