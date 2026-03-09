import { motion } from "framer-motion";
import fundoStella from "@/assets/fundo_stella.jpg";

const FraseMarcasSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[380px] md:min-h-[780px] flex items-center">
      <img
        src={fundoStella}
        alt="Stella Artois"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="relative z-10 px-8 md:px-16 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading font-extrabold text-xl sm:text-2xl md:text-5xl text-white leading-snug drop-shadow-lg"
        >
          Nosso trabalho é garantir que grandes marcas estejam presentes no dia a dia das comunidades da região.
        </motion.h2>
      </div>
    </section>
  );
};

export default FraseMarcasSection;
