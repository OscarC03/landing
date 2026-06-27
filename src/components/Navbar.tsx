export default function Navbar() {
  const links = [
    { label: 'Chi sono', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Progetti', href: '#projects' },
    { label: 'Contatti', href: '#contact' },
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
      <a
        href="#contact"
        className="text-sm font-medium px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
      >
        Contattami
      </a>
    </nav>
  )
}
