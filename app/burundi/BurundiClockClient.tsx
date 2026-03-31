'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BurundiClockClient() {
  const { time, date, mounted } = useClockState('Africa/Bujumbura')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Burundi', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~13M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~13 million &mdash; one of Africa&apos;s most densely populated nations</li>
          <li>Time zone: Central Africa Time (CAT, UTC+2)</li>
          <li>No daylight saving time observed</li>
          <li>Capital moved from Bujumbura to Gitega in 2019</li>
          <li>Economy driven by coffee and tea agriculture</li>
        </ul>
      </div>

      {/* Geography & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Geography &amp; Culture</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Burundi claims the southernmost source of the Nile River, near the town of Rutovu.
          The country&apos;s western border runs along Lake Tanganyika &mdash; the world&apos;s second-deepest lake at over 1,470&nbsp;meters.
          Burundian ritual drumming, known as &ldquo;Karyenda,&rdquo; was inscribed on UNESCO&apos;s Intangible Cultural Heritage list and remains a powerful symbol of national identity.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Gitega', pop: '135K', note: 'Capital' },
            { name: 'Bujumbura', pop: '1.2M', note: 'Largest' },
            { name: 'Muyinga', pop: '80K', note: '' },
            { name: 'Ngozi', pop: '75K', note: '' },
            { name: 'Rumonge', pop: '65K', note: '' },
            { name: 'Ruyigi', pop: '60K', note: '' },
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
