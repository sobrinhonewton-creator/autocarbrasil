import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogOut } from "lucide-react";
import logoAutocar from "@/assets/logo-autocar.png";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logoAutocar} alt="AutoCar" className="h-8" />
          <span className="text-sm font-semibold text-primary">Admin</span>
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
  );
};

export default AdminHeader;
