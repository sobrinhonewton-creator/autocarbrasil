import { Check, Zap, ShieldCheck, Truck, HeadphonesIcon, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Differentials = () => {
  const { ref, isInView } = useScrollAnimation();

  const differentials = [
    { icon: ShieldCheck, title: "Módulos Testados", description: "Testes rigorosos em bancada antes do envio" },
    { icon: Settings, title: "Programação por Chassi", description: "Codificação e programação específica" },
    { icon: Zap, title: "Compatibilidade Verificada", description: "Análise por modelo, ano e motorização" },
    { icon: HeadphonesIcon, title: "Suporte via WhatsApp", description: "Atendimento para instalação e dúvidas" },
    { icon: Truck, title: "Envio Nacional", description: "Entrega rápida para qualquer região" },
    { icon: Check, title: "Garantia", description: "Compromisso com o funcionamento correto" },
  ];

  return (
    <section className="py-16 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 md:mb-4"
            >
              Por que escolher
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Diferenciais Técnicos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 max-w-lg"
            >
              Precisão técnica e compromisso com qualidade em cada módulo.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
              {differentials.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-card/50 border border-border/40 hover:border-primary/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xs md:text-sm">{item.title}</h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-6">
                Números que comprovam
              </h3>
              
              <div className="space-y-5">
                {[
                  { value: "500+", label: "Módulos Vendidos", icon: Zap },
                  { value: "98%", label: "Taxa de Satisfação", icon: ShieldCheck },
                  { value: "27", label: "Estados Atendidos", icon: Truck },
                ].map((stat, i, arr) => (
                  <div key={stat.label} className={`flex items-center justify-between ${i < arr.length - 1 ? "pb-5 border-b border-border/50" : ""}`}>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-primary/8 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
