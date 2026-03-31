'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TogoClockClient() {
  const { time, date, mounted } = useClockState('Africa/Lome')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Togo', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~9M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'GMT (UTC+0)'],
            ['Population', '~9 million'],
            ['DST', 'Not observed'],
            ['Width', 'Only 56 km'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture & Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Culture &amp; Heritage</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Togo&apos;s Koutammakou landscape is a UNESCO World Heritage Site, home to the Batammariba people and their remarkable tower-houses. Lom&eacute;&apos;s Grand March&eacute; is one of West Africa&apos;s busiest markets. The country is known for its voodoo traditions, significant phosphate reserves, and the Fazao-Malfakassa National Park&mdash;Togo&apos;s largest protected area. At only 56&nbsp;km wide, it is one of the narrowest countries in the world.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Lom\u00e9', '837K', 'Capital'],
            ['Sokod\u00e9', '113K', 'Central hub'],
            ['Kara', '104K', 'Northern city'],
            ['Kpalim\u00e9', '75K', 'Coffee region'],
            ['Atakpam\u00e9', '69K', 'Plateaux capital'],
            ['Dapaong', '58K', 'Far north'],
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
