import { useTranslation } from 'react-i18next'

const areas = [
  {
    key: 'al',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9l-3 3 3 3M15 9l3 3-3 3M13 8l-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'api',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <rect x="2" y="4" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="14" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="7" r="1" fill="currentColor"/>
        <circle cx="6" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    key: 'ext',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M12 12v6M9 15l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'int',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'perf',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <path d="M12 20V10M18 20V4M6 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: 'report',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#10B981]">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function BusinessCentral() {
  const { t } = useTranslation()

  return (
    <section id="bc" className="bg-[#0B1220] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('bc.tag')}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB]">
            {t('bc.title')}
          </h2>
          <p className="text-[#6B7280] text-sm max-w-sm leading-relaxed">
            {t('bc.intro')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {areas.map(area => (
            <div
              key={area.key}
              className="rounded-lg bg-[#111827] border border-[#374151] p-5"
            >
              <div className="w-8 h-8 rounded-md bg-[#1F2937] border border-[#374151] flex items-center justify-center mb-4">
                {area.icon}
              </div>
              <h3 className="text-[#F9FAFB] font-semibold text-sm mb-1.5">
                {t(`bc.${area.key}.title`)}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {t(`bc.${area.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
