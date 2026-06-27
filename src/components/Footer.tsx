import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0B1220] border-t border-[#374151] py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[#F9FAFB] font-semibold tracking-tight">
          Oscar<span className="text-[#10B981]">.</span>
        </span>
        <p className="text-[#6B7280] text-sm">
          © {new Date().getFullYear()} {t('footer.rights')} — {t('footer.location')}
        </p>
        <a
          href="https://www.instagram.com/cristaudooscar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6B7280] hover:text-[#10B981] transition-colors duration-150 text-sm"
        >
          @cristaudooscar
        </a>
      </div>
    </footer>
  )
}
