'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function VaticanCityClockClient() {
  const { time, date, mounted } = useClockState('Europe/Vatican')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Vatican City', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 / UTC+2' },
          { label: 'Observes DST' },
          { label: 'Pop. ~800' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'CET / CEST'],
            ['Population', '~800'],
            ['DST', 'Observed (Mar\u2013Oct)'],
            ['Area', '0.44 km\u00B2'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World's Smallest Country */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The World&apos;s Smallest Country</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          At just 0.44&nbsp;km&sup2;, Vatican City is the smallest independent state in the world and the spiritual seat of the Catholic Church. St. Peter&apos;s Basilica is the largest church ever built, while the Sistine Chapel houses Michelangelo&apos;s iconic ceiling frescoes. The Vatican Museums welcome over 6&nbsp;million visitors each year. The Swiss Guard has protected the papacy since 1506, and the city-state operates its own postal service, radio station, and railway.
        </p>
      </div>

      {/* Key Landmarks */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Key Landmarks</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['St. Peter\u2019s Square', 'Iconic piazza'],
            ['Apostolic Palace', 'Papal residence'],
            ['Vatican Gardens', '23-hectare grounds'],
            ['Sistine Chapel', 'Michelangelo frescoes'],
            ['Vatican Library', '1.1M+ books'],
            ['Vatican Radio', 'Since 1931'],
          ].map(([place, desc]) => (
            <div key={place} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{place}</p>
              <p className={`text-xs ${mutedText}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
