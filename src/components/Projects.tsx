import { useTranslation } from 'react-i18next'

function ExternalIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="opacity-50">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ['React', 'TypeScript', 'Tailwind'],
      href: 'https://github.com/OscarC03/landing',
      stat: t('projects.p1.stat'),
    },
    {
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ['Next.js', 'TypeScript', 'PHP'],
      href: 'https://github.com/OscarC03/rsa-schedule',
      stat: t('projects.p2.stat'),
    },
    {
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ['Apache Cordova', 'Java'],
      href: 'https://github.com/OscarC03/DailyLife-App',
      stat: t('projects.p3.stat'),
    },
  ]

  return (
    <section id="projects" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('projects.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-md">
                  {p.stat}
                </span>
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1 text-sm">
                  {t('projects.open')} <ExternalIcon />
                </span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {tag}
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
