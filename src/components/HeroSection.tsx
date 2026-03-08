import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Revenda Solimões - distribuição de bebidas"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold font-heading font-semibold text-sm md:text-base tracking-[0.25em] uppercase mb-4"
        >
          Revenda Autorizada Ambev
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          Conectando pessoas,{" "}
          <span className="text-gold">abastecendo municípios.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#quem-somos"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-sm md:text-base"
          >
            Conheça nossa história
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#quem-somos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
