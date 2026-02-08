"use client";

import { useReveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const sectionRef = useReveal();

  return (
    <section
      id="ueber-uns"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <div className="mb-4 flex items-center gap-3">
                <div className="section-divider" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                  Über uns
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-navy lg:text-4xl">
                Ihr kompetenter Partner für kunststofftechnische Profile
              </h2>
            </div>

            {/* ISO Badge */}
            <div className="reveal mt-10 flex items-start gap-4 rounded-lg border border-border bg-warm-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy">
                <svg className="h-6 w-6 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-navy">ISO 9001:2015</div>
                <div className="mt-1 text-sm leading-relaxed text-text-muted">
                  Qualitätsmanagement zertifiziert seit 1995. Kompromisslose Qualität in jedem Schritt.
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="reveal space-y-6">
              <p className="text-base leading-[1.8] text-text-muted">
                Die AC PROFIL AG ist ein Schweizer Hersteller massgeschneiderter
                Kunststoffprofile aus thermoplastischen Werkstoffen. Wir bedienen Kunden
                in der <strong className="font-medium text-text">Bau- und baunahen Industrie</strong>,
                der <strong className="font-medium text-text">Elektrobranche</strong>, im{" "}
                <strong className="font-medium text-text">Verkehrswesen</strong>, Sport, Freizeit,
                Fahrzeugbau und der Lebensmittelindustrie.
              </p>
              <p className="text-base leading-[1.8] text-text-muted">
                Wir bearbeiten die vielfältigen Anforderungen unserer Kunden individuell
                und pflegen einen ständigen Dialog &mdash; von der ersten Idee bis zur
                Realisierung. Unser Ziel sind Lösungen, die technisch einwandfrei,
                wirtschaftlich sinnvoll und praxisgerecht sind.
              </p>
            </div>

            {/* Feature grid */}
            <div className="reveal mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Individuelle Beratung",
                  text: "Persönliche Betreuung von der ersten Idee bis zum fertigen Produkt.",
                },
                {
                  title: "Schweizer Qualität",
                  text: "Produktion am Standort Huttwil mit höchsten Qualitätsstandards.",
                },
                {
                  title: "Thermoplast-Extrusion",
                  text: "Spezialisiert auf Voll- und Hohlprofile in beliebiger Länge.",
                },
                {
                  title: "Branchenübergreifend",
                  text: "Lösungen für Bau, Elektro, Verkehr, Sport und Lebensmittel.",
                },
              ].map((item) => (
                <div key={item.title} className="group rounded-lg p-4 transition-all duration-300 hover:bg-warm-white">
                  <div className="mb-2.5 h-[2px] w-6 bg-brass transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
