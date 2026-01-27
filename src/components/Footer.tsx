import { MessageCircle, Instagram, Mail } from "lucide-react";
import logoAutocar from "@/assets/logo-autocar.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoAutocar} 
                alt="AutoCar Brasil - Injeção Eletrônica" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-4">
              Especialistas em módulos ECU, painéis automotivos e imobilizadores. 
              Venda, programação e suporte técnico para todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/5573981449671"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </a>
              <a 
                href="https://instagram.com/auto.car_brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#E4405F]/10 flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#E4405F]" />
              </a>
              <a 
                href="mailto:getbrautocar@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </a>
              <a href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Produtos
              </a>
              <a href="#como-funciona" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#contato" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <nav className="space-y-2">
              <a href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Módulos ECU
              </a>
              <a href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Painéis Automotivos
              </a>
              <a href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Imobilizadores
              </a>
              <a href="#produtos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Programação
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AutoCar Brasil. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Módulos ECU • Painéis Automotivos • Imobilizadores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
