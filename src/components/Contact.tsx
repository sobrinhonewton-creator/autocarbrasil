import { MessageCircle, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de falar com um especialista.`;

  return (
    <section id="contato" className="py-16 md:py-32 bg-secondary/30 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider">
                Contato
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Fale com um <span className="text-gradient">Especialista</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas e verifique a compatibilidade do módulo para seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-3 md:space-y-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="card-technical flex items-center gap-3 md:gap-4 group cursor-pointer p-4 md:p-6">
                <div className="w-11 md:w-14 h-11 md:h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors flex-shrink-0">
                  <MessageCircle className="w-5 md:w-7 h-5 md:h-7 text-[#25D366]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base mb-0.5">WhatsApp</div>
                  <div className="text-muted-foreground text-xs md:text-sm">+55 73 98144-9671</div>
                </div>
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              <a href="https://instagram.com/auto.car_brasil" target="_blank" rel="noopener noreferrer"
                className="card-technical flex items-center gap-3 md:gap-4 group cursor-pointer p-4 md:p-6">
                <div className="w-11 md:w-14 h-11 md:h-14 rounded-xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 md:w-7 h-5 md:h-7 text-[#E4405F]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base mb-0.5">Instagram</div>
                  <div className="text-muted-foreground text-xs md:text-sm">@auto.car_brasil</div>
                </div>
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              <a href="mailto:getbrautocar@gmail.com"
                className="card-technical flex items-center gap-3 md:gap-4 group cursor-pointer p-4 md:p-6">
                <div className="w-11 md:w-14 h-11 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base mb-0.5">Email</div>
                  <div className="text-muted-foreground text-xs md:text-sm truncate">getbrautocar@gmail.com</div>
                </div>
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              <div className="card-technical flex items-center gap-3 md:gap-4 p-4 md:p-6">
                <div className="w-11 md:w-14 h-11 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 md:w-7 h-5 md:h-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base mb-0.5">Atendimento</div>
                  <div className="text-muted-foreground text-xs md:text-sm">Todo o Brasil via envio</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative h-full bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-16 md:w-20 h-16 md:h-20 mx-auto rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-4 md:mb-6">
                    <Phone className="w-8 md:w-10 h-8 md:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    Atendimento Imediato
                  </h3>
                  
                  <p className="text-muted-foreground text-xs md:text-sm mb-6 md:mb-8 max-w-sm mx-auto">
                    Nossa equipe técnica está pronta para ajudar com a verificação 
                    de compatibilidade e dúvidas sobre instalação
                  </p>
                  
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg" className="w-full text-sm md:text-lg py-5 md:py-6">
                      <MessageCircle className="w-5 md:w-6 h-5 md:h-6" />
                      Falar agora com um especialista
                    </Button>
                  </a>

                  <p className="text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">
                    Resposta rápida • Suporte técnico especializado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
