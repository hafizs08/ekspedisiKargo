import React from "react";
import {
  Truck,
  Car,
  PawPrint,
  Snowflake,
  House,
  Warehouse,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  const whatsappNumber = "6281533190347";

  const servicesList = [
    {
      icon: <Truck size={28} />,
      title: "Barang Kecil & Besar",
      desc: "Melayani pengiriman berbagai jenis barang mulai dari paket kecil hingga muatan besar ke seluruh Indonesia dengan tarif kompetitif.",
      badge: "Populer",
      color: "#ED7D31",
      message: `Halo Admin.\n\nSaya ingin berkonsultasi mengenai layanan:\n\n Barang Kecil & Besar\n\nMohon informasi mengenai:\n• Tarif Pengiriman\n• Estimasi Waktu\n• Syarat Pengiriman\n\nTerima kasih.`,
    },
    {
      icon: <Car size={28} />,
      title: "Motor & Mobil",
      desc: "Pengiriman kendaraan roda dua maupun roda empat dengan proses yang aman, cepat, dan dilengkapi perlindungan.",
      badge: "Aman",
      color: "#4472C4",
      message: `Halo Admin.\n\nSaya ingin berkonsultasi mengenai layanan:\n\n Motor & Mobil\n\nMohon informasi mengenai:\n• Tarif Pengiriman\n• Estimasi Waktu\n• Persyaratan Pengiriman Kendaraan\n\nTerima kasih.`,
    },
    {
      icon: <PawPrint size={28} />,
      title: "Hewan",
      desc: "Layanan pengiriman hewan peliharaan dengan penanganan khusus agar tetap nyaman dan sehat selama perjalanan.",
      badge: "Special",
      color: "#16A34A",
      message: `Halo Admin.\n\nSaya ingin berkonsultasi mengenai layanan:\n\n Pengiriman Hewan\n\nMohon informasi mengenai:\n• Tarif\n• Persyaratan\n• Ketentuan Pengiriman\n\nTerima kasih.`,
    },
    {
      icon: <Snowflake size={28} />,
      title: "Frozen Food",
      desc: "Pengiriman makanan beku menggunakan armada berpendingin sehingga kualitas produk tetap terjaga hingga tujuan.",
      badge: "Cold Chain",
      color: "#06B6D4",
      message: `Halo Admin \n\nSaya ingin berkonsultasi mengenai layanan:\n\n Frozen Food\n\nMohon informasi mengenai:\n• Tarif\n• Estimasi Pengiriman\n• Ketentuan Cold Chain\n\nTerima kasih.`,
    },
    {
      icon: <House size={28} />,
      title: "Barang Pindahan",
      desc: "Melayani pindahan rumah, apartemen, kantor, hingga gudang dengan proses packing dan pengangkutan yang aman.",
      badge: "Relokasi",
      color: "#8B5CF6",
      message: `Halo Admin.\n\nSaya ingin berkonsultasi mengenai layanan:\n\n Barang Pindahan\n\nMohon informasi mengenai:\n• Tarif\n• Survey Lokasi\n• Packing & Bongkar Muat\n\nTerima kasih.`,
    },
    {
      icon: <Warehouse size={28} />,
      title: "Sewa Unit",
      desc: "Tersedia armada Pickup, CDD, Fuso, Tronton hingga Trailer yang dapat disewa sesuai kebutuhan pengiriman Anda.",
      badge: "Rental",
      color: "#F59E0B",
      message: `Halo Admin\n\nSaya ingin berkonsultasi mengenai layanan:\n\nTech/Sewa Unit\n\nMohon informasi mengenai:\n• Jenis Armada\n• Tarif Sewa\n• Ketersediaan Unit\n\nTerima kasih.`,
    },
  ];

  const openWhatsapp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="bg-[#F4F7FC] py-20 px-5 transition-colors duration-300 dark:bg-slate-950 relative overflow-hidden"
      style={{
        // Menggunakan Variabel CSS yang disuplai dari global CSS (Bisa deteksi dark mode v4)
        backgroundImage: `
          linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[3px] text-[#4472C4] mb-3 dark:text-blue-400">
            Layanan Kami
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-[#1F2E4D] leading-tight dark:text-white">
            Solusi Pengiriman untuk
            <br />
            Semua Kebutuhan
          </h2>

          <p className="mt-5 text-gray-500 leading-7 dark:text-slate-400">
            Kami menyediakan berbagai layanan ekspedisi mulai dari pengiriman
            paket, kendaraan, hewan, frozen food hingga penyewaan armada untuk
            kebutuhan pribadi maupun bisnis.
          </p>
        </div>

        {/* Card Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200/80 p-8 bg-white dark:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-300/30 dark:hover:shadow-none transition-all duration-300 flex flex-col dark:border-slate-800"
            >
              {/* Background Glow */}
              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-10 dark:opacity-15 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-7">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1F2E4D] dark:text-slate-100 mb-4 group-hover:text-[#4472C4] dark:group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-500 dark:text-slate-400 leading-7 text-sm flex-1">
                  {service.desc}
                </p>

                <button
                  onClick={() => openWhatsapp(service.message)}
                  className="mt-8 flex items-center gap-2 font-semibold transition"
                  style={{ color: service.color }}
                >
                  Tanya Sekarang
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (Call To Action) */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#4472C4]/10 flex items-center justify-center flex-shrink-0 dark:bg-blue-500/10">
              <Warehouse size={30} className="text-[#4472C4] dark:text-blue-400" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F2E4D] dark:text-slate-100">
                Butuh Bantuan Dan Pertanyaan Khusus ?
              </h3>

              <p className="text-gray-500 mt-2 dark:text-slate-400">
                Tim kami siap membantu kebutuhan logistik perusahaan maupun
                individu dengan solusi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              openWhatsapp(`Halo Admin\n\nSaya ingin berkonsultasi mengenai layanan logistik untuk perusahaan saya.\n\nMohon informasi lebih lanjut.\n\nTerima kasih.`)
            }
            className="bg-[#4472C4] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#ED7D31] dark:bg-blue-600 dark:hover:bg-[#ED7D31] transition flex items-center justify-center gap-2.5 whitespace-nowrap w-full lg:w-auto text-center"
          >
            {/* Logo Resmi WhatsApp Menggunakan SVG Inline */}
            <FaWhatsapp className="w-5 h-5" />
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}