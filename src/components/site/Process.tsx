import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Briefing", d: "Entendemos sua marca, volume, e necessidades específicas de impressão." },
  { n: "02", t: "Protótipo", d: "Desenvolvemos um piloto para aprovação com sua arte e formato ideal." },
  { n: "03", t: "Produção", d: "Fabricamos com fibra FSC em nossa planta carbono-neutra." },
  { n: "04", t: "Entrega", d: "Logística otimizada para todo Brasil com programação de reposição." },
];

export const Process = () => {
  return (
    <section id="processo" className="py-24 md:py-32 container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">— Como trabalhamos</div>
        <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] text-balance">
          Do papel à sua mão, em quatro passos honestos.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <div className="font-display text-7xl font-medium text-moss/30">{s.n}</div>
            <h3 className="font-display text-2xl font-semibold text-forest mt-4">{s.t}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
