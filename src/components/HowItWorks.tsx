import { Car, Search, Settings, Headphones } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Car,
      step: "01",
      title: "Informe o Veículo",
      description: "Envie modelo, ano e motorização do veículo para identificação correta do módulo"
    },
    {
      icon: Search,
      step: "02",
      title: "Verificação de Compatibilidade",
      description: "Nossa equipe técnica verifica a compatibilidade exata por chassi e número de peça"
    },
    {
      icon: Settings,
      step: "03",
      title: "Programação e Envio",
      description: "O módulo é programado, testado e enviado pronto para instalação no veículo"
    },
    {
      icon: Headphones,
      step: "04",
      title: "Suporte Pós-venda",
      description: "Acompanhamento técnico via WhatsApp até o funcionamento correto do veículo"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Processo
            </span>
          </div>
          <h2 className="section-title mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Processo simples e direto para garantir a peça certa para seu veículo
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Step Card */}
              <div className="card-technical text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full">
                  <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5573981449671?text=Olá! Gostaria de iniciar o processo de verificação do meu módulo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Iniciar Verificação
            <Search className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
