const stats = [
  { value: 'CN + TO', label: 'Piemonte' },
  { value: 'Web', label: 'Developer' },
  { value: '∞', label: 'Passione' },
]

export default function About() {
  return (
    <section id="about" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Chi sono
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
          Un developer piemontese<br className="hidden md:block" /> con la passione per il codice
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
            <p>
              Mi chiamo <span className="text-white font-medium">Oscar Cristaudo</span>, sono nato a{' '}
              <span className="text-violet-300 font-medium">Carmagnola (TO)</span> e vivo a{' '}
              <span className="text-violet-300 font-medium">Garessio (CN)</span>, nel cuore del Piemonte.
            </p>
            <p>
              Sono un developer con la passione per costruire prodotti digitali che uniscono
              funzionalità e design. Mi piace trasformare idee complesse in esperienze semplici
              e intuitive per l'utente finale.
            </p>
            <p>
              Che si tratti di un'interfaccia web, di un'applicazione mobile o di un progetto
              back-end, affronto ogni sfida con curiosità e attenzione ai dettagli.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors mt-2"
            >
              Parliamo
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 text-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-violet-400 mb-1">
                  {s.value}
                </span>
                <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}

            {/* Map card */}
            <div className="col-span-3 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-violet-400">
                  <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Garessio, Cuneo</p>
                <p className="text-zinc-500 text-xs">Piemonte, Italia · Nato a Carmagnola (TO)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
