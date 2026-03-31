'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GuineaBissauClockClient() {
  const { time, date, mounted } = useClockState('Africa/Bissau')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  const cities = [
    { name: 'Bissau', pop: '492K', note: 'Capital' },
    { name: 'Bafatá', pop: '28K', note: 'Interior hub' },
    { name: 'Gabú', pop: '25K', note: 'Eastern region' },
    { name: 'Bissorã', pop: '18K', note: 'Oio region' },
    { name: 'Bolama', pop: '12K', note: 'Former capital' },
    { name: 'Cacheu', pop: '11K', note: 'Historic port' },
  ]

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Guinea-Bissau', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~2.1M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.1 million'],
            ['Time Zone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Currency', 'West African CFA franc'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bijagós Archipelago */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Bijag&oacute;s Archipelago</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Bijag&oacute;s Archipelago, a UNESCO Biosphere Reserve, comprises 88 islands off the Atlantic coast.
          Only about 20 are permanently inhabited. The islands shelter saltwater hippos, sea turtles, and
          manatees within vast mangrove ecosystems. This unique environment makes Guinea-Bissau one of
          West Africa&apos;s most important biodiversity hotspots.
        </p>
      </div>

      {/* Cashew & Heritage */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Cashew Capital &amp; Colonial Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guinea-Bissau ranks among the world&apos;s top cashew nut producers&mdash;cashews account for
          roughly 90% of the country&apos;s export earnings. The nation&apos;s Portuguese colonial past is visible
          in Bissau&apos;s architecture and Cacheu&apos;s historic fort. With over 20 ethnic groups, the country
          maintains a rich tapestry of languages, music, and traditions including the vibrant Carnival celebrations.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
