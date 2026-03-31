'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function DjiboutiClockClient() {
  const { time, date, mounted } = useClockState('Africa/Djibouti')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Djibouti', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~1.1M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.1 million'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Languages', 'French &amp; Arabic'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Gateway */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Strategic Gateway</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Djibouti sits at the Bab-el-Mandeb strait&mdash;the narrow passage connecting the Red Sea
          to the Indian Ocean. This position makes it one of the world&apos;s most important maritime
          chokepoints, hosting military bases from France, the United States, China, and Japan. The
          country&apos;s modern port facilities handle cargo for landlocked Ethiopia and the broader
          East African region.
        </p>
      </div>

      {/* Natural Extremes */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Natural Extremes</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Lake Assal, at 155&nbsp;m below sea level, is the lowest point in Africa and the
          third-lowest on Earth. It is also the world&apos;s saltiest lake outside Antarctica,
          with salinity exceeding 34%. The surrounding Afar Triangle is one of the hottest
          inhabited places on the planet, with summer temperatures regularly above 42&nbsp;&deg;C
          (108&nbsp;&deg;F).
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
