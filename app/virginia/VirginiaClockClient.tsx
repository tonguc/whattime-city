'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function VirginiaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Virginia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'Old Dominion' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Virginia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~8.6 million' },
              { label: 'Data Center Capital', value: '70%+ of world internet traffic through NoVA' },
              { label: 'Famous For', value: 'Pentagon, CIA, Amazon HQ2, Shenandoah' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Where the Internet Lives — Virginia&apos;s Data Center Dominance</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Northern Virginia (NoVA)</strong> is the <strong className={heading}>data center capital of the world</strong>. Over <strong className={heading}>70% of the world&apos;s internet traffic</strong> passes through data centers in <strong className={heading}>Ashburn and Loudoun County</strong>. AWS, Microsoft Azure, Google Cloud, and Meta all have massive facilities here — running on <strong className={heading}>Eastern Time</strong>.
            </p>
            <p>
              Virginia hosts the <strong className={heading}>Pentagon, CIA headquarters (Langley), and NSA facilities</strong>. The US national security apparatus operates on <strong className={heading}>ET</strong> — intelligence briefings, military operations, and defense contracts all follow <strong className={heading}>Virginia time</strong>. Amazon chose <strong className={heading}>Arlington (HQ2)</strong> partly for this proximity to power.
            </p>
            <p>
              <strong className={heading}>MAE-East</strong> (Metropolitan Area Exchange-East), located in Virginia, was one of the <strong className={heading}>original internet exchange points</strong> — the physical place where internet backbone providers connected. This historical accident is why <strong className={heading}>Virginia became the internet&apos;s nerve center</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Virginia Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Virginia Beach', pop: '460K', note: 'Largest city, Navy base, resort' },
              { city: 'Norfolk', pop: '240K', note: 'World\'s largest naval base' },
              { city: 'Arlington', pop: '235K', note: 'Pentagon, Amazon HQ2, DC suburbs' },
              { city: 'Richmond', pop: '230K', note: 'State capital, historic, finance' },
              { city: 'Alexandria', pop: '160K', note: 'Old Town, federal workforce' },
              { city: 'Ashburn', pop: '50K', note: 'Data center capital of the world' },
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
