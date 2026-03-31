'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MauritiusClockClient() {
  const { time, date, mounted } = useClockState('Indian/Mauritius')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Mauritius', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MUT &middot; UTC+4' },
          { label: 'No DST' },
          { label: 'Pop. ~1.3M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.3 million'],
            ['Capital', 'Port Louis'],
            ['Time Zone', 'MUT (UTC+4)'],
            ['Languages', 'English, French, Creole'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Island Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Island Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Mauritius was the only known home of the dodo bird, which went extinct in the late 17th century.</li>
          <li>The Chamarel Colored Earth features seven distinct layers of sand dunes in red, brown, violet, green, blue, purple, and yellow.</li>
          <li>An &ldquo;underwater waterfall&rdquo; illusion off the southwestern coast is created by sand and silt deposits flowing along the ocean floor.</li>
          <li>Sugar cane heritage shaped the island&apos;s history&mdash;plantations once covered 90% of cultivated land.</li>
        </ul>
      </div>

      {/* Multicultural Hub */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Multicultural Financial Hub</h3>
        <p className={`text-sm ${subText}`}>
          Mauritius is one of Africa&apos;s leading financial centers, with a multicultural society blending Hindu, Muslim, Chinese,
          and French Creole communities. The country consistently ranks among the top African nations for ease of doing business
          and economic freedom. Its strategic position in the Indian Ocean makes it a bridge between Africa and Asia.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Port Louis', '150K', 'Capital'],
            ['Vacoas-Phoenix', '106K', 'Central'],
            ['Beau Bassin', '104K', 'Rose Hill'],
            ['Curepipe', '84K', 'Highland'],
            ['Quatre Bornes', '80K', 'Commercial'],
            ['Mah\u00E9bourg', '17K', 'Historic'],
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
