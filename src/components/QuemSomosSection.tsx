import { motion } from "framer-motion";
import warehouseImg from "@/assets/warehouse.jpg";

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Sobre nós
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Quem Somos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">REVENDA SOLIMÕES</strong> é revenda autorizada Ambev, responsável por levar os produtos do seu portfólio a diversos municípios da calha do Rio Solimões.
              </p>
              <p>
                Atuamos diretamente na comercialização e no abastecimento dessas marcas, conectando estabelecimentos comerciais e consumidores a um portfólio reconhecido nacionalmente.
              </p>
              <p>
                Com presença consolidada na região, trabalhamos diariamente para garantir que bares, mercados, restaurantes e comércios locais tenham acesso aos produtos que fazem parte do cotidiano das pessoas.
              </p>
              <p>
                Mais do que abastecer o comércio, contribuímos para manter ativa a dinâmica econômica dos municípios onde estamos presentes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={warehouseImg}
                alt="Centro de distribuição Revenda Solimões"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-xl" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
