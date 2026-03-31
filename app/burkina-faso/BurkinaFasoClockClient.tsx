'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BurkinaFasoClockClient() {
  const { time, date, mounted } = useClockState('Africa/Ouagadougou')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Burkina Faso', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~22M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~22 million</li>
          <li>Time zone: GMT (UTC+0) &mdash; same as London in winter</li>
          <li>No daylight saving time observed</li>
          <li>Known as the &ldquo;Land of Honest People&rdquo; (Burkina = honest, Faso = land)</li>
          <li>One of West Africa&apos;s largest cotton producers</li>
        </ul>
      </div>

      {/* Culture & Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Culture &amp; Heritage</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Ouagadougou hosts FESPACO, Africa&apos;s largest and most prestigious film festival, held biennially since 1969.
          The Ruins of Lorop&eacute;ni, a UNESCO World Heritage Site, date back to the 11th century and are tied to the historic gold trade.
          Near Banfora in the southwest, the Karfiguéla Waterfalls and Sindou Peaks draw visitors with dramatic sandstone formations.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Ouagadougou', pop: '2.8M', note: 'Capital' },
            { name: 'Bobo-Dioulasso', pop: '810K', note: '2nd city' },
            { name: 'Koudougou', pop: '130K', note: '' },
            { name: 'Banfora', pop: '93K', note: 'Waterfalls' },
            { name: 'Ouahigouya', pop: '91K', note: '' },
            { name: 'Kaya', pop: '70K', note: '' },
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
