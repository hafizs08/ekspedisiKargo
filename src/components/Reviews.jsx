import React from 'react';
import { Star, Quote, User } from 'lucide-react';

export default function Reviews() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik Toko Online",
      service: "Kargo Darat",
      comment: "Pengiriman mesin pabrik dari Jakarta ke Medan tepat waktu. Harganya jauh lebih murah dibanding ekspedisi lain, dan update resinya sangat transparan. Sangat direkomendasikan!",
      rating: 4,
      initials: "BS"
    },
    {
      id: 2,
      name: "Siti Rahma",
      role: "UMKM Fashion",
      service: "Ekspres Reguler",
      comment: "Layanan jemput paketnya (*pick-up*) ngebantu banget buat saya yang jualan dari rumah. Kurirnya ramah dan paket baju jualan saya selalu sampai dalam kondisi rapi tanpa cacat.",
      rating: 5,
      initials: "SR"
    },
    {
      id: 3,
      name: "Hendrawan",
      role: "Distributor Elektronik",
      service: "Sewa Truk (FTL)",
      comment: "Sudah langganan lebih dari 2 tahun untuk distribusi barang elektronik antar kota. Manajemen komplainnya cepat tanggap kalau ada kendala di jalan. Mitra bisnis yang sangat andal.",
      rating: 5,
      initials: "HW"
    }
  ];

  return (
    <section className="w-full bg-[#F4F7FC] dark:bg-[#0B132B] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SEKSYEN */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4472C4] bg-[#4472C4]/10 dark:bg-[#4472C4]/20 px-3 py-1.5 rounded-full inline-block mb-3">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1F2E4D] dark:text-white mb-4 tracking-tight">
            Apa Kata Mereka Tentang <span className="text-[#ED7D31]">Layanan Kami</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Kepercayaan Anda adalah prioritas kami. Berikut adalah pengalaman nyata dari para pelaku usaha dan pelanggan setia Daksa Jaya Express.
          </p>
        </div>

        {/* GRID KARTU REVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review) => (
            <div 
              key={review.id}
              className="bg-white dark:bg-[#111C44] border border-[#E8EDF5] dark:border-[#23356F] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Dekorasi Ikon Kutip Transparan di Pojok */}
              <Quote className="absolute right-4 top-4 text-gray-100 dark:text-gray-800 w-16 h-16 pointer-events-none transform translate-x-2 -translate-y-2 group-hover:text-gray-200 dark:group-hover:text-[#1c2a5e] transition-colors" />

              <div>
                {/* Rating Bintang */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#ED7D31] text-[#ED7D31]" />
                  ))}
                </div>

                {/* Isi Komentar */}
                <p className="text-gray-700 dark:text-gray-300 text-[14px] leading-relaxed mb-6 italic relative z-10">
                  "{review.comment}"
                </p>
              </div>

              {/* Info User di Bagian Bawah Kartu */}
              <div className="border-t border-gray-100 dark:border-[#23356F] pt-4 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  {/* Avatar Lingkaran */}
                  <div className="w-10 h-10 rounded-full bg-[#4472C4]/10 dark:bg-[#4472C4]/20 text-[#4472C4] dark:text-blue-400 font-bold text-sm flex items-center justify-center border border-[#4472C4]/20">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2E4D] dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Badge Tipe Layanan */}
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-[#1C2A5E] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-transparent">
                  {review.service}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}