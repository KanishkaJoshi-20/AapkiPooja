import React from 'react';

const CATEGORIES = [
  {
    name: 'Sarees',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoNH7ZTRhKKlmwhzm-P58PaXSS1Phx1KKNXCrefTgZ5J1PvV3pTNEO_R6ZlEG93W85NFdtD2_6sH9mdzXb78HlkEnL5_7lB_LyBtODhYj1TDXtXSL-v_ev4QfthMna3-VP4LGPV7J_8wZCXLuUtnFsmcY-ng1xR4F1rl48Y1yJRsfQ2vsF0nqyGk78O-iI3_Tn9Y_iGegCx3AGEkioKNGHX54kpVjbPVpjdqw64vcIEHo5GKoKSUCYAdGUoDFVgIl13b_V5iQIbe6j',
    alt: 'stunning floral printed saree draped elegantly on a mannequin',
    delay: '0.2s',
  },
  {
    name: 'Lehengas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbLVRmVsIqnnUkVKl6EO4kOJ6QQgfFfQwUW-2EdeJOS1yRHePcxnV27VgTMZyRnhLakcqDoCyPt2na-I_kHpG47ND8v6HVjpOSl3ROy5V805Cx_01biIf2iKVZ4neAkN_KhPVEFENwLECHvJFrakbUeCPk4XTOV2pUqD_I27kA9xoPXtCP8Yzg_NiFGV-okKCtU6t7YzAxmPyyF2AdQu0Gk3zodBGrN_HAAvxoWzXygLWLRr3rLWEixPQKuPwxozmdCb6dfkYBk5fg',
    alt: 'model twirling in a voluminous red ethnic skirt against a white wall',
    delay: '0.3s',
  },
  {
    name: 'Salwar Suits',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkfnW-GDJtXEk1TLPjAcoDOYOf3kOaEm_2S_WYI3qiDv-U0OAtZEGcWLsiTY9t8yTuWyZweqRbtHhgmzQ8KINg6nofzUaVfHeZaNfQsGJTOa5jWluNUKib4IwhkoU4lLwFomftqWP5L1muYsS-SQl80Fdp9a2JElOAo8u_wZahC1vgzhAdp2TLy_VApg54JlVXGZIWT8iLYUbswOM38IEIFahj2egGdyvp7Qi_FMxTFOQU8v1EvSBz3pXko_cUS-zz_G-o53nzuY-6',
    alt: 'detailed close-up of a festive indian suit with intricate gold embroidery',
    delay: '0.4s',
  },
  {
    name: 'Kurti Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_r3GRmfZeowCRuBc4bI2-RcLWjAxDL9PF45j__dki8ylJO-uRrqUkO82QC3iBKmTdSgKLt8CUAxf1W-c1Y0-T5wRNXd_f9le_NNW95Cd_lGPLAooOn6CteRgZZzXrzpO7PpOaWzBocwNQa6vZgAZzw72W6iES11RjpDg2zwsS4CcyPPWSAlRaxNFxbvRe48wUExVZ3FOo62Twu4dvlR1VMMgKAcuSyGoqV2OEJ_3A6dp2GypKTU3hSEAdn7PjDX3a0qTrgdnuDlrE',
    alt: 'model laughing in a bright yellow ethnic dress',
    delay: '0.5s',
  },
  {
    name: 'Indo-Western',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA248zmBJNXvDCzIThwTUussrJCBw0-QqAKA4v38fpSfpb_tncjux6qTDX5_aPjktHGy0fee3MSNwtS12H4NnA0j33Yt16AOvHhzT4qAFoFSHqx78yQyW5gINGBYw4fQ8No73fuPZERMncYlZZ6hKaViMo25OGcE1dytMh3zI1PTW0bfX8VN0YUL6B2A2x3EJom-WwSv4aqz6e-p_FbbPXxSOlL-dDDdPcJJnEUqUA3SDL8s9NGcNzD4Mpv1cCvE2JGS1RWTo7PkXUM',
    alt: 'professional portrait of a woman wearing a modern ethnic fusion outfit',
    delay: '0.6s',
  },
  {
    name: 'Festive Wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-WtPWiI5jOHSSOPMyh-NIhA9UUT3VvmjHQ0svjeUBMERVaWWLdk37k0o7p-10mZyov3E_i7hv7_Hzo_SnZCv1zegpNveVxiUrtVaZ4juJWI34K5ZuqvSHhDgLBuiuXujcszfxs6trWfqYJD_1BmYlIB664fyvp1BYNLQCFxvKwm8-v5-ASi93lHTJBNmjD0da091-4fe02NkbLCiynWGOfZy59Af1vnqgsfJnJGb9lTk0fi8Q4V9M2rUTeVr15kggWRXHrc4RtBnd',
    alt: 'luxury gold jewelry and a festive red garment detail',
    delay: '0.7s',
  },
  {
    name: 'Wedding Collection',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4PfAoXYonqbJyFTYmOgDUHboY_wECUNRpz4YqlhyYxajuX1INGs5QB7hlSX5ywzSiQWdHtKN21BRvAlivz5v3SrO7SL9EBnZgjHGxF3hvtK9vVSURF5e3d00KQxOnE5MDcYGGb6FV40kfAlD_J6yFqJgY3uu6OfhATQSBLRiCsk3eLJrovRXV4doiwSg47NXFaHJDnYElUixAOLTBneByRYdyHfBjFV8rj1RF02WV6MSkiGKcA4HmSMX3PYu1Dk2RgmE45QK6WtAc',
    alt: 'stately woman in a traditional banarasi silk saree of ivory and gold',
    delay: '0.8s',
  },
  {
    name: 'Co-ord Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAs1maaSlz3dVOolRzuoVtDVivy-5FVD8hfkFvthpCVClr1RrTZoq5LwvG6ekRQ9k4ZQaDUJ1kCdDuVdwO5bupm8ISWIF-ZgjUOvGbNF7fGg1mx0361-MyMDRbfPnYnlOTc5YiVmqVVovvegM32n_CnAZYQvK_3hwTtorO8SS4j9lwQdHdW32ROtqW3xHSZFLBJMyWklQxDMl7tsJWz4Xp7Uuclj9AUjphNNvlaiOipja9NQ_FCz0JB2wZmTI0wthWZXn2BuaCkYxU',
    alt: 'soft pink organza suit with floral hand-painted details',
    delay: '0.9s',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-28 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div
        className="flex flex-col md:flex-row gap-12 items-end mb-20 animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="font-headline text-5xl max-w-lg">
          Hand-picked <span className="italic">Curation</span>
        </h2>
        <p className="font-body text-on-surface-variant max-w-md pb-2">
          Discover our diverse range of handcrafted silhouettes designed for the
          modern woman who cherishes heritage.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low animate-fade-in"
            style={{ animationDelay: cat.delay }}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={cat.alt}
              src={cat.image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-headline text-3xl mb-4">{cat.name}</h3>
              <button className="text-xs font-label uppercase tracking-widest border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
