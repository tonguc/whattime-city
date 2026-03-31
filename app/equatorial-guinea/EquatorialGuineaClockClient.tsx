'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function EquatorialGuineaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Malabo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Equatorial Guinea', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~1.7M' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Africa&apos;s Spanish-Speaking Nation</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Equatorial Guinea is the only country in Africa where Spanish is an official language. The nation spans a mainland region (R&iacute;o Muni) and several islands, with the capital Malabo located on volcanic Bioko Island in the Gulf of Guinea. Oil discoveries in the 1990s transformed it into one of Sub-Saharan Africa&apos;s wealthiest nations by GDP per capita.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>New Capital &amp; Biodiversity</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The government is building a new planned capital called Ciudad de la Paz (formerly Oyala) deep in the mainland rainforest. Monte Al&eacute;n National Park protects one of Central Africa&apos;s most biodiverse ecosystems, home to gorillas, forest elephants, and over 100 bird species.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Malabo', '297K \u00b7 Capital'],
            ['Bata', '250K \u00b7 Mainland'],
            ['Ebeb\u00edy\u00edn', '25K'],
            ['Aconibe', '11K'],
            ['A\u00f1isoc', '10K'],
            ['Mongomo', '6K'],
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
