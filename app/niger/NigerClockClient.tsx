'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NigerClockClient() {
  const { time, date, mounted } = useClockState('Africa/Niamey')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Niger', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~27M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Population', '~27 million'],
            ['Capital', 'Niamey'],
            ['Currency', 'West African CFA Franc'],
            ['Language', 'French (official)'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Gateway to the Sahara</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Niger is the largest country in West Africa, with the Sahara Desert covering roughly
          80% of its territory. The historic city of Agadez, a UNESCO World Heritage Site, has
          served as a gateway to trans-Saharan trade routes for centuries. Niger holds some of
          the world&apos;s largest uranium reserves. Each September, the <em>Cure Sal&eacute;e</em> festival
          draws Tuareg and Wodaabe nomads to In-Gall for celebrations marking the end of the
          rainy season &mdash; one of the most vibrant cultural gatherings in the Sahel.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Niamey', '1.3M'],
            ['Zinder', '323K'],
            ['Maradi', '318K'],
            ['Agadez', '124K'],
            ['Tahoua', '117K'],
            ['Dosso', '69K'],
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
