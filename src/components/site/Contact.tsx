import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const address =
    "Rua Maria Aparecida de Oliveira, 73 - Loteamento Comercial Monte Castelo, Indaiatuba - SP";
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-moss mb-4">
            — Fale com a GTPACK
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-forest leading-[1.05] text-balance">
            Vamos embalar a sua operação?
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed">
            Visite nossa fábrica em Indaiatuba ou entre em contato para
            solicitar amostras e orçamentos personalizados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/40 border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest text-primary-foreground flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Rua Maria Aparecida de Oliveira, 73<br />
                    Loteamento Comercial Monte Castelo<br />
                    Indaiatuba — SP
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest text-primary-foreground flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    Telefone
                  </h3>
                  <a
                    href="tel:+551939340463"
                    className="text-muted-foreground mt-1 leading-relaxed hover:text-moss transition-colors block"
                  >
                    (19) 3934-0463
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest text-primary-foreground flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contato@gtpack.com.br"
                    className="text-muted-foreground mt-1 leading-relaxed hover:text-moss transition-colors block"
                  >
                    contato@gtpack.com.br
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-forest text-primary-foreground flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    Atendimento
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Segunda a sexta — 8h às 18h
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-forest hover:bg-forest-deep text-primary-foreground rounded-full px-7 h-12 font-medium transition-colors"
            >
              Como chegar →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-border shadow-soft min-h-[460px] lg:min-h-full"
          >
            <iframe
              title="Localização GTPACK — Indaiatuba"
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};