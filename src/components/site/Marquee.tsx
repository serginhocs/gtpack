export const Marquee = () => {
  const items = ["Hamburguerias", "Lanchonetes", "Foodtrucks", "Pizzarias", "Hot dog", "Delivery", "Fried chicken", "Smash burgers", "Tacos", "Drive-thru"];
  return (
    <section className="border-y border-border bg-cream py-8 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_35s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl text-forest/60">
            <span>{it}</span>
            <span className="text-moss">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
};
