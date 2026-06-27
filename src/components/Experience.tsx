import { useTranslation } from 'react-i18next'

function PinIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-zinc-500">
      <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export default function Experience() {
  const { t } = useTranslation()

  const items = [
    {
      type: 'work' as const,
      role: t('exp.job1.role'),
      company: t('exp.job1.company'),
      period: t('exp.job1.period'),
      location: t('exp.job1.location'),
      desc: t('exp.job1.desc'),
      tags: ['C#', '.NET', 'React', 'TypeScript', 'Dynamics 365'],
      current: true,
    },
    {
      type: 'work' as const,
      role: t('exp.job2.role'),
      company: t('exp.job2.company'),
      period: t('exp.job2.period'),
      location: t('exp.job2.location'),
      desc: t('exp.job2.desc'),
      tags: ['Web', 'Software', 'C#'],
      current: false,
    },
    {
      type: 'edu' as const,
      role: t('exp.edu.role'),
      company: t('exp.edu.company'),
      period: t('exp.edu.period'),
      location: t('exp.edu.location'),
      desc: t('exp.edu.desc'),
      tags: ['Java', 'Networking', 'Systems', 'Programming'],
      current: false,
    },
  ]

  return (
    <section id="experience" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('exp.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t('exp.title')}
        </h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="md:pl-16 relative">
                <div className="absolute left-0 top-5 w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800 items-center justify-center hidden md:flex">
                  {item.type === 'edu' ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-zinc-400">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-zinc-400">
                      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </div>

                <div className={`rounded-xl border p-6 ${
                  item.current
                    ? 'border-amber-500/40 bg-zinc-950'
                    : 'border-zinc-800 bg-zinc-800/40'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-base">{item.role}</h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t('exp.present')}
                          </span>
                        )}
                      </div>
                      <p className="text-amber-400 font-medium text-sm mt-0.5">{item.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-zinc-500 text-xs font-medium">{item.period}</span>
                      <span className="flex items-center gap-1 text-zinc-600 text-xs">
                        <PinIcon />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-zinc-700/60 text-zinc-300 border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
