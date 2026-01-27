import { Quote, Star } from "lucide-react";

const Trust = () => {
  const testimonials = [
    {
      text: "Módulo chegou programado e funcionou de primeira. Atendimento técnico excelente, explicou todo o processo de instalação.",
      author: "Carlos M.",
      role: "Mecânico - SP",
      rating: 5
    },
    {
      text: "Já comprei 3 módulos para a oficina. Sempre com qualidade e compatibilidade correta. Recomendo!",
      author: "Roberto S.",
      role: "Oficina - MG",
      rating: 5
    },
    {
      text: "Suporte técnico muito bom. Me ajudaram a identificar o módulo correto pelo chassi do veículo.",
      author: "Anderson L.",
      role: "Eletricista Automotivo - RJ",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Confiança
              </span>
            </div>
            <h2 className="section-title mb-4">
              Compromisso com <span className="text-gradient">Qualidade</span>
            </h2>
          </div>

          {/* Trust Statement */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                A AutoCar Brasil trabalha com seriedade e conhecimento técnico há anos. 
                Nosso compromisso é garantir que cada módulo vendido funcione perfeitamente 
                no veículo do cliente. Verificamos compatibilidade, realizamos programação 
                especializada e oferecemos suporte completo até o funcionamento correto.
              </p>
              <p className="text-muted-foreground">
                Não vendemos peças sem verificação. Cada módulo passa por análise técnica 
                para garantir a compatibilidade exata com o seu veículo.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-technical"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
