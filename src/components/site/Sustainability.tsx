import { motion } from "framer-motion";

export const Sustainability = () => {
  return (
    <section id="sustentabilidade" className="py-24 md:py-32 bg-gradient-forest text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--leaf)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--moss)) 0%, transparent 50%)'
      }} />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-leaf mb-4">— Impacto</div>
          <h2 className="font-display text-4xl md:text-7xl font-medium leading-[1.02] text-balance">
            Cada copo nosso é uma <em className="italic text-leaf">pequena floresta</em> em movimento.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { n: "2.4M", l: "kg de plástico evitados" },
            { n: "180k", l: "árvores plantadas" },
            { n: "90 dias", l: "para compostar" },
            { n: "FSC®", l: "Certificação global" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-primary-foreground/20 pt-6"
            >
              <div className="font-display text-5xl md:text-6xl font-medium text-leaf">{s.n}</div>
              <div className="text-sm mt-3 text-primary-foreground/70">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
