import { useTranslation } from 'react-i18next'

function CommitIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12h7M15 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="text-[#6B7280]">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      repo: 'OscarC03/landing',
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      href: 'https://github.com/OscarC03/landing',
      stat: t('projects.p1.stat'),
      type: t('projects.type_web'),
    },
    {
      repo: 'OscarC03/rsa-schedule',
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ['Next.js', 'TypeScript', 'PHP'],
      href: 'https://github.com/OscarC03/rsa-schedule',
      stat: t('projects.p2.stat'),
      type: t('projects.type_web'),
    },
    {
      repo: 'OscarC03/DailyLife-App',
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ['Apache Cordova', 'Java'],
      href: 'https://github.com/OscarC03/DailyLife-App',
      stat: t('projects.p3.stat'),
      type: t('projects.type_mobile'),
    },
  ]

  return (
    <section id="projects" className="bg-[#0B1220] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('projects.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-12">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map(p => (
            <a
              key={p.repo}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg bg-[#111827] border border-[#374151] hover:border-[#4B5563] transition-colors duration-150 overflow-hidden"
            >
              {/* Repo header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#374151] bg-[#1F2937]">
                <span className="font-mono text-xs text-[#6B7280] truncate">{p.repo}</span>
                <ExternalIcon />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <div>
                  <h3 className="text-[#F9FAFB] font-semibold text-sm mb-1.5">{p.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{p.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-[#0B1220] text-[#D1D5DB] border border-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer stats */}
                <div className="flex items-center justify-between pt-2 border-t border-[#374151] mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                    <CommitIcon />
                    {p.stat}
                  </span>
                  <span className="text-xs text-[#6B7280] bg-[#0B1220] border border-[#374151] px-2 py-0.5 rounded-md">
                    {p.type}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
