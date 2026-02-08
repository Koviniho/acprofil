'use client'

import { useReveal } from '@/hooks/useReveal'

const steps = [
    {
        number: '01',
        title: 'Handskizze',
        subtitle: 'Ihre Idee',
        description:
            'Sie präsentieren uns Ihre Idee — als Handskizze, technische Zeichnung oder einfach im Gespräch. Wir hören zu und verstehen Ihre Anforderungen.',
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Technische Zeichnung',
        subtitle: 'Unser Entwurf',
        description:
            'Unsere Ingenieure erstellen eine detaillierte technische Zeichnung des Fertigteils. Gemeinsam optimieren wir das Design für die Produktion.',
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Fertiges Profil',
        subtitle: 'Ihr Produkt',
        description:
            'Durch unser Extrusionsverfahren entsteht Ihr massgeschneidertes Kunststoffprofil — in höchster Qualität und beliebiger Länge.',
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
            </svg>
        ),
    },
]

export default function ProcessSection() {
    const sectionRef = useReveal()

    return (
        <section
            id="prozess"
            ref={sectionRef}
            className="relative bg-warm-white py-20 diagonal-lines sm:py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20">
                {/* Header */}
                <div className="reveal mb-16 max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="section-divider" />
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            Von der Idee zum Produkt
                        </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold leading-tight text-navy lg:text-4xl">
                        Werdegang eines Kunden-Profiles
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text-muted">
                        In drei Schritten verwandeln wir Ihre Idee in ein hochwertiges
                        Kunststoffprofil. Ständiger Dialog und enge Zusammenarbeit garantieren das
                        bestmögliche Ergebnis.
                    </p>
                </div>

                {/* Steps */}
                <div className="stagger-children grid gap-8 lg:grid-cols-3">
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className="reveal group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Connection line */}
                            {i < steps.length - 1 && (
                                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[1px] w-8 -translate-y-1/2 translate-x-full bg-border lg:block" />
                            )}

                            <div className="process-number">{step.number}</div>

                            <div className="relative z-10 text-brass">{step.icon}</div>

                            <div className="relative z-10 mt-5">
                                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-brass">
                                    {step.subtitle}
                                </span>
                                <h3 className="mt-1.5 font-heading text-xl font-bold text-navy">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="relative z-10 mt-4 text-sm leading-relaxed text-text-muted">
                                {step.description}
                            </p>

                            <div className="relative z-10 mt-6 h-[2px] w-8 bg-brass/30 transition-all duration-300 group-hover:w-16 group-hover:bg-brass" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
