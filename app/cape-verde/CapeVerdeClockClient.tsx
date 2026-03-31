'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function CapeVerdeClockClient() {
  const { time, date, mounted } = useClockState('Atlantic/Cape_Verde')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Cape Verde', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CVT &middot; UTC-1' },
          { label: 'No DST' },
          { label: 'Pop. ~590K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~590,000'],
            ['Time Zone', 'CVT (UTC\u22121)'],
            ['DST', 'Not observed'],
            ['Islands', '10 volcanic islands'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Music & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Morna Music &amp; the Barefoot Diva</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Cape Verde&apos;s morna genre&mdash;a soulful blend of Portuguese fado and African
          rhythms&mdash;was inscribed on the UNESCO Intangible Cultural Heritage list. The
          genre&apos;s most famous voice, Ces&aacute;ria &Eacute;vora, became known worldwide
          as the &ldquo;Barefoot Diva&rdquo; for performing without shoes, symbolizing her
          connection to Cape Verdean soil and the simplicity of island life.
        </p>
      </div>

      {/* Atlantic Crossroads */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Atlantic Crossroads</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Positioned 570&nbsp;km off the West African coast, Cape Verde has served as a
          transatlantic hub for centuries&mdash;first for the Portuguese maritime trade and today
          as an air and sea bridge between Africa and the Americas. With year-round sunshine and
          steady trade winds, the islands are a world-class destination for windsurfing, kitesurfing,
          and deep-sea fishing.
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
