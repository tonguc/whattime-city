'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AndorraClockClient() {
  const { time, date, mounted } = useClockState('Europe/Andorra')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Andorra', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 / UTC+2' },
          { label: 'Observes DST' },
          { label: 'Pop. ~80K' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Pyrenees Microstate</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Andorra is a tiny co-principality nestled in the eastern Pyrenees between France and Spain. Governed by two co-princes&mdash;the French President and the Bishop of Urgell&mdash;it has no airport or railway, making it one of Europe&apos;s most unique destinations. The country is renowned for duty-free shopping, world-class ski resorts, and centuries-old Romanesque churches scattered across its mountain valleys.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Highest Capital in Europe</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Andorra la Vella sits at 1,023 metres above sea level, making it the highest capital city in Europe. Winter ski tourism and summer hiking drive the economy, welcoming over 8 million visitors annually&mdash;more than 100 times its own population.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Parishes</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Andorra la Vella', '23K &middot; Capital'],
            ['Escaldes-Engordany', '15K'],
            ['Encamp', '12K'],
            ['Sant Juli\u00e0 de L\u00f2ria', '10K'],
            ['La Massana', '10K'],
            ['Canillo', '5K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`} dangerouslySetInnerHTML={{ __html: info }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
