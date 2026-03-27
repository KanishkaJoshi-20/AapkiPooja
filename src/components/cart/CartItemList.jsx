import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_CART_ITEMS = [
  {
    id: 1,
    name: 'Rose Petal Anarkali Set',
    details: 'CHANDERI SILK • HAND-EMBROIDERED',
    size: 'M',
    colorName: 'Blush',
    colorHex: '#E5989B',
    price: '₹14,500',
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6e4ko0bRBWCGM6XCIyq-rcHzMYC708R3saTMGg5n86WhPED1gSC1CDAhjZKwtkddsbpjSJYd7l20jKhwD8yZdLqo7Kzoo1GKnQBkbhctZcKFHyd2YLJzYXqaLgx-rOGyLFJoiGFqpifL0WUCnwuBWxfqQyxHlnqXhixBzipZVBso54sG-058m63PRyRadpF1PB7X6iQK0opz_cedPSC3sWDGeTbLyGqGqw5Di3yZ6WkINvCzt0APWTRfpD41AR-j1Dw24ZiS-aOUU',
    alt: 'Elegant woman wearing a dusty rose silk anarkali suit with gold embroidery, standing in a soft-lit heritage palace setting',
  },
  {
    id: 2,
    name: 'Heritage Gold Weaver Saree',
    details: 'BANARASI SILK • PURE ZARI',
    size: 'Free Size',
    colorName: 'Crimson',
    colorHex: '#8B4C50',
    price: '₹22,900',
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVae7fSikOdedvt_0lLv_XaWbMhIO69SJZ3CLxSkvSm3MRmTGL-L9Yv0k8QxXfY7_W6v-02oLIeF9JhB2AWTgdW9Pehe4gyGAK5-GXCvmfBIA_8Fqo_Gho6ZpPbyvkxWbO7_Mt4Qf5yHe2oW_AQLzaloz7wKpyYs44pN9PYj-twk39NNgutbVs5jFNFwb_f8NUl2lo-YlYx96RHlt2_IyEztDdwoNGDxoRcvgjWciKYUmjjVmsaBv29vt_PiaTZJqICUmxxMgxSDRr',
    alt: 'Intricate golden weave of a red banarasi silk fabric detail with soft ambient lighting and ethereal mood',
  },
];

const CartItemList = ({ onCartChange }) => {
  const [items, setItems] = useState(INITIAL_CART_ITEMS);

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
    // In a real app we'd lift state up or use Context, simulating an update trigger here:
    onCartChange && onCartChange();
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    onCartChange && onCartChange();
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <img
          alt="Empty Cart"
          className="w-64 mb-8 opacity-40 grayscale"
          data-alt="Minimalist artistic drawing of an empty silk tote bag on a warm cream background with soft shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7b9qdCNVMOEpz13FFCT1nduDg6VpAG-yQivwgZUEk9a9QRlbljopv2j9ecv1ddQwSDKMXZLS8P38AcaElXEZ20riyWKkFlP3meJWrcspdgl88EupPMeRVpToUx-jJw4Q9iDMCsZWcdb1vX41fUDZS-JKISIr12X7dPy_3ITBci7GYbFKdA_NbwfPzWS8om3z6FB10sUqbGYICkl8dwHDNSd2zTR3FFMRtnRlm_fC4PMNHmnaOYgxq9xrM9QUWANLGTDrC0DjyRsci"
        />
        <h2 className="font-headline text-3xl mb-4">Your bag is empty</h2>
        <p className="text-on-surface-variant mb-10 max-w-sm">
          It looks like you haven't discovered your next masterpiece yet. Explore
          our latest heritage collections.
        </p>
        <Link
          to="/collections"
          className="silk-gradient text-white px-10 py-4 rounded-xl font-medium tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 space-y-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/20 animate-fade-in"
        >
          {/* Image */}
          <Link
            to={`/product/${encodeURIComponent(item.name.toLowerCase().replace(/ /g, '-'))}`}
            className="w-full md:w-48 aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low block"
          >
            <img
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt={item.alt}
              src={item.image}
            />
          </Link>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between py-2">
            <div className="flex justify-between items-start">
              <div>
                <Link to={`/product/${encodeURIComponent(item.name.toLowerCase().replace(/ /g, '-'))}`}>
                  <h3 className="font-headline text-2xl text-on-surface mb-2 hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-on-surface-variant font-label text-sm tracking-wide">
                  {item.details}
                </p>

                <div className="mt-4 flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-outline uppercase text-[10px] tracking-widest">
                      Size:
                    </span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-outline uppercase text-[10px] tracking-widest">
                      Color:
                    </span>
                    <span
                      className="w-3 h-3 rounded-full shadow-inner"
                      style={{ backgroundColor: item.colorHex }}
                    ></span>
                    <span className="font-medium">{item.colorName}</span>
                  </div>
                </div>
              </div>
              <p className="font-headline text-xl text-primary">{item.price}</p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-8">
              {/* Quantity */}
              <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant/10">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="hover:text-primary transition-colors px-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    remove
                  </span>
                </button>
                <span className="px-6 font-medium text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="hover:text-primary transition-colors px-2"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center gap-2 text-outline hover:text-error transition-colors uppercase font-label text-[11px] tracking-widest"
              >
                <span className="material-symbols-outlined text-lg">
                  delete
                </span>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
