import React from 'react';

const FEED_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_r3GRmfZeowCRuBc4bI2-RcLWjAxDL9PF45j__dki8ylJO-uRrqUkO82QC3iBKmTdSgKLt8CUAxf1W-c1Y0-T5wRNXd_f9le_NNW95Cd_lGPLAooOn6CteRgZZzXrzpO7PpOaWzBocwNQa6vZgAZzw72W6iES11RjpDg2zwsS4CcyPPWSAlRaxNFxbvRe48wUExVZ3FOo62Twu4dvlR1VMMgKAcuSyGoqV2OEJ_3A6dp2GypKTU3hSEAdn7PjDX3a0qTrgdnuDlrE',
    alt: 'instagram post',
    icon: 'photo_camera',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB5Cv8qXxW2oHEQvPLhFtpuDFx-4sV_Es8gdgDsFc3_dzuaxSnQ4l8CY61YRoqxUXtLkCE2QFyXm_snv3rXyH7CIBNBRdNCfJSjfAURYELaXlvkfOvteOPaSYSRUkSPyz5jHe14V62iHnjtev83Fc-Bb2C06UTEuQjBOhcrIVyhYUmibcrnA_IdDiwdIaxph8ac8m3grPiobXJpeA61nJJK2pSq3Zh9hXR7ZlPxpD4gNCYbY-57E5xZUbKnSFQcx6N_hpF-o9qzlez',
    alt: 'instagram lifestyle shot',
    icon: 'favorite',
    iconFill: true,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr_qOK1GdZuVhwHVFOpzyFTXKbRwl9fUF6ZnmbLL4oVkLugQUoq7ZA9OxHXfvLBma8ccgJlO_KGLNvhr9x5vx4zzm7PWWe8AR_5bKnNoVj1m6FpotIrWhKS-bSM6vEOooGBb12mBhHq5QGwbOrBYsgXaI0Qxewcp9cUOz_vMuLZVXsJjFJSxaj04qOLRpgGf_pNWn5gGF0jYzhaQ_q717nUTKObL2nn7XfIyWZuTkZ2YH7oXLi8br66X-yT4Cpr3nGXaAew7XeG9VB',
    alt: 'close up of intricate embroidery work',
    icon: 'photo_camera',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbLVRmVsIqnnUkVKl6EO4kOJ6QQgfFfQwUW-2EdeJOS1yRHePcxnV27VgTMZyRnhLakcqDoCyPt2na-I_kHpG47ND8v6HVjpOSl3ROy5V805Cx_01biIf2iKVZ4neAkN_KhPVEFENwLECHvJFrakbUeCPk4XTOV2pUqD_I27kA9xoPXtCP8Yzg_NiFGV-okKCtU6t7YzAxmPyyF2AdQu0Gk3zodBGrN_HAAvxoWzXygLWLRr3rLWEixPQKuPwxozmdCb6dfkYBk5fg',
    alt: 'model twirling in a voluminous red ethnic skirt',
    icon: 'photo_camera',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7G-do2sItrwaLPHfTfANXxonpxNs0e0EGpmjdTJyn6rOqx2Hod0cqRJvV5LhfIaJ0F82pJh9HbLMFAL_9hsNlSQtsPs3pLuZJ-HGf4s67iQPFRgJCutfXcXnvK6-YQyubPQvRmZ0hQOB7qyl-FRplv8S42Xpix-x8rW3RuohRd3cTd_sSJ-lPaHq11wZ0A-sx4LWfDJvbXYb3495b0q33nPV0BHNPJ0m83ngi5ccVGvHOIdJHcbI53ZdZcSB-1J-lCe_4nxKcmP-q',
    alt: 'artistic shot of ethnic wear',
    icon: 'photo_camera',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-28 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl italic">@AapkiPoojaOnInstagram</h2>
        <p className="text-on-surface-variant mt-2">
          Tag us to get featured in our silk story
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {FEED_IMAGES.map((item, index) => (
          <div
            key={index}
            className="aspect-square group relative overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-full object-cover"
              alt={item.alt}
              src={item.src}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-3xl"
                style={
                  item.iconFill
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {item.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
