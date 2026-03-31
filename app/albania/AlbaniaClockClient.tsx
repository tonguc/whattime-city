'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AlbaniaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Tirane')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Albania', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 / UTC+2' },
          { label: 'Observes DST' },
          { label: 'Pop. ~2.8M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~2.8 million</li>
          <li>Standard time: CET (UTC+1) &mdash; Summer: CEST (UTC+2)</li>
          <li>Observes EU-style daylight saving time (last Sunday of March to October)</li>
          <li>Albanian Riviera &mdash; emerging Mediterranean tourism destination</li>
          <li>Over 750,000 bunkers were built during the communist era</li>
        </ul>
      </div>

      {/* Heritage & Tourism */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Heritage &amp; Tourism</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Butrint, a UNESCO World Heritage Site, features ruins spanning Greek, Roman, Byzantine, and Ottoman periods.
          Berat, the &ldquo;City of a Thousand Windows,&rdquo; is another UNESCO site famed for its Ottoman-era architecture.
          The Blue Eye (Syri i Kalt&euml;r) is a mesmerizing karst spring where water rises from over 50&nbsp;meters deep, maintaining a constant 10&nbsp;&deg;C year-round.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Tirana', pop: '420K', note: 'Capital' },
            { name: 'Durr\u00ebs', pop: '175K', note: 'Port city' },
            { name: 'Vlor\u00eb', pop: '130K', note: 'Riviera' },
            { name: 'Elbasan', pop: '100K', note: '' },
            { name: 'Shkod\u00ebr', pop: '88K', note: '' },
            { name: 'Kor\u00e7\u00eb', pop: '76K', note: '' },
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
