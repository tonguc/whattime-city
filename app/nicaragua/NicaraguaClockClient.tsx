'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NicaraguaClockClient() {
  const { time, date, mounted } = useClockState('America/Managua')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Nicaragua', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST &middot; UTC-6' },
          { label: 'No DST' },
          { label: 'Pop. ~7M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'CST (UTC\u22126)'],
            ['DST', 'Not observed'],
            ['Population', '~7 million'],
            ['Capital', 'Managua'],
            ['Currency', 'C\u00F3rdoba (NIO)'],
            ['Language', 'Spanish'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Country Highlights */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Land of Lakes and Volcanoes</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Nicaragua is the largest country in Central America. Lake Nicaragua is one of the few
          freshwater lakes in the world that is home to bull sharks. The colonial city of Granada,
          founded in 1524, is one of the oldest European settlements in the Americas. Ometepe
          Island &mdash; formed by two volcanoes rising from Lake Nicaragua &mdash; is a UNESCO
          Biosphere Reserve. The Pacific coast has become a world-class surf destination, drawing
          riders to beaches like San Juan del Sur and Popoyo.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Managua', '1.05M'],
            ['Le\u00F3n', '210K'],
            ['Masaya', '170K'],
            ['Chinandega', '134K'],
            ['Matagalpa', '110K'],
            ['Granada', '125K'],
          ].map(([city, pop]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
