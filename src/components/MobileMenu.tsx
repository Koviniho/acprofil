'use client'

import Image from 'next/image'

interface MobileMenuProps {
  navLinks: { href: string; label: string }[]
  activeSection: string
  mobileOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ navLinks, activeSection, mobileOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy/70 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-border px-6">
            <Image src="/logo.png" alt="AC PROFIL AG" width={120} height={24} className="h-7 w-auto brightness-0 opacity-80" />
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace(/^\/?#?/, '')
                return (
                  <li
                    key={link.href}
                    style={{
                      opacity: mobileOpen ? 1 : 0,
                      transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.4s cubic-bezier(0.32,0.72,0,1) ${mobileOpen ? i * 60 + 100 : 0}ms`,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 ${
                        isActive ? 'bg-navy text-white' : 'text-text hover:bg-warm-white'
                      }`}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-warm-gray text-text-muted group-hover:bg-navy group-hover:text-white'
                      }`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-[15px] font-medium">{link.label}</span>
                      <svg className={`h-4 w-4 transition-all duration-300 ${isActive ? 'text-brass' : 'text-text-muted/40 group-hover:translate-x-1 group-hover:text-brass'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="border-t border-border p-6">
            <a href="/#kontakt" onClick={onClose} className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brass py-4 text-sm font-semibold text-white shadow-lg shadow-brass/25 transition-all duration-300 hover:bg-brass-light hover:-translate-y-0.5">
              Projekt anfragen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div className="mt-5 flex items-center justify-center gap-4 text-xs text-text-muted">
              <a href="tel:+41629653878" className="flex items-center gap-1.5 transition-colors hover:text-navy">
                <svg className="h-3.5 w-3.5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +41 62 965 38 78
              </a>
              <span className="h-3 w-px bg-border" />
              <a href="mailto:ac-profil@bluewin.ch" className="flex items-center gap-1.5 transition-colors hover:text-navy">
                <svg className="h-3.5 w-3.5 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
