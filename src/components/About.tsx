import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { value: t('about.stat_exp'), label: t('about.stat_exp_label') },
    { value: t('about.stat_location'), label: t('about.stat_location_label') },
    { value: t('about.stat_role'), label: t('about.stat_role_label') },
  ]

  return (
    <section id="about" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('about.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors mt-2"
            >
              {t('about.cta')}
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 text-center"
              >
                <span className="text-2xl font-bold text-violet-400 mb-1">{s.value}</span>
                <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{s.label}</span>
              </div>
            ))}

            {/* Location card */}
            <div className="col-span-3 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-violet-400">
                  <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t('about.location_name')}</p>
                <p className="text-zinc-500 text-xs">{t('about.location_sub')}</p>
              </div>
            </div>

            {/* Company card */}
            <div className="col-span-3 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-blue-400">
                  <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-4a3 3 0 016 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t('about.company')}</p>
                <p className="text-zinc-500 text-xs">{t('about.company_sub')}</p>
              </div>
            </div>

            {/* Education card */}
            <div className="col-span-3 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fuchsia-600/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-fuchsia-400">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t('about.education')}</p>
                <p className="text-zinc-500 text-xs">{t('about.education_sub')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
