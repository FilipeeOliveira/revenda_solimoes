import { motion } from "framer-motion";
import warehouseImg from "@/assets/warehouse.jpg";

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />

      <div className="relative z-10 container-main grid md:grid-cols-[1fr_auto] items-center min-h-[600px]">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 md:py-28 px-4 md:px-8 max-w-2xl"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-8 italic">
            Quem somos
          </h2>
          <div className="space-y-5 text-primary-foreground/85 leading-relaxed text-justify">
            <p>
              A <strong className="text-primary-foreground font-bold">REVENDA SOLIMÕES</strong> é revenda{" "}
              <em className="text-primary-foreground italic">autorizada Ambev</em>, responsável por levar os produtos do seu portfólio a diversos municípios da calha do Rio Solimões.
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block h-full"
        >
          <img
            src={warehouseImg}
            alt="Colaborador Revenda Solimões"
            className="h-full w-[450px] lg:w-[520px] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
