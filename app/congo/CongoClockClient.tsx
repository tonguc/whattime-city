'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function CongoClockClient() {
  const { time, date, mounted } = useClockState('Africa/Brazzaville')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Republic of the Congo', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~6M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~6 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Language', 'French (official)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Twin Capitals */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>The World&apos;s Closest Capitals</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Brazzaville and Kinshasa (capital of the Democratic Republic of the Congo) face each
          other across the Congo River&mdash;making them the world&apos;s closest pair of
          capital cities, separated by just 1.6&nbsp;km of water. The Congo River itself is the
          second largest in the world by discharge volume, draining an area roughly the size of
          India. The Republic of the Congo&apos;s oil-driven economy is centered at Pointe-Noire,
          the country&apos;s Atlantic port city.
        </p>
      </div>

      {/* Wildlife & Forest */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Odzala-Kokoua &amp; the Great Forest</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Over 65% of the country is covered by tropical forest, making Congo one of Africa&apos;s
          most densely forested nations. Odzala-Kokoua National Park, established in 1935, is among
          the oldest protected areas on the continent and shelters significant populations of
          western lowland gorillas and forest elephants. The northern forests are part of the
          Congo Basin&mdash;the world&apos;s second-largest tropical rainforest after the Amazon.
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
                <span className={`ml-2 text-xs ${mutedText}`} dangerouslySetInnerHTML={{ __html: c.note }} />
              </div>
              <span className={`text-xs font-medium ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
