import React from 'react';

const REVIEWS = [
  {
    name: 'Meera Sharma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu11OSc6jM-cScE2OoNwFoVyaYjKt7rtzeipuVQf3w7GDODvI76-QTWK_Ty17aYbuKYuMUt9Fhjgucf8wrfePLfuh_9j6zhp6oXoJOzlipEr0uyiaS0XsJ284t-SP9xovj2iAHYkuUyLl2NyciQcN0OgB1HOj0EnOgAkVA8QQngCfp8tlCElXMPNuzwzXtrTqlAc4aWo3M3tBORZDwsMaw47j5BcVAGgiU6l7O2iPowVxz_cyCIHWjNl0lKq2TALz4SD3WX4U9ejFL',
    review:
      '"The Gulbahar Anarkali exceeded my expectations. The silk has such a premium sheen and the fit is tailored to perfection. Truly felt like royalty at my friend\'s wedding."',
    extraClass: '',
  },
  {
    name: 'Ananya Kapoor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDofYfB6rQIKBaM24PvmU9TdnyLihvIjtcct3OzS3btGMdAJNgsA9N03VpJ4TiOk5nuE9r0bce0oQbjkOGE7PA28GJJKwl9Eh_RSI6qA7NuxLP9N8ybe_EiI1Un-UdnhCjuldwYsfYKz77LfAvjKaftKYrPRNzxWLsmtVO7xr_T96ETVrTt8ddHa9DylUi8c-rHngErCnn4fIZHScI6ou2cK7sbnD9VcrBxKRJrahe5e1BIsKQCXis-jRP-IZUTCREpa95tBvVWpXto',
    review:
      '"Ordering online is always a gamble, but Aapki Pooja made it so smooth. The Chanderi saree is light as air and the color is exactly as pictured. A masterpiece!"',
    extraClass: 'mt-8 md:mt-12',
  },
  {
    name: 'Priya Varma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA248zmBJNXvDCzIThwTUussrJCBw0-QqAKA4v38fpSfpb_tncjux6qTDX5_aPjktHGy0fee3MSNwtS12H4NnA0j33Yt16AOvHhzT4qAFoFSHqx78yQyW5gINGBYw4fQ8No73fuPZERMncYlZZ6hKaViMo25OGcE1dytMh3zI1PTW0bfX8VN0YUL6B2A2x3EJom-WwSv4aqz6e-p_FbbPXxSOlL-dDDdPcJJnEUqUA3SDL8s9NGcNzD4Mpv1cCvE2JGS1RWTo7PkXUM',
    review:
      '"The attention to detail in the embroidery is stunning. I\'ve found my go-to store for every festival. Their delivery was faster than expected too!"',
    extraClass: '',
  },
];

const CustomerLove = () => {
  return (
    <section className="py-28 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-label text-xs tracking-widest uppercase text-outline">
            Our Community
          </span>
          <h2 className="font-headline text-4xl mt-2 italic">Customer Love</h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className={`bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden ${review.extraClass}`}
            >
              {/* Decorative quote */}
              <div className="absolute -top-4 -right-4 text-primary/5 select-none">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '8rem' }}
                >
                  format_quote
                </span>
              </div>

              {/* Reviewer info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt={`portrait of ${review.name}`}
                  src={review.avatar}
                />
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-on-surface-variant">Verified Buyer</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-on-surface-variant leading-relaxed italic">
                {review.review}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLove;
