import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import PromoSlider from "../components/PromoSlider";

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

      <section id="CtaSection">
        <CtaSection />
      </section>

      <section id="diskon">
        {/* Component Tarif */}
        {/* <Partners /> */}
        <PromoSlider />
      </section>

      <section id="reviews">
        <Reviews />
      </section>


      <section id="tentang">
        <Footer />
      </section>
      
    </div>
  );
}