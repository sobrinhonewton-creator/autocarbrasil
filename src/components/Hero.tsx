import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de verificar a compatibilidade de um módulo.`;

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      
      {/* Ambient glow - subtle, not AI-looking */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[400px] md:h-[500px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-secondary/80 border border-border/60 mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wide">
              Especialistas em Eletrônica Automotiva
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5 md:mb-6"
          >
            Módulos ECU, Painéis{" "}
            <br className="hidden md:block" />
            <span className="text-primary">e Imobilizadores</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-2 mb-6 md:mb-8"
          >
            Venda, programação e soluções em eletrônica automotiva para 
            oficinas e profissionais em todo o Brasil.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2 mb-7 md:mb-9"
          >
            {["Módulos Testados", "Programação por Chassi", "Suporte Técnico"].map((f) => (
              <div key={f} className="flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-secondary/40 border border-border/30">
                <CheckCircle className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary/70" />
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground">{f}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-14"
          >
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
          </motion.div>

          {/* Stats - clean, no flashy gradients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center gap-8 md:gap-12"
          >
            {[
              { value: "500+", label: "Módulos" },
              { value: "98%", label: "Satisfação" },
              { value: "24h", label: "Suporte" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-12">
                {i > 0 && <div className="w-px h-8 bg-border/50 -ml-8 md:-ml-12" />}
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-foreground tabular-nums">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
