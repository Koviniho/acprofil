import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz – AC PROFIL AG",
  description:
    "Datenschutzerklärung und rechtliche Hinweise der AC PROFIL AG, Huttwil, Schweiz.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-20 sm:pt-36 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-[#131d32] to-[#1a253d]" />
          <div className="grain-overlay" />
          <div className="relative z-10 px-8 sm:px-12 md:px-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-200 hover:text-white/70"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Zurück zur Startseite
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-white/30" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                Rechtliches
              </span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Datenschutz
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl px-8 sm:px-12 md:px-16 space-y-10">
            <div>
              <p className="text-base leading-[1.85] text-text-muted">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
                halten uns strikt an die Regeln der Datenschutzgesetze.
                Personenbezogene Daten werden auf dieser Webseite nur im technisch
                notwendigen Umfang erhoben. In keinem Fall werden die erhobenen
                Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-text-muted">
                Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, wie
                wir diesen Schutz gewährleisten und welche Art von Daten zu welchem
                Zweck erhoben werden.
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">
                Rechtliche Hinweise
              </h2>
              <p className="mt-3 text-base leading-[1.85] text-text-muted">
                AC PROFIL AG distanziert sich von dem Inhalt der Seiten, auf die
                gelinkt wird und übernimmt dafür keine Haftung. Der Inhalt liegt in
                der alleinigen Verantwortung des jeweiligen Anbieters und spiegelt
                nicht die Meinung der Firma AC PROFIL AG wieder. Sollte eine der
                Seiten, auf die gelinkt wird, bedenkliche Inhalte aufweisen, melden
                Sie es bitte unserem Webmaster; in einem solchen Falle wird der Link
                sofort gelöscht.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-text-muted">
                Der Inhalt dieser Website wurde sorgfältig bearbeitet und überprüft,
                um nur vollständige und richtige Informationen zu veröffentlichen.
                AC PROFIL AG kann aber keine Haftung oder Garantie für Aktualität,
                Richtigkeit und Vollständigkeit der Informationen übernehmen.
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">
                Copyright
              </h2>
              <p className="mt-3 text-base leading-[1.85] text-text-muted">
                Sämtliche Texte, Grafiken, Bilder, Layout und Quelltexte sind
                urheberrechtlich geschützt. Eine Verwendung ist nur mit
                ausdrücklicher Genehmigung der Firma AC PROFIL AG zulässig.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-text-muted">
                Gerichtsstand ist der Hauptsitz der AC PROFIL AG,
                Industriestrasse 5, 4950 Huttwil, Schweiz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
