import { MessageCircle, Instagram, Mail } from "lucide-react";
import logoAutocar from "@/assets/logo-autocar.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-8 md:py-10">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <img 
              src={logoAutocar} 
              alt="AutoCar Brasil" 
              className="h-10 md:h-12 w-auto mb-3 md:mb-4"
            />
            <p className="text-muted-foreground text-xs md:text-sm max-w-sm leading-relaxed mb-3 md:mb-4">
              Especialistas em módulos ECU, painéis automotivos e imobilizadores. 
              Venda, programação e suporte técnico para todo o Brasil.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://wa.me/5573981449671", icon: MessageCircle, label: "WhatsApp" },
                { href: "https://instagram.com/auto.car_brasil", icon: Instagram, label: "Instagram" },
                { href: "mailto:getbrautocar@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-8 md:w-9 h-8 md:h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 md:w-4 h-3.5 md:h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-foreground/80">Links Rápidos</h4>
            <nav className="space-y-1.5 md:space-y-2">
              {[
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Produtos", href: "#produtos" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-foreground/80">Produtos</h4>
            <nav className="space-y-1.5 md:space-y-2">
              {["Módulos ECU", "Painéis Automotivos", "Imobilizadores", "Programação"].map((item) => (
                <a key={item} href="#produtos" className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            © {currentYear} AutoCar Brasil. Todos os direitos reservados.
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground/60">
            Módulos ECU • Painéis Automotivos • Imobilizadores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
