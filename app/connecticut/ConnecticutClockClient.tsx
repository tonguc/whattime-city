'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ConnecticutClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Connecticut', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Constitution State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Connecticut Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~3.6 million' },
              { label: 'Hedge Fund Capital', value: 'Greenwich — world\'s hedge fund HQ cluster' },
              { label: 'Famous For', value: 'Yale, insurance capital, hedge funds, pizza' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Greenwich, CT — Where Hedge Funds Run the Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Greenwich, Connecticut</strong> is the <strong className={heading}>hedge fund capital of the world</strong>. <strong className={heading}>Bridgewater Associates ($150B+ AUM), AQR, Point72, and Viking Global</strong> all operate from Greenwich and nearby Stamford. These funds manage <strong className={heading}>trillions of dollars</strong> from Connecticut&apos;s ET timezone — just <strong className={heading}>45 minutes by Metro-North from Manhattan</strong>.
            </p>
            <p>
              Connecticut is also the <strong className={heading}>insurance capital of the US</strong>. <strong className={heading}>Hartford</strong> has been called the <strong className={heading}>&ldquo;Insurance Capital of the World&rdquo;</strong> since the 1800s — <strong className={heading}>Aetna, The Hartford, Cigna (now in Bloomfield)</strong> and dozens of reinsurers cluster here. Insurance industry schedules follow <strong className={heading}>ET</strong>.
            </p>
            <p>
              <strong className={heading}>Yale University</strong> (New Haven, founded 1701) is one of the world&apos;s most prestigious universities. Connecticut also hosts <strong className={heading}>Sikorsky Aircraft</strong> (Stratford) — inventor of the helicopter — and the <strong className={heading}>US Navy&apos;s submarine base</strong> at Groton, where nuclear submarines are built.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Connecticut Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bridgeport', pop: '150K', note: 'Largest city, coastal, P.T. Barnum' },
              { city: 'New Haven', pop: '135K', note: 'Yale University, pizza capital' },
              { city: 'Stamford', pop: '135K', note: 'Finance hub, WWE HQ, NYC commuters' },
              { city: 'Hartford', pop: '120K', note: 'State capital, insurance capital' },
              { city: 'Greenwich', pop: '63K', note: 'Hedge fund capital, Gold Coast' },
              { city: 'New London', pop: '27K', note: 'Coast Guard Academy, submarine base' },
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
