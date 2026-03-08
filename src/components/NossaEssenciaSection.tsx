import { motion } from "framer-motion";
import essenciaBg from "@/assets/essencia-bg.jpg";

const NossaEssenciaSection = () => {
  return (
    <section id="essencia" className="relative py-32 md:py-40 overflow-hidden">
      <img
        src={essenciaBg}
        alt="Rio Solimões - Amazônia"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-hero-overlay/75" />

      <div className="relative z-10 container-main px-4 md:px-8 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            O que nos move
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-8">
            Nossa Essência
          </h2>
          <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed">
            Nosso trabalho é garantir que grandes marcas estejam presentes no dia a dia das comunidades da região. Conectamos pessoas, abastecemos municípios e fortalecemos o comércio local ao longo da calha do Rio Solimões.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NossaEssenciaSection;
