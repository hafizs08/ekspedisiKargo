import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const companyLinks = ['Tentang Kami', 'Lowongan Kerja', 'Kontak Kami', 'Prestasi'];
  const servicesLinks = [
    'Jasa Pindahan Barang Kecil & Besar',
    'Jasa Pindahan Rumah',
    'Jasa Pengiriman Motor & Mobil',
    'Jasa Pengiriman Frozen Food',
    'Jasa Pengiriman Barang Pindahan',
    'Jasa Pengiriman Sewa Unit'
  ];
  const quickLinks = ['Request A Quote', 'Track & Trace', 'Find A Location', 'Help & FAQ'];

  return (
    <footer className="w-full bg-[#1F2E4D] border-t border-[#2A3C5F] pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto">

        {/* BAGIAN UTAMA: GRID FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* KOLOM 1: PROFIL PERUSAHAAN & ALAMAT */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo Duta Jaya Ekspress (Sudah Diperbaiki Struktur Div) */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Duta Jaya Ekspress"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-black tracking-tight text-white">
                DUTA JAYA <span className="text-[#ED7D31]">EKSPRESS</span>
              </span>
            </div>

            {/* Alamat Fisik */}
            <div className="flex gap-3 items-start text-gray-300">
              <MapPin size={18} className="text-[#ED7D31] flex-shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed max-w-sm">
                Jalan Tanjung Bunga No. 49, Kel. Sudirejo II, Kec. Medan Kota, Kota Medan, Sumatera Utara, 20218
              </p>
            </div>

            {/* Nomor Telepon & Email */}
            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#4472C4]" />
                <a href="tel:+6282177813772" className="hover:text-white transition-colors no-underline">+62 821-7781-3772</a>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#4472C4]" />
                <a href="tel:+6285382160110" className="hover:text-white transition-colors no-underline">+62 812-3456-7890</a>
              </div> */}
              <div className="flex items-center gap-3 mt-1">
                <Mail size={14} className="text-[#4472C4]" />
                <a href="mailto:djeexpress104@gmail.com" className="hover:text-white transition-colors no-underline">djeexpress104@gmail.com</a>
              </div>
            </div>
          </div>

          {/* KOLOM 2: COMPANY */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-5 border-l-2 border-[#4472C4] pl-2">
              Company
            </h4>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white no-underline transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: SERVICES */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-5 border-l-2 border-[#ED7D31] pl-2">
              Services
            </h4>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white no-underline transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div className="pt-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Follow Us
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/dutajayaexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2A3C5F] flex items-center justify-center text-gray-300 hover:bg-[#E1306C] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com/dutajayaekspress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2A3C5F] flex items-center justify-center text-gray-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://wa.me/6281281260149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2A3C5F] flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
          {/* KOLOM 4: QUICK LINKS */}
          {/* <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-5 border-l-2 border-[#4472C4] pl-2">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 p-0 m-0 list-none">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-xs text-gray-400 hover:text-white no-underline transition-colors flex items-center gap-1">
                    {link} <ArrowUpRight size={10} className="opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

        </div>

        {/* HAK CIPTA BAWAH */}
        <div className="border-t border-[#2A3C5F] pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Duta Jaya Ekspress. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white no-underline transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white no-underline transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}