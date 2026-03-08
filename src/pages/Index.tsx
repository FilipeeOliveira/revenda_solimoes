import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import NossaEssenciaSection from "@/components/NossaEssenciaSection";
import PortfolioSection from "@/components/PortfolioSection";
import PrincipiosSection from "@/components/PrincipiosSection";
import FiliaisSection from "@/components/FiliaisSection";
import InstagramSection from "@/components/InstagramSection";
import ContatoSection from "@/components/ContatoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuemSomosSection />
      <NossaEssenciaSection />
      <PortfolioSection />
      <PrincipiosSection />
      <FiliaisSection />
      <InstagramSection />
      <ContatoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
