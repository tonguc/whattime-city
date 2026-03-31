'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AlabamaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Alabama', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CDT · UTC-5' : 'CST · UTC-6', highlight: true },
          { label: 'Central Time' },
          { label: 'The Heart of Dixie' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Alabama Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~5 million — 24th largest state' },
              { label: 'Capital', value: 'Montgomery — cradle of civil rights' },
              { label: 'Famous For', value: 'NASA, college football, civil rights' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Rockets, Rivalries &amp; Civil Rights — Alabama on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Huntsville</strong>, known as <strong className={heading}>Rocket City</strong>, is home to <strong className={heading}>NASA&apos;s Marshall Space Flight Center</strong> — where the Saturn V rocket was developed. Today the city is one of America&apos;s fastest-growing tech hubs, with defense contractors and aerospace firms scheduling launches and meetings on <strong className={heading}>Central Time</strong>. Redstone Arsenal, adjacent to Marshall, employs over <span style={{ fontVariantNumeric: 'tabular-nums' }}>44,000</span> people.
            </p>
            <p>
              Every fall, the state divides along one line: <strong className={heading}>Auburn vs. Alabama</strong>. The Iron Bowl rivalry is the biggest event on Alabama&apos;s calendar. Game day kickoffs — typically <strong className={heading}>2:30 PM or 7:00 PM CT</strong> — bring the entire state to a standstill. Bryant-Denny Stadium in Tuscaloosa holds over <span style={{ fontVariantNumeric: 'tabular-nums' }}>100,000</span> fans.
            </p>
            <p>
              <strong className={heading}>Birmingham</strong> played a pivotal role in the <strong className={heading}>American civil rights movement</strong>. The 16th Street Baptist Church bombing, the Birmingham Campaign of 1963, and the marches from Selma to Montgomery are foundational moments in U.S. history. Alabama is also a growing automotive powerhouse — <strong className={heading}>Mercedes-Benz</strong> and <strong className={heading}>Hyundai</strong> operate major assembly plants here, with shifts running around the clock on CT.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Alabama Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Birmingham', pop: '196K', note: 'Largest city, civil rights history' },
              { city: 'Huntsville', pop: '220K', note: 'Rocket City, NASA Marshall center' },
              { city: 'Montgomery', pop: '200K', note: 'State capital, Rosa Parks legacy' },
              { city: 'Mobile', pop: '187K', note: 'Port city, original Mardi Gras' },
              { city: 'Tuscaloosa', pop: '100K', note: 'Univ. of Alabama, Roll Tide' },
              { city: 'Auburn', pop: '78K', note: 'Auburn University, War Eagle' },
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
