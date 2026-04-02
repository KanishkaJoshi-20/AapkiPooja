import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductTable from '../../components/admin/ProductTable';
import AddProductModal from '../../components/admin/AddProductModal';

const Products = () => {
  const { products, deleteProduct, addProduct } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="animate-fade-in relative">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-headline tracking-tight text-on-surface">
            Boutique <span className="italic font-normal">Inventory</span>
          </h2>
          <p className="text-sm text-on-surface-variant mt-2 font-body">
            Add, update, or remove curations from your digital storefront.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2.5 rounded-full silk-gradient text-white text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform font-sans"
        >
          Add Product
        </button>
      </div>

      <ProductTable products={products} onDelete={deleteProduct} />
      
      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={addProduct} 
      />
    </div>
  );
};

export default Products;
