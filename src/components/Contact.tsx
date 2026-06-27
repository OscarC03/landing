import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  const socials = [
    {
      name: 'Instagram',
      handle: '@cristaudooscar',
      href: 'https://www.instagram.com/cristaudooscar',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-[#D1D5DB]">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: 'OscarC03',
      href: 'https://github.com/OscarC03',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-[#D1D5DB]">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      handle: 'o.cristaudo.1521@outlook.it',
      href: 'mailto:o.cristaudo.1521@outlook.it',
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-[#D1D5DB]">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="bg-[#0B1220] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('contact.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-3">
          {t('contact.title')}
        </h2>
        <p className="text-[#6B7280] text-base mb-12 max-w-lg">
          {t('contact.description')}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-lg bg-[#111827] border border-[#374151] hover:border-[#4B5563] transition-colors duration-150"
            >
              <div className="w-9 h-9 rounded-md bg-[#1F2937] border border-[#374151] flex items-center justify-center flex-shrink-0">
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[#F9FAFB] font-medium text-sm">{s.name}</p>
                <p className="text-[#6B7280] text-xs mt-0.5 truncate">{s.handle}</p>
              </div>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="ml-auto text-[#374151] group-hover:text-[#6B7280] transition-colors duration-150 flex-shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
