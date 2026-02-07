import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Plus, Pencil, Trash2, LogOut, ArrowLeft, Upload, Loader2, Package,
} from "lucide-react";
import logoAutocar from "@/assets/logo-autocar.png";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

type Product = Tables<"products">;

const CATEGORIES = [
  { value: "ecu", label: "Módulos ECU" },
  { value: "paineis", label: "Painéis Automotivos" },
  { value: "imobilizadores", label: "Imobilizadores" },
];

const emptyProduct: TablesInsert<"products"> = {
  name: "",
  description: "",
  compatibility: "",
  brand: "",
  year_range: "",
  status: "Novo",
  availability: "Disponível",
  category: "ecu",
  image_url: null,
};

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [fetching, setFetching] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<TablesInsert<"products">>(emptyProduct);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");

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

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("product-images")
      .upload(path, file);
    if (error) {
      toast({ variant: "destructive", title: "Erro ao enviar imagem", description: error.message });
      return null;
    }
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const openCreate = () => {
    setEditingProduct(null);
    setForm(emptyProduct);
    setImageFile(null);
    setDialogOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      compatibility: product.compatibility,
      brand: product.brand,
      year_range: product.year_range,
      status: product.status,
      availability: product.availability,
      category: product.category,
      image_url: product.image_url,
    });
    setImageFile(null);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.category) return;
    setSaving(true);

    let imageUrl = form.image_url;
    if (imageFile) {
      const url = await uploadImage(imageFile);
      if (url) imageUrl = url;
    }

    const payload = { ...form, image_url: imageUrl };

    if (editingProduct) {
      const { error } = await supabase
        .from("products")
        .update(payload as TablesUpdate<"products">)
        .eq("id", editingProduct.id);
      if (error) {
        toast({ variant: "destructive", title: "Erro", description: error.message });
      } else {
        toast({ title: "Produto atualizado!" });
      }
    } else {
      const { error } = await supabase.from("products").insert(payload);
      if (error) {
        toast({ variant: "destructive", title: "Erro", description: error.message });
      } else {
        toast({ title: "Produto criado!" });
      }
    }

    setSaving(false);
    setDialogOpen(false);
    fetchProducts();
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

  const filtered = filterCategory === "all"
    ? products
    : products.filter((p) => p.category === filterCategory);

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
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoAutocar} alt="AutoCar" className="h-8" />
            <span className="text-sm font-semibold">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4" /> Site
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold mr-auto">Catálogo</h1>
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

        {/* Products Table */}
        {fetching ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum produto encontrado.
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="card-technical flex items-center gap-4 cursor-pointer hover:border-primary/50"
                onClick={() => openEdit(product)}
              >
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-14 h-14 rounded object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {product.brand} • {product.compatibility}
                  </p>
                </div>
                <Badge variant="secondary" className="text-[10px] hidden sm:inline-flex">
                  {CATEGORIES.find((c) => c.value === product.category)?.label}
                </Badge>
                <Badge
                  variant={product.status === "Novo" ? "default" : product.status === "Recondicionado" ? "secondary" : "outline"}
                  className="text-[10px]"
                >
                  {product.status}
                </Badge>
                <Pencil className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Editar Produto" : "Novo Produto"}</DialogTitle>
            <DialogDescription>
              Preencha os dados técnicos do produto.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <Label>Nome *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Categoria *</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Marca</Label>
                <Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
              </div>
            </div>

            <div>
              <Label>Descrição</Label>
              <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>

            <div>
              <Label>Compatibilidade</Label>
              <Input value={form.compatibility} onChange={(e) => setForm({ ...form, compatibility: e.target.value })} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Ano</Label>
                <Input value={form.year_range} onChange={(e) => setForm({ ...form, year_range: e.target.value })} />
              </div>
              <div>
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Novo">Novo</SelectItem>
                    <SelectItem value="Recondicionado">Recondicionado</SelectItem>
                    <SelectItem value="Programado">Programado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Disponibilidade</Label>
              <Select value={form.availability} onValueChange={(v) => setForm({ ...form, availability: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Disponível">Disponível</SelectItem>
                  <SelectItem value="Sob consulta">Sob consulta</SelectItem>
                  <SelectItem value="Indisponível">Indisponível</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Imagem do produto</Label>
              <div className="flex items-center gap-3 mt-1">
                {(form.image_url || imageFile) && (
                  <img
                    src={imageFile ? URL.createObjectURL(imageFile) : form.image_url!}
                    alt="Preview"
                    className="w-16 h-16 rounded object-cover"
                  />
                )}
                <label className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-input text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    <Upload className="w-4 h-4" />
                    {imageFile ? imageFile.name : "Escolher imagem"}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            {editingProduct && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  setDialogOpen(false);
                  setDeleteDialogOpen(true);
                }}
              >
                <Trash2 className="w-4 h-4" /> Excluir
              </Button>
            )}
            <div className="flex-1" />
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSave} disabled={saving || !form.name}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {editingProduct ? "Salvar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
