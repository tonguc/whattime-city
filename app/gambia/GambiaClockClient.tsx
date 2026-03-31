'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GambiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Banjul')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in The Gambia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~2.7M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.7 million'],
            ['Time Zone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Currency', 'Gambian dalasi (GMD)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* River Gambia */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>The River Gambia Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Gambia is the smallest country on mainland Africa, stretching as a narrow strip on both
          banks of the River Gambia. The river runs the entire 480&nbsp;km length of the country before
          emptying into the Atlantic. Kunta Kinteh Island (formerly James Island), a UNESCO World Heritage
          Site, stands in the river as a poignant reminder of the transatlantic slave trade and inspired
          Alex Haley&apos;s famous novel &ldquo;Roots.&rdquo;
        </p>
      </div>

      {/* Birdwatching */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Birdwatcher&apos;s Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Despite its small size, The Gambia is home to over 560 recorded bird species&mdash;making it one
          of the top birdwatching destinations in West Africa. Abuko Nature Reserve, just 20 minutes from
          the coast, offers sightings of kingfishers, hornbills, and rare species. The combination of
          river wetlands, mangroves, and savanna habitats creates exceptional biodiversity within a
          compact and accessible area.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
