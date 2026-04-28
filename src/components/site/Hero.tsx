import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cups.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-forest mb-6"
          >
            <Sprout className="w-4 h-4 text-moss" />
            <span>Embalagens fast food 100% biodegradáveis</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] text-forest text-balance"
          >
            Fast food<br />
            sem deixar<br />
            <em className="italic text-moss">rastro.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            A Gtpack produz copos de papel, caixas de hambúrguer, embalagens de
            batata frita e wraps para o universo do fast food. Resistência,
            design e zero plástico — do balcão ao delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-forest hover:bg-forest-deep text-primary-foreground rounded-full px-8 h-12 group">
              Ver catálogo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-forest/30 text-forest hover:bg-forest hover:text-primary-foreground">
              Fale com a gente
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "12M+", l: "Embalagens/mês" },
              { n: "850+", l: "Redes parceiras" },
              { n: "0%", l: "Plástico" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-semibold text-forest">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src={heroImg}
              alt="Copos de papel kraft sustentáveis Gtpack"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-soft border border-border max-w-[220px] hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-leaf flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-sm text-forest">Certificado FSC</div>
                <div className="text-xs text-muted-foreground">Fibra responsável</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
