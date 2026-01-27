import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import modulosEcu from "@/assets/modulos-ecu.png";
import painelAutomotivo from "@/assets/painel-automotivo.png";
import imobilizador from "@/assets/imobilizador.png";

const Products = () => {
  const whatsappNumber = "5573981449671";
  
  const products = [
    {
      image: modulosEcu,
      title: "Módulos ECU",
      subtitle: "Injeção Eletrônica",
      description: "Unidades de controle do motor para todas as marcas e modelos. Programação e codificação por chassi inclusa.",
      compatibility: ["Volkswagen", "Fiat", "GM", "Ford", "Honda", "Toyota"],
      status: [
        { label: "Novo", variant: "default" as const },
        { label: "Recondicionado", variant: "secondary" as const },
        { label: "Programado", variant: "outline" as const }
      ],
      features: ["Teste em bancada", "Garantia de funcionamento", "Compatibilidade verificada"]
    },
    {
      image: painelAutomotivo,
      title: "Painéis Automotivos",
      subtitle: "Instrumentação Eletrônica",
      description: "Painéis de instrumentos digitais e analógicos. Reprogramação de hodômetro e calibração de sensores.",
      compatibility: ["Gol", "Palio", "Corsa", "Celta", "Uno", "Voyage"],
      status: [
        { label: "Novo", variant: "default" as const },
        { label: "Revisado", variant: "secondary" as const }
      ],
      features: ["Reset de quilometragem", "Reparação de display", "Codificação inclusa"]
    },
    {
      image: imobilizador,
      title: "Imobilizadores",
      subtitle: "Sistemas Anti-furto",
      description: "Sistemas de imobilização e antifurto. Programação de chaves, transponders e módulos de conforto.",
      compatibility: ["Sistema Immo", "BSI", "BCM", "Body Computer"],
      status: [
        { label: "Original", variant: "default" as const },
        { label: "Programado", variant: "outline" as const }
      ],
      features: ["Programação de chaves", "Sincronização", "Desbloqueio de sistema"]
    }
  ];

  const handleConsult = (product: string) => {
    const message = `Olá! Gostaria de consultar a compatibilidade de ${product} para meu veículo.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Catálogo
            </span>
          </div>
          <h2 className="section-title mb-4">
            Produtos e <span className="text-gradient">Soluções</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Linha completa de módulos automotivos com programação especializada 
            e compatibilidade verificada por chassi
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.title}
              className="card-technical flex flex-col h-full group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-1 flex-wrap">
                  {product.status.map((s) => (
                    <Badge key={s.label} variant={s.variant} className="text-xs">
                      {s.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{product.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Compatibility */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Compatibilidade:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibility.map((item) => (
                      <span 
                        key={item}
                        className="px-2 py-1 text-xs rounded bg-background border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => handleConsult(product.title)}
                >
                  Consultar Compatibilidade
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
