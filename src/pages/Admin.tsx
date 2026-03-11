import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Plus, Pencil, Trash2, LogOut, ArrowLeft, Loader2, Package, Search, ChevronLeft, ChevronRight, Eye, EyeOff,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import ProductFormDialog from "@/components/admin/ProductFormDialog";
import type { Tables } from "@/integrations/supabase/types";

type Product = Tables<"products">;

const CATEGORIES = [
  { value: "ecu", label: "Módulos ECU" },
  { value: "paineis", label: "Painéis Automotivos" },
  { value: "imobilizadores", label: "Imobilizadores" },
];

const ITEMS_PER_PAGE = 15;

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [fetching, setFetching] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [loading, user, navigate]);

  useEffect(() => {
    if (user) fetchProducts();
  }, [user]);

  const fetchProducts = async () => {
    setFetching(true);
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("category")
      .order("name");
    setProducts(data || []);
    setFetching(false);
  };

  const filtered = useMemo(() => {
    let items = products;
    if (filterCategory !== "all") items = items.filter((p) => p.category === filterCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.sku || "").toLowerCase().includes(q)
      );
    }
    return items;
  }, [products, filterCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [filterCategory, searchQuery]);

  const openCreate = () => {
    setEditingProduct(null);
    setDialogOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!editingProduct) return;
    const { error } = await supabase.from("products").delete().eq("id", editingProduct.id);
    if (error) {
      toast({ variant: "destructive", title: "Erro", description: error.message });
    } else {
      toast({ title: "Produto removido!" });
    }
    setDeleteDialogOpen(false);
    setEditingProduct(null);
    fetchProducts();
  };

  const toggleActive = async (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const newVal = !(product as any).is_active;
    await supabase.from("products").update({ is_active: newVal } as any).eq("id", product.id);
    fetchProducts();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="card-technical text-center max-w-sm">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Acesso restrito</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Você não tem permissão de administrador.
          </p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4" /> Voltar
            </Button>
            <Button variant="ghost" onClick={signOut}>
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />

      <main className="container px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold mr-auto">Catálogo</h1>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome ou SKU..."
              className="pl-9 w-[220px]"
            />
          </div>

          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas categorias</SelectItem>
              {CATEGORIES.map((c) => (
                <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={openCreate}>
            <Plus className="w-4 h-4" /> Novo produto
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="card-technical py-3 px-4 text-center">
            <p className="text-2xl font-bold text-primary">{products.length}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
          <div className="card-technical py-3 px-4 text-center">
            <p className="text-2xl font-bold text-green-400">{products.filter((p) => p.is_active !== false).length}</p>
            <p className="text-xs text-muted-foreground">Ativos</p>
          </div>
          <div className="card-technical py-3 px-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">{products.filter((p) => (p as any).stock === 0).length}</p>
            <p className="text-xs text-muted-foreground">Sem estoque</p>
          </div>
          <div className="card-technical py-3 px-4 text-center">
            <p className="text-2xl font-bold text-muted-foreground">{filtered.length}</p>
            <p className="text-xs text-muted-foreground">Filtrados</p>
          </div>
        </div>

        {/* Products Table */}
        {fetching ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum produto encontrado.
          </div>
        ) : (
          <>
            <div className="grid gap-2">
              {paginated.map((product) => {
    const isActive = product.is_active !== false;
                const price = product.price;
                const stock = product.stock;
                return (
                  <div
                    key={product.id}
                    className={`card-technical flex items-center gap-4 cursor-pointer hover:border-primary/50 py-3 px-4 ${!isActive ? "opacity-50" : ""}`}
                    onClick={() => openEdit(product)}
                  >
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-12 h-12 rounded object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {product.brand} • {product.compatibility}
                        {(product as any).sku ? ` • SKU: ${(product as any).sku}` : ""}
                      </p>
                    </div>

                    {price > 0 && (
                      <span className="text-sm font-semibold text-primary hidden md:inline">
                        R$ {Number(price).toFixed(2)}
                      </span>
                    )}

                    <span className="text-xs text-muted-foreground hidden sm:inline">
                      Est: {stock ?? 0}
                    </span>

                    <Badge variant="secondary" className="text-[10px] hidden lg:inline-flex">
                      {CATEGORIES.find((c) => c.value === product.category)?.label}
                    </Badge>

                    <Badge
                      variant={product.status === "Novo" ? "default" : product.status === "Recondicionado" ? "secondary" : "outline"}
                      className="text-[10px]"
                    >
                      {product.status}
                    </Badge>

                    <button
                      onClick={(e) => toggleActive(product, e)}
                      className="p-1.5 rounded hover:bg-secondary transition-colors"
                      title={isActive ? "Desativar" : "Ativar"}
                    >
                      {isActive ? <Eye className="w-4 h-4 text-green-400" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                    </button>

                    <Pencil className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {currentPage} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Create/Edit Dialog */}
      <ProductFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        editingProduct={editingProduct}
        onSaved={fetchProducts}
        onDeleteRequest={(product) => {
          setEditingProduct(product);
          setDeleteDialogOpen(true);
        }}
      />

      {/* Delete Confirmation */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Excluir produto?</DialogTitle>
            <DialogDescription>
              "{editingProduct?.name}" será removido permanentemente.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancelar</Button>
            <Button variant="destructive" onClick={handleDelete}>Excluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
