'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SurinameClockClient() {
  const { time, date, mounted } = useClockState('America/Paramaribo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Suriname', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SRT &middot; UTC-3' },
          { label: 'No DST' },
          { label: 'Pop. ~620K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~620,000 &mdash; the only Dutch-speaking country in South America</li>
          <li>&bull; Timezone: SRT (UTC&minus;3) year-round, no daylight saving time</li>
          <li>&bull; About 93% of the land is covered by tropical rainforest &mdash; the highest percentage of any nation</li>
          <li>&bull; Remarkable ethnic diversity: Hindustani, Javanese, Creole, Maroon, Indigenous, and Chinese communities</li>
        </ul>
      </div>

      {/* Culture & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Culture &amp; Nature</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Paramaribo Historic Center</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A UNESCO World Heritage Site where Dutch colonial wooden architecture sits alongside a synagogue and mosque on the same street.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Rainforest Canopy</p>
            <p className={`text-sm mt-1 ${mutedText}`}>With 93% forest cover, Suriname is one of the most carbon-negative countries on Earth &mdash; Brownsberg Nature Park offers stunning views.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Ethnic Mosaic</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Javanese, Hindustani, Creole, and Maroon cultures blend into a unique society where roti, nasi, and pom share the same table.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Maroon Heritage</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Descendants of escaped enslaved Africans maintain vibrant communities along the interior rivers with distinct languages and traditions.</p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Paramaribo', pop: '240K' },
            { name: 'Lelydorp', pop: '20K' },
            { name: 'Nieuw Nickerie', pop: '13K' },
            { name: 'Moengo', pop: '8K' },
            { name: 'Albina', pop: '4K' },
            { name: 'Groningen', pop: '3K' },
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
