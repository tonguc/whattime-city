'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function CentralAfricanRepublicClockClient() {
  const { time, date, mounted } = useClockState('Africa/Bangui')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Central African Republic', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~5.5M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~5.5 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Language', 'French &amp; Sango'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          ))}
        </div>
      </div>

      {/* Heart of Africa */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Geographic Heart of Africa</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          The Central African Republic sits at the geographic center of the continent, covered by
          dense tropical forests in the south and savanna in the north. The Dzanga-Sangha Reserve
          in the southwest is home to large populations of forest elephants and western lowland
          gorillas. The Bayaka people, one of Africa&apos;s indigenous pygmy groups, maintain
          their traditional forest-dwelling culture in this region.
        </p>
      </div>

      {/* Boali & Diamonds */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Boali Falls &amp; Diamond Country</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          The Boali waterfalls, about 100&nbsp;km northwest of Bangui, cascade 50&nbsp;m down
          and power one of the country&apos;s main hydroelectric stations. CAR is also one of
          Africa&apos;s notable diamond-producing nations, with alluvial deposits scattered across
          the western prefectures. The Ubangi River, which forms the southern border, connects
          Bangui to the Congo River trade network.
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
