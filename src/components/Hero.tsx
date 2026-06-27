import { useTranslation } from 'react-i18next'

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/93043471?v=4'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-zinc-950">
      <div className="max-w-2xl flex flex-col items-center">
        <img
          src={AVATAR_URL}
          alt="Oscar Cristaudo"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-zinc-700 mb-8"
        />

        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          {t('hero.badge')}
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none mb-4">
          {t('hero.greeting')}{' '}
          <span className="text-amber-400">Oscar</span>
        </h1>

        <p className="text-lg text-zinc-300 font-medium mb-2">
          {t('hero.role')}
        </p>

        <div className="flex items-center gap-1.5 text-zinc-500 text-sm mb-8">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
            <path d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          {t('hero.location')}
        </div>

        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-colors"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold transition-colors"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
        <span>{t('hero.scroll')}</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-bounce">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
