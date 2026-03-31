'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LiechtensteinClockClient() {
  const { time, date, mounted } = useClockState('Europe/Vaduz')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Liechtenstein', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 / UTC+2' },
          { label: 'Observes DST' },
          { label: 'Pop. ~39K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CET / CEST'],
            ['DST', 'Observed (Mar\u2013Oct)'],
            ['Population', '~39,000'],
            ['Dial Code', '+423'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Liechtenstein is the 6th smallest country in the world and one of only two doubly landlocked nations (the other is Uzbekistan).</li>
          <li>Vaduz Castle, perched above the capital, is the official residence of the Prince of Liechtenstein.</li>
          <li>The country is sometimes called the &ldquo;false teeth capital of the world&rdquo; &mdash; dental products are a major export.</li>
          <li>Liechtenstein has one of the highest GDP per capita figures globally, driven by finance and manufacturing.</li>
          <li>The principality abolished its army in 1868 and has had no military force since.</li>
        </ul>
      </div>

      {/* Municipalities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Municipalities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Vaduz', '5.7K', 'Capital'],
            ['Schaan', '6K', 'Largest'],
            ['Triesen', '5.2K', ''],
            ['Balzers', '4.7K', ''],
            ['Eschen', '4.4K', ''],
            ['Mauren', '4.2K', ''],
          ].map(([place, pop, note]) => (
            <div key={place} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{place}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
