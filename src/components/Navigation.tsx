'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const navLinks = [
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#prozess', label: 'Prozess' },
    { href: '#fertigung', label: 'Fertigung' },
    { href: '#produkte', label: 'Produkte' },
    { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)

            // Track active section
            const sections = navLinks.map(l => l.href.slice(1))
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
        onScroll() // Initial check
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const closeMobile = useCallback(() => setMobileOpen(false), [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])

    return (
        <>
            {/* Main Navigation */}
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_20px_-4px_rgba(0,0,0,0.08)]'
                        : 'bg-transparent'
                }`}
            >
                {/* Top accent line */}
                <div
                    className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brass to-transparent transition-opacity duration-500 ${
                        scrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                <nav className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
                    <div className="flex h-16 items-center justify-between lg:h-[72px]">
                        {/* Logo */}
                        <a
                            href="#start"
                            className="relative z-10 flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
                        >
                            <Image
                                src="/logo.png"
                                alt="AC PROFIL AG"
                                width={160}
                                height={32}
                                className={`h-8 w-auto transition-all duration-500 sm:h-9 ${
                                    scrolled
                                        ? 'brightness-0 opacity-90'
                                        : 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                                }`}
                                priority
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center lg:flex">
                            {/* Nav Links */}
                            <div className="flex items-center">
                                {navLinks.map(link => {
                                    const isActive = activeSection === link.href.slice(1)
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="group relative px-4 py-2"
                                        >
                                            <span
                                                className={`relative z-10 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                                                    scrolled
                                                        ? isActive
                                                            ? 'text-navy'
                                                            : 'text-text-muted group-hover:text-navy'
                                                        : isActive
                                                          ? 'text-white'
                                                          : 'text-white/70 group-hover:text-white'
                                                }`}
                                            >
                                                {link.label}
                                            </span>

                                            {/* Hover/Active underline */}
                                            <span
                                                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-brass transition-all duration-300 ${
                                                    isActive
                                                        ? 'w-5 opacity-100'
                                                        : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'
                                                }`}
                                            />
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Divider */}
                            <div
                                className={`mx-5 h-5 w-px transition-colors duration-500 ${
                                    scrolled ? 'bg-border' : 'bg-white/20'
                                }`}
                            />

                            {/* CTA Button */}
                            <a
                                href="#kontakt"
                                className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-navy text-white shadow-lg shadow-navy/20 hover:shadow-navy/30'
                                        : 'bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20 hover:ring-white/40'
                                }`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Anfrage
                                    <svg
                                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </span>
                                {/* Hover gradient overlay */}
                                <div
                                    className={`absolute inset-0 -translate-x-full bg-gradient-to-r transition-transform duration-500 group-hover:translate-x-0 ${
                                        scrolled
                                            ? 'from-steel to-navy'
                                            : 'from-white/10 to-transparent'
                                    }`}
                                />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
                                mobileOpen
                                    ? 'bg-warm-white'
                                    : scrolled
                                      ? 'hover:bg-warm-white'
                                      : 'hover:bg-white/10'
                            }`}
                            aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
                        >
                            <div className="flex w-5 flex-col items-center gap-[5px]">
                                <span
                                    className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                                        mobileOpen
                                            ? 'translate-y-[7px] rotate-45 bg-navy'
                                            : scrolled
                                              ? 'bg-navy'
                                              : 'bg-white'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                                        mobileOpen
                                            ? 'w-0 bg-navy opacity-0'
                                            : scrolled
                                              ? 'w-3.5 bg-navy'
                                              : 'w-3.5 bg-white'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                                        mobileOpen
                                            ? '-translate-y-[7px] -rotate-45 bg-navy'
                                            : scrolled
                                              ? 'bg-navy'
                                              : 'bg-white'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-navy/70 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={closeMobile}
                aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col">
                    {/* Mobile Header */}
                    <div className="flex h-16 items-center border-b border-border px-6">
                        <Image
                            src="/logo.png"
                            alt="AC PROFIL AG"
                            width={120}
                            height={24}
                            className="h-7 w-auto brightness-0 opacity-80"
                        />
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="flex-1 overflow-y-auto px-4 py-6">
                        <ul className="space-y-1">
                            {navLinks.map((link, i) => {
                                const isActive = activeSection === link.href.slice(1)
                                return (
                                    <li
                                        key={link.href}
                                        style={{
                                            opacity: mobileOpen ? 1 : 0,
                                            transform: mobileOpen
                                                ? 'translateX(0)'
                                                : 'translateX(20px)',
                                            transition: `all 0.4s cubic-bezier(0.32,0.72,0,1) ${
                                                mobileOpen ? i * 60 + 100 : 0
                                            }ms`,
                                        }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={closeMobile}
                                            className={`group flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-navy text-white'
                                                    : 'text-text hover:bg-warm-white'
                                            }`}
                                        >
                                            {/* Number badge */}
                                            <span
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-warm-gray text-text-muted group-hover:bg-navy group-hover:text-white'
                                                }`}
                                            >
                                                {String(i + 1).padStart(2, '0')}
                                            </span>

                                            {/* Label */}
                                            <span className="flex-1 text-[15px] font-medium">
                                                {link.label}
                                            </span>

                                            {/* Arrow */}
                                            <svg
                                                className={`h-4 w-4 transition-all duration-300 ${
                                                    isActive
                                                        ? 'text-brass'
                                                        : 'text-text-muted/40 group-hover:translate-x-1 group-hover:text-brass'
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Mobile Footer CTA */}
                    <div className="border-t border-border p-6">
                        <a
                            href="#kontakt"
                            onClick={closeMobile}
                            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brass py-4 text-sm font-semibold text-white shadow-lg shadow-brass/25 transition-all duration-300 hover:bg-brass-light hover:-translate-y-0.5"
                        >
                            Projekt anfragen
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </a>

                        {/* Contact info */}
                        <div className="mt-5 flex items-center justify-center gap-4 text-xs text-text-muted">
                            <a
                                href="tel:+41629653878"
                                className="flex items-center gap-1.5 transition-colors hover:text-navy"
                            >
                                <svg
                                    className="h-3.5 w-3.5 text-brass"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                                +41 62 965 38 78
                            </a>
                            <span className="h-3 w-px bg-border" />
                            <a
                                href="mailto:ac-profil@bluewin.ch"
                                className="flex items-center gap-1.5 transition-colors hover:text-navy"
                            >
                                <svg
                                    className="h-3.5 w-3.5 text-brass"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
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
