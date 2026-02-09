import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – AC PROFIL AG",
  description:
    "Impressum und rechtliche Informationen der AC PROFIL AG, Huttwil, Schweiz.",
};

export default function ImpressumPage() {
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
              <div className="h-[2px] w-10 bg-brass/70" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass/80 sm:text-xs">
                Rechtliches
              </span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Impressum
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-warm-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl px-8 sm:px-12 md:px-16 space-y-10">
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">AC PROFIL AG</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Industriestrasse 5<br />
                4950 Huttwil<br />
                Schweiz
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Kontakt</h2>
              <div className="mt-3 space-y-2 text-sm text-text-muted">
                <p>Tel: <a href="tel:+41629653878" className="transition-colors hover:text-brass">0041 (0) 62 965 38 78</a></p>
                <p>Fax: 0041 (0) 62 965 36 75</p>
                <p>Mail: <a href="mailto:ac-profil@bluewin.ch" className="transition-colors hover:text-brass">ac-profil@bluewin.ch</a></p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Mehrwertsteuer</h2>
              <p className="mt-3 text-sm text-text-muted">UID Nr. CHE-107.496.826-MWST</p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Info-Service</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Anfragen richten Sie bitte an unseren Info-Service: <a href="tel:+41629653878" className="font-medium text-text transition-colors hover:text-brass">0041 (0) 62 965 38 78</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
