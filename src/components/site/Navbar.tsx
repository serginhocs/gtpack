import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-leaf flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl font-semibold tracking-tight text-forest">
            Gtpack
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <li><a href="#sobre" className="hover:text-forest transition-colors">Sobre</a></li>
          <li><a href="#produtos" className="hover:text-forest transition-colors">Produtos</a></li>
          <li><a href="#sustentabilidade" className="hover:text-forest transition-colors">Sustentabilidade</a></li>
          <li><a href="#processo" className="hover:text-forest transition-colors">Processo</a></li>
        </ul>
        <Button variant="default" className="bg-forest hover:bg-forest-deep text-primary-foreground rounded-full px-6">
          Solicitar orçamento
        </Button>
      </nav>
    </header>
  );
};
