import { useTranslation } from 'react-i18next'

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/93043471?v=4'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0B1220]">
      <div className="max-w-2xl flex flex-col items-center">
        <img
          src={AVATAR_URL}
          alt="Oscar Cristaudo"
          className="w-24 h-24 rounded-full object-cover border border-[#374151] mb-8"
        />

        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#374151] bg-[#111827] text-[#D1D5DB] text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          {t('hero.badge')}
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] tracking-tight leading-none mb-3">
          {t('hero.greeting')}{' '}
          <span className="text-[#10B981]">Oscar</span>
        </h1>

        <p className="text-lg text-[#D1D5DB] font-medium mb-2">
          {t('hero.role')}
        </p>

        <div className="flex items-center gap-1.5 text-[#6B7280] text-sm mb-8">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
            <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          {t('hero.location')}
        </div>

        <p className="text-[#D1D5DB] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#34D399] text-[#0B1220] font-semibold transition-colors duration-150"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg border border-[#374151] hover:border-[#6B7280] text-[#D1D5DB] hover:text-[#F9FAFB] font-semibold transition-colors duration-150"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#374151] text-xs">
        <span className="text-[#6B7280]">{t('hero.scroll')}</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-bounce text-[#374151]">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
