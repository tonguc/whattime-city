'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NewYorkStateClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in New York State', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Empire State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>New York State Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~19.7 million' },
              { label: 'NYC GDP', value: '$2T+ — world\'s largest city economy' },
              { label: 'Famous For', value: 'Wall Street, Times Square, Niagara Falls' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Wall Street Time — When ET Moves the World</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>New York Stock Exchange (NYSE)</strong> and <strong className={heading}>NASDAQ</strong> trade from <strong className={heading}>9:30 AM to 4 PM ET</strong> — these 6.5 hours are the <strong className={heading}>most financially consequential time window on Earth</strong>. Global markets watch the US open at <strong className={heading}>2:30 PM GMT, 11:30 PM JST, and 7 AM PT</strong>.
            </p>
            <p>
              New York State is more than just NYC. <strong className={heading}>Upstate New York</strong> (Albany, Syracuse, Rochester, Buffalo) has a dramatically different character — <strong className={heading}>Niagara Falls, Adirondack Mountains (6 million acres of wilderness), and Finger Lakes wine country</strong>. The entire state shares <strong className={heading}>Eastern Time</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major New York State Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'New York City', pop: '8.3M', note: 'World financial capital, 5 boroughs' },
              { city: 'Buffalo', pop: '255K', note: 'Niagara Falls, wings, Lake Erie' },
              { city: 'Rochester', pop: '210K', note: 'Eastman Kodak, Finger Lakes' },
              { city: 'Albany', pop: '100K', note: 'State capital, Hudson Valley' },
              { city: 'Syracuse', pop: '145K', note: 'Salt City, university, snowiest' },
              { city: 'Long Island', pop: '2.8M', note: 'Suburbs, Hamptons, beaches' },
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
