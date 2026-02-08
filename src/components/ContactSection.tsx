'use client'

import { useReveal } from '@/hooks/useReveal'

export default function ContactSection() {
    const sectionRef = useReveal()

    return (
        <section id="kontakt" ref={sectionRef} className="relative bg-warm-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Left column */}
                    <div className="lg:col-span-5">
                        <div className="reveal">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="section-divider" />
                                <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                                    Kontakt
                                </span>
                            </div>
                            <h2 className="font-heading text-3xl font-bold leading-tight text-navy lg:text-4xl">
                                Sprechen wir über
                                <br />
                                Ihr Projekt
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-text-muted">
                                Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen
                                uns auf Ihre Anfrage.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="reveal mt-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy">
                                    <svg
                                        className="h-5 w-5 text-brass"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy">Adresse</div>
                                    <div className="mt-1 text-sm leading-relaxed text-text-muted">
                                        AC PROFIL AG
                                        <br />
                                        Industriestrasse 5<br />
                                        4950 Huttwil
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy">
                                    <svg
                                        className="h-5 w-5 text-brass"
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
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy">Telefon</div>
                                    <a
                                        href="tel:+41629653878"
                                        className="mt-1 block text-sm text-text-muted transition-colors hover:text-brass"
                                    >
                                        +41 (0) 62 965 38 78
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy">
                                    <svg
                                        className="h-5 w-5 text-brass"
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
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy">E-Mail</div>
                                    <a
                                        href="mailto:ac-profil@bluewin.ch"
                                        className="mt-1 block text-sm text-text-muted transition-colors hover:text-brass"
                                    >
                                        ac-profil@bluewin.ch
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy">
                                    <svg
                                        className="h-5 w-5 text-brass"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-navy">LinkedIn</div>
                                    <a
                                        href="https://linkedin.com/company/acprofil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-sm text-text-muted transition-colors hover:text-brass"
                                    >
                                        AC PROFIL AG
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column — form */}
                    <div className="lg:col-span-7">
                        <div className="reveal rounded-2xl border border-border bg-white p-8 shadow-xl shadow-black/5 lg:p-10">
                            <h3 className="font-heading text-xl font-bold text-navy">
                                Anfrage senden
                            </h3>
                            <p className="mt-2 text-sm text-text-muted">
                                Beschreiben Sie uns Ihr Projekt und wir melden uns zeitnah bei
                                Ihnen.
                            </p>

                            <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-navy"
                                            htmlFor="name"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            className="mt-2 w-full rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"
                                            placeholder="Ihr Name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-navy"
                                            htmlFor="firma"
                                        >
                                            Firma
                                        </label>
                                        <input
                                            id="firma"
                                            type="text"
                                            className="mt-2 w-full rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"
                                            placeholder="Firma (optional)"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-navy"
                                            htmlFor="email"
                                        >
                                            E-Mail *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            className="mt-2 w-full rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"
                                            placeholder="ihre@email.ch"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-navy"
                                            htmlFor="telefon"
                                        >
                                            Telefon
                                        </label>
                                        <input
                                            id="telefon"
                                            type="tel"
                                            className="mt-2 w-full rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"
                                            placeholder="+41 ..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className="block text-sm font-medium text-navy"
                                        htmlFor="nachricht"
                                    >
                                        Nachricht *
                                    </label>
                                    <textarea
                                        id="nachricht"
                                        rows={5}
                                        required
                                        className="mt-2 w-full resize-none rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"
                                        placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2.5 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-steel hover:shadow-navy/30 hover:-translate-y-0.5"
                                >
                                    Nachricht senden
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
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
