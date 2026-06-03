import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import burger from "@/assets/product-burger.jpg";
import fries from "@/assets/product-fries.jpg";
import soda from "@/assets/product-soda.jpg";
import icecream from "@/assets/product-icecream.jpg";

const products = [
  { img: burger, name: "Caixas de hambúrguer", desc: "Linha clamshell e wrap em kraft. Resistente à gordura, mantém o crocante e abre fácil.", tag: "Mais vendido" },
  { img: fries, name: "Embalagens de fritas", desc: "Cones, copos e cestas para batatas, onion rings e nuggets. Vários tamanhos e gramaturas.", tag: "Personalizável" },
  { img: soda, name: "Copos para bebidas", desc: "Copos de papel de 200ml a 700ml com tampa e canudo de papel. Perfeitos para refri, suco e milkshake.", tag: "Combo completo" },
  { img: icecream, name: "Potes para sorvetes", desc: "Potes de papel para sorvete e açaí, de 120ml a 500ml. Resistentes ao frio e à umidade, com tampa opcional.", tag: "Novo" },
];

export const Products = () => {
  return (
    <section id="produtos" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">— Linha fast food</div>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] max-w-2xl text-balance">
              Tudo o que sua operação precisa, do combo ao delivery.
            </h2>
          </div>
          <a href="#" className="text-forest underline underline-offset-4 hover:text-moss transition-colors">
            Baixar catálogo completo →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {["Wraps & papéis antigordura", "Saquinhos para hot dog", "Bandejas e cumbucas", "Sacolas delivery kraft"].map((extra) => (
            <div key={extra} className="bg-background border border-border rounded-2xl p-5 text-sm text-forest font-medium">
              + {extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
