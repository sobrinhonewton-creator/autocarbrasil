import { MessageCircle, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de falar com um especialista.`;

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Contato
              </span>
            </div>
            <h2 className="section-title mb-4">
              Fale com um <span className="text-gradient">Especialista</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Tire suas dúvidas e verifique a compatibilidade do módulo para seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-technical flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-muted-foreground text-sm">+55 73 98144-9671</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </a>

              {/* Instagram Card */}
              <a 
                href="https://instagram.com/auto.car_brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="card-technical flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-[#E4405F]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Instagram</div>
                  <div className="text-muted-foreground text-sm">@auto.car_brasil</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email Card */}
              <a 
                href="mailto:getbrautocar@gmail.com"
                className="card-technical flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground text-sm">getbrautocar@gmail.com</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </a>

              {/* Location */}
              <div className="card-technical flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Atendimento</div>
                  <div className="text-muted-foreground text-sm">Todo o Brasil via envio</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-6">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">
                    Atendimento Imediato
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                    Nossa equipe técnica está pronta para ajudar com a verificação 
                    de compatibilidade e dúvidas sobre instalação
                  </p>
                  
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg" className="w-full text-lg py-6">
                      <MessageCircle className="w-6 h-6" />
                      Falar agora com um especialista
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground mt-4">
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
