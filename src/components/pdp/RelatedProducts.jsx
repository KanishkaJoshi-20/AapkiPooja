import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const RELATED_PRODUCTS = [
  {
    name: 'Emerald Forest Sharara Set',
    price: '₹14,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmofxPZHIvb1ubKIoPkzxN6qENjL_77SlqwuMA9xwqUibVUKRu-SpbPqkhveeJPTtEohfJm_KSXeM-dqUkFmRcDFp0joDaZ0zLroY6DvcTZQ8UxYprtrTY6M8zi9eKaN3woF_7PePp2q5CPAGPKt2U-bA1W0OsvhVSNhkUCDkqgtmgTPsiRD7zzt7PZ8WS7ZSb2PxD6ixqJqX2P82qnt0PKsW2yWEtPL-EK7hcLIPkDHbj5Pn0DK1P6yFlBbv_cr3JTUcTx1xQTllo',
    alt: 'a mint green lehenga choli set with silver mirror work embroidery displayed against a neutral luxury backdrop',
  },
  {
    name: 'Marigold Glow Silk Saree',
    price: '₹12,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYBpVuyMORUDx1u-ifOmc69OgdPmJfJh61NKJ8Hz5eQpnbpTIT3WUAbQQXiCOijqxn4WBB9t-lu9oO8hA2JFlNg4P72v5LYIQPp3ECG4Y-TBnjbY1FsNP6OBSjP8njMnzBi5LNskIhZY10sE7_2rAC7Ps7tuJLZMEbS-bFJ-BIwdjaThhKQrCxO6oB7ovlodjnUzgUnF_J1R_qwaYB-YvFXG9pDeAYHVvK98IEl4H1LUwBvBIETl86VjImay5JQSimQhAelkikry-',
    alt: 'vibrant marigold yellow saree with delicate hand painted floral borders draped gracefully',
  },
  {
    name: 'Midnight Star Velvet Gown',
    price: '₹22,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-8_sLu3HrgKu4JzyTJ32NBpR5PNMrf6fB6Tgl_FXwtKkIqG78ZSX74skSPRGi9_gqmWr_-j0nfr4_bGvrtKKgK7Sh8atHDfFO1mGniTnV00NwSoiNPUztfGtvoKEo38tyJ4xEnKv-HJYAb6xaouAKTiutocH0tNwMOLaBZaZwXZkUrGZD7bQoqfxk5JSJwnw2RI14m6DPtemZSxKfe5dm2CTbEyAniPLuf6Qb3d5n5ijfNXb3EGFcboS21GoWXy4gXese8VF6qUPw',
    alt: 'midnight blue floor length gown with sequin embroidery representing a starry night sky',
  },
  {
    name: 'Ivory Pearl Angrakha',
    price: '₹16,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdA5KPmB_y2Z-_etSlQ2NMGySZcGtEL4jYjeVu7JcxiFjkhb-nIJgGzhWIeR8kKcqENHFQ0IwFm4QPrkA9WXk4xchoC7vnl6Xo_8kPFlgOZr3aU0g77FM4Ug4piQyj0qMytdEo9ZYx7eGcrSDOM-MNZQyQJ8bRkAmu33BUcaWcCSNugkOvAyEfBCPTxrbrAJpKNL277Jmo1czWsP_AQTcogry9FqPev9H1DQIlYdcnlxced2qLEoSRODnLAuzSFwAwCOc7gEjn9YlS',
    alt: 'soft ivory silk kurta with tone-on-tone embroidery and pearl embellishments',
  },
];

const RelatedProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-headline italic">You May Also Adore</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-outline-variant rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-8"
      >
        {RELATED_PRODUCTS.map((item) => (
          <Link to={`/product/${encodeURIComponent(item.name.toLowerCase().replace(/ /g, '-'))}`} key={item.name} className="flex-none w-64 md:w-72 space-y-4 group cursor-pointer block">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-lowest relative ring-1 ring-black/5">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.alt}
                src={item.image}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <button className="bg-white/90 backdrop-blur-sm text-primary font-label uppercase text-[10px] tracking-widest px-6 py-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all">
                   Quick Add
                 </button>
              </div>
            </div>
            <div className="px-1">
              <h4 className="text-sm font-medium text-on-surface leading-tight group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              <p className="text-xs font-bold text-primary mt-1">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
