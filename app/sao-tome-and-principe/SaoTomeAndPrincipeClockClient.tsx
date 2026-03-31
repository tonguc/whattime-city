'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SaoTomeAndPrincipeClockClient() {
  const { time, date, mounted } = useClockState('Africa/Sao_Tome')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in São Tomé and Príncipe', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~225K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~225,000 &mdash; the second-smallest African country</li>
          <li>&bull; Timezone: GMT (UTC+0) year-round, no daylight saving time</li>
          <li>&bull; The equator runs directly through Ilh&eacute;u das Rolas, just south of S&atilde;o Tom&eacute; island</li>
          <li>&bull; Once the world&apos;s largest cocoa producer &mdash; chocolate heritage runs deep</li>
        </ul>
      </div>

      {/* Nature & Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Nature &amp; Heritage</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Obo National Park</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Lush volcanic rainforest covering both islands, sheltering endemic birds, orchids, and the giant begonia.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Cocoa &amp; Ro&ccedil;as</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Portuguese colonial plantation estates (ro&ccedil;as) dot the landscape, some restored as eco-lodges producing fine chocolate.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Pristine Beaches</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Praia Jalé and Praia Banana offer untouched golden sand, sea turtle nesting, and crystal-clear Atlantic waters.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Equator Marker</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Stand on the equator line at Ilh&eacute;u das Rolas &mdash; a tiny islet where the Northern and Southern Hemispheres meet.</p>
          </div>
        </div>
      </div>

      {/* Major Towns */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'S\u00e3o Tom\u00e9', pop: '90K' },
            { name: 'Santo Amaro', pop: '8K' },
            { name: 'Neves', pop: '7K' },
            { name: 'Santana', pop: '7K' },
            { name: 'Trindade', pop: '6K' },
            { name: 'Guadalupe', pop: '5K' },
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
