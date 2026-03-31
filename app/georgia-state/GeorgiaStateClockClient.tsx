'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GeorgiaStateClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Georgia (US State)', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Peach State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Georgia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~10.9 million — 8th largest US state' },
              { label: 'ATL Airport', value: 'World\'s busiest (93M+ passengers/year)' },
              { label: 'Famous For', value: 'Atlanta, Coca-Cola, peaches, CNN, MLK' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Atlanta — The South&apos;s Capital on Eastern Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Hartsfield-Jackson Atlanta International Airport (ATL)</strong> has been the <strong className={heading}>world&apos;s busiest airport</strong> for over two decades — <strong className={heading}>93+ million passengers annually</strong>. Its ET location makes it the <strong className={heading}>ideal domestic connection hub</strong>: flights to both coasts are manageable same-day roundtrips. Delta Air Lines, headquartered here, schedules its global network around <strong className={heading}>Atlanta time</strong>.
            </p>
            <p>
              Atlanta is the <strong className={heading}>corporate capital of the Southeast</strong>: <strong className={heading}>Coca-Cola, Home Depot, UPS, Delta, Southern Company, and NCR</strong> all headquarter here. The city is also the <strong className={heading}>center of Black culture and business in America</strong> — home to <strong className={heading}>Morehouse, Spelman, Clark Atlanta</strong> (the largest HBCU cluster), and the birthplace of <strong className={heading}>Martin Luther King Jr.</strong>
            </p>
            <p>
              <strong className={heading}>CNN</strong> was founded in Atlanta in 1980 — the world&apos;s first <strong className={heading}>24-hour news network</strong>. Its headquarters at CNN Center operates on <strong className={heading}>ET</strong>, and the 24-hour news cycle concept was born from the idea that <strong className={heading}>news doesn&apos;t follow timezones</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Georgia Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Atlanta', pop: '500K', note: '6M metro, Delta hub, Coca-Cola HQ' },
              { city: 'Augusta', pop: '200K', note: 'The Masters golf, Army cyber command' },
              { city: 'Savannah', pop: '150K', note: 'Historic district, port city, SCAD' },
              { city: 'Columbus', pop: '200K', note: 'Fort Moore (Benning), Chattahoochee' },
              { city: 'Macon', pop: '155K', note: 'Cherry blossoms, music heritage' },
              { city: 'Athens', pop: '130K', note: 'UGA, music scene (R.E.M., B-52s)' },
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
