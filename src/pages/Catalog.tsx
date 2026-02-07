import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Filter, MessageCircle, X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  products,
  categories,
  brands,
  type ProductCategory,
  type ProductStatus,
  type ProductAvailability,
} from "@/data/products";

const WHATSAPP_NUMBER = "5573981449671";

const statusVariant = (s: ProductStatus) => {
  if (s === "Novo") return "default" as const;
  if (s === "Recondicionado") return "secondary" as const;
  return "outline" as const;
};

const availabilityColor = (a: ProductAvailability) => {
  if (a === "Disponível") return "text-green-400";
  if (a === "Sob consulta") return "text-yellow-400";
  return "text-red-400";
};

const Catalog = () => {
  const { category } = useParams<{ category: string }>();
  const currentCategory = categories.find((c) => c.slug === category);

  const [brandFilter, setBrandFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category && p.category !== category) return false;
      if (brandFilter !== "all" && p.brand !== brandFilter) return false;
      if (statusFilter !== "all" && p.status !== statusFilter) return false;
      return true;
    });
  }, [category, brandFilter, statusFilter]);

  const activeFilters = (brandFilter !== "all" ? 1 : 0) + (statusFilter !== "all" ? 1 : 0);

  const clearFilters = () => {
    setBrandFilter("all");
    setStatusFilter("all");
  };

  const handleWhatsApp = (productName?: string) => {
    const msg = productName
      ? `Olá, gostaria de verificar a compatibilidade de ${productName} para meu veículo.`
      : "Olá, gostaria de verificar a compatibilidade de um módulo para meu veículo.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="container px-4 relative z-10">
            <Link
              to="/#produtos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos produtos
            </Link>

            {currentCategory ? (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {currentCategory.subtitle}
                  </span>
                </div>
                <h1 className="section-title mb-3">{currentCategory.title}</h1>
                <p className="section-subtitle">{currentCategory.description}</p>
              </>
            ) : (
              <>
                <h1 className="section-title mb-3">Catálogo Completo</h1>
                <p className="section-subtitle">Todos os produtos disponíveis</p>
              </>
            )}
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="pb-20">
          <div className="container px-4">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
                {activeFilters > 0 && (
                  <Badge variant="default" className="ml-1 text-[10px] px-1.5 py-0">
                    {activeFilters}
                  </Badge>
                )}
              </Button>

              {!category && (
                <>
                  {categories.map((cat) => (
                    <Link key={cat.slug} to={`/catalogo/${cat.slug}`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                        {cat.title}
                      </Badge>
                    </Link>
                  ))}
                </>
              )}

              {activeFilters > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
                  <X className="w-3 h-3" /> Limpar filtros
                </Button>
              )}

              <span className="ml-auto text-sm text-muted-foreground">
                {filtered.length} produto{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="card-technical mb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Marca do veículo</label>
                  <Select value={brandFilter} onValueChange={setBrandFilter}>
                    <SelectTrigger><SelectValue placeholder="Todas as marcas" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as marcas</SelectItem>
                      {brands.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Status do produto</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger><SelectValue placeholder="Todos os status" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os status</SelectItem>
                      <SelectItem value="Novo">Novo</SelectItem>
                      <SelectItem value="Recondicionado">Recondicionado</SelectItem>
                      <SelectItem value="Programado">Programado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Nenhum produto encontrado</p>
                <p className="text-muted-foreground text-sm mb-4">Tente ajustar os filtros ou consulte via WhatsApp</p>
                <Button variant="whatsapp" onClick={() => handleWhatsApp()}>
                  <MessageCircle className="w-4 h-4" />
                  Consultar disponibilidade
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((product) => (
                  <div key={product.id} className="card-technical flex flex-col h-full group overflow-hidden">
                    {/* Image */}
                    <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <Badge variant={statusVariant(product.status)} className="text-[10px]">
                          {product.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-sm mb-1 leading-tight">{product.name}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-3">{product.description}</p>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Aplicação:</span>
                          <span className="text-foreground font-medium text-right">{product.compatibility}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Marca:</span>
                          <span className="text-foreground">{product.brand}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ano:</span>
                          <span className="text-foreground">{product.yearRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Disponibilidade:</span>
                          <span className={`font-medium ${availabilityColor(product.availability)}`}>
                            {product.availability}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group/btn text-xs"
                        onClick={() => handleWhatsApp(product.name)}
                      >
                        Consultar compatibilidade
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Floating WhatsApp CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            variant="whatsapp"
            size="lg"
            className="rounded-full shadow-lg gap-2"
            onClick={() => handleWhatsApp()}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Falar com especialista</span>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
