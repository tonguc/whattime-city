'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ComorosClockClient() {
  const { time, date, mounted } = useClockState('Indian/Comoro')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Comoros', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~900K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~900,000'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Islands', '3 main volcanic islands'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Volcanic Archipelago */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Volcanic Archipelago</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Comoros is a volcanic archipelago in the Mozambique Channel between Madagascar and
          the African mainland. Mount Karthala on Grande Comore is one of the world&apos;s most
          active volcanoes, rising 2,361&nbsp;m above sea level. The islands blend French, Arab,
          African, and Malagasy cultural influences into a unique Comorian identity.
        </p>
      </div>

      {/* Perfume &amp; Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Perfume Islands &amp; Living Fossils</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Comoros is the world&apos;s largest producer of ylang-ylang essence, the fragrant oil
          used in luxury perfumes&mdash;earning the nickname &ldquo;Perfume Islands.&rdquo; The
          waters off Comoros are also where the coelacanth, a prehistoric fish once thought extinct
          for 65&nbsp;million years, was rediscovered alive. These &ldquo;living fossils&rdquo;
          still inhabit the deep volcanic caves around the islands.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Major Cities</h3>
        <div className="grid gap-2">
          {CITIES.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <span className={`text-sm font-medium ${heading}`}>{c.name}</span>
                <span className={`ml-2 text-xs ${mutedText}`}>{c.note}</span>
              </div>
              <span className={`text-xs font-medium ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
