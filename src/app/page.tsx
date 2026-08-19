import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
      </main>
    </>
  );
}
