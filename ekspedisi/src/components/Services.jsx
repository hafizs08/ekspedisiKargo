import React from "react";
import {
  Truck,
  Car,
  PawPrint,
  Snowflake,
  House,
  Warehouse,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  
  const whatsappNumber = "6281533190347"; // Ganti dengan nomor telepon Anda

  const servicesList = [
    {
      icon: <Truck size={28} />,
      title: "Barang Kecil & Besar",
      desc: "Melayani pengiriman berbagai jenis barang mulai dari paket kecil hingga muatan besar ke seluruh Indonesia dengan tarif kompetitif.",
      badge: "Populer",
      color: "#ED7D31",
      message: `Halo Admin.

Saya ingin berkonsultasi mengenai layanan:

 Barang Kecil & Besar

Mohon informasi mengenai:
• Tarif Pengiriman
• Estimasi Waktu
• Syarat Pengiriman

Terima kasih.`,
    },
    {
      icon: <Car size={28} />,
      title: "Motor & Mobil",
      desc: "Pengiriman kendaraan roda dua maupun roda empat dengan proses yang aman, cepat, dan dilengkapi perlindungan.",
      badge: "Aman",
      color: "#4472C4",
      message: `Halo Admin.

Saya ingin berkonsultasi mengenai layanan:

 Motor & Mobil

Mohon informasi mengenai:
• Tarif Pengiriman
• Estimasi Waktu
• Persyaratan Pengiriman Kendaraan

Terima kasih.`,
    },
    {
      icon: <PawPrint size={28} />,
      title: "Hewan",
      desc: "Layanan pengiriman hewan peliharaan dengan penanganan khusus agar tetap nyaman dan sehat selama perjalanan.",
      badge: "Special",
      color: "#16A34A",
      message: `Halo Admin.

Saya ingin berkonsultasi mengenai layanan:

 Pengiriman Hewan

Mohon informasi mengenai:
• Tarif
• Persyaratan
• Ketentuan Pengiriman

Terima kasih.`,
    },
    {
      icon: <Snowflake size={28} />,
      title: "Frozen Food",
      desc: "Pengiriman makanan beku menggunakan armada berpendingin sehingga kualitas produk tetap terjaga hingga tujuan.",
      badge: "Cold Chain",
      color: "#06B6D4",
      message: `Halo Admin 

Saya ingin berkonsultasi mengenai layanan:

 Frozen Food

Mohon informasi mengenai:
• Tarif
• Estimasi Pengiriman
• Ketentuan Cold Chain

Terima kasih.`,
    },
    {
      icon: <House size={28} />,
      title: "Barang Pindahan",
      desc: "Melayani pindahan rumah, apartemen, kantor, hingga gudang dengan proses packing dan pengangkutan yang aman.",
      badge: "Relokasi",
      color: "#8B5CF6",
      message: `Halo Admin.

Saya ingin berkonsultasi mengenai layanan:

 Barang Pindahan

Mohon informasi mengenai:
• Tarif
• Survey Lokasi
• Packing & Bongkar Muat

Terima kasih.`,
    },
    {
      icon: <Warehouse size={28} />,
      title: "Sewa Unit",
      desc: "Tersedia armada Pickup, CDD, Fuso, Tronton hingga Trailer yang dapat disewa sesuai kebutuhan pengiriman Anda.",
      badge: "Rental",
      color: "#F59E0B",
      message: `Halo Admin

Saya ingin berkonsultasi mengenai layanan:

Tech/Sewa Unit

Mohon informasi mengenai:
• Jenis Armada
• Tarif Sewa
• Ketersediaan Unit

Terima kasih.`,
    },
  ];

  const openWhatsapp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    // 1. Ditambahkan warna latar belakang mode gelap (dark:bg-slate-900)
    <section className="bg-[#F4F7FC] py-20 px-5 transition-colors duration-300 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          {/* Menyesuaikan kecerahan teks aksen biru di mode gelap */}
          <p className="text-sm font-bold uppercase tracking-[3px] text-[#4472C4] mb-3 dark:text-blue-400">
            Layanan Kami
          </p>

          {/* Menambahkan warna putih untuk judul utama (dark:text-white) */}
          <h2 className="text-3xl md:text-5xl font-black text-[#1F2E4D] leading-tight dark:text-white">
            Solusi Pengiriman untuk
            <br />
            Semua Kebutuhan
          </h2>

          {/* Menyesuaikan warna deskripsi teks (dark:text-slate-400) */}
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
              // 2. Mengubah background kartu menjadi abu-abu gelap (dark:bg-slate-800) & menyesuaikan border serta bayangan hover
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col dark:bg-slate-800 dark:border-slate-700/60 dark:hover:shadow-black/30"
            >
              <div className="flex justify-between items-start mb-7">
                {/* 3. Menjaga background icon bawaan menggunakan opacity hex (15) namun menguranginya sedikit saat dark mode jika diperlukan */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors"
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

              {/* Menyesuaikan warna judul kartu (dark:text-slate-100) dan teks hover biru */}
              <h3 className="text-xl font-bold text-[#1F2E4D] mb-4 group-hover:text-[#4472C4] dark:text-slate-100 dark:group-hover:text-blue-400 transition">
                {service.title}
              </h3>

              {/* Menyesuaikan warna teks isi kartu */}
              <p className="text-gray-500 leading-7 text-sm flex-1 dark:text-slate-400">
                {service.desc}
              </p>

              <button
                onClick={() => openWhatsapp(service.message)}
                className="mt-8 flex items-center gap-2 font-semibold transition cursor-pointer brightness-100 dark:brightness-110"
                style={{ color: service.color }}
              >
                Selengkapnya
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>

        {/* CTA (Call To Action) */}
        {/* 4. Mengubah background kontainer bawah (dark:bg-slate-800) dan bordernya */}
        <div className="mt-16 bg-white rounded-3xl border border-gray-200 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 dark:bg-slate-800 dark:border-slate-700/60">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Menyesuaikan warna lingkaran background icon gudang */}
            <div className="w-16 h-16 rounded-full bg-[#4472C4]/10 flex items-center justify-center flex-shrink-0 dark:bg-blue-500/10">
              <Warehouse size={30} className="text-[#4472C4] dark:text-blue-400" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F2E4D] dark:text-slate-100">
                Butuh Armada atau Pengiriman Khusus?
              </h3>

              <p className="text-gray-500 mt-2 dark:text-slate-400">
                Tim kami siap membantu kebutuhan logistik perusahaan maupun
                individu dengan solusi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              openWhatsapp(`Halo Admin 👋

Saya ingin berkonsultasi mengenai layanan logistik untuk perusahaan saya.

Mohon informasi lebih lanjut.

Terima kasih.`)
            }
            // Menyesuaikan warna tombol utama saat hover di mode gelap
            className="bg-[#4472C4] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#355fb0] dark:bg-blue-600 dark:hover:bg-blue-500 transition whitespace-nowrap w-full lg:w-auto text-center"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}