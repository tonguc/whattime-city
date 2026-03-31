'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GuyanaClockClient() {
  const { time, date, mounted } = useClockState('America/Guyana')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Guyana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GYT &middot; UTC-4' },
          { label: 'No DST' },
          { label: 'Pop. ~800K' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>South America&apos;s English Voice</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guyana is the only English-speaking country on the South American mainland. Its capital Georgetown is known for distinctive wooden colonial architecture, including the iconic St. George&apos;s Cathedral&mdash;one of the tallest wooden buildings in the world. The 2019 Stabroek oil discovery offshore has sparked an economic boom, making Guyana one of the fastest-growing economies globally.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Kaieteur &amp; the Interior</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Kaieteur Falls plunges 226 metres in a single drop&mdash;roughly five times the height of Niagara&mdash;making it the world&apos;s largest single-drop waterfall by volume. The vast Rupununi savannas in the south offer wildlife encounters with giant otters, jaguars, and harpy eagles, while over 80% of the country remains covered in pristine rainforest.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Georgetown', '235K \u00b7 Capital'],
            ['Linden', '30K'],
            ['New Amsterdam', '18K'],
            ['Bartica', '15K'],
            ['Anna Regina', '12K'],
            ['Lethem', '3K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
