import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  const benefits = [
    'Tanpa minimal volume pengiriman',
    'Diskon cashback s.d 20% bagi member baru',
    'Penjemputan paket gratis ke rumah'
  ];

  return (
    // 1. Ditambahkan dark:bg-slate-900 agar background luar mengikuti tema gelap
    <section className="w-full bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-slate-900">
      
      {/* Container Utama dengan Background Royal Blue */}
      {/* 2. Mengurangi opacity shadow di mode gelap (dark:shadow-none atau shadow-black/40) agar tidak terlalu berpijar biru */}
      <div className="max-w-7xl mx-auto bg-[#4472C4] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-[#4472C4]/20 dark:shadow-2xl dark:shadow-black/30 text-left">
        
        {/* Ornamen Grafis Latar Belakang Lingkaran (Orange & Putih Transparan) */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#ED7D31]/20 pointer-events-none blur-xl" />
        <div className="absolute top-12 right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          {/* Badge */}
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-6">
            Mulai Pengiriman Hari Ini
          </span>

          {/* Judul Ajakan */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Siap Kirim Paket Anda Ke <br />
            Seluruh Penjuru Nusantara?
          </h2>

          {/* Deskripsi Singkat */}
          {/* 3. Mengubah text-blue-100 menjadi text-blue-50/90 untuk keterbacaan yang lebih solid di layar gelap */}
          <p className="text-sm sm:text-base text-blue-50/90 leading-relaxed mb-8 max-w-2xl">
            Daftar akun Duta Jaya Ekspress gratis sekarang juga. Nikmati kemudahan melacak resi otomatis, integrasi e-commerce, dan pengelolaan manifes logistik terpusat dalam satu dasbor modern.
          </p>

          {/* List Keunggulan Instan */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle size={16} className="text-[#ED7D31] fill-[#ED7D31]/10 flex-shrink-0" />
                <span className="text-xs font-medium text-blue-50">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Grup Tombol Utama */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3.5 bg-[#ED7D31] text-white font-bold text-sm rounded-xl hover:bg-[#d96a20] transition-colors border-none flex items-center gap-2 cursor-pointer shadow-lg shadow-[#ED7D31]/20">
              Daftar Sekarang Gratis
              <ArrowRight size={16} />
            </button>
            
            {/* 4. Mengoptimalkan tombol sekunder agar terlihat menyatu baik di mode terang maupun gelap */}
            <button className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm">
              <PhoneCall size={16} />
              Hubungi Tim Sales B2B
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}