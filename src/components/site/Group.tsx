import logoJB from "@/assets/jbprint-logo.png";
import fachada from "@/assets/jbprint-fachada.jpg";
import equipe from "@/assets/jbprint-equipe.jpg";
import estrutura from "@/assets/jbprint-estrutura.jpg";

export const Group = () => {
  return (
    <section id="grupo" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-forest text-sm uppercase tracking-[0.3em] mb-4">
              Estrutura — Grupo JB PRINT
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-forest-deep leading-tight mb-6">
              GTPACK faz parte do{" "}
              <span className="font-semibold">Grupo JB PRINT</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Somos a divisão de embalagens sustentáveis do Grupo JB PRINT, referência
              nacional em impressão e conversão gráfica há mais de duas décadas. Essa
              integração nos garante escala industrial, controle total de qualidade e
              tecnologia de ponta — do papel certificado FSC ao produto final entregue
              ao cliente.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Mais de 8.000 m² de parque fabril em Indaiatuba (SP), equipamentos
              offset Heidelberg de última geração e um time apaixonado pelo que faz.
            </p>
            <div className="bg-background rounded-xl inline-block px-6 py-4 border border-border/40">
              <img src={logoJB} alt="JB PRINT Group" className="h-16 w-auto" />
            </div>
          </div>
          <div className="relative">
            <img
              src={fachada}
              alt="Sede do Grupo JB PRINT em Indaiatuba"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-forest text-primary-foreground rounded-xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-light">20+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">anos de mercado</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <figure className="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={estrutura}
              alt="Parque fabril com impressoras offset Heidelberg"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="bg-background p-6 border-t border-border/40">
              <p className="text-forest text-xs uppercase tracking-[0.2em] mb-2">Parque fabril</p>
              <h3 className="text-xl font-medium text-forest-deep">Tecnologia offset de ponta</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Impressoras Heidelberg multicor e linha completa de acabamento.
              </p>
            </figcaption>
          </figure>
          <figure className="group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={equipe}
              alt="Equipe do Grupo JB PRINT em frente à sede"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="bg-background p-6 border-t border-border/40">
              <p className="text-forest text-xs uppercase tracking-[0.2em] mb-2">Nosso time</p>
              <h3 className="text-xl font-medium text-forest-deep">Pessoas que fazem acontecer</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Profissionais especializados em produção, qualidade e atendimento.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
