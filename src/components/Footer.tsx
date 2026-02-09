import { MessageCircle, Instagram, Mail } from "lucide-react";
import logoAutocar from "@/assets/logo-autocar.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-10">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={logoAutocar} 
              alt="AutoCar Brasil - Injeção Eletrônica" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-4">
              Especialistas em módulos ECU, painéis automotivos e imobilizadores. 
              Venda, programação e suporte técnico para todo o Brasil.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://wa.me/5573981449671"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
              </a>
              <a 
                href="https://instagram.com/auto.car_brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
              <a 
                href="mailto:getbrautocar@gmail.com"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground/80">Links Rápidos</h4>
            <nav className="space-y-2">
              {[
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Produtos", href: "#produtos" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground/80">Produtos</h4>
            <nav className="space-y-2">
              {["Módulos ECU", "Painéis Automotivos", "Imobilizadores", "Programação"].map((item) => (
                <a key={item} href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} AutoCar Brasil. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Módulos ECU • Painéis Automotivos • Imobilizadores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
