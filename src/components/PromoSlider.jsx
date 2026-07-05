import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Impor gambar JPG banner Anda di sini
// Jika belum ada gambarnya, sementara akan menggunakan placeholder gambar otomatis
import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';

export default function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data slide banner
  const slides = [
    {
      id: 1,
      image: banner1,
      fallbackUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop", // Pengiriman barang/mobil
      alt: "Promo Diskon 25% Pengiriman Barang dan Mobil"
    },
    {
      id: 2,
      image: banner2,
      fallbackUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", // Logistik Gudang/Paket
      alt: "Minimum Cash 50kg Free Antar Jemput"
    },
    {
      id: 3,
      image: banner3,
      fallbackUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop", // Ekspedisi kurir
      alt: "Harga Istimewa 30% Pengiriman Kedua"
    }
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Efek Autoplay Slider (Berganti setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-full bg-[#F4F7FC] dark:bg-[#0B132B] py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* CONTAINER SLIDER UTAMA DENGAN RASIO ASPECT 3:1 (Wide Slim) */}
        <div className="relative w-full aspect-[4/1] rounded-2xl overflow-hidden shadow-md group border border-gray-200 dark:border-[#23356F]">
          
          {/* WRAPPER ELEMEN GAMBAR */}
          <div className="w-full h-full relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image || slide.fallbackUrl} // Menggunakan asset lokal, jika kosong pakai url unsplash
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback otomatis jika path gambar .jpg lokal Anda belum disiapkan
                    e.target.src = slide.fallbackUrl;
                  }}
                />
                {/* Overlay Hitam Gradasi Lembut agar teks bawaan gambar atau elemen lain kontras */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* NAVIGASI: PANAH KIRI */}
          <button
            onClick={prevSlide}
            className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-[#111C44]/80 text-[#1F2E4D] dark:text-white border-none cursor-pointer hover:bg-white dark:hover:bg-[#111C44] transition shadow-md items-center justify-center"
          >
            <ChevronLeft size={22} />
          </button>

          {/* NAVIGASI: PANAH KANAN */}
          <button
            onClick={nextSlide}
            className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-[#111C44]/80 text-[#1F2E4D] dark:text-white border-none cursor-pointer hover:bg-white dark:hover:bg-[#111C44] transition shadow-md items-center justify-center"
          >
            <ChevronRight size={22} />
          </button>

          {/* INDIKATOR TITIK (DOTS) DI BAWAH TENGAH BANNER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                  slideIndex === currentIndex 
                    ? 'w-6 bg-[#ED7D31]' 
                    : 'w-2 bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}