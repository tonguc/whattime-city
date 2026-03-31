'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SomaliaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Mogadishu')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Somalia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~18M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'EAT (UTC+3)' },
            { label: 'Population', value: '~18 Million' },
            { label: 'Capital', value: 'Mogadishu' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Horn of Africa Highlights */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Horn of Africa Highlights</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Somalia boasts the longest coastline on mainland Africa, stretching over 3,000&nbsp;km along the Indian Ocean and Gulf of Aden.
          The country holds the world&apos;s largest camel population &mdash; an estimated 7&nbsp;million &mdash; central to Somali pastoral culture.
          For centuries, the northern regions exported prized frankincense and myrrh, fuelling ancient trade routes.
          Mogadishu, one of East Africa&apos;s oldest cities, is undergoing significant rebuilding, while diaspora remittances remain a vital economic lifeline.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Mogadishu', pop: '2.6M', note: 'Capital' },
            { city: 'Hargeisa', pop: '1.2M', note: 'Somaliland' },
            { city: 'Kismayo', pop: '235K', note: 'Port city' },
            { city: 'Berbera', pop: '200K', note: 'Gulf of Aden' },
            { city: 'Garowe', pop: '150K', note: 'Puntland capital' },
            { city: 'Bosaso', pop: '130K', note: 'Commercial hub' },
          ].map((c) => (
            <div key={c.city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{c.city}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop} &middot; {c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
