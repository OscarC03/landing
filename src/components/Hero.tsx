import { useTranslation } from 'react-i18next'

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/93043471?v=4'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-zinc-950">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Avatar */}
        <div className="relative mb-6">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-800">
            <img
              src={AVATAR_URL}
              alt="Oscar Cristaudo"
              className="w-full h-full rounded-full object-cover border-2 border-zinc-950"
            />
          </div>
          {/* Online dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-zinc-950 rounded-full" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          {t('hero.badge')}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
          {t('hero.greeting')}{' '}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Oscar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-medium mb-2">
          {t('hero.role')}
        </p>

        <div className="flex items-center gap-1.5 text-zinc-500 text-sm mb-8">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="text-violet-400">
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
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold transition-colors"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
        <span>{t('hero.scroll')}</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-bounce">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
