import logo from "@/assets/logo-gtpack.png";

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-primary-foreground/80 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-primary-foreground/10">
          <div className="md:col-span-2">
            <div className="bg-primary-foreground rounded-xl inline-block p-4">
              <img src={logo} alt="GTPACK" className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-sm leading-relaxed">
              Embalagens sustentáveis para o fast food. Do hambúrguer ao milkshake,
              cada embalagem volta à terra como adubo.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-leaf">Caixas de hambúrguer</a></li>
              <li><a href="#" className="hover:text-leaf">Copos de bebida</a></li>
              <li><a href="#" className="hover:text-leaf">Embalagens de fritas</a></li>
              <li><a href="#" className="hover:text-leaf">Potes para sorvetes</a></li>
              <li><a href="#" className="hover:text-leaf">Sacolas delivery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>contato@gtpack.com.br</li>
              <li>(19) 3934-0463</li>
              <li>R. Maria Aparecida de Oliveira, 73</li>
              <li>Indaiatuba — SP</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 GTPACK. Todos os direitos reservados.</p>
          <p>Feito com fibra renovável 🌱</p>
        </div>
      </div>
    </footer>
  );
};
