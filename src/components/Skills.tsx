import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  const categories = [
    {
      title: t('skills.frontend'),
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'],
    },
    {
      title: t('skills.backend'),
      skills: ['C#', '.NET', 'Java', 'Node.js', 'REST API', 'Microsoft Dynamics 365'],
    },
    {
      title: t('skills.tools'),
      skills: ['Git / GitHub', 'Azure', 'Docker', 'VS Code', 'Figma', 'Linux'],
    },
  ]

  return (
    <section id="skills" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('skills.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div
              key={cat.title}
              className="rounded-xl bg-zinc-900 border border-zinc-800 p-6"
            >
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2.5 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
