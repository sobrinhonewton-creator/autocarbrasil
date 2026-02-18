import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Trash2, Upload, Loader2, Plus, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

type Product = Tables<"products">;

const CATEGORIES = [
  { value: "ecu", label: "Módulos ECU" },
  { value: "paineis", label: "Painéis Automotivos" },
  { value: "imobilizadores", label: "Imobilizadores" },
];

export const emptyProduct: TablesInsert<"products"> & {
  price?: number;
  promo_price?: number | null;
  stock?: number;
  sku?: string;
  tags?: string[];
  full_description?: string;
  is_active?: boolean;
  additional_images?: string[];
} = {
  name: "",
  description: "",
  compatibility: "",
  brand: "",
  year_range: "",
  status: "Novo",
  availability: "Disponível",
  category: "ecu",
  image_url: null,
  price: 0,
  promo_price: null,
  stock: 0,
  sku: "",
  tags: [],
  full_description: "",
  is_active: true,
  additional_images: [],
};

interface ProductFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingProduct: Product | null;
  onSaved: () => void;
  onDeleteRequest: (product: Product) => void;
}

const ProductFormDialog = ({ open, onOpenChange, editingProduct, onSaved, onDeleteRequest }: ProductFormDialogProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState<any>(emptyProduct);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);
  const [tagInput, setTagInput] = useState("");

  // Sync form when editingProduct or open changes
  useEffect(() => {
    if (!open) return;
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        description: editingProduct.description,
        compatibility: editingProduct.compatibility,
        brand: editingProduct.brand,
        year_range: editingProduct.year_range,
        status: editingProduct.status,
        availability: editingProduct.availability,
        category: editingProduct.category,
        image_url: editingProduct.image_url,
        price: (editingProduct as any).price || 0,
        promo_price: (editingProduct as any).promo_price || null,
        stock: (editingProduct as any).stock || 0,
        sku: (editingProduct as any).sku || "",
        tags: (editingProduct as any).tags || [],
        full_description: (editingProduct as any).full_description || "",
        is_active: (editingProduct as any).is_active ?? true,
        additional_images: (editingProduct as any).additional_images || [],
      });
    } else {
      setForm({ ...emptyProduct });
    }
    setImageFile(null);
    setAdditionalFiles([]);
    setTagInput("");
  }, [open, editingProduct]);

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("product-images").upload(path, file);
    if (error) {
      toast({ variant: "destructive", title: "Erro ao enviar imagem", description: error.message });
      return null;
    }
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async () => {
    if (!form.name || !form.category) return;
    setSaving(true);

    let imageUrl = form.image_url;
    if (imageFile) {
      const url = await uploadImage(imageFile);
      if (url) imageUrl = url;
    }

    // Upload additional images
    let additionalUrls = [...(form.additional_images || [])];
    for (const file of additionalFiles) {
      const url = await uploadImage(file);
      if (url) additionalUrls.push(url);
    }

    const payload = {
      name: form.name,
      description: form.description,
      compatibility: form.compatibility,
      brand: form.brand,
      year_range: form.year_range,
      status: form.status,
      availability: form.availability,
      category: form.category,
      image_url: imageUrl,
      price: Number(form.price) || 0,
      promo_price: form.promo_price ? Number(form.promo_price) : null,
      stock: Number(form.stock) || 0,
      sku: form.sku || "",
      tags: form.tags || [],
      full_description: form.full_description || "",
      is_active: form.is_active ?? true,
      additional_images: additionalUrls,
    };

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
      const { error } = await supabase.from("products").insert(payload as any);
      if (error) {
        toast({ variant: "destructive", title: "Erro", description: error.message });
      } else {
        toast({ title: "Produto criado!" });
      }
    }

    setSaving(false);
    onOpenChange(false);
    onSaved();
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (tag && !(form.tags || []).includes(tag)) {
      setForm({ ...form, tags: [...(form.tags || []), tag] });
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setForm({ ...form, tags: (form.tags || []).filter((t: string) => t !== tag) });
  };

  const removeAdditionalImage = (index: number) => {
    const imgs = [...(form.additional_images || [])];
    imgs.splice(index, 1);
    setForm({ ...form, additional_images: imgs });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingProduct ? "Editar Produto" : "Novo Produto"}</DialogTitle>
          <DialogDescription>Preencha os dados do produto.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Name + SKU */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <Label>Nome *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label>SKU</Label>
              <Input value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} placeholder="Código interno" />
            </div>
          </div>

          {/* Category + Brand */}
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

          {/* Description */}
          <div>
            <Label>Descrição curta</Label>
            <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>

          {/* Full description */}
          <div>
            <Label>Descrição completa</Label>
            <Textarea
              value={form.full_description}
              onChange={(e) => setForm({ ...form, full_description: e.target.value })}
              placeholder="Descrição detalhada do produto..."
              rows={4}
            />
          </div>

          {/* Compatibility */}
          <div>
            <Label>Compatibilidade</Label>
            <Input value={form.compatibility} onChange={(e) => setForm({ ...form, compatibility: e.target.value })} />
          </div>

          {/* Price + Promo Price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Preço (R$)</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={form.price || ""}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div>
              <Label>Preço promocional (R$)</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={form.promo_price || ""}
                onChange={(e) => setForm({ ...form, promo_price: e.target.value || null })}
                placeholder="Opcional"
              />
            </div>
          </div>

          {/* Stock + Year + Status */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label>Estoque</Label>
              <Input
                type="number"
                min="0"
                value={form.stock || ""}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />
            </div>
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

          {/* Availability + Active */}
          <div className="grid grid-cols-2 gap-3 items-end">
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
            <div className="flex items-center gap-3 pb-1">
              <Switch
                checked={form.is_active ?? true}
                onCheckedChange={(checked) => setForm({ ...form, is_active: checked })}
              />
              <Label className="mb-0">Produto ativo</Label>
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label>Tags / Palavras-chave</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="Digite e pressione Enter"
                className="flex-1"
              />
              <Button type="button" variant="outline" size="sm" onClick={addTag}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {(form.tags || []).length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {(form.tags || []).map((tag: string) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-xs">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Main Image */}
          <div>
            <Label>Imagem principal</Label>
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

          {/* Additional Images */}
          <div>
            <Label>Imagens adicionais</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {(form.additional_images || []).map((url: string, i: number) => (
                <div key={i} className="relative group">
                  <img src={url} alt="" className="w-16 h-16 rounded object-cover" />
                  <button
                    onClick={() => removeAdditionalImage(i)}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {additionalFiles.map((file, i) => (
                <img key={`new-${i}`} src={URL.createObjectURL(file)} alt="" className="w-16 h-16 rounded object-cover" />
              ))}
              <label className="w-16 h-16 rounded border border-dashed border-input flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors">
                <Plus className="w-5 h-5 text-muted-foreground" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) setAdditionalFiles([...additionalFiles, ...Array.from(e.target.files)]);
                  }}
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
                onOpenChange(false);
                onDeleteRequest(editingProduct);
              }}
            >
              <Trash2 className="w-4 h-4" /> Excluir
            </Button>
          )}
          <div className="flex-1" />
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={handleSave} disabled={saving || !form.name}>
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {editingProduct ? "Salvar" : "Criar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormDialog;
