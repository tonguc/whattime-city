'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PuertoRicoClockClient() {
  const { time, date, mounted } = useClockState('America/Puerto_Rico')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Puerto Rico', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC-4', highlight: true },
          { label: 'No DST' },
          { label: 'San Juan' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Puerto Rico Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Atlantic Standard Time (UTC-4)' },
              { label: 'DST Status', value: 'No DST — same as EDT in summer!' },
              { label: 'IANA Identifier', value: 'America/Puerto_Rico' },
              { label: 'Population', value: '~3.2 million (US territory)' },
              { label: 'NYC Alignment', value: 'Same time as NYC in summer (both UTC-4)' },
              { label: 'Famous For', value: 'Old San Juan, rum, beaches, Act 60 tax' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The No-DST Advantage — Puerto Rico&apos;s Time Trick</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Puerto Rico uses <strong className={heading}>AST (UTC-4) year-round with no DST</strong>. This creates an interesting dynamic: during <strong className={heading}>US summer (March-November)</strong>, Puerto Rico is on the <strong className={heading}>same time as New York and Miami (EDT = UTC-4)</strong>. During <strong className={heading}>US winter</strong>, Puerto Rico is <strong className={heading}>1 hour ahead of the East Coast (EST = UTC-5)</strong>.
            </p>
            <p>
              <strong className={heading}>Act 60</strong> (formerly Act 20/22) offers <strong className={heading}>0% capital gains tax and 4% corporate tax</strong> for qualifying residents. This has attracted a wave of <strong className={heading}>crypto entrepreneurs, hedge fund managers, and remote workers</strong> to the island. The <strong className={heading}>timezone alignment with NYC in summer</strong> makes it ideal for finance professionals.
            </p>
            <p>
              Puerto Rico produces <strong className={heading}>over 70% of the rum consumed in the US</strong> — Bacardí&apos;s largest distillery is in <strong className={heading}>Cataño, near San Juan</strong>. The island is also a <strong className={heading}>major pharmaceutical manufacturing hub</strong> — producing roughly <strong className={heading}>25% of all US pharmaceutical exports</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Puerto Rico Key Cities — All on AST (UTC-4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'San Juan', pop: '320K', note: 'Capital, Old San Juan, cruise port' },
              { city: 'Bayamón', pop: '185K', note: '2nd largest, metro San Juan' },
              { city: 'Ponce', pop: '130K', note: '"Pearl of the South," museums' },
              { city: 'Carolina', pop: '150K', note: 'Airport location, beaches' },
              { city: 'Caguas', pop: '130K', note: 'Mountain city, tech park' },
              { city: 'Mayagüez', pop: '75K', note: 'Western city, tuna industry, UPR' },
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
