import React from 'react';

const ProductTable = ({ products, onDelete }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
      <table className="w-full text-left font-sans">
        <thead>
          <tr className="bg-surface-container-low/50">
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
              Product
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant">
              Category
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant text-right">
              Stock
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant text-right">
              Price
            </th>
            <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-on-surface-variant text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10">
          {products.map((product) => (
            <tr key={product.id} className="group hover:bg-surface-container-low/20 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-12 bg-surface-container-high rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-medium">{product.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-xs">{product.category}</td>
              <td className={`px-6 py-4 text-xs text-right font-bold ${product.stock < 10 ? 'text-error' : 'text-on-surface-variant'}`}>
                {product.stock.toString().padStart(2, '0')}
              </td>
              <td className="px-6 py-4 text-xs text-right font-semibold">
                ₹{product.price.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => onDelete(product.id)}
                  className="text-stone-400 hover:text-error transition-colors p-1"
                  title="Delete Product"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-8 text-on-surface-variant text-sm border-t border-outline-variant/10">
                No products found in inventory.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
