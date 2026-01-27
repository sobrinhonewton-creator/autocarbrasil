import { Shield, Cpu, Wrench, Headphones } from "lucide-react";
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
    <section id="sobre" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>
            
            <h2 className="section-title">
              Especialistas em
              <span className="text-gradient"> Eletrônica Automotiva</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              A AutoCar Brasil é referência em venda de módulos automotivos, painéis 
              eletrônicos e sistemas de imobilização. Trabalhamos com peças testadas, 
              programação especializada e foco total na compatibilidade correta para 
              cada veículo.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe técnica garante que cada módulo seja verificado, programado 
              e enviado pronto para instalação, oferecendo suporte completo do 
              orçamento até o funcionamento do veículo.
            </p>

            {/* Image for About Section */}
            <div className="relative rounded-xl overflow-hidden mt-6">
              <img 
                src={programacaoVeicular} 
                alt="Programação veicular especializada" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium text-foreground">Programação veicular especializada</p>
                <p className="text-xs text-muted-foreground">Equipamentos de última geração</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-technical group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
