import { MessageCircle, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const whatsappNumber = "5573981449671";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de falar com um especialista.`;

  return (
    <section id="contato" className="py-16 md:py-28 bg-secondary/20 relative" ref={ref}>
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 md:mb-4"
            >
              Contato
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
            >
              Fale com um Especialista
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto"
            >
              Tire dúvidas e verifique a compatibilidade do módulo para seu veículo
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                { href: whatsappLink, icon: MessageCircle, iconBg: "bg-[#25D366]/15", iconColor: "text-[#25D366]", label: "WhatsApp", detail: "+55 73 98144-9671", external: true },
                { href: "https://instagram.com/auto.car_brasil", icon: Instagram, iconBg: "bg-[#E4405F]/15", iconColor: "text-[#E4405F]", label: "Instagram", detail: "@auto.car_brasil", external: true },
                { href: "mailto:getbrautocar@gmail.com", icon: Mail, iconBg: "bg-primary/10", iconColor: "text-primary", label: "Email", detail: "getbrautocar@gmail.com", external: false },
                { href: null, icon: MapPin, iconBg: "bg-accent/10", iconColor: "text-accent", label: "Atendimento", detail: "Todo o Brasil via envio", external: false },
              ].map((item) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href ? {
                  href: item.href,
                  ...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                } : {};

                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 ${item.href ? "hover:border-primary/20 cursor-pointer" : ""} transition-colors group`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-muted-foreground text-xs truncate">{item.detail}</div>
                    </div>
                    {item.href && <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all flex-shrink-0" />}
                  </Wrapper>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-4 md:mb-5">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2">Atendimento Imediato</h3>
                
                <p className="text-muted-foreground text-xs md:text-sm mb-5 max-w-sm mx-auto">
                  Equipe técnica pronta para ajudar com compatibilidade e dúvidas sobre instalação
                </p>
                
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg" className="w-full text-sm md:text-base py-5">
                    <MessageCircle className="w-5 h-5" />
                    Falar com especialista
                  </Button>
                </a>

                <p className="text-[10px] text-muted-foreground/60 mt-3">
                  Resposta rápida • Suporte técnico especializado
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
