'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BeninClockClient() {
  const { time, date, mounted } = useClockState('Africa/Porto-Novo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Benin', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~13M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~13 million</li>
          <li>Time zone: West Africa Time (WAT, UTC+1)</li>
          <li>No daylight saving time observed</li>
          <li>Birthplace of Vodun (voodoo) &mdash; January 10 is National Vodun Day</li>
          <li>Cotonou is the economic hub; Porto-Novo is the official capital</li>
        </ul>
      </div>

      {/* Heritage & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Heritage &amp; Nature</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          The Royal Palaces of Abomey, a UNESCO World Heritage Site, preserve the legacy of the Dahomey Kingdom spanning the 17th&ndash;19th centuries.
          Ganvi&eacute;, a stilt village on Lake Nokou&eacute;, is often called the &ldquo;Venice of Africa&rdquo; and home to roughly 30,000 people.
          Pendjari National Park in the northwest shelters West Africa&apos;s largest population of elephants and lions.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Cotonou', pop: '680K', note: 'Economic hub' },
            { name: 'Porto-Novo', pop: '264K', note: 'Capital' },
            { name: 'Parakou', pop: '255K', note: '' },
            { name: 'Djougou', pop: '237K', note: '' },
            { name: 'Bohicon', pop: '213K', note: '' },
            { name: 'Abomey', pop: '82K', note: 'UNESCO' },
          ].map(c => (
            <div key={c.name} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}{c.note ? ` · ${c.note}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
