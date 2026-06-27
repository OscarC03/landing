import { useTranslation } from 'react-i18next'

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
      tags: ['AL', 'Business Central', 'C#', '.NET', 'React', 'TypeScript', 'REST API', 'SQL'],
      current: true,
    },
    {
      type: 'work' as const,
      role: t('exp.job2.role'),
      company: t('exp.job2.company'),
      period: t('exp.job2.period'),
      location: t('exp.job2.location'),
      desc: t('exp.job2.desc'),
      tags: ['C#', 'Web', 'Software'],
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
    <section id="experience" className="bg-[#111827] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('exp.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-12">
          {t('exp.title')}
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#374151] hidden md:block" />

          <div className="space-y-5">
            {items.map((item, i) => (
              <div key={i} className="md:pl-14 relative">
                <div className="absolute left-0 top-4 w-10 h-10 rounded-full border border-[#374151] bg-[#1F2937] items-center justify-center hidden md:flex">
                  {item.type === 'edu' ? (
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
                      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </div>

                <div className={`rounded-lg border p-5 ${
                  item.current
                    ? 'border-[#10B981]/30 bg-[#0B1220]'
                    : 'border-[#374151] bg-[#1F2937]/40'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[#F9FAFB] font-semibold text-base">{item.role}</h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t('exp.present')}
                          </span>
                        )}
                      </div>
                      <p className="text-[#10B981] font-medium text-sm mt-0.5">{item.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-0.5 flex-shrink-0 text-xs text-[#6B7280]">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-[#D1D5DB] text-sm leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-[#111827] text-[#D1D5DB] border border-[#374151]"
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
