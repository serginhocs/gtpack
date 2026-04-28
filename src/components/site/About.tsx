import { motion } from "framer-motion";
import { TreePine, Recycle, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">— Quem somos</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] text-balance">
            Uma fábrica feita de propósito.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 lg:pt-6"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            A <span className="text-forest font-medium">Gtpack</span> nasceu da inquietação de ver o mundo
            sufocado pelo plástico descartável. Há mais de uma década transformamos
            fibra de papel em embalagens que cumprem a função, encantam pelo design
            e voltam à terra como adubo.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: TreePine, title: "Origem responsável", text: "Papel certificado FSC de florestas plantadas." },
              { icon: Recycle, title: "Ciclo fechado", text: "100% compostável em até 90 dias." },
              { icon: Heart, title: "Feito com carinho", text: "Produção nacional, mãos brasileiras." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/50 border border-border"
              >
                <f.icon className="w-7 h-7 text-moss mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-forest mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
