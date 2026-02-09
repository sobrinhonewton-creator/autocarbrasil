import { Shield, Cpu, Wrench, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import programacaoVeicular from "@/assets/programacao-veicular.png";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "Tecnologia Avançada",
      description: "Equipamentos de diagnóstico de última geração para programação precisa"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Todos os módulos são testados e revisados antes do envio"
    },
    {
      icon: Wrench,
      title: "Programação Especializada",
      description: "Codificação correta por chassi e modelo do veículo"
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Atendimento especializado via WhatsApp para instalação"
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-32 relative">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Especialistas em
              <span className="text-gradient"> Eletrônica Automotiva</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              A AutoCar Brasil é referência em venda de módulos automotivos, painéis 
              eletrônicos e sistemas de imobilização. Trabalhamos com peças testadas, 
              programação especializada e foco total na compatibilidade correta para 
              cada veículo.
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nossa equipe técnica garante que cada módulo seja verificado, programado 
              e enviado pronto para instalação, oferecendo suporte completo do 
              orçamento até o funcionamento do veículo.
            </p>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden mt-4 md:mt-6">
              <img 
                src={programacaoVeicular} 
                alt="Programação veicular especializada" 
                className="w-full h-48 md:h-64 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                <p className="text-xs md:text-sm font-medium text-foreground">Programação veicular especializada</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Equipamentos de última geração</p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-technical group p-4 md:p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
