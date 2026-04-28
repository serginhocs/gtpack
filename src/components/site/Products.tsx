import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cups from "@/assets/product-cups.jpg";
import boxes from "@/assets/product-boxes.jpg";
import bags from "@/assets/product-bags.jpg";

const products = [
  { img: cups, name: "Copos de papel", desc: "Linha completa de 80ml a 500ml. Para café, sucos, sorvetes e sopas.", tag: "Mais vendido" },
  { img: boxes, name: "Caixas & embalagens", desc: "Pratos, marmitas e caixas para delivery. Resistentes ao calor e à gordura.", tag: "Personalizável" },
  { img: bags, name: "Sacos & sacolas", desc: "Sacolas kraft, sacos para pão e padaria. Alça torcida ou retorcida.", tag: "Atacado" },
];

export const Products = () => {
  return (
    <section id="produtos" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">— Catálogo</div>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] max-w-2xl text-balance">
              Tudo o que sua marca precisa, sem deixar rastro.
            </h2>
          </div>
          <a href="#" className="text-forest underline underline-offset-4 hover:text-moss transition-colors">
            Baixar catálogo completo →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-background rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs text-forest border border-border">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-forest">{p.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-forest/40 group-hover:text-moss group-hover:rotate-12 transition-all" />
                </div>
                <p className="text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
