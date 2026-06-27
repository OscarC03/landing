import { useTranslation } from 'react-i18next'

function AmbulanceIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-red-400">
      <path d="M10 17H4a1 1 0 01-1-1V6a1 1 0 011-1h9l5 5v6a1 1 0 01-1 1h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 17a2 2 0 11-4 0 2 2 0 014 0zM20 17a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 10H7m2 0V8m0 2v2M13 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-amber-400">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-sky-400">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="text-amber-400">
      <path d="M6 9H4a2 2 0 01-2-2V5h4M18 9h2a2 2 0 002-2V5h-4M8 21h8M12 17v4M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 5h12v7a6 6 0 01-12 0V5z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function MedalIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-zinc-500">
      <circle cx="12" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 2h6l1 8H8L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Hobbies() {
  const { t } = useTranslation()

  const results = [
    t('hobbies.anpas.r1'),
    t('hobbies.anpas.r2'),
    t('hobbies.anpas.r3'),
    t('hobbies.anpas.r4'),
  ]

  return (
    <section id="hobbies" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {t('hobbies.tag')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {t('hobbies.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* ANPAS — spans 2 columns */}
          <div className="md:col-span-2 rounded-xl border border-red-900 bg-zinc-950 p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                  <AmbulanceIcon />
                </div>
                <div>
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">
                    {t('hobbies.anpas.label')}
                  </span>
                  <h3 className="text-white font-semibold text-base leading-tight">
                    {t('hobbies.anpas.title')}
                  </h3>
                  <p className="text-zinc-500 text-sm">{t('hobbies.anpas.subtitle')}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="text-red-400 flex-shrink-0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold leading-tight">{t('hobbies.anpas.ivs')}</p>
                    <p className="text-zinc-500 text-xs">{t('hobbies.anpas.ivs_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700">
                  <TrophyIcon />
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold leading-tight">{t('hobbies.anpas.award')}</p>
                    <p className="text-zinc-500 text-xs">{t('hobbies.anpas.award_event')}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {t('hobbies.anpas.desc')}
            </p>

            <div>
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">
                {t('hobbies.anpas.results_title')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {results.map(r => (
                  <div
                    key={r}
                    className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2"
                  >
                    <MedalIcon />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                label: t('hobbies.photo.label'),
                title: t('hobbies.photo.title'),
                desc: t('hobbies.photo.desc'),
                icon: <CameraIcon />,
              },
              {
                label: t('hobbies.travel.label'),
                title: t('hobbies.travel.title'),
                desc: t('hobbies.travel.desc'),
                icon: <GlobeIcon />,
              },
            ].map(card => (
              <div
                key={card.title}
                className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">
                      {card.label}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
