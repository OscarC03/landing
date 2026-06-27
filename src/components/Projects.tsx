const projects = [
  {
    title: 'Portfolio personale',
    description:
      'Questo sito! Costruito con React, TypeScript e Tailwind CSS per presentare me stesso e i miei lavori.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    href: '#',
    highlight: true,
  },
  {
    title: 'Web App',
    description:
      'Progetto full-stack con interfaccia moderna, autenticazione e integrazione con API esterne.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'Tool CLI',
    description:
      'Strumento a riga di comando per automatizzare workflow e task ripetitivi nel processo di sviluppo.',
    tags: ['Python', 'Shell', 'Automazione'],
    href: '#',
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="ml-1 opacity-60">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Lavori
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Progetti selezionati
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a
              key={p.title}
              href={p.href}
              className={`group block rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 ${
                p.highlight
                  ? 'border-violet-500/50 bg-violet-600/10'
                  : 'border-zinc-800 bg-zinc-800/40 hover:border-zinc-600'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-700 flex items-center justify-center">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-violet-400">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center text-sm">
                  Apri <ExternalIcon />
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-zinc-700/60 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
