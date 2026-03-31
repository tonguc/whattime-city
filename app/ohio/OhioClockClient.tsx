'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function OhioClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Ohio', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Buckeye State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ohio Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~11.8 million — 7th largest US state' },
              { label: 'Aviation Birthplace', value: 'Wright Brothers from Dayton, Ohio' },
              { label: 'Famous For', value: '7 US Presidents, Rock Hall of Fame, football' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ohio — Where Eastern Time Meets the Midwest</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ohio sits on the <strong className={heading}>western edge of the Eastern Time zone</strong> — geographically, it&apos;s very close to the <strong className={heading}>ET/CT boundary</strong>. This means Ohio gets <strong className={heading}>later sunsets than eastern ET states</strong> like Massachusetts. In summer, Cincinnati doesn&apos;t see sunset until <strong className={heading}>nearly 9:10 PM EDT</strong>, while Boston&apos;s last light is at <strong className={heading}>8:25 PM</strong>.
            </p>
            <p>
              <strong className={heading}>7 US Presidents</strong> were born in Ohio — more than any state except Virginia. The state is also the <strong className={heading}>ultimate swing state</strong> in elections: <strong className={heading}>no Republican has ever won the presidency without winning Ohio</strong>. Election night coverage focuses heavily on Ohio results, typically announced on <strong className={heading}>ET</strong>.
            </p>
            <p>
              The <strong className={heading}>Wright Brothers</strong> built and tested their aircraft in <strong className={heading}>Dayton, Ohio</strong> before their famous first flight at Kitty Hawk. Ohio is also home to <strong className={heading}>NASA&apos;s Glenn Research Center</strong> in Cleveland and produced <strong className={heading}>more astronauts than any other state</strong> — including John Glenn and Neil Armstrong.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ohio Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Columbus', pop: '905K', note: 'State capital, Ohio State, fastest growing' },
              { city: 'Cleveland', pop: '370K', note: 'Rock Hall of Fame, Clinic, Lake Erie' },
              { city: 'Cincinnati', pop: '310K', note: 'P&G HQ, chili, Ohio River' },
              { city: 'Toledo', pop: '270K', note: 'Glass City, auto industry' },
              { city: 'Dayton', pop: '137K', note: 'Wright Brothers, aviation birthplace' },
              { city: 'Akron', pop: '190K', note: 'Rubber capital, Goodyear, LeBron' },
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
