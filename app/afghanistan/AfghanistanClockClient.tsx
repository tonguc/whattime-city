'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AfghanistanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Kabul')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Afghanistan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AFT &middot; UTC+4:30', highlight: true },
          { label: 'No DST' },
          { label: 'Kabul' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Afghanistan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AFT — Afghanistan Time (UTC+4:30)' },
              { label: 'DST Status', value: 'Never observed DST' },
              { label: 'IANA Identifier', value: 'Asia/Kabul' },
              { label: 'Offset Type', value: 'Half-hour offset — one of only ~10 worldwide' },
              { label: 'Population', value: '~40 million' },
              { label: 'Calendar', value: 'Solar Hijri (Persian calendar) — year ~1404' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UTC+4:30 — Afghanistan&apos;s Unique Half-Hour Offset</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Afghanistan uses <strong className={heading}>UTC+4:30</strong> — a <strong className={heading}>half-hour offset</strong> shared by very few places on Earth. This puts Afghanistan <strong className={heading}>30 minutes ahead of the UAE (UTC+4)</strong> and <strong className={heading}>1 hour behind Pakistan (UTC+5)</strong>. The offset was chosen to align with Kabul&apos;s <strong className={heading}>solar noon</strong> more accurately than a whole-hour zone would.
            </p>
            <p>
              Afghanistan uses the <strong className={heading}>Solar Hijri calendar (Shamsi)</strong> — a solar calendar starting from the Prophet Muhammad&apos;s migration. The current year is approximately <strong className={heading}>1404 SH</strong>. The Afghan New Year (<strong className={heading}>Nowruz</strong>) falls on <strong className={heading}>March 20-21</strong>, celebrated with the spring equinox — one of the world&apos;s oldest holidays.
            </p>
            <p>
              Afghanistan sits at a <strong className={heading}>geographic crossroads</strong> between Central Asia, South Asia, and the Middle East. The <strong className={heading}>Wakhan Corridor</strong> — a narrow strip of land — gives Afghanistan a <strong className={heading}>border with China</strong>, making it one of the few countries connecting four distinct cultural-timezone regions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Afghanistan Key Cities — All on AFT (UTC+4:30)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kabul', pop: '4.6M', note: 'Capital, 3,500m elevation, ancient Silk Road' },
              { city: 'Kandahar', pop: '615K', note: '2nd city, southern hub, founded by Alexander' },
              { city: 'Herat', pop: '575K', note: 'Western city, Persian culture, citadel' },
              { city: 'Mazar-i-Sharif', pop: '470K', note: 'Blue Mosque, northern hub, trade' },
              { city: 'Jalalabad', pop: '360K', note: 'Eastern city, Khyber Pass gateway' },
              { city: 'Bamyan', pop: '100K', note: 'Buddha statues site, Band-e-Amir lakes' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
