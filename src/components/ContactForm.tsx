export default function ContactForm() {
  const inputClass = "mt-2 w-full rounded-lg border border-border bg-warm-white px-4 py-3.5 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-brass focus:ring-2 focus:ring-brass/20 hover:border-text-muted/50"

  return (
    <div className="reveal rounded-2xl border border-border bg-white p-8 shadow-xl shadow-black/5 lg:p-10">
      <h3 className="font-heading text-xl font-bold text-navy">Anfrage senden</h3>
      <p className="mt-2 text-sm text-text-muted">
        Beschreiben Sie uns Ihr Projekt und wir melden uns zeitnah bei Ihnen.
      </p>

      <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-navy" htmlFor="name">Name *</label>
            <input id="name" type="text" required className={inputClass} placeholder="Ihr Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy" htmlFor="firma">Firma</label>
            <input id="firma" type="text" className={inputClass} placeholder="Firma (optional)" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-navy" htmlFor="email">E-Mail *</label>
            <input id="email" type="email" required className={inputClass} placeholder="ihre@email.ch" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy" htmlFor="telefon">Telefon</label>
            <input id="telefon" type="tel" className={inputClass} placeholder="+41 ..." />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy" htmlFor="nachricht">Nachricht *</label>
          <textarea id="nachricht" rows={5} required className={`${inputClass} resize-none`} placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..." />
        </div>

        <button type="submit" className="inline-flex items-center gap-2.5 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-steel hover:shadow-navy/30 hover:-translate-y-0.5">
          Nachricht senden
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  )
}
