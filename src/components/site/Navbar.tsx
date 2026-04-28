import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-gtpack.jpg";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Gtpack — Embalagens sustentáveis" className="h-10 md:h-12 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <li><a href="#sobre" className="hover:text-forest transition-colors">Sobre</a></li>
          <li><a href="#produtos" className="hover:text-forest transition-colors">Produtos</a></li>
          <li><a href="#sustentabilidade" className="hover:text-forest transition-colors">Sustentabilidade</a></li>
          <li><a href="#processo" className="hover:text-forest transition-colors">Processo</a></li>
          <li><a href="#contato" className="hover:text-forest transition-colors">Contato</a></li>
        </ul>
        <Button className="bg-forest hover:bg-forest-deep text-primary-foreground rounded-full px-6">
          Solicitar orçamento
        </Button>
      </nav>
    </header>
  );
};
