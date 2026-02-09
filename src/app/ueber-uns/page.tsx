import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Über uns – AC PROFIL AG",
  description:
    "Jeder in seinem Fach ein Profi – wir in der Herstellung von Kunststoffprodukten. Ihr kompetenter Partner für kunststofftechnische Profile.",
};

export default function UeberUnsPage() {
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
                Über uns
              </span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Jeder in seinem Fach ein Profi&nbsp;&hellip;
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/50">
              &hellip; wir in der Herstellung von Kunststoffprodukten.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl px-8 sm:px-12 md:px-16 space-y-8">
            <p className="text-base leading-[1.85] text-text-muted">
              Als Kunststoffwerk, welches sich auf kundenspezifische Anwendung
              spezialisiert hat, decken wir einen Teil der Marktbedürfnisse an
              technischen Kunststoffprofilen ab. Wir sind vorwiegend für die Bau-,
              die Bauneben- und die Elektrobranche tätig. Wir stellen aber auch
              Profile nach Spezialapplikationen für die Verkehrssicherheit, den
              Sport, die Freizeit, den Fahrzeugbau und die Lebensmittelindustrie
              her.
            </p>

            <p className="text-base leading-[1.85] text-text-muted">
              Seit 1995 sind wir stolze Besitzer des ISO-9001 Zertifikates &mdash;
              heute entsprechend das ISO 9001:2015 Qualitätsmanagement. Dadurch
              gewähren wir Ihnen Beratungskompetenz und Qualität ohne Kompromisse.
              Die vielfältigen Anforderungen unserer Kunden werden individuell
              bearbeitet. Von der Idee bis zur gemeinsam erarbeiteten Umsetzung
              stehen wir mit Ihnen ständig in Verbindung. Unser Ziel ist, Lösungen
              zu finden, die technisch, wirtschaftlich und in der Praxis Ihren
              Wünschen entsprechen.
            </p>

            <div className="h-px bg-border" />

            <p className="text-lg font-medium leading-relaxed text-navy">
              Innovative, partnerschaftliche Lösungen für Ihre individuellen
              Anforderungen.
            </p>

            <p className="text-base leading-[1.85] text-text-muted">
              Wenn es um kunststofftechnische Profile geht, sind wir Ihr
              kompetenter Partner.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
