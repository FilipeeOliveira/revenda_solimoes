import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Representar a Ambev com excelência, garantindo a comercialização e o abastecimento de seus produtos em toda a calha do Rio Solimões.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser reconhecida como uma revenda de referência na região, fortalecendo parcerias comerciais e ampliando nossa presença nos municípios onde atuamos.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Atuar com responsabilidade. Valorizar as pessoas, construir relações sólidas. Crescer junto com os comerciantes e empreendedores da região.",
  },
];

const MissaoVisaoValoresSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Nossos pilares
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Missão, Visão e Valores
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <card.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValoresSection;
