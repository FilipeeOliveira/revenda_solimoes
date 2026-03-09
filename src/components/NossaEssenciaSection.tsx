import { motion } from "framer-motion";
import missaoImg from "@/assets/missao.png";
import visaoImg from "@/assets/visao.png";
import valoresImg from "@/assets/valores.jpg";

const cards = [
  {
    title: "Missão",
    image: missaoImg,
    content: (
      <p>
        Representar a Ambev com excelência, garantindo a comercialização e o abastecimento de seus produtos em toda a calha do Rio Solimões.
      </p>
    ),
  },
  {
    title: "Visão",
    image: visaoImg,
    content: (
      <p>
        Ser reconhecida como uma revenda de referência na região, fortalecendo parcerias comerciais e ampliando nossa presença nos municípios onde atuamos.
      </p>
    ),
  },
  {
    title: "Valores",
    image: valoresImg,
    content: (
      <ul className="list-disc list-inside space-y-1 text-left">
        <li>Atuar com responsabilidade</li>
        <li>Valorizar as pessoas,</li>
        <li>Construir relações sólidas</li>
        <li>Crescer junto com os comerciantes e empreendedores da região.</li>
      </ul>
    ),
  },
];

const NossaEssenciaSection = () => {
  return (
    <section id="essencia" className="section-padding bg-section-alt">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-2xl md:text-5xl text-primary text-center mb-8 md:mb-16 italic"
        >
          Nossa Essência
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: "#ff961b" }}
            >
              <div className="p-3 pb-0">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6 pt-4 text-center">
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-primary mb-3 italic">
                  {card.title}
                </h3>
                <div className="text-primary/80 text-sm leading-relaxed text-justify">
                  {card.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossaEssenciaSection;
