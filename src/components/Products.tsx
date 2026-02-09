import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Products = () => {
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
    <section id="produtos" className="py-16 md:py-32 relative bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider">
              Catálogo
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
            Produtos e <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Linha completa de módulos automotivos com programação especializada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
            <Link
              to={`/catalogo/${cat.slug}`}
              className="card-technical flex flex-col h-full group overflow-hidden cursor-pointer p-0"
            >
              {/* Product Image */}
              <div className="relative h-36 md:h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex gap-1 flex-wrap">
                  {statusMap[cat.slug]?.map((s) => (
                    <Badge key={s.label} variant={s.variant} className="text-[10px]">
                      {s.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-0.5 md:mb-1">{cat.title}</h3>
                <p className="text-primary text-xs md:text-sm font-medium mb-2 md:mb-3">{cat.subtitle}</p>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {cat.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                  {featuresMap[cat.slug]?.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs md:text-sm">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Compatibility */}
                <div className="pt-3 md:pt-4 border-t border-border">
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">Compatibilidade:</p>
                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    {compatibilityMap[cat.slug]?.map((item) => (
                      <span 
                        key={item}
                        className="px-1.5 md:px-2 py-0.5 md:py-1 text-[10px] md:text-xs rounded bg-background border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 md:px-6 pb-4 md:pb-6 mt-auto">
                <Button variant="outline" className="w-full group/btn text-xs md:text-sm h-9 md:h-10" asChild>
                  <span>
                    Ver catálogo completo
                    <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
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
