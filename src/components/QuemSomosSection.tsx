import { motion } from "framer-motion";
import quemSomosImg from "@/assets/quem_somos.jpg";

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="bg-primary">
      <div className="container-main grid md:grid-cols-2 items-center gap-12 py-20 md:py-28 px-4 md:px-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-6 md:mb-8 italic">
            Quem somos
          </h2>
          <div className="space-y-5 text-primary-foreground/85 leading-relaxed">
            <p>
              A <strong className="text-primary-foreground font-bold">REVENDA SOLIMÕES</strong> é revenda{" "}
              <em className="text-primary-foreground">autorizada Ambev</em>, responsável por levar os produtos do seu portfólio a diversos municípios da calha do Rio Solimões.
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
          className="hidden md:flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden ring-2 ring-indigo-500/40 shadow-[6px_8px_0px_2px_rgba(79,70,229,0.35)]">
            <img
              src={quemSomosImg}
              alt="Colaborador Revenda Solimões"
              className="w-[400px] lg:w-[460px] h-[520px] lg:h-[580px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
