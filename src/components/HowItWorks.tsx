import { Car, Search, Settings, Headphones } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { icon: Car, step: "01", title: "Informe o Veículo", description: "Envie modelo, ano e motorização do veículo" },
    { icon: Search, step: "02", title: "Verificação", description: "Verificamos compatibilidade por chassi e número de peça" },
    { icon: Settings, step: "03", title: "Programação e Envio", description: "Módulo programado, testado e enviado pronto" },
    { icon: Headphones, step: "04", title: "Suporte Pós-venda", description: "Acompanhamento técnico via WhatsApp" }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider">
              Processo
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e direto para garantir a peça certa para seu veículo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative">
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="card-technical text-center relative z-10 p-4 md:p-6">
                <div className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 px-2.5 md:px-3 py-0.5 md:py-1 bg-primary rounded-full">
                  <span className="text-[10px] md:text-xs font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                <div className="w-12 md:w-16 h-12 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 md:mb-4 mt-3 md:mt-4">
                  <step.icon className="w-6 md:w-8 h-6 md:h-8 text-primary" />
                </div>
                
                <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="https://wa.me/5573981449671?text=Olá! Gostaria de iniciar o processo de verificação do meu módulo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm md:text-base"
          >
            Iniciar Verificação
            <Search className="w-4 md:w-5 h-4 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
