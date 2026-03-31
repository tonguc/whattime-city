'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ZimbabweClockClient() {
  const { time, date, mounted } = useClockState('Africa/Harare')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Zimbabwe', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~16.3M' },
        ]}
      />


      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~16.3 million'],
            ['Capital', 'Harare'],
            ['DST', 'Not observed'],
            ['Currency', 'ZiG / USD'],
            ['Calling Code', '+263'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Victoria Falls &amp; Natural Wonders</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zimbabwe shares Victoria Falls&mdash;one of the Seven Natural Wonders of the World&mdash;with Zambia.
          Known locally as &ldquo;Mosi-oa-Tunya&rdquo; (The Smoke That Thunders), the falls span 1,708 m wide
          and drop 108 m. Hwange National Park hosts over 100 mammal species including Africa&apos;s largest
          elephant population, while Great Zimbabwe ruins showcase a medieval stone city that gave the nation its name.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Wildlife &amp; Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zimbabwe is a top safari destination with Mana Pools, Matobo Hills (UNESCO), and the Eastern Highlands.
          The country experienced record hyperinflation in 2008 before dollarizing its economy. Today it attracts
          adventurers for bungee jumping, white-water rafting on the Zambezi, and world-class game viewing.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Harare', '1.5M', 'Capital'],
            ['Bulawayo', '653K', 'Industrial hub'],
            ['Chitungwiza', '356K', 'Satellite city'],
            ['Mutare', '188K', 'Eastern gateway'],
            ['Gweru', '157K', 'Midlands capital'],
            ['Masvingo', '87K', 'Near Great Zimbabwe'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
