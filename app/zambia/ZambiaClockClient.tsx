'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ZambiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Lusaka')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Zambia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~20M' },
        ]}
      />


      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~20 million'],
            ['Capital', 'Lusaka'],
            ['DST', 'Not observed'],
            ['Currency', 'Zambian Kwacha (ZMW)'],
            ['Calling Code', '+260'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Victoria Falls &amp; the Zambezi</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zambia shares Victoria Falls with Zimbabwe&mdash;visitors can walk right to the edge at the Knife-Edge Bridge
          on the Zambian side. The Zambezi River, Africa&apos;s fourth longest, powers Kariba Dam and offers some of the
          continent&apos;s best white-water rafting. Livingstone, the tourist capital near the falls, is named after
          explorer David Livingstone who first documented them in 1855.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Copper Belt &amp; Wildlife</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Zambia is Africa&apos;s second-largest copper producer, with the Copperbelt Province driving the economy.
          South Luangwa National Park pioneered walking safaris and is famous for leopard sightings. Lower Zambezi,
          Kafue, and Kasanka (home to the world&apos;s largest mammal migration of straw-coloured fruit bats) make
          Zambia one of southern Africa&apos;s most rewarding safari destinations.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Lusaka', '3.3M', 'Capital'],
            ['Kitwe', '522K', 'Copperbelt hub'],
            ['Ndola', '475K', 'Industrial city'],
            ['Kabwe', '250K', 'Central province'],
            ['Livingstone', '182K', 'Tourist capital'],
            ['Chipata', '122K', 'Eastern gateway'],
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
