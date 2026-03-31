'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TimorLesteClockClient() {
  const { time, date, mounted } = useClockState('Asia/Dili')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Timor-Leste', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'TLT &middot; UTC+9' },
          { label: 'No DST' },
          { label: 'Pop. ~1.3M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'TLT (UTC+9)'],
            ['Population', '~1.3 million'],
            ['DST', 'Not observed'],
            ['Independence', '2002'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Asia's Youngest Nation */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Asia&apos;s Youngest Nation</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Timor-Leste gained independence in 2002, making it the youngest country in Asia. The 27-metre Cristo Rei statue overlooks Dili, while Ata&uacute;ro Island offers world-class diving. Nino Konis Santana National Park protects pristine coral reefs and tropical forests. Coffee is the main export, and the nation is officially bilingual in Tetum and Portuguese.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Dili', '280K', 'Capital'],
            ['Baucau', '15K', 'Eastern hub'],
            ['Maliana', '12K', 'Border town'],
            ['Suai', '9K', 'Southern coast'],
            ['Ermera', '8K', 'Coffee region'],
            ['Lospalos', '7K', 'Eastern tip'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
