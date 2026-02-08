import Image from 'next/image'

export default function HeroSection() {
    return (
        <section
            id="start"
            className="relative flex min-h-[100svh] items-start overflow-hidden bg-navy"
        >
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-[#0f1d35] to-[#162a4a]" />
            <div className="grain-overlay" />

            {/* Geometric grid lines — right half only */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.03] lg:w-1/2">
                <svg
                    viewBox="0 0 600 800"
                    className="h-full w-full"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <line x1="150" y1="0" x2="150" y2="800" stroke="white" strokeWidth="1" />
                    <line x1="350" y1="0" x2="350" y2="800" stroke="white" strokeWidth="1" />
                    <line x1="550" y1="0" x2="550" y2="800" stroke="white" strokeWidth="1" />
                    <line x1="0" y1="250" x2="600" y2="250" stroke="white" strokeWidth="1" />
                    <line x1="0" y1="500" x2="600" y2="500" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            {/* Hero image — right side */}
            <div className="pointer-events-none absolute right-0 top-0 z-[1] w-[70%] opacity-30 sm:w-[60%] sm:opacity-40 lg:w-[55%] lg:opacity-60 xl:w-[52%]">
                <Image
                    src="/hero-profile.png"
                    alt="Kunststoffprofile"
                    width={616}
                    height={405}
                    className="w-full object-contain"
                    priority
                />
            </div>

            {/* Content wrapper — centered within max-w container */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-52 pb-24 sm:px-10 sm:pt-56 sm:pb-28 md:px-16 lg:px-20 lg:pt-36 lg:pb-0">
                <div className="max-w-2xl xl:max-w-[720px]">
                    {/* Overline */}
                    <div className="mb-5 flex items-center gap-3 sm:mb-6">
                        <div className="h-px w-8 bg-brass/70 sm:w-10" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brass/80 sm:text-xs sm:tracking-[0.22em]">
                            Seit 1995 ISO 9001 zertifiziert
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                        Kunststoffprofile
                        <br />
                        <span className="bg-gradient-to-r from-white/40 to-white/20 bg-clip-text text-transparent">
                            nach Mass
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-sm text-sm leading-[1.7] text-white/50 sm:mt-6 sm:max-w-md sm:text-base sm:leading-[1.75] lg:max-w-lg">
                        Jeder in seinem Fach ein Profi &mdash; wir in der Herstellung von
                        Kunststoffprodukten. Innovative, partnerschaftliche Lösungen für Ihre
                        individuellen Anforderungen.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <a
                            href="#kontakt"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brass px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brass/25 transition-all duration-300 hover:bg-brass-light hover:shadow-brass/35 hover:-translate-y-0.5 sm:px-6 sm:py-3.5"
                        >
                            Projekt besprechen
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
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                        <a
                            href="#prozess"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white sm:px-6 sm:py-3.5"
                        >
                            Unser Prozess
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex gap-10 border-t border-white/10 pt-6 sm:mt-14 sm:gap-12 lg:mt-16">
                        {[
                            { value: '30+', label: 'Jahre Erfahrung' },
                            { value: 'ISO', label: '9001:2015' },
                            { value: '100%', label: 'Swiss Made' },
                        ].map(stat => (
                            <div key={stat.value} className="group">
                                <div className="font-heading text-xl font-bold text-white transition-colors duration-300 group-hover:text-brass sm:text-2xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-[11px] font-medium text-white/40 uppercase tracking-wider sm:text-xs">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator — desktop only */}
            <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex flex-col items-center gap-2 opacity-40">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white">Scroll</span>
                    <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
                </div>
            </div>
        </section>
    )
}
