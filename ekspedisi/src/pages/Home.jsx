import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners"; // <-- Tambah import ini
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F4F7FC]">
      <Navbar />
      <Hero />
      <Services />
      <CtaSection />
      <Footer />
    </div>
  );
}