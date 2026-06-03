import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28 container mx-auto px-6">
      <div className="bg-gradient-leaf rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.05] max-w-3xl mx-auto text-balance">
          Pronto para embalar com consciência?
        </h2>
        <p className="text-primary-foreground/80 text-lg mt-6 max-w-xl mx-auto">
          Solicite um orçamento personalizado e receba amostras gratuitas dos nossos produtos.
        </p>
        <Button asChild size="lg" className="mt-10 bg-background text-forest hover:bg-cream rounded-full h-14 px-10 text-base group">
          <a href="mailto:contato@gtpack.com.br?subject=Quero%20começar%20agora">
            Começar agora
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};
