'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NewJerseyClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in New Jersey', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Garden State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>New Jersey Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~9.3 million — most densely populated US state' },
              { label: 'Pharma Capital', value: 'More pharma HQs than any other state' },
              { label: 'Famous For', value: 'Jersey Shore, diners, Turnpike, pharma, Springsteen' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Pharma Capital on Eastern Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              New Jersey is the <strong className={heading}>pharmaceutical capital of the US</strong>. <strong className={heading}>Johnson &amp; Johnson (New Brunswick), Merck (Rahway), Bristol-Myers Squibb (Princeton), and Novo Nordisk (Plainsboro)</strong> all headquarter here. Drug approvals, clinical trial results, and pharma earnings move markets on <strong className={heading}>ET</strong>.
            </p>
            <p>
              New Jersey is the <strong className={heading}>most densely populated US state</strong> — <strong className={heading}>1,263 people per square mile</strong>. It sits between <strong className={heading}>New York City and Philadelphia</strong>, making it the ultimate commuter state. Over <strong className={heading}>400,000 NJ residents</strong> commute to NYC daily via NJ Transit, PATH, and bus — all running on <strong className={heading}>ET</strong>.
            </p>
            <p>
              <strong className={heading}>Thomas Edison&apos;s Menlo Park laboratory</strong> was in New Jersey — where he invented the <strong className={heading}>phonograph, practical light bulb, and motion picture camera</strong>. Edison&apos;s work on <strong className={heading}>electric power distribution</strong> fundamentally changed how humans relate to <strong className={heading}>time and darkness</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major New Jersey Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Newark', pop: '310K', note: 'Largest city, EWR airport, Prudential' },
              { city: 'Jersey City', pop: '290K', note: 'NYC skyline views, finance, Goldman Sachs' },
              { city: 'Trenton', pop: '90K', note: 'State capital, Delaware River' },
              { city: 'Princeton', pop: '30K', note: 'Princeton University, Einstein lived here' },
              { city: 'Atlantic City', pop: '40K', note: 'Boardwalk, casinos, Miss America' },
              { city: 'Hoboken', pop: '60K', note: 'Frank Sinatra birthplace, NYC commuters' },
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
