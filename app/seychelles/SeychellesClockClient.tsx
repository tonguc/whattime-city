'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SeychellesClockClient() {
  const { time, date, mounted } = useClockState('Indian/Mahe')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Seychelles', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SCT &middot; UTC+4' },
          { label: 'No DST' },
          { label: 'Pop. ~100K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'SCT (UTC+4)' },
            { label: 'Population', value: '~100,000' },
            { label: 'Capital', value: 'Victoria' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Island Paradise */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Island Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Seychelles comprises 115 granite and coral islands scattered across the western Indian Ocean, with the highest HDI in Africa.
          The Vall&eacute;e de Mai (UNESCO) on Praslin shelters the legendary coco de mer palm, producing the world&apos;s largest seed.
          Aldabra Atoll, also a UNESCO site, is home to over 100,000 giant tortoises &mdash; the largest population of any atoll on Earth.
          With roughly 100,000 residents, Seychelles is Africa&apos;s smallest country by population, yet a global leader in luxury eco-tourism.
        </p>
      </div>

      {/* Major Settlements */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Victoria', pop: '26K', note: 'Capital, Mah\u00e9' },
            { city: 'Anse Boileau', pop: '4.5K', note: 'West Mah\u00e9' },
            { city: 'Beau Vallon', pop: '4K', note: 'Beach resort' },
            { city: 'Anse Royale', pop: '4K', note: 'South Mah\u00e9' },
            { city: 'Baie Lazare', pop: '3.8K', note: 'Scenic coast' },
            { city: 'Takamaka', pop: '2.5K', note: 'South district' },
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
