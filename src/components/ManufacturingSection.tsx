"use client";

import { useReveal } from "@/hooks/useReveal";

export default function ManufacturingSection() {
  const sectionRef = useReveal();

  return (
    <section
      id="fertigung"
      ref={sectionRef}
      className="relative overflow-hidden bg-navy py-24 lg:py-32"
    >
      <div className="grain-overlay" />

      {/* Accent line */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="reveal">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-brass" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Kunststoffprofilherstellung
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white lg:text-4xl">
                Extrusion &mdash; Präzision
                <br />
                in jedem Profil
              </h2>
            </div>

            <div className="reveal mt-8 space-y-5">
              <p className="text-base leading-[1.8] text-white/60">
                Bei der Extrusion werden feste bis dickflüssige, durch Kälte härtbare
                Massen unter Zugabe von Temperatur mit Druck kontinuierlich durch eine
                formgebende Öffnung gepresst.
              </p>
              <p className="text-base leading-[1.8] text-white/60">
                Der Begriff stammt vom lateinischen{" "}
                <em className="text-white/80">&laquo;extrudere&raquo;</em> &mdash;
                hinausstossen oder -treiben. Dieses Verfahren ermöglicht die Herstellung
                von Profilen gemäss dem Querschnitt des Werkzeugs in beliebiger Länge.
              </p>
            </div>

            {/* Profile types */}
            <div className="reveal mt-12 grid grid-cols-2 gap-6">
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brass/30 hover:bg-white/10">
                <div className="font-heading text-3xl font-bold text-brass">Voll</div>
                <div className="mt-1.5 text-sm font-medium text-white/60">Vollprofile</div>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  Massive Querschnitte für maximale Stabilität und Belastbarkeit.
                </p>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brass/30 hover:bg-white/10">
                <div className="font-heading text-3xl font-bold text-brass">Hohl</div>
                <div className="mt-1.5 text-sm font-medium text-white/60">Hohlprofile</div>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  Leichtbau-Lösungen mit optimiertem Materialverbrauch.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — process diagram */}
          <div className="reveal">
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-sm lg:p-10">
              <h3 className="font-heading text-xl font-semibold text-white">
                Extrusionsprozess
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  { step: "Granulat", desc: "Thermoplastisches Rohmaterial", w: "100%" },
                  { step: "Erhitzen", desc: "Temperaturzufuhr & Plastifizierung", w: "85%" },
                  { step: "Pressen", desc: "Druck durch formgebende Düse", w: "68%" },
                  { step: "Kühlen", desc: "Kalibrierung & Aushärtung", w: "50%" },
                  { step: "Profil", desc: "Fertiges Kunststoffprofil", w: "35%" },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="w-6 text-right font-mono text-sm font-medium text-brass/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div
                        className="rounded-lg bg-gradient-to-r from-brass/25 to-brass/5 px-5 py-3 transition-all duration-300 hover:from-brass/35 hover:to-brass/10"
                        style={{ width: item.w }}
                      >
                        <div className="text-sm font-semibold text-white">{item.step}</div>
                        <div className="text-xs text-white/50">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
                <svg className="h-4 w-4 text-brass/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <span className="text-[11px] text-white/30">
                  Voll- und Hohlprofile nach Kundenspezifikation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
