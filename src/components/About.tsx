import { Shield, Cpu, Wrench, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import programacaoVeicular from "@/assets/programacao-veicular.png";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    { icon: Cpu, title: "Tecnologia Avançada", description: "Equipamentos de diagnóstico de última geração para programação precisa" },
    { icon: Shield, title: "Qualidade Garantida", description: "Todos os módulos são testados e revisados antes do envio" },
    { icon: Wrench, title: "Programação Especializada", description: "Codificação correta por chassi e modelo do veículo" },
    { icon: Headphones, title: "Suporte Técnico", description: "Atendimento especializado via WhatsApp para instalação" },
  ];

  return (
    <section id="sobre" className="py-16 md:py-28 relative" ref={ref}>
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em]"
            >
              Sobre Nós
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight"
            >
              Especialistas em Eletrônica Automotiva
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                A AutoCar Brasil é referência em venda de módulos automotivos, painéis 
                eletrônicos e sistemas de imobilização. Trabalhamos com peças testadas, 
                programação especializada e foco total na compatibilidade correta.
              </p>
              <p className="text-muted-foreground/80 text-sm leading-relaxed">
                Cada módulo é verificado, programado e enviado pronto para instalação, 
                com suporte completo do orçamento ao funcionamento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden"
            >
              <img 
                src={programacaoVeicular} 
                alt="Programação veicular especializada" 
                className="w-full h-48 md:h-60 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <p className="text-xs md:text-sm font-medium text-foreground">Programação veicular</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Equipamentos de última geração</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="group p-4 md:p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 md:w-11 h-10 md:h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/12 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
