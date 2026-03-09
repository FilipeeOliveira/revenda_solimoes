import { motion } from "framer-motion";
import portfolioImg from "@/assets/portfolio.png";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-section-alt">
      <div className="container-main flex flex-col items-center gap-10">
        <motion.img
          src={portfolioImg}
          alt="Portfólio de marcas Ambev"
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <motion.a
          href="https://www.ambev.com.br/nossas-marcas"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          animate={{ scale: [1, 1.04, 1] }}
          whileTap={{ scale: 0.96 }}
          className="relative font-heading font-bold text-white text-sm md:text-lg tracking-widest uppercase px-6 md:px-12 py-3 md:py-4 rounded-full shadow-lg overflow-hidden hover:scale-110 transition-transform duration-100"
          style={{ backgroundColor: "#ff961b" }}
        >
          <motion.span
            className="absolute inset-0 rounded-full opacity-30"
            style={{ backgroundColor: "#fff" }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          CONHEÇA NOSSO PORTFÓLIO
        </motion.a>
      </div>
    </section>
  );
};

export default PortfolioSection;
