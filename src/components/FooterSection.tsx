import { Instagram, Facebook, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary py-12 px-4 md:px-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-lg text-primary-foreground">
              REVENDA <span className="text-gold">SOLIMÕES</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Revenda Autorizada Ambev
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-gold hover:bg-primary-foreground/15 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-gold hover:bg-primary-foreground/15 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-gold hover:bg-primary-foreground/15 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://www.ambev.com.br/nossas-marcas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 text-sm hover:text-gold transition-colors"
            >
              Marcas Ambev
            </a>
            <p className="text-primary-foreground/40 text-xs mt-2">
              © {new Date().getFullYear()} Revenda Solimões. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
