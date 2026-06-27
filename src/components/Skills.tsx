import { useTranslation } from 'react-i18next'

const FrontendIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 9l-3 3 3 3M15 9l3 3-3 3M13 8l-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BackendIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="2" y="14" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="7" r="1" fill="currentColor"/>
    <circle cx="6" cy="17" r="1" fill="currentColor"/>
  </svg>
)

const ToolsIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91A6 6 0 0114.7 6.3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Skills() {
  const { t } = useTranslation()

  const categories = [
    {
      title: t('skills.frontend'),
      icon: <FrontendIcon />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'],
      accent: 'violet',
    },
    {
      title: t('skills.backend'),
      icon: <BackendIcon />,
      skills: ['C#', '.NET', 'Java', 'Node.js', 'REST API', 'Microsoft Dynamics 365'],
      accent: 'blue',
    },
    {
      title: t('skills.tools'),
      icon: <ToolsIcon />,
      skills: ['Git / GitHub', 'Azure', 'Docker', 'VS Code', 'Figma', 'Linux'],
      accent: 'fuchsia',
    },
  ]

  const accentMap: Record<string, { ring: string; bg: string; dot: string }> = {
    violet: {
      ring: 'group-hover:border-violet-500/50',
      bg: 'bg-violet-600/20 group-hover:bg-violet-600/30 text-violet-400',
      dot: 'bg-violet-500',
    },
    blue: {
      ring: 'group-hover:border-blue-500/50',
      bg: 'bg-blue-600/20 group-hover:bg-blue-600/30 text-blue-400',
      dot: 'bg-blue-500',
    },
    fuchsia: {
      ring: 'group-hover:border-fuchsia-500/50',
      bg: 'bg-fuchsia-600/20 group-hover:bg-fuchsia-600/30 text-fuchsia-400',
      dot: 'bg-fuchsia-500',
    },
  }

  return (
    <section id="skills" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('skills.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => {
            const a = accentMap[cat.accent]
            return (
              <div
                key={cat.title}
                className={`rounded-2xl bg-zinc-900 border border-zinc-800 p-6 transition-colors group ${a.ring}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${a.bg}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-semibold">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2.5 text-zinc-400 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
