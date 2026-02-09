import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de verificar a compatibilidade de um módulo.`;

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/8 rounded-full blur-[80px] md:blur-[120px]" />

      <div className="container relative z-10 px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-secondary border border-border">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wide">
              Especialistas em Eletrônica Automotiva
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">AutoCar Brasil</span>
            <br />
            <span className="text-gradient">Módulos ECU, Painéis</span>
            <br />
            <span className="text-foreground">e Imobilizadores</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-2">
            Venda, programação e soluções em eletrônica automotiva para 
            oficinas e profissionais em todo o Brasil
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-1 md:pt-2">
            {["Módulos Testados", "Programação Especializada", "Suporte Técnico"].map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-secondary/60 border border-border/40"
              >
                <CheckCircle className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" />
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 md:pt-4">
            <a href="#produtos" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm md:text-base h-11 md:h-12">
                Verificar Compatibilidade
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto text-sm md:text-base h-11 md:h-12">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 md:pt-10 flex items-center justify-center gap-6 md:gap-8 text-muted-foreground">
            {[
              { value: "500+", label: "Módulos Vendidos" },
              { value: "98%", label: "Satisfação" },
              { value: "24h", label: "Suporte" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-8">
                {i > 0 && <div className="w-px h-8 bg-border -ml-6 md:-ml-8" />}
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] md:text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
