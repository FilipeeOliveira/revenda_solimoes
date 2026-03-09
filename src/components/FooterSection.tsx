import { Facebook, Linkedin } from "lucide-react";
import logoFooter from "@/assets/logo_footer.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary">
      <div className="container-main px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Esquerda */}
          <div>
            <img src={logoFooter} alt="Revenda Solimões" className="h-20 w-auto object-contain scale-150" />
          </div>

          {/* Centro */}
          <div className="flex flex-col items-center gap-1 mt-6">
            <p className="text-primary-foreground/30 text-xs">
              © {new Date().getFullYear()} Revenda Solimões. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/30 text-xs">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/filipe-leite-oliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/60 underline transition-colors"
              >
                Filipe Oliveira
              </a>
            </p>
          </div>

          {/* Direita */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook size={16} className="text-primary-foreground/70" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin size={16} className="text-primary-foreground/70" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 w-full" style={{ backgroundColor: "#ff961b" }} />
    </footer>
  );
};

export default FooterSection;
