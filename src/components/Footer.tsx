import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-8 pt-16 pb-8 sm:px-12 md:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="AC PROFIL AG"
              width={150}
              height={28}
              className="h-8 w-auto opacity-90"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              Ihr kompetenter Partner für massgeschneiderte Kunststoffprofile aus
              thermoplastischen Werkstoffen.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/acprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 transition-all duration-300 hover:bg-white/10 hover:text-white/70"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#prozess", label: "Prozess" },
                { href: "#fertigung", label: "Fertigung" },
                { href: "#produkte", label: "Produkte" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Kontakt */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Kontakt
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm leading-relaxed text-white/35">
                  Industriestrasse 5<br />4950 Huttwil
                </span>
              </li>
              <li>
                <a href="tel:+41629653878" className="flex items-center gap-3 text-sm text-white/35 transition-colors duration-200 hover:text-white/70">
                  <svg className="h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +41 62 965 38 78
                </a>
              </li>
              <li>
                <a href="mailto:ac-profil@bluewin.ch" className="flex items-center gap-3 text-sm text-white/35 transition-colors duration-200 hover:text-white/70">
                  <svg className="h-4 w-4 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  ac-profil@bluewin.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Qualität */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Qualität
            </h4>
            <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <div>
                  <div className="text-sm font-semibold text-white/70">ISO 9001:2015</div>
                  <div className="text-xs text-white/30">Zertifiziert seit 1995</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/25">
                Kompromisslose Qualität in jedem Produktionsschritt.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <div className="text-xs text-white/20">
            &copy; {currentYear} AC PROFIL AG. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <a href="/datenschutz" className="text-xs text-white/20 transition-colors duration-200 hover:text-white/45">
              Datenschutz
            </a>
            <a href="/impressum" className="text-xs text-white/20 transition-colors duration-200 hover:text-white/45">
              Impressum
            </a>
            <a href="https://kovactech.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <span className="text-[11px] text-white/15">by</span>
              <Image
                src="/creator-logo.png"
                alt="KovacTech"
                width={790}
                height={253}
                className="h-6 w-auto opacity-25 transition-opacity duration-300 hover:opacity-50"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
