import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#F4F7FC]">
      <Navbar />

      <section id="beranda">
        <Hero />
      </section>

      <section id="layanan">
        <Services />
      </section>

      <section id="tracking">
        <CtaSection />
      </section>

      <section id="tarif">
        {/* Component Tarif */}
        <Partners />
      </section>

      <section id="tentang">
        <Footer />
      </section>
    </div>
  );
}