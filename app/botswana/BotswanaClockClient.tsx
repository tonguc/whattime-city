'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BotswanaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Gaborone')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Botswana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~2.6M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CAT (UTC+2)'],
            ['Population', '~2.6 million'],
            ['Capital', 'Gaborone'],
            ['DST', 'Not observed'],
            ['Currency', 'Botswana Pula (BWP)'],
            ['Dialing Code', '+267'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Okavango & Economy */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Gem of Southern Africa</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Botswana is home to the <strong>Okavango Delta</strong>&mdash;a UNESCO World Heritage Site and
          the world&apos;s largest inland delta. The country&apos;s economy is driven by diamonds through
          <strong> Debswana</strong>, making it one of the world&apos;s top producers. Widely regarded as
          one of Africa&apos;s most stable democracies, Botswana also boasts the elephant-rich
          <strong> Chobe National Park</strong> and vast stretches of the Kalahari Desert.
        </p>
      </div>

      {/* Wildlife & Nature */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Wildlife &amp; Nature</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Chobe NP has the highest concentration of elephants in Africa</li>
          <li>Okavango Delta floods annually from Angolan rains&mdash;visible from space</li>
          <li>The Kalahari Desert covers about 70% of the country&apos;s land area</li>
          <li>Makgadikgadi Pans host one of Africa&apos;s largest zebra migrations</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Gaborone', '232K', 'Capital city'],
            ['Francistown', '100K', 'Second city'],
            ['Molepolole', '71K', 'Cultural hub'],
            ['Maun', '60K', 'Okavango gateway'],
            ['Serowe', '51K', 'Historic capital'],
            ['Selibe Phikwe', '50K', 'Mining town'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
