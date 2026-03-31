'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NorthCarolinaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in North Carolina', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Tar Heel State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>North Carolina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~10.7 million — 9th largest US state' },
              { label: 'Research Triangle', value: 'Raleigh-Durham-Chapel Hill tech corridor' },
              { label: 'Famous For', value: 'First flight, banking, BBQ, Research Triangle' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Research Triangle — The South&apos;s Tech Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Research Triangle</strong> (Raleigh, Durham, Chapel Hill) is one of the <strong className={heading}>fastest-growing tech hubs in the US</strong>. <strong className={heading}>Apple, Google, Meta, and Epic Games</strong> all have major offices here. The area&apos;s <strong className={heading}>ET timezone</strong> gives it a competitive edge — aligned with <strong className={heading}>Wall Street and DC</strong> while being <strong className={heading}>30-40% cheaper than NYC or SF</strong>.
            </p>
            <p>
              <strong className={heading}>Charlotte</strong> is the <strong className={heading}>2nd largest banking center in the US</strong> after New York. <strong className={heading}>Bank of America and Truist</strong> are headquartered here, and <strong className={heading}>Wells Fargo&apos;s East Coast operations</strong> are major. Charlotte&apos;s banks manage <strong className={heading}>trillions in assets</strong> on ET.
            </p>
            <p>
              The <strong className={heading}>Wright Brothers&apos; first powered flight</strong> took place at <strong className={heading}>Kitty Hawk, North Carolina</strong> on December 17, 1903. The flight lasted <strong className={heading}>12 seconds at 10:35 AM</strong> — a moment timed on what would become <strong className={heading}>Eastern Standard Time</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major North Carolina Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charlotte', pop: '880K', note: 'Banking capital, NASCAR, 2nd largest' },
              { city: 'Raleigh', pop: '470K', note: 'State capital, Research Triangle' },
              { city: 'Durham', pop: '300K', note: 'Duke University, biotech, Bull City' },
              { city: 'Greensboro', pop: '300K', note: 'Textiles, civil rights history' },
              { city: 'Asheville', pop: '95K', note: 'Blue Ridge Mountains, Biltmore, craft beer' },
              { city: 'Wilmington', pop: '120K', note: 'Film industry, beaches, port' },
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
