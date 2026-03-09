import { motion } from "framer-motion";
import benjaminImg from "@/assets/FOTOS_FILIAIS/FILIAL_BENJAMIN CONSTANT.jpg";
import carauariImg from "@/assets/FOTOS_FILIAIS/FILIAL_CARAUARI.jpg";
import coariImg from "@/assets/FOTOS_FILIAIS/FILIAL_COARI.jpg";
import manausImg from "@/assets/FOTOS_FILIAIS/FILIAL_MANAUS.jpg";
import tabatingaImg from "@/assets/FOTOS_FILIAIS/FILIAL_TABATINGA.jpg";
import tefeImg from "@/assets/FOTOS_FILIAIS/FILIAL_TEFÉ.jpg";

const filiais = [
  { city: "Benjamin Constant", img: benjaminImg },
  { city: "Carauari", img: carauariImg },
  { city: "Coari", img: coariImg },
  { city: "Manaus", img: manausImg },
  { city: "Tabatinga", img: tabatingaImg },
  { city: "Tefé", img: tefeImg },
];

const FiliaisSection = () => {
  return (
    <section id="filiais" className="section-padding bg-section-alt">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4 md:mb-6">
            Nossas Filiais
          </h2>
          <p className="text-foreground font-semibold text-base md:text-lg max-w-2xl mx-auto">
            Estamos presentes em municípios estratégicos da calha do Rio Solimões, aproximando ainda mais nossa atuação dos clientes e comerciantes da região.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filiais.map((f, i) => (
            <motion.div
              key={f.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.city}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-3 rounded-b-2xl" style={{ backgroundColor: "#ff961b" }}>
                <h3 className="font-heading font-bold text-base text-white text-center">
                  {f.city}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiliaisSection;
