'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MozambiqueClockClient() {
  const { time, date, mounted } = useClockState('Africa/Maputo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Mozambique', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~33M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~33 million'],
            ['Capital', 'Maputo'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['Coastline', '2,500 km'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coastal Treasures */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Coastal Treasures</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>The Bazaruto Archipelago is a protected marine national park with dugongs, dolphins, and whale sharks.</li>
          <li>The Mozambique Channel between the mainland and Madagascar is one of the world&apos;s richest marine biodiversity zones.</li>
          <li>With 2,500 km of Indian Ocean coastline, Mozambique offers some of East Africa&apos;s finest coral reefs.</li>
          <li>Peri-peri (piri-piri) chili sauce originated in Mozambique and is central to its cuisine.</li>
        </ul>
      </div>

      {/* Growing Economy */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Growing Economy</h3>
        <p className={`text-sm ${subText}`}>
          Maputo is emerging as a regional tech hub with a growing startup ecosystem. The country&apos;s natural gas reserves
          in the Rovuma Basin are among the largest discoveries in Africa&mdash;positioning Mozambique as a future major
          energy exporter. Agriculture, fishing, and tourism remain vital pillars of the economy.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Maputo', '1.1M', 'Capital'],
            ['Matola', '1.6M', 'Industrial'],
            ['Nampula', '620K', 'Northern hub'],
            ['Beira', '530K', 'Port city'],
            ['Chimoio', '370K', 'Central'],
            ['Quelimane', '350K', 'Zamb\u00E9zia'],
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
