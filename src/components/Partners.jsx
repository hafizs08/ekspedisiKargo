import React from 'react';
import { TicketPercent, ShieldCheck, Award, ChevronRight } from 'lucide-react';

export default function PromoCard() {
  const promos = [
    {
      id: 1,
      icon: <TicketPercent className="text-[#ED7D31] w-6 h-6" />,
      badge: "Diskon Utama",
      title: "Promo Diskon Hingga 25%",
      desc: "Berlaku khusus untuk setiap pengiriman barang logistik skala besar dan unit mobil ke seluruh rute operasional.",
      highlight: "Diskon Up To 25%"
    },
    {
      id: 2,
      icon: <ShieldCheck className="text-[#4472C4] w-6 h-6" />,
      badge: "Free Fasilitas",
      title: "Minimum Charge 50 Kg",
      desc: "Tidak perlu repot ke loket. Cukup penuhi kuota berat minimum, tim kami akan melakukan penjemputan dan pengantaran gratis langsung di lokasi Anda.",
      highlight: "Free Pick-up & Delivery"
    },
    {
      id: 3,
      icon: <Award className="text-purple-500 w-6 h-6" />,
      badge: "Loyalty Customer",
      title: "Harga Istimewa Up To 30%",
      desc: "Apresiasi khusus untuk customer setia DJE Express. Dapatkan potongan harga lebih besar pada transaksi pengiriman kedua Anda.",
      highlight: "Diskon 30% di Order Kedua"
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0B132B] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER PROMO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ED7D31] bg-[#ED7D31]/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Penawaran Terbatas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1F2E4D] dark:text-white tracking-tight">
              Kirim Lebih Hemat Bersama <span className="text-[#4472C4] dark:text-blue-400">DJE Express</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md md:text-right">
            Manfaatkan program diskon eksklusif bulan ini untuk meningkatkan efisiensi biaya logistik bisnis dan personal Anda.
          </p>
        </div>

        {/* GRID KARTU PROMO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div 
              key={promo.id} 
              className="bg-[#F4F7FC] dark:bg-[#111C44] border border-[#E8EDF5] dark:border-[#23356F] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group hover:border-[#ED7D31]/40 hover:shadow-lg hover:shadow-[#ED7D31]/5 transition-all duration-300"
            >
              {/* Garis Potongan Kupon Minimalis */}
              <div className="absolute top-0 right-10 w-4 h-2 bg-white dark:bg-[#0B132B] rounded-b-full"></div>
              
              <div>
                {/* Atas: Ikon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white dark:bg-[#1C2A5E] rounded-xl shadow-sm border border-gray-100 dark:border-transparent">
                    {promo.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white dark:bg-[#1C2A5E] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-transparent">
                    {promo.badge}
                  </span>
                </div>

                {/* Tengah: Judul & Deskripsi */}
                <h3 className="text-lg font-bold text-[#1F2E4D] dark:text-white mb-2 group-hover:text-[#ED7D31] transition-colors">
                  {promo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {promo.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-[#23356F] flex items-center justify-between">
                <span className="text-xs font-bold text-[#ED7D31] bg-[#ED7D31]/10 px-2.5 py-1 rounded-md">
                  {promo.highlight}
                </span>
                <button className="text-xs font-semibold text-[#4472C4] dark:text-blue-400 flex items-center gap-1 bg-transparent border-none cursor-pointer hover:underline p-0">
                  Ambil Promo <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE (S&K) */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            * Syarat & Ketentuan berlaku untuk seluruh program promo di atas. Hubungi admin via WhatsApp untuk detail kuota klaim.
          </p>
        </div>

      </div>
    </section>
  );
}