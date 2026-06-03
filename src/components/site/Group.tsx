import logoJB from "@/assets/jbprint-logo.png";
import fachada from "@/assets/jbprint-fachada.jpg";
import equipe from "@/assets/jbprint-equipe.jpg";
import estrutura from "@/assets/jbprint-estrutura.jpg";

export const Group = () => {
  return (
    <section id="grupo" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">— Estrutura</div>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] max-w-2xl text-balance">
              GTPACK faz parte do Grupo JB PRINT.
            </h2>
            <p className="text-foreground/80 leading-relaxed mt-6 max-w-2xl">
              Somos a divisão de embalagens sustentáveis do Grupo JB PRINT, referência
              nacional em impressão e conversão gráfica há mais de duas décadas. Mais
              de 8.000 m² de parque fabril em Indaiatuba (SP), equipamentos offset
              Heidelberg de última geração e um time apaixonado pelo que faz.
            </p>
          </div>
          <div className="bg-background rounded-xl inline-block px-5 py-3 border border-border/40 shrink-0">
            <img src={logoJB} alt="JB PRINT Group" className="h-12 w-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: fachada, name: "Sede própria em Indaiatuba", desc: "Edifício de 8.000 m² com infraestrutura completa de produção, logística e atendimento.", tag: "20+ anos", objectPos: "object-bottom" },
            { img: estrutura, name: "Parque fabril Heidelberg", desc: "Impressoras offset multicor de última geração e linha completa de acabamento gráfico.", tag: "Tecnologia", objectPos: "object-center" },
            { img: equipe, name: "Equipe especializada", desc: "Profissionais dedicados em produção, qualidade e atendimento ao cliente.", tag: "Nosso time", objectPos: "object-bottom" },
          ].map((p) => (
            <article
              key={p.name}
              className="group bg-background rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className={`w-full h-full object-cover ${p.objectPos} group-hover:scale-105 transition-transform duration-700`}
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs text-forest border border-border">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-forest">{p.name}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
