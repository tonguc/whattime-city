'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NamibiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Windhoek')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Namibia', time }]}
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
            ['Population', '~2.6 million'],
            ['Capital', 'Windhoek'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['DST', 'Not observed'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>The Namib Desert is considered the world&apos;s oldest desert, estimated at 55&ndash;80 million years old.</li>
          <li>Fish River Canyon is the second largest canyon on Earth after the Grand Canyon.</li>
          <li>The Skeleton Coast is known for its shipwrecks and seal colonies along the Atlantic shore.</li>
          <li>Etosha National Park hosts one of Africa&apos;s greatest wildlife concentrations around its vast salt pan.</li>
          <li>Namibia&apos;s NamibRand Nature Reserve is one of Africa&apos;s few International Dark Sky Reserves.</li>
        </ul>
      </div>

      {/* German Colonial Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>German Colonial Heritage</h3>
        <p className={`text-sm ${subText}`}>
          Swakopmund features well-preserved German colonial architecture&mdash;from the Hohenzollern Building to the Woermannhaus&mdash;reflecting
          Namibia&apos;s history as German South West Africa (1884&ndash;1915). Today, German is still spoken by a small minority alongside
          English and indigenous languages.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Windhoek', '431K', 'Capital'],
            ['Rundu', '63K', 'Kavango East'],
            ['Walvis Bay', '62K', 'Port city'],
            ['Swakopmund', '45K', 'Coastal'],
            ['Oshakati', '36K', 'Northern'],
            ['Katima Mulilo', '28K', 'Zambezi'],
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
