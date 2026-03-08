import { motion } from "framer-motion";

const principios = [
  "Sonhamos grande.",
  "Focamos em resultados excepcionais.",
  "Lideramos pelo exemplo e assumimos responsabilidades.",
  "Atraímos e desenvolvemos pessoas excelentes.",
  "Construímos marca que os consumidores amam.",
  "Crescemos junto com nossos clientes e com a comunidade.",
  "Priorizamos soluções simples e escaláveis.",
  "Gerenciamos custos com disciplina.",
  "Pensamos a longo prazo.",
  "Nunca pegamos atalhos.",
];

const PrincipiosSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            O que nos guia
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground">
            Nossos 10 Princípios
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {principios.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <span className="font-heading font-extrabold text-3xl text-gold block mb-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-primary-foreground/90 text-sm font-medium leading-relaxed">
                {p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipiosSection;
