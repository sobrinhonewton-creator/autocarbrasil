import { Check, Zap, ShieldCheck, Truck, HeadphonesIcon, Settings } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Módulos Testados e Revisados",
      description: "Cada módulo passa por testes rigorosos em bancada antes do envio"
    },
    {
      icon: Settings,
      title: "Programação Especializada",
      description: "Codificação e programação por chassi do veículo"
    },
    {
      icon: Zap,
      title: "Compatibilidade Verificada",
      description: "Análise técnica por modelo, ano e motorização"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico via WhatsApp",
      description: "Atendimento especializado para instalação e dúvidas"
    },
    {
      icon: Truck,
      title: "Envio para Todo o Brasil",
      description: "Entrega rápida e segura para qualquer região"
    },
    {
      icon: Check,
      title: "Garantia de Funcionamento",
      description: "Compromisso com o funcionamento correto do veículo"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Por que escolher
              </span>
            </div>
            
            <h2 className="section-title mb-6">
              Diferenciais <span className="text-gradient">Técnicos</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Trabalhamos com precisão técnica e compromisso com a qualidade. 
              Cada módulo é tratado com atenção aos detalhes para garantir o 
              funcionamento perfeito do seu veículo.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8">
                Números que <span className="text-gradient">comprovam</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div>
                    <div className="text-4xl font-bold text-gradient">500+</div>
                    <div className="text-muted-foreground">Módulos Vendidos</div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div>
                    <div className="text-4xl font-bold text-gradient">98%</div>
                    <div className="text-muted-foreground">Taxa de Satisfação</div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gradient">27</div>
                    <div className="text-muted-foreground">Estados Atendidos</div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
