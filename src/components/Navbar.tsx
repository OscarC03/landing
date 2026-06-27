import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'it'

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.bc'), href: '#bc' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.hobbies'), href: '#hobbies' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3.5 bg-[#0B1220] border-b border-[#374151]">
      <span className="text-[#F9FAFB] font-semibold tracking-tight text-base">
        Oscar<span className="text-[#10B981]">.</span>
      </span>

      <ul className="hidden md:flex gap-6">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[#D1D5DB] hover:text-[#F9FAFB] transition-colors duration-150 text-sm font-medium"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5 bg-[#111827] border border-[#374151] rounded-lg p-1">
          {(['it', 'en'] as const).map(lang => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                currentLang === lang
                  ? 'bg-[#10B981] text-[#0B1220]'
                  : 'text-[#6B7280] hover:text-[#D1D5DB]'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:block text-sm font-medium px-4 py-2 rounded-lg bg-[#10B981] hover:bg-[#34D399] text-[#0B1220] transition-colors duration-150"
        >
          {t('nav.cta')}
        </a>
      </div>
    </nav>
  )
}
