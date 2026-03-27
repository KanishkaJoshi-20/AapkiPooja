import React from 'react';

const OrdersTable = ({ orders }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
      <table className="w-full text-left font-sans">
        <thead>
          <tr className="bg-surface-container-low/50">
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
              Order ID
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
              Customer
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant text-right">
              Amount
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-surface-container-low/20 transition-colors">
              <td className="px-6 py-5 text-xs font-medium">{order.id}</td>
              <td className="px-6 py-5 text-xs">{order.customer}</td>
              <td className="px-6 py-5 text-xs text-right font-semibold">
                ₹{order.amount.toLocaleString()}
              </td>
              <td className="px-6 py-5 text-center flex justify-center">
                <span 
                  className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase
                    ${order.status === 'SHIPPED' ? 'bg-emerald-50 text-emerald-700' : ''}
                    ${order.status === 'PENDING' ? 'bg-amber-50 text-amber-700' : ''}
                    ${order.status === 'PAID' ? 'bg-blue-50 text-blue-700' : ''}
                  `}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-8 text-on-surface-variant text-sm">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
