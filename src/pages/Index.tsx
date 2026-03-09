import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import NossaEssenciaSection from "@/components/NossaEssenciaSection";
import FraseMarcasSection from "@/components/FraseMarcasSection";
import PortfolioSection from "@/components/PortfolioSection";
import PrincipiosBannerSection from "@/components/PrincipiosBannerSection";
import FiliaisSection from "@/components/FiliaisSection";
import ContatoSection from "@/components/ContatoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <QuemSomosSection />
      <NossaEssenciaSection />
      <FraseMarcasSection />
      <PrincipiosBannerSection />
      <PortfolioSection />
      <FiliaisSection />
      <ContatoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
