import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const filiais = [
  { city: "Manaus", desc: "Sede administrativa e operacional" },
  { city: "Carauari", desc: "Atendimento regional" },
  { city: "Coari", desc: "Distribuição local" },
  { city: "Tefé", desc: "Ponto estratégico" },
  { city: "Tabatinga", desc: "Fronteira e logística" },
  { city: "Benjamin Constant", desc: "Presença na tríplice fronteira" },
];

const FiliaisSection = () => {
  return (
    <section id="filiais" className="section-padding bg-section-alt">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Onde estamos
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Nossas Filiais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos presentes em municípios estratégicos da calha do Rio Solimões, aproximando ainda mais nossa atuação dos clientes e comerciantes da região.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filiais.map((f, i) => (
            <motion.div
              key={f.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {f.city}
                </h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiliaisSection;
