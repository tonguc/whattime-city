'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ColoradoClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Denver')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Colorado', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'MDT · UTC-6' : 'MST · UTC-7', highlight: true },
          { label: 'Mountain Time' },
          { label: 'The Centennial State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Colorado Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'MT — Mountain Time (UTC-7/UTC-6)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Denver' },
              { label: 'Population', value: '~5.8 million' },
              { label: 'Elevation', value: 'Denver at 5,280 ft — "Mile High City"' },
              { label: 'Famous For', value: 'Rocky Mountains, skiing, tech, craft beer' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mountain Time Capital — Denver&apos;s Growing Tech Scene</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Colorado is the <strong className={heading}>de facto capital of Mountain Time</strong>. Denver&apos;s tech scene has exploded — <strong className={heading}>Oracle, Palantir, Arrow Electronics, and Charles Schwab</strong> have moved HQs here. The <strong className={heading}>MT timezone (2 hours behind NYC, 1 hour ahead of LA)</strong> provides a <strong className={heading}>goldilocks schedule</strong> for companies needing both coast access.
            </p>
            <p>
              <strong className={heading}>NORAD (North American Aerospace Defense Command)</strong> operates from <strong className={heading}>Cheyenne Mountain, Colorado Springs</strong> — the iconic bunker built inside a mountain during the Cold War. NORAD tracks <strong className={heading}>every object in Earth&apos;s orbit</strong> and famously <strong className={heading}>tracks Santa Claus on Christmas Eve</strong> starting at midnight MT.
            </p>
            <p>
              Colorado has <strong className={heading}>58 mountain peaks above 14,000 feet</strong> (the most &ldquo;fourteeners&rdquo; in the US). The state&apos;s <strong className={heading}>300+ days of sunshine</strong> and outdoor lifestyle have made Denver one of the <strong className={heading}>fastest-growing US metros</strong> — population has grown <strong className={heading}>20%+ since 2010</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Colorado Cities — All on MT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Denver', pop: '715K', note: 'Capital, Mile High City, tech boom' },
              { city: 'Colorado Springs', pop: '480K', note: 'NORAD, Air Force Academy, Garden of Gods' },
              { city: 'Aurora', pop: '390K', note: '3rd largest, Buckley Space Force Base' },
              { city: 'Fort Collins', pop: '170K', note: 'CSU, craft beer capital, New Belgium' },
              { city: 'Boulder', pop: '105K', note: 'CU Boulder, tech startups, outdoors' },
              { city: 'Aspen', pop: '7K', note: 'World-class skiing, luxury resort' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
