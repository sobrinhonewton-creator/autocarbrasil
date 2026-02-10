import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Trust = () => {
  const { ref, isInView } = useScrollAnimation();

  const testimonials = [
    { text: "Módulo chegou programado e funcionou de primeira. Atendimento técnico excelente.", author: "Carlos M.", role: "Mecânico - SP", rating: 5 },
    { text: "Já comprei 3 módulos para a oficina. Sempre com qualidade e compatibilidade correta.", author: "Roberto S.", role: "Oficina - MG", rating: 5 },
    { text: "Suporte técnico muito bom. Me ajudaram a identificar o módulo correto pelo chassi.", author: "Anderson L.", role: "Eletricista - RJ", rating: 5 },
  ];

  return (
    <section className="py-16 md:py-28 relative" ref={ref}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 md:mb-4"
            >
              Confiança
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight"
            >
              Compromisso com Qualidade
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-10 md:mb-14"
          >
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-10 text-center">
              <Quote className="w-6 md:w-8 h-6 md:h-8 text-primary/20 mx-auto mb-4" />
              <p className="text-sm md:text-lg leading-relaxed text-foreground/90 mb-3 md:mb-4">
                A AutoCar Brasil trabalha com seriedade e conhecimento técnico. 
                Nosso compromisso é garantir que cada módulo funcione perfeitamente.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Não vendemos peças sem verificação. Cada módulo passa por análise técnica 
                para garantir a compatibilidade exata com o seu veículo.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-4 md:p-5 rounded-xl bg-card border border-border/50"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">"{t.text}"</p>
                <div className="pt-3 border-t border-border/40">
                  <div className="font-medium text-xs">{t.author}</div>
                  <div className="text-[10px] text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
