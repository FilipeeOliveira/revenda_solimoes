import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoTrans from "@/assets/logo_trans.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Essência", href: "#essencia" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Filiais", href: "#filiais" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-primary shadow-lg border-b border-primary-foreground/10"
          : "bg-primary/80 backdrop-blur-md"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <a href="#hero" className="h-10 md:h-12 overflow-hidden flex items-center">
          <img src={logoTrans} alt="Revenda Solimões" className="h-16 md:h-20 w-auto object-contain scale-150" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200"
                style={{ backgroundColor: "#ff961b" }}
              />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
