import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { value: t('about.stat_exp'), label: t('about.stat_exp_label') },
    { value: t('about.stat_location'), label: t('about.stat_location_label') },
    { value: t('about.stat_role'), label: t('about.stat_role_label') },
  ]

  const cards = [
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
          <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: t('about.location_name'),
      sub: t('about.location_sub'),
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
          <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-4a3 3 0 016 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('about.company'),
      sub: t('about.company_sub'),
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
          <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t('about.education'),
      sub: t('about.education_sub'),
    },
  ]

  return (
    <section id="about" className="bg-[#111827] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('about.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-12 leading-tight">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-[#D1D5DB] text-base leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#10B981] hover:text-[#34D399] font-medium transition-colors duration-150 mt-2"
            >
              {t('about.cta')}
              <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              {stats.map(s => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#1F2937] border border-[#374151] text-center"
                >
                  <span className="text-2xl font-bold text-[#10B981] mb-1">{s.value}</span>
                  <span className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            {cards.map(c => (
              <div
                key={c.title}
                className="rounded-lg bg-[#1F2937] border border-[#374151] px-4 py-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-md bg-[#111827] border border-[#374151] flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[#F9FAFB] text-sm font-medium leading-tight">{c.title}</p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
