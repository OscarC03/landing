import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'it'

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <span className="text-white font-semibold tracking-tight text-lg">
        Oscar<span className="text-violet-400">.</span>
      </span>

      <ul className="hidden md:flex gap-8">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {/* Language switcher */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
          {(['it', 'en'] as const).map(lang => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                currentLang === lang
                  ? 'bg-violet-600 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:block text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
        >
          {t('nav.cta')}
        </a>
      </div>
    </nav>
  )
}
