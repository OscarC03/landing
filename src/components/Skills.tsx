const categories = [
  {
    title: 'Frontend',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9l-3 3 3 3M15 9l3 3-3 3M13 8l-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML / CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="14" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="7" r="1" fill="currentColor"/>
        <circle cx="6" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
    skills: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'MongoDB', 'Python'],
  },
  {
    title: 'Strumenti',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91A6 6 0 0114.7 6.3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['Git / GitHub', 'Docker', 'Vite', 'VS Code', 'Figma', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Competenze
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Stack tecnologico
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div
              key={cat.title}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 hover:border-violet-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
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
