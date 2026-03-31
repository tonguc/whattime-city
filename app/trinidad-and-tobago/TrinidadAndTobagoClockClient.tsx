'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TrinidadAndTobagoClockClient() {
  const { time, date, mounted } = useClockState('America/Port_of_Spain')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Trinidad and Tobago', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC-4' },
          { label: 'No DST' },
          { label: 'Pop. ~1.4M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'AST (UTC\u22124)'],
            ['Population', '~1.4 million'],
            ['DST', 'Not observed'],
            ['Known For', 'Carnival & steelpan'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carnival & Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Carnival Capital of the Caribbean</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Trinidad and Tobago is the birthplace of the steelpan&mdash;the only acoustic instrument invented in the 20th century&mdash;and the genres of calypso and soca music. The annual Trinidad Carnival is one of the world&apos;s largest street festivals. The Pitch Lake in La Brea is the largest natural deposit of asphalt on Earth. Tobago&apos;s Main Ridge Forest Reserve, established in 1776, is the oldest legally protected rainforest in the Western Hemisphere. The twin-island nation also has a significant oil and gas economy.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['San Juan-Laventille', '157K', 'Largest borough'],
            ['Chaguanas', '84K', 'Commercial center'],
            ['San Fernando', '48K', 'Industrial city'],
            ['Port of Spain', '37K', 'Capital'],
            ['Arima', '34K', 'Royal borough'],
            ['Scarborough', '17K', 'Tobago capital'],
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
