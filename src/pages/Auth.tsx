import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoAutocar from "@/assets/logo-autocar.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (user) {
    navigate("/admin");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setSubmitting(true);
    const { error } = isLogin
      ? await signIn(email, password)
      : await signUp(email, password);

    setSubmitting(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message === "Invalid login credentials"
          ? "Email ou senha incorretos."
          : error.message,
      });
    } else if (!isLogin) {
      toast({
        title: "Conta criada!",
        description: "Verifique seu email para confirmar o cadastro.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={logoAutocar} alt="AutoCar Brasil" className="h-12 mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-1">
            {isLogin ? "Acesso Admin" : "Criar Conta"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Painel de gerenciamento do catálogo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-technical space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@autocar.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
            <LogIn className="w-4 h-4" />
            {submitting ? "Entrando..." : isLogin ? "Entrar" : "Criar conta"}
          </Button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {isLogin ? "Não tem conta? Criar uma" : "Já tem conta? Entrar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-3 h-3" /> Voltar ao site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
