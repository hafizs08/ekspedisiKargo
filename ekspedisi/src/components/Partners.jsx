import React from 'react';
import { ShieldCheck, Award, Users, Globe2 } from 'lucide-react';

export default function Partners() {
  // Simulasi data partner/klien logistik terkemuka
  const partners = [
    { name: 'Shopee Logistics', industry: 'E-Commerce' },
    { name: 'Tokopedia', industry: 'E-Commerce' },
    { name: 'Lazada Logistics', industry: 'E-Commerce' },
    { name: 'Bukalapak', industry: 'E-Commerce' },
    { name: 'Blibli Pro', industry: 'E-Commerce' },
    { name: 'TikTok Shop', industry: 'Social Commerce' }
  ];

  return (
    // 1. Ditambahkan bg utama dark mode & penyesuaian warna border pembatas section
    <section className="w-full bg-white border-t border-b border-[#E8EDF5] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4472C4] mb-2 dark:text-blue-400">
            Kepercayaan Global
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2E4D] tracking-tight dark:text-white">
            Telah Dipercaya oleh Jutaan Bisnis & Marketplace Terbesar
          </h2>
        </div>

        {/* GRID LOGO PARTNER */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-75 dark:opacity-90">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              // 2. Mengubah background & border kartu logo tiruan saat dark mode aktif
              className="w-full max-w-[160px] bg-[#F4F7FC] hover:bg-[#4472C4]/5 border border-[#E8EDF5] hover:border-[#4472C4]/30 rounded-xl px-4 py-4 flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer dark:bg-slate-800/40 dark:border-slate-800 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/5"
            >
              {/* Teks Pengganti Logo Gambar - Efek Monokrom Finansial */}
              <span className="text-sm font-black tracking-tight text-[#8A99AD] group-hover:text-[#4472C4] transition-colors duration-200 dark:text-slate-400 dark:group-hover:text-blue-400">
                {partner.name.split(' ')[0]}
                <span className="text-[#ED7D31] opacity-60 group-hover:opacity-100 dark:text-orange-400">
                  {partner.name.split(' ')[1] ? ' ' + partner.name.split(' ')[1] : ''}
                </span>
              </span>
              <span className="text-[9px] font-medium text-[#B0BDD4] mt-1 uppercase tracking-wider dark:text-slate-500">
                {partner.industry}
              </span>
            </div>
          ))}
        </div>

        {/* 3 VALUE UTAMA DI BAWAH LOGO */}
        {/* 3. Menyesuaikan border-t penutup grid atas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-100 dark:border-slate-800">
          
          <div className="flex gap-4 items-start text-left">
            {/* 4. Mengoptimalkan background kontainer icon agar lebih soft di layar gelap */}
            <div className="w-10 h-10 rounded-xl bg-[#4472C4]/10 flex items-center justify-center text-[#4472C4] flex-shrink-0 dark:bg-blue-500/10 dark:text-blue-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F2E4D] dark:text-slate-200">Garansi Aman & Berasuransi</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed dark:text-slate-400">Setiap pengiriman diproteksi penuh perlindungan asuransi kargo standar internasional.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start text-left">
            <div className="w-10 h-10 rounded-xl bg-[#ED7D31]/10 flex items-center justify-center text-[#ED7D31] flex-shrink-0 dark:bg-orange-500/10 dark:text-orange-400">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F2E4D] dark:text-slate-200">Kepatuhan Regulasi Resmi</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed dark:text-slate-400">Berlisensi resmi Asosiasi Perusahaan Jasa Pengiriman Ekspres Indonesia (ASPERINDO).</p>
            </div>
          </div>

          <div className="flex gap-4 items-start text-left">
            <div className="w-10 h-10 rounded-xl bg-[#4472C4]/10 flex items-center justify-center text-[#4472C4] flex-shrink-0 dark:bg-blue-500/10 dark:text-blue-400">
              <Globe2 size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F2E4D] dark:text-slate-200">Integrasi API Multiplatform</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed dark:text-slate-400">Hubungkan sistem inventaris toko online Anda secara otomatis lewat dokumentasi API kami.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}