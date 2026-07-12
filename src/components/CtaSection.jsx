import React from 'react';
import { CheckCircle } from 'lucide-react';
import kapal from "../assets/kapal.jpg";
import logo from "../assets/logo.png";

export default function CtaSection() {
  const benefits = [
    'Minimum pengiriman 30Kg free ongkir',
    'Diskon cashback s.d 20% bagi member baru',
    'Penjemputan paket gratis ke rumah'
  ];

  const openWhatsapp = (message) => {
    const whatsappNumber = "6281533190347";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-[#F4F7FC] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-slate-950">
      
      {/* Container Utama dengan Background Gambar Kapal + Overlay Gelap */}
      <div 
        className="max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-gray-300/50 dark:shadow-2xl dark:shadow-black/50 text-left bg-cover bg-center"
        style={{
          // Menggabungkan gradasi gelap (overlay) dan gambar kapal agar teks putih tetap kontras dan jelas
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 40%, rgba(15, 23, 42, 0.6) 100%), url(${kapal})`,
        }}
      >
        
        {/* Ornamen Grafis Latar Belakang Lingkaran Orange Lembut */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#ED7D31]/10 pointer-events-none blur-3xl" />

        <div className="max-w-3xl relative z-10">
          {/* Badge */}
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-6 backdrop-blur-sm">
            Mulai Pengiriman Hari Ini
          </span>

          {/* Judul Ajakan */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Siap Kirim Paket Anda Ke <br />
            Seluruh Penjuru Nusantara?
          </h2>

          {/* Deskripsi Singkat */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Hubungi Daksa Jaya Express sekarang juga. Nikmati kemudahan pelacakan resi, solusi logistik terintegrasi, dan pengelolaan pengiriman terpusat yang dipandu langsung oleh tim profesional kami.
          </p>

          {/* List Keunggulan Instan */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle size={16} className="text-[#ED7D31] fill-[#ED7D31]/10 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}