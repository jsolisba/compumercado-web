import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import Technologies from "@/components/home/Technologies";
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
        <Technologies />
        <WhyCompuMercado />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
