'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MarshallIslandsClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Majuro')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Marshall Islands', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MHT &middot; UTC+12' },
          { label: 'No DST' },
          { label: 'Pop. ~42K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'MHT (UTC+12)'],
            ['DST', 'Not observed'],
            ['Population', '~42,000'],
            ['Capital', 'Majuro'],
            ['Currency', 'US Dollar (USD)'],
            ['Language', 'Marshallese, English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Country Highlights */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Coral Atolls of the Pacific</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Marshall Islands consist of 29 coral atolls and 5 isolated islands spread across
          the central Pacific. Bikini Atoll, a UNESCO World Heritage Site, was the location of
          67 nuclear tests conducted by the United States between 1946 and 1958. The nation
          operates one of the world&apos;s largest shark sanctuaries, covering nearly 2&nbsp;million
          km&sup2; of ocean. Under the Compact of Free Association with the US, Marshallese
          citizens can live and work in America. Rising sea levels pose an existential threat,
          as most land sits barely 2&nbsp;metres above the ocean.
        </p>
      </div>

      {/* Major Atolls & Islands */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Atolls &amp; Islands</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Majuro', '28K'],
            ['Ebeye', '11K'],
            ['Jaluit', '1.7K'],
            ['Wotje', '860'],
            ['Mili', '740'],
            ['Arno', '1.8K'],
          ].map(([place, pop]) => (
            <div key={place} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{place}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
