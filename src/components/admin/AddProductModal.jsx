import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    stock: '',
    price: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6e4ko0bRBWCGM6XCIyq-rcHzMYC708R3saTMGg5n86WhPED1gSC1CDAhjZKwtkddsbpjSJYd7l20jKhwD8yZdLqo7Kzoo1GKnQBkbhctZcKFHyd2YLJzYXqaLgx-rOGyLFJoiGFqpifL0WUCnwuBWxfqQyxHlnqXhixBzipZVBso54sG-058m63PRyRadpF1PB7X6iQK0opz_cedPSC3sWDGeTbLyGqGqw5Di3yZ6WkINvCzt0APWTRfpD41AR-j1Dw24ZiS-aOUU'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.stock) return;

    onAdd({
      id: `PRD-${Date.now().toString().slice(-4)}`,
      name: formData.name,
      category: formData.category || 'Ethnic Wear',
      stock: parseInt(formData.stock, 10),
      price: parseInt(formData.price, 10),
      image: formData.image
    });

    // Reset and close
    setFormData({ name: '', category: '', stock: '', price: '', image: formData.image });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl relative z-10 p-8 border border-outline-variant/10 animate-fade-in font-sans">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-headline italic text-on-surface tracking-tight">Add New Product</h2>
          <button 
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors p-1"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2">
                Product Name
              </label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-stone-400"
                placeholder="e.g. Royal Blue Silk Lehenga"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2">
                  Price (₹)
                </label>
                <input 
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-stone-400"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2">
                  Current Stock
                </label>
                <input 
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-stone-400"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-sm focus:ring-1 focus:ring-primary/20 text-on-surface"
              >
                <option value="">Select a category</option>
                <option value="Ethnic Wear">Ethnic Wear</option>
                <option value="Pooja Essentials">Pooja Essentials</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end space-x-4 border-t border-outline-variant/20 mt-8">
            <button 
              type="button" 
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="silk-gradient text-white px-8 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform"
            >
              Save Product
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default AddProductModal;
