import { Car, Search, Settings, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const { ref, isInView } = useScrollAnimation();

  const steps = [
    { icon: Car, step: "01", title: "Informe o Veículo", description: "Envie modelo, ano e motorização" },
    { icon: Search, step: "02", title: "Verificação", description: "Compatibilidade por chassi e número de peça" },
    { icon: Settings, step: "03", title: "Programação", description: "Módulo programado, testado e enviado" },
    { icon: Headphones, step: "04", title: "Suporte", description: "Acompanhamento técnico pós-venda" },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-28 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="container px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 md:mb-4"
          >
            Processo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Como Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground"
          >
            Processo simples e direto para a peça certa
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-px bg-border/60" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="relative"
            >
              <div className="text-center relative z-10 p-4 md:p-5 rounded-xl bg-card border border-border/50">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-primary rounded-full">
                  <span className="text-[10px] font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                <div className="w-11 md:w-14 h-11 md:h-14 mx-auto rounded-xl bg-primary/8 flex items-center justify-center mb-3 mt-3">
                  <step.icon className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-sm md:text-base mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 md:mt-10"
        >
          <a 
            href="https://wa.me/5573981449671?text=Olá! Gostaria de iniciar o processo de verificação do meu módulo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm"
          >
            Iniciar Verificação
            <Search className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
