'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MadagascarClockClient() {
  const { time, date, mounted } = useClockState('Indian/Antananarivo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Madagascar', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~30M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~30 million'],
            ['Capital', 'Antananarivo'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['Rank', '4th largest island'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Biodiversity */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Unique Biodiversity</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Roughly 90% of Madagascar&apos;s wildlife is found nowhere else on Earth&mdash;including over 100 species of lemurs.</li>
          <li>The Avenue of the Baobabs features 800-year-old Grandidier&apos;s baobab trees lining a dirt road near Morondava.</li>
          <li>Madagascar is a global biodiversity hotspot with rainforests, dry forests, deserts, and mangroves.</li>
          <li>The island split from the Indian subcontinent about 88 million years ago, allowing species to evolve in isolation.</li>
        </ul>
      </div>

      {/* Vanilla Capital */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Vanilla Capital of the World</h3>
        <p className={`text-sm ${subText}`}>
          Madagascar produces around 80% of the world&apos;s vanilla, primarily in the SAVA region of the northeast.
          Vanilla is the country&apos;s most valuable export and is hand-pollinated by local farmers. The lengthy curing
          process&mdash;taking several months&mdash;makes Malagasy vanilla one of the most labor-intensive crops on the planet.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Antananarivo', '1.4M', 'Capital'],
            ['Toamasina', '326K', 'Port city'],
            ['Antsirabe', '256K', 'Highland'],
            ['Mahajanga', '220K', 'Northwest'],
            ['Fianarantsoa', '195K', 'Cultural'],
            ['Toliara', '157K', 'Southwest'],
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
