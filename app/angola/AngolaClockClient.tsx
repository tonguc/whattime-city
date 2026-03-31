'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AngolaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Luanda')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Angola', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~36M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <ul className={`mt-2 list-disc list-inside space-y-1 text-sm ${subText}`}>
          <li>Population: ~36 million</li>
          <li>Time zone: West Africa Time (WAT, UTC+1)</li>
          <li>No daylight saving time observed</li>
          <li>2nd largest Portuguese-speaking country after Brazil</li>
          <li>Major oil and diamond exporter &mdash; Africa&apos;s 2nd largest oil producer</li>
        </ul>
      </div>

      {/* Nature & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Nature &amp; Culture</h3>
        <p className={`mt-2 text-sm ${subText}`}>
          Kalandula Falls, one of Africa&apos;s largest waterfalls by volume, drops over 100&nbsp;meters along the Lucala River.
          The Tundavala Gap near Lubango offers a dramatic 1,000-meter cliff edge overlooking the lowlands.
          Angola is the birthplace of kizomba, a music and dance genre that has spread worldwide since the 1980s.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Luanda', pop: '8.3M', note: 'Capital' },
            { name: 'Huambo', pop: '595K', note: '' },
            { name: 'Benguela', pop: '513K', note: '' },
            { name: 'Lobito', pop: '324K', note: 'Port city' },
            { name: 'Lubango', pop: '294K', note: '' },
            { name: 'Cabinda', pop: '185K', note: 'Exclave' },
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
