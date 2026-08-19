import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import WhyCompuMercado from "@/components/home/WhyCompuMercado";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyCompuMercado />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
