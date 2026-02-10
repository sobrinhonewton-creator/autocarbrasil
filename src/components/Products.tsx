import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Products = () => {
  const { ref, isInView } = useScrollAnimation();

  const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "outline" }[]> = {
    ecu: [
      { label: "Novo", variant: "default" },
      { label: "Recondicionado", variant: "secondary" },
      { label: "Programado", variant: "outline" },
    ],
    paineis: [
      { label: "Novo", variant: "default" },
      { label: "Revisado", variant: "secondary" },
    ],
    imobilizadores: [
      { label: "Original", variant: "default" },
      { label: "Programado", variant: "outline" },
    ],
  };

  const featuresMap: Record<string, string[]> = {
    ecu: ["Teste em bancada", "Garantia de funcionamento", "Compatibilidade verificada"],
    paineis: ["Reset de quilometragem", "Reparação de display", "Codificação inclusa"],
    imobilizadores: ["Programação de chaves", "Sincronização", "Desbloqueio de sistema"],
  };

  const compatibilityMap: Record<string, string[]> = {
    ecu: ["Volkswagen", "Fiat", "GM", "Ford", "Honda", "Toyota"],
    paineis: ["Gol", "Palio", "Corsa", "Celta", "Uno", "Voyage"],
    imobilizadores: ["Sistema Immo", "BSI", "BCM", "Body Computer"],
  };

  return (
    <section id="produtos" className="py-16 md:py-28 relative bg-secondary/20" ref={ref}>
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block text-[10px] md:text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 md:mb-4"
          >
            Catálogo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Produtos e Soluções
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground"
          >
            Linha completa de módulos automotivos com programação especializada
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            >
              <Link
                to={`/catalogo/${cat.slug}`}
                className="flex flex-col h-full group overflow-hidden cursor-pointer p-0 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-36 md:h-44 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex gap-1 flex-wrap">
                    {statusMap[cat.slug]?.map((s) => (
                      <Badge key={s.label} variant={s.variant} className="text-[10px]">{s.label}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex-1 p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold mb-0.5">{cat.title}</h3>
                  <p className="text-primary text-xs font-medium mb-2">{cat.subtitle}</p>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">{cat.description}</p>

                  <div className="space-y-1.5 mb-3">
                    {featuresMap[cat.slug]?.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary/60" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-border/40">
                    <p className="text-[10px] text-muted-foreground/70 mb-1.5">Compatibilidade:</p>
                    <div className="flex flex-wrap gap-1">
                      {compatibilityMap[cat.slug]?.map((item) => (
                        <span key={item} className="px-1.5 py-0.5 text-[10px] rounded bg-secondary/80 border border-border/40 text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 md:px-5 pb-4 md:pb-5 mt-auto">
                  <Button variant="outline" className="w-full group/btn text-xs h-9" asChild>
                    <span>
                      Ver catálogo completo
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
