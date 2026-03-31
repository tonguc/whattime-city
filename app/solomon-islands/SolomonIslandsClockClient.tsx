'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SolomonIslandsClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Guadalcanal')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Solomon Islands', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SBT &middot; UTC+11' },
          { label: 'No DST' },
          { label: 'Pop. ~720K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~720,000 across more than 900 islands in the South Pacific</li>
          <li>&bull; Timezone: SBT (UTC+11) year-round, no daylight saving time</li>
          <li>&bull; Site of the pivotal WWII Battle of Guadalcanal (1942&ndash;1943)</li>
          <li>&bull; Melanesian culture with over 70 living languages spoken across the islands</li>
        </ul>
      </div>

      {/* History & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>History &amp; Nature</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Battle of Guadalcanal</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A turning point in the Pacific Theater of WWII. War relics, sunken ships, and memorials are scattered across the island.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Marovo Lagoon</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The world&apos;s largest saltwater lagoon &mdash; a world-class diving destination with pristine coral reefs and crystal waters.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Rennell Island</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO World Heritage Site featuring Lake Tegano, the largest lake in the insular Pacific, inside a raised coral atoll.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Melanesian Culture</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Rich traditions of wood carving, shell-money currency, and kastom (customary) governance still shape daily island life.</p>
          </div>
        </div>
      </div>

      {/* Major Towns */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Honiara', pop: '85K' },
            { name: 'Auki', pop: '8K' },
            { name: 'Gizo', pop: '7K' },
            { name: 'Noro', pop: '4K' },
            { name: 'Tulagi', pop: '2K' },
            { name: 'Kirakira', pop: '1.5K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
