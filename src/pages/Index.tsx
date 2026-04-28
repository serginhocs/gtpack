import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Sustainability } from "@/components/site/Sustainability";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Sustainability />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
