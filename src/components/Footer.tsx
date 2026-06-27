export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-semibold tracking-tight">
          Oscar<span className="text-violet-400">.</span>
        </span>
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Oscar Cristaudo — Garessio, Cuneo
        </p>
        <a
          href="https://www.instagram.com/cristaudooscar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-violet-400 transition-colors text-sm"
        >
          @cristaudooscar
        </a>
      </div>
    </footer>
  )
}
