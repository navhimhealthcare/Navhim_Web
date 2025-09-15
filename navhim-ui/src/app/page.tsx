import Image from "next/image";
import Hero from "@/components/HeroSection";
import Comitment from "@/pages/comitment";
import StatsSection from "@/pages/StatsSection";
import Services from "@/pages/ServicesSection";
import CircularSection from "@/pages/CircularSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <Comitment />
      <StatsSection />
      <Services />
      <CircularSection />
    </div>
  );
}
