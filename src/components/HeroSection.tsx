import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Revenda Solimões - distribuição de bebidas"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/65" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center gap-4">
        <motion.img
          src={logo}
          alt="Logo Revenda Solimões"
          className="w-40 sm:w-56 md:w-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-8xl leading-tight" style={{ color: "#ff961b" }}>
            Revenda<br />Solimões
          </h1>

        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-sm sm:text-base md:text-2xl"
        >
          Conectando pessoas, abastecendo municípios.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-white font-heading font-bold text-lg sm:text-xl md:text-4xl mt-2 md:mt-4"
        >
          Revenda Ambev
        </motion.p>
      </div>

      <motion.a
        href="#quem-somos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
