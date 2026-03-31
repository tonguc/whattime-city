'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MassachusettsClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Massachusetts', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Bay State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Massachusetts Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~7 million' },
              { label: 'Atlantic TZ Debate', value: '2017 commission recommended switching to AST' },
              { label: 'Famous For', value: 'MIT, Harvard, Boston Marathon, biotech' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The State That Almost Changed Timezone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2017</strong>, a Massachusetts state commission <strong className={heading}>seriously recommended switching to Atlantic Standard Time (AST, UTC-4)</strong> — which would mean <strong className={heading}>permanent EDT year-round</strong> and no more clock changes. The reasoning: Massachusetts gets <strong className={heading}>too-dark winters</strong> and would benefit from later sunsets. The proposal stalled but <strong className={heading}>remains the most studied US timezone-change proposal</strong>.
            </p>
            <p>
              Boston is the <strong className={heading}>biotech and pharma capital of the world</strong>. The <strong className={heading}>Kendall Square</strong> area near MIT hosts more biotech companies per square mile than anywhere on Earth — Moderna, Pfizer, Novartis, and 1,000+ startups all run on <strong className={heading}>ET</strong>. When clinical trial results drop, they move markets at <strong className={heading}>Boston time</strong>.
            </p>
            <p>
              The <strong className={heading}>Boston Marathon</strong> — the world&apos;s oldest annual marathon (since 1897) — starts at <strong className={heading}>10:00 AM ET</strong> on Patriots&apos; Day (3rd Monday in April). It&apos;s watched globally and remains the <strong className={heading}>most prestigious marathon qualifier</strong> in running.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Massachusetts Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Boston', pop: '675K', note: 'Capital, MIT/Harvard, biotech hub' },
              { city: 'Worcester', pop: '205K', note: '2nd largest, healthcare center' },
              { city: 'Springfield', pop: '155K', note: 'Basketball birthplace (1891)' },
              { city: 'Cambridge', pop: '120K', note: 'MIT + Harvard, Kendall Square' },
              { city: 'Lowell', pop: '115K', note: 'Industrial Revolution birthplace' },
              { city: 'New Bedford', pop: '100K', note: 'Whaling capital, fishing port' },
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
