import React from 'react';

const ImageGallery = () => {
  return (
    <div className="lg:col-span-7 grid grid-cols-12 gap-4">
      {/* Thumbnails Desktop */}
      <div className="hidden md:flex flex-col gap-4 col-span-2">
        <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden cursor-pointer ring-1 ring-primary">
          <img
            className="w-full h-full object-cover"
            alt="close up detail of soft pink silk fabric with intricate gold hand embroidery and floral patterns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDue--JCN7WcyoTBfYRpjMEr9noeJqw59qVe56VuenE63J1IMK2PYYdUfHpHqBy0nW6veX1DJqkXoPFjsW6-KHQCX8MNumuy7Bd4l3WowlxW9N-g-N_KlF7hMeDgvKwU-KZzz9n693uTm7swZnUptnO5JpcWZRQ8ziQmqucl7LICegBoI9tkisa-G1CuT5FJSq4wjtGMYuXp13Ee3BT2QZKSAaGOXTop0BfiTB19NSXUoTnaIpEb4cMLEm8oLl67Z35Gf8v7Vl1nkDp"
          />
        </div>
        <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden cursor-pointer hover:ring-1 hover:ring-outline-variant transition-all">
          <img
            className="w-full h-full object-cover"
            alt="full length view of an elegant woman wearing a soft pink hand embroidered silk anarkali dress in a bright airy studio"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBldAIXH15WY9weLETl-OUh-u-3yBZay9LCPpcK5P_7_7DgemWSQEBLTE6uR6yPACTZRmzDFV_ne28f8QjR2ym68SDbWtB7P9swLZIa1Chjsrm5WWUEkyRoM32HK4x98ATCWMqypug7d30buumwiHLjTT-5S1JLO9h2n8smVMQwlhDkVqO5Jo7VzHD8F-F9gmxxABM61s47zrgQGOikg2hZdHKRSeEFaEzl8g19iGkAyzO0gBXzzVm0mHdAHwVCDIzg9QCz6kgaAMV"
          />
        </div>
        <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden cursor-pointer hover:ring-1 hover:ring-outline-variant transition-all">
          <img
            className="w-full h-full object-cover"
            alt="back profile view of a luxury ethnic gown showing detailed gold embroidery on the shoulders and soft fabric drape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLD8xaTkm-g8n8UojQey2nkPIz3idZGWgYjro-4Hx_Snw8kn9bHhfLrCO3yps7HLpynVvWlAZ66x8YxOlxSuHPQVrHvMd7zeG1R6PYdvwdgwYnRYy9FHG_eMkJJV6wdRheqxqtkR9NIpWdVVNsc_R78VhR0661dUUj3j1jtGdNrVrfbgzV1W1wZfB7UP-cNCZocgYjOt6pWxdyMEuGfeQag8_Uh6nWU3HJu9o9ZVEmTlJqQHPLBcWjECbuiV_H0PpT5Y--URU0lkLW"
          />
        </div>
      </div>

      {/* Main Display Image */}
      <div className="col-span-12 md:col-span-10 group relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="high resolution editorial shot of a luxurious rose petal pink silk anarkali set with shimmering gold zardosi embroidery"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBjFY4m8DQI_iD6FldljkBezh-kby-9evC2u82HjvJy-WfRyHWQ32HCGsL7H_FcDflUhzSWHWbdriWczyr9Y5rCEUMp1a93BiC2MoOP0y1sY5rrUZyxRJOJDirWuMwy13sI6LPMkYXNyDOvO32P_KPE2_fc0CONXKdU929M67Jto5TWXWRjYnL6jJbWeHtBdnaMiZNercJtzxJicfIVReMcpi4LIdngD0Z8Juu24nsKqU-SLvvreD50U8CsVjZ1dLaudGaR2bMz2Qq"
        />
        <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-sm p-3 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-primary">zoom_in</span>
        </div>
      </div>

      {/* Thumbnails Mobile */}
      <div className="col-span-12 flex md:hidden gap-3 overflow-x-auto hide-scrollbar py-2">
        <div className="flex-none w-20 aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden ring-1 ring-primary">
          <img
            className="w-full h-full object-cover"
            alt="detail thumbnail of rose pink fabric"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwiMfIYRgecOKbrlB5z7ICasLRA6aT7V87MsBWc81P7OylBHUq_OTl3zqWCqikpgZdADAZpuggFT1gqZcNp8QKAUjnz52SHsEhPLMovoWaXl8dfVBQoxK-WzGA0m07Y_OXLXyXa_AVpgI_Y807jdyE2smUELW-LHbmLyo-hiLbeEhfFGFdk45XradCu-AfWFZLef2UIHdDCKRAaLzdtZ8eVC5W9JlkP38rh4GvoYxK7aOtX5WWASDqyRK_AQ8VgaTwYlviItOpvEIo"
          />
        </div>
        <div className="flex-none w-20 aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="model thumbnail view"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDmz6O4t4oMsusBM-ePzTl2ZSUAStTqHVHusqQr7kdvns-KKKcdVPVtbguvwrnMcSkJrrcGCA_RZyxQ6YMtslbUxQaTHXdtnL_2aV5KYhK4LmFdBVR4jRuH18WdjS5BPycP4e-x4gbjhPHjgL-Xv2RMXeHbvUa9QuG80MoamCUkGcTsRFjGrhVdhQGmCN-fe3XW6moayD-zogazQ-msE2in79HPKhQK9j71liY8jbdCbpRbBq2ciE_mhI0AcbL5YgZzWPROgAtM_iM"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
