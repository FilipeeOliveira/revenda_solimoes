import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContatoSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="bg-section-alt">
      <div className="grid md:grid-cols-2 gap-0">

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary px-6 md:px-16 py-10 md:py-16 flex flex-col gap-10"
          >
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#ff961b" }}>
                Entre em contato
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-white mb-5 leading-tight">
                Vamos conversar?
              </h2>
              <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
                Nossa equipe está pronta para atender clientes, parceiros e comerciantes. Preencha o formulário ou entre em contato diretamente.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, label: "contato@revendasolimoes.com.br" },
                { icon: MapPin, label: "Manaus - AM" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-foreground/10">
                    <Icon size={18} style={{ color: "#ff961b" }} />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-section-alt px-6 md:px-16 py-10 md:py-16 space-y-5"
          >
            {[
              { id: "name", label: "Nome completo", type: "text", placeholder: "Seu nome" },
              { id: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={form[id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all"
                  style={{ "--tw-ring-color": "#ff961b" } as React.CSSProperties}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-heading font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.02] transition-all duration-100"
              style={{ backgroundColor: "#ff961b" }}
            >
              <Send size={15} />
              Enviar mensagem
            </button>
          </motion.form>

      </div>
    </section>
  );
};

export default ContatoSection;
