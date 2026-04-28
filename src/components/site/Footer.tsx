import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-primary-foreground/80 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-primary-foreground/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-leaf flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl font-semibold text-primary-foreground">Gtpack</span>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed">
              Embalagens sustentáveis feitas com propósito. Para um mundo que merece ser embalado com cuidado.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-leaf">Copos de papel</a></li>
              <li><a href="#" className="hover:text-leaf">Caixas e marmitas</a></li>
              <li><a href="#" className="hover:text-leaf">Sacolas kraft</a></li>
              <li><a href="#" className="hover:text-leaf">Personalizados</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>contato@gtpack.com.br</li>
              <li>+55 11 4000-0000</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Gtpack. Todos os direitos reservados.</p>
          <p>Feito com fibra renovável 🌱</p>
        </div>
      </div>
    </footer>
  );
};
