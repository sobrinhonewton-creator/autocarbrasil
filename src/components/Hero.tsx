import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de verificar a compatibilidade de um módulo.`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Especialistas em Eletrônica Automotiva
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">AutoCar Brasil</span>
            <br />
            <span className="text-gradient">Módulos ECU, Painéis</span>
            <br />
            <span className="text-foreground">e Imobilizadores</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Venda, programação e soluções em eletrônica automotiva para 
            oficinas e profissionais em todo o Brasil
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {["Módulos Testados", "Programação Especializada", "Suporte Técnico"].map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="#produtos" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Verificar Compatibilidade
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm">Módulos Vendidos</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm">Satisfação</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
