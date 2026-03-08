import { motion } from "framer-motion";
import { Beer } from "lucide-react";

const brands = [
  { name: "Brahma", color: "0 70% 45%" },
  { name: "Skol", color: "45 90% 50%" },
  { name: "Antarctica", color: "210 70% 40%" },
  { name: "Budweiser", color: "0 75% 50%" },
  { name: "Stella Artois", color: "40 50% 40%" },
  { name: "Guaraná Antarctica", color: "140 60% 35%" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Nossas Marcas
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Conheça nosso portfólio
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `hsl(${brand.color} / 0.15)` }}
              >
                <Beer size={36} style={{ color: `hsl(${brand.color})` }} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-center">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.ambev.com.br/nossas-marcas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:underline"
          >
            Ver todas as marcas Ambev →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
