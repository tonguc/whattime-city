'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NevadaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Los_Angeles')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Nevada', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'PDT · UTC-7' : 'PST · UTC-8', highlight: true },
          { label: 'Pacific Time' },
          { label: 'The Silver State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nevada Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'PT — Pacific Time (UTC-8/UTC-7)' },
              { label: 'Exception', value: 'West Wendover uses MT (near Utah border)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Los_Angeles' },
              { label: 'Population', value: '~3.2 million' },
              { label: 'Famous For', value: 'Las Vegas, casinos, Area 51, no state tax' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Vegas Never Sleeps — But It Runs on Pacific Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Las Vegas</strong> casinos famously have <strong className={heading}>no clocks and no windows</strong> — designed to make you lose track of time. Yet the city itself runs strictly on <strong className={heading}>Pacific Time</strong>. Las Vegas hosts <strong className={heading}>42 million visitors annually</strong> and generates <strong className={heading}>$15B+ in gaming revenue</strong>. Major events (CES, boxing, F1 Las Vegas GP) are timed to <strong className={heading}>PT</strong>.
            </p>
            <p>
              Nevada has <strong className={heading}>no state income tax</strong> — funded entirely by gaming and tourism revenue. This has attracted a massive <strong className={heading}>tech migration</strong>: <strong className={heading}>Tesla&apos;s Gigafactory</strong> is in Sparks (near Reno), and <strong className={heading}>Switch, the world&apos;s largest data center campus</strong>, operates in Las Vegas. Companies relocating from California save on taxes while staying on the <strong className={heading}>same timezone</strong>.
            </p>
            <p>
              <strong className={heading}>West Wendover</strong> — a tiny casino town on the Utah border — is the one exception: it uses <strong className={heading}>Mountain Time</strong> to stay aligned with nearby <strong className={heading}>Salt Lake City</strong> customers who drive across the border to gamble.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Nevada Cities — PT (except noted)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Las Vegas', pop: '650K', note: 'PT · Entertainment capital, F1, casinos' },
              { city: 'Henderson', pop: '320K', note: 'PT · Las Vegas suburb, fastest growing' },
              { city: 'Reno', pop: '265K', note: 'PT · "Biggest Little City," tech hub' },
              { city: 'North Las Vegas', pop: '265K', note: 'PT · Nellis AFB, logistics hub' },
              { city: 'Sparks', pop: '110K', note: 'PT · Tesla Gigafactory, Reno metro' },
              { city: 'West Wendover', pop: '4K', note: 'MT · Utah border, casino town' },
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
