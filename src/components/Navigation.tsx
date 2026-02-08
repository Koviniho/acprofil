'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/#prozess', label: 'Prozess' },
  { href: '/#fertigung', label: 'Fertigung' },
  { href: '/#produkte', label: 'Produkte' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.replace(/^\/?#?/, ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_20px_-4px_rgba(0,0,0,0.08)]' : 'bg-transparent'
      }`}>
        <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brass to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

        <nav className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            <a href="/" className="relative z-10 flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80">
              <Image src="/logo.png" alt="AC PROFIL AG" width={160} height={32} className={`h-8 w-auto transition-all duration-500 sm:h-9 ${scrolled ? 'brightness-0 opacity-90' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}`} priority />
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center lg:flex">
              <div className="flex items-center">
                {navLinks.map(link => {
                  const isActive = activeSection === link.href.replace(/^\/?#?/, '')
                  return (
                    <a key={link.href} href={link.href} className="group relative px-4 py-2">
                      <span className={`relative z-10 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                        scrolled ? (isActive ? 'text-navy' : 'text-text-muted group-hover:text-navy') : (isActive ? 'text-white' : 'text-white/70 group-hover:text-white')
                      }`}>{link.label}</span>
                      <span className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-brass transition-all duration-300 ${isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'}`} />
                    </a>
                  )
                })}
              </div>
              <div className={`mx-5 h-5 w-px transition-colors duration-500 ${scrolled ? 'bg-border' : 'bg-white/20'}`} />
              <a href="/#kontakt" className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                scrolled ? 'bg-navy text-white shadow-lg shadow-navy/20 hover:shadow-navy/30' : 'bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20 hover:ring-white/40'
              }`}>
                <span className="relative z-10 flex items-center gap-2">
                  Anfrage
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r transition-transform duration-500 group-hover:translate-x-0 ${scrolled ? 'from-steel to-navy' : 'from-white/10 to-transparent'}`} />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${mobileOpen ? 'bg-warm-white' : scrolled ? 'hover:bg-warm-white' : 'hover:bg-white/10'}`} aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}>
              <div className="flex w-5 flex-col items-center gap-[5px]">
                <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45 bg-navy' : scrolled ? 'bg-navy' : 'bg-white'}`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${mobileOpen ? 'w-0 bg-navy opacity-0' : scrolled ? 'w-3.5 bg-navy' : 'w-3.5 bg-white'}`} />
                <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45 bg-navy' : scrolled ? 'bg-navy' : 'bg-white'}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu navLinks={navLinks} activeSection={activeSection} mobileOpen={mobileOpen} onClose={closeMobile} />
    </>
  )
}
