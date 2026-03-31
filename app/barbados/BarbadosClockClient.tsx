'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BarbadosClockClient() {
  const { time, date, mounted } = useClockState('America/Barbados')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Barbados', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC-4' },
          { label: 'No DST' },
          { label: 'Pop. ~288K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'AST (UTC\u22124)'],
            ['Population', '~288,000'],
            ['Capital', 'Bridgetown'],
            ['DST', 'Not observed'],
            ['Currency', 'Barbadian Dollar (BBD)'],
            ['Dialing Code', '+1-246'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Heritage & Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Heritage</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Barbados is the <strong>birthplace of Rihanna</strong> and home to one of the oldest parliaments
          in the Americas, established in <strong>1639</strong>. The island&apos;s rum heritage runs deep&mdash;
          <strong>Mount Gay</strong> distillery, founded in 1703, is the oldest commercial rum producer in
          the world. Barbados became a <strong>republic in 2021</strong>, replacing the British monarch as
          head of state. Cricket is a national passion, and the island is a celebrated coral formation.
        </p>
      </div>

      {/* Island Life */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Life</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Bridgetown&apos;s historic garrison area is a UNESCO World Heritage Site</li>
          <li>Barbados has produced more cricket legends per capita than any other nation</li>
          <li>Oistins Fish Fry is a beloved Friday night tradition for locals and visitors</li>
          <li>The island is the easternmost Caribbean island&mdash;entirely in the Atlantic</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Bridgetown', '110K', 'Capital / UNESCO'],
            ['Speightstown', '3.5K', 'Historic north'],
            ['Oistins', '3K', 'Fishing village'],
            ['Holetown', '2K', 'First settlement'],
            ['St. Lawrence Gap', '2K', 'Nightlife hub'],
            ['Bathsheba', '1.5K', 'East coast surf'],
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
