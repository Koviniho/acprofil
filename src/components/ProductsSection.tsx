'use client'

import { useReveal } from '@/hooks/useReveal'

const industries = [
    {
        name: 'Bau & Baunahe Industrie',
        description:
            'Fenster-, Tür- und Fassadenprofile, Dichtungen, Kantenprofile und Abdeckleisten für den Hochbau.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
            </svg>
        ),
    },
    {
        name: 'Elektrobranche',
        description:
            'Isolationsprofile, Kabelkanäle und Schutzprofile für elektrische Installationen und Geräte.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
            </svg>
        ),
    },
    {
        name: 'Verkehr & Sicherheit',
        description:
            'Reflektorprofile, Leitplankenelemente und Markierungsprofile für die Verkehrssicherheit.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                />
            </svg>
        ),
    },
    {
        name: 'Sport & Freizeit',
        description:
            'Spezialprofile für Sport- und Freizeitgeräte, Spielplatzausrüstung und Outdoor-Anwendungen.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.016 6.016 0 01-2.77.682 6.016 6.016 0 01-2.77-.682"
                />
            </svg>
        ),
    },
    {
        name: 'Fahrzeugbau',
        description:
            'Dichtprofile, Kantenschutz und Zierleisten für die Automobil- und Fahrzeugindustrie.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
            </svg>
        ),
    },
    {
        name: 'Lebensmittelindustrie',
        description:
            'Lebensmittelkonforme Profile und Dichtungen nach den strengsten Hygienevorschriften.',
        icon: (
            <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
            </svg>
        ),
    },
]

export default function ProductsSection() {
    const sectionRef = useReveal()

    return (
        <section id="produkte" ref={sectionRef} className="relative bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
                {/* Header */}
                <div className="reveal mb-16 max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="section-divider" />
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            Produkte & Werkstoffe
                        </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold leading-tight text-navy lg:text-4xl">
                        Branchenübergreifende Lösungen
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text-muted">
                        Wir fertigen massgeschneiderte Kunststoffprofile aus thermoplastischen
                        Werkstoffen für die unterschiedlichsten Branchen und Einsatzgebiete.
                    </p>
                </div>

                {/* Industry grid */}
                <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map(industry => (
                        <div
                            key={industry.name}
                            className="reveal group rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:border-brass/30 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-warm-white text-steel transition-all duration-300 group-hover:bg-brass/10 group-hover:text-brass">
                                {industry.icon}
                            </div>
                            <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                                {industry.name}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Materials note */}
                <div className="reveal mt-12 flex items-start gap-4 rounded-lg bg-warm-white p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-steel/10">
                        <svg
                            className="h-5 w-5 text-steel"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-navy">
                            Thermoplastische Werkstoffe
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">
                            Wir verarbeiten eine breite Palette thermoplastischer Kunststoffe. Die
                            Werkstoffwahl erfolgt individuell nach Ihren technischen Anforderungen,
                            Einsatzbedingungen und wirtschaftlichen Kriterien.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
