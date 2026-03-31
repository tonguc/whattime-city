'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function DrCongoClockClient() {
  const { time, date, mounted } = useClockState('Africa/Kinshasa')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in DR Congo', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT/CAT &middot; UTC+1 / UTC+2' },
          { label: '2 Time Zones' },
          { label: 'Pop. ~102M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~102 million &mdash; 4th most populous in Africa</li>
          <li>Two time zones: WAT (UTC+1) in the west, CAT (UTC+2) in the east</li>
          <li>No daylight saving time observed</li>
          <li>2nd largest country in Africa by area (2.34&nbsp;million&nbsp;km&sup2;)</li>
          <li>Largest French-speaking country by population worldwide</li>
        </ul>
      </div>

      {/* Congo River & Natural Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Natural Heritage</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          The Congo River, Africa&apos;s deepest and second-longest river, defines much of the country&apos;s geography.
          Virunga National Park &mdash; a UNESCO World Heritage Site &mdash; is home to critically endangered mountain gorillas.
          The DR Congo also supplies roughly 70% of the world&apos;s cobalt, a critical mineral for lithium-ion batteries.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Kinshasa', pop: '17M', tz: 'WAT' },
            { name: 'Lubumbashi', pop: '2.8M', tz: 'CAT' },
            { name: 'Mbuji-Mayi', pop: '2.5M', tz: 'CAT' },
            { name: 'Kisangani', pop: '1.6M', tz: 'CAT' },
            { name: 'Bukavu', pop: '870K', tz: 'CAT' },
            { name: 'Goma', pop: '670K', tz: 'CAT' },
          ].map(c => (
            <div key={c.name} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop} &middot; {c.tz}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
