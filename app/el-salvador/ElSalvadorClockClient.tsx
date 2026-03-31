'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ElSalvadorClockClient() {
  const { time, date, mounted } = useClockState('America/El_Salvador')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in El Salvador', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST &middot; UTC-6' },
          { label: 'No DST' },
          { label: 'Pop. ~6.3M' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Bitcoin &amp; Surf Paradise</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          In 2021, El Salvador became the first country in the world to adopt Bitcoin as legal tender alongside the US dollar. The smallest nation in Central America packs enormous appeal&mdash;from the legendary surf breaks at El Tunco to Joya de Cer&eacute;n, a UNESCO World Heritage Site often called the &ldquo;Pompeii of the Americas&rdquo; for its remarkably preserved pre-Columbian village.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Culture &amp; Cuisine</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The pupusa&mdash;a thick stuffed corn tortilla&mdash;is El Salvador&apos;s beloved national dish, with &ldquo;Pupusa Day&rdquo; celebrated every second Sunday of November. Despite its compact size, the country offers volcanic landscapes, coffee highlands, and Pacific coastline all within a few hours&apos; drive.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['San Salvador', '570K \u00b7 Capital'],
            ['Soyapango', '242K'],
            ['Santa Ana', '374K'],
            ['San Miguel', '218K'],
            ['Mejicanos', '141K'],
            ['Apopa', '132K'],
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
