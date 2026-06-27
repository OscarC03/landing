import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  const categories = [
    {
      title: t('skills.erp'),
      skills: ['AL Language', 'Business Central', 'Dynamics 365', 'OData / Web Services', 'Extensions', 'Report Development'],
    },
    {
      title: t('skills.frontend'),
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'],
    },
    {
      title: t('skills.backend'),
      skills: ['C#', '.NET', 'Node.js', 'REST API', 'Java', 'SQL'],
    },
    {
      title: t('skills.databases'),
      skills: ['SQL Server', 'MySQL', 'T-SQL', 'Query Optimization', 'Data Modeling'],
    },
    {
      title: t('skills.devops'),
      skills: ['Azure DevOps', 'Git / GitHub', 'Docker', 'Azure', 'CI/CD Pipelines'],
    },
    {
      title: t('skills.tools'),
      skills: ['VS Code', 'Postman', 'Figma', 'Linux', 'Technical Documentation'],
    },
  ]

  return (
    <section id="skills" className="bg-[#0B1220] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">
          {t('skills.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-12">
          {t('skills.title')}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div
              key={cat.title}
              className="rounded-lg bg-[#111827] border border-[#374151] p-5"
            >
              <h3 className="text-[#F9FAFB] font-semibold text-sm uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2.5 text-[#D1D5DB] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#10B981]" />
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
