'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TuvaluClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Funafuti')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Tuvalu', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'TVT &middot; UTC+12' },
          { label: 'No DST' },
          { label: 'Pop. ~11K' },
        ]}
      />


      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'TVT (UTC+12)'],
            ['Population', '~11,000'],
            ['Capital', 'Funafuti'],
            ['DST', 'Not observed'],
            ['Currency', 'Australian Dollar'],
            ['Calling Code', '+688'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>The .tv Domain Goldmine</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tuvalu&apos;s country code &ldquo;.tv&rdquo; became a major revenue source when the domain was leased to
          media companies in the early 2000s. Revenue from .tv domain sales has funded infrastructure, UN membership,
          and government services. With just 26 km&sup2; of land across nine coral atolls, Tuvalu is the world&apos;s
          fourth-smallest country and among the first nations to face existential threat from rising sea levels.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Climate &amp; Pacific Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          No point in Tuvalu rises more than 4.6 m above sea level, making it a global symbol of climate change
          vulnerability. Despite this, Tuvaluan culture thrives with traditional fatele dance performances, communal
          fishing practices, and strong Polynesian heritage. Funafuti&apos;s lagoon is one of the largest in the
          Pacific, and the nation&apos;s isolation preserves one of the world&apos;s most pristine marine environments.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Islands &amp; Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Funafuti', '6.3K', 'Capital atoll'],
            ['Vaitupu', '1.6K', 'Largest atoll'],
            ['Nukufetau', '600', 'Central atoll'],
            ['Nanumea', '500', 'Northernmost'],
            ['Nui', '500', 'Western atoll'],
            ['Nukulaelae', '350', 'Southern atoll'],
          ].map(([island, pop, note]) => (
            <div key={island} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{island}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
