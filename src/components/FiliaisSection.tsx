import { motion } from "framer-motion";
import warehouseImg from "@/assets/warehouse.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import essenciaImg from "@/assets/essencia-bg.jpg";

const filiais = [
  { city: "Manaus", img: warehouseImg },
  { city: "Carauari", img: heroImg },
  { city: "Coari", img: essenciaImg },
  { city: "Tefé", img: warehouseImg },
  { city: "Tabatinga", img: heroImg },
  { city: "Benjamin Constant", img: essenciaImg },
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
              <div className="bg-accent px-5 py-3">
                <h3 className="font-heading font-bold text-base text-accent-foreground text-center">
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
