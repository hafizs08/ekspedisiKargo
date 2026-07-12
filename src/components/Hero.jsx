import React from 'react';
import { Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../assets/logo.png";



export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (

        // 1. Mengubah background section utama dan menambahkan transisi warna
        <section className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 dark:bg-slate-900">
            <img
                src={logo}
                alt=""
                className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        lg:w-[950px]
        opacity-[0.04]
        dark:opacity-[0.025]
        pointer-events-none
        select-none
        z-0
    "
            />
            {/* Efek Lingkaran Dekoratif Latar Belakang (Disesuaikan opacity-nya di dark mode) */}
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#4472C4]/10 dark:bg-[#4472C4]/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* SISI KIRI: INFORMASI UTAMA */}
                <div className="flex flex-col text-left" className="flex flex-col text-left"
                    data-aos="fade-right">
                    {/* Badge Pengiriman */}
                    <div className="inline-flex items-center gap-2 bg-[#F4F7FC] border border-[#4472C4]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#4472C4] mb-6 w-fit dark:bg-slate-800 dark:border-[#4472C4]/40 dark:text-blue-400">
                        <span className="w-2 h-2 rounded-full bg-[#ED7D31] animate-pulse" />
                        Pengiriman ke 34 Provinsi Indonesia
                    </div>

                    {/* Judul Utama */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1F2E4D] leading-[1.1] tracking-tight mb-6 dark:text-white">
                        Kirim Lebih <br />
                        <span className="text-[#4472C4] dark:text-blue-500">Cepat,</span> <br />
                        <span className="text-[#B0BDD4] dark:text-slate-500">Lebih Aman.</span>
                    </h1>

                    {/* Deskripsi */}
                    <p className="text-sm sm:text-base text-gray-500 max-w-md leading-relaxed mb-8 dark:text-slate-400">
                        Platform ekspedisi modern untuk bisnis dan individu. Lacak pengiriman secara real-time, dapatkan estimasi akurat, dan nikmati layanan pengiriman terbaik di seluruh Indonesia.
                    </p>

                    {/* Tombol Aksi */}
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <button
                            onClick={() => {
                                document.getElementById("layanan")?.scrollIntoView();
                            }}
                            className="px-6 py-3.5 bg-[#4472C4] text-white rounded-xl text-sm font-semibold hover:bg-[#365fa3] transition-colors flex items-center gap-2 cursor-pointer border-none shadow-lg shadow-[#4472C4]/20 dark:bg-blue-600 dark:hover:bg-blue-700">
                            <Package size={18} />
                            Kirim Sekarang
                        </button>
                        <button 
                            onClick={() => {
                                document.getElementById("diskon")?.scrollIntoView();
                            }}
                        className="px-6 py-3.5 bg-white border border-[#D1DCF0] text-gray-700 rounded-xl text-sm font-medium hover:border-[#4472C4] hover:text-[#4472C4] transition-all cursor-pointer flex items-center gap-1 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:text-blue-400 dark:hover:border-blue-500">
                            Lihat Tarif <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Statistik Ringkas */}
                    <div className="flex items-center gap-6 sm:gap-10 border-t border-gray-100 pt-8 dark:border-slate-800">
                        <div>
                            <div className="text-2xl font-extrabold text-[#1F2E4D] dark:text-white">1.4M+</div>
                            <div className="text-xs text-gray-400 mt-1 dark:text-slate-500">Paket Terkirim</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200 dark:bg-slate-800" />
                        <div>
                            <div className="text-2xl font-extrabold text-[#1F2E4D] dark:text-white">99.2%</div>
                            <div className="text-xs text-gray-400 mt-1 dark:text-slate-500">On-Time Delivery</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200 dark:bg-slate-800" />
                        <div>
                            <div className="text-2xl font-extrabold text-[#1F2E4D] dark:text-white">487</div>
                            <div className="text-xs text-gray-400 mt-1 dark:text-slate-500">Kota Terjangkau</div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white border border-[#E8EDF5] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#4472C4]/5 relative dark:bg-slate-800/50 dark:border-slate-800 dark:shadow-black/20 backdrop-blur-sm">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4472C4] to-[#ED7D31] rounded-t-3xl" />

                    <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4 text-left dark:text-slate-500">
                        Lacak Pengiriman
                    </div>

                    <div className="flex gap-2 mb-6">
                        <input
                            type="text"
                            defaultValue=""
                            className="flex-1 bg-[#F4F7FC] border border-[#E8EDF5] rounded-xl px-4 py-3 text-sm text-[#1F2E4D] outline-none focus:border-[#4472C4] transition-colors font-medium dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-blue-500"
                        />
                        <button className="px-5 bg-[#4472C4] text-white text-sm font-semibold rounded-xl hover:bg-[#365fa3] transition-colors border-none cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700">
                            Lacak
                        </button>
                    </div>

                    {/* Informasi Detail Paket */}

                </div>

            </div>
        </section>
    );
}