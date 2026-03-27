import React from 'react';

const REVIEWS = [
  {
    author: 'Ananya K.',
    initials: 'AK',
    rating: 5,
    text: '"The silk is absolutely ethereal. I wore this for my brother\'s wedding and received endless compliments."',
  },
  {
    author: 'Priya R.',
    initials: 'PR',
    rating: 5,
    text: '"Perfect fit and the hand embroidery is so detailed. Better than the photos!"',
  },
  {
    author: 'Sonia M.',
    initials: 'SM',
    rating: 4,
    text: '"Stunning outfit. Shipping was fast and the packaging was very premium."',
  },
];

const ReviewsPreview = () => {
  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-headline italic">Customer Whispers</h3>
        <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8 transition-all">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-1 text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-xs"
                  style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="text-sm font-medium mb-4 italic leading-relaxed text-on-surface-variant">
              {review.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full silk-gradient flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                {review.initials}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                {review.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsPreview;
