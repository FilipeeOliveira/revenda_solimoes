import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Redes Sociais
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Acompanhe nossas ações
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Campanhas e momentos que fazem parte da nossa história e do nosso trabalho na região.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="aspect-square rounded-xl bg-muted overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-primary-foreground" size={32} />
              </div>
              <div className="w-full h-full bg-gradient-to-br from-muted to-border flex items-center justify-center">
                <Instagram className="text-muted-foreground/30" size={40} />
              </div>
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm"
          >
            <Instagram size={18} />
            Ver Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
