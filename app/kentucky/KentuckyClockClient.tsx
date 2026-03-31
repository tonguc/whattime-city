'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KentuckyClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Kentucky', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: '2 Time Zones', highlight: true },
          { label: 'ET + CT Split' },
          { label: 'The Bluegrass State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kentucky Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zones', value: 'ET (most of state) + CT (western counties)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifiers', value: 'America/New_York + America/Chicago' },
              { label: 'Population', value: '~4.5 million — 26th largest state' },
              { label: 'Capital', value: 'Frankfort — Eastern Time zone' },
              { label: 'Famous For', value: 'Bourbon, Derby, Fort Knox gold' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bourbon, the Derby &amp; Fort Knox — Kentucky Across Two Time Zones</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Kentucky Derby</strong> at <strong className={heading}>Churchill Downs</strong> in Louisville is the most famous <span style={{ fontVariantNumeric: 'tabular-nums' }}>2</span> minutes in sports. Post time for the main race is traditionally around <span style={{ fontVariantNumeric: 'tabular-nums' }}>6:57 PM ET</span> on the first Saturday in May — that&apos;s <span style={{ fontVariantNumeric: 'tabular-nums' }}>5:57 PM CT</span> for fans in western Kentucky. The Derby has run every year since <span style={{ fontVariantNumeric: 'tabular-nums' }}>1875</span>, making it the longest continuously held sporting event in the U.S.
            </p>
            <p>
              Kentucky produces <span style={{ fontVariantNumeric: 'tabular-nums' }}>95%</span> of the world&apos;s <strong className={heading}>bourbon whiskey</strong>. The <strong className={heading}>Bourbon Trail</strong> stretches across the Bluegrass region with distilleries like Maker&apos;s Mark, Woodford Reserve, and Buffalo Trace — all on <strong className={heading}>Eastern Time</strong>. Bourbon must age a minimum of <span style={{ fontVariantNumeric: 'tabular-nums' }}>2</span> years in new charred oak barrels, and there are more barrels of bourbon aging in Kentucky than there are people living in the state.
            </p>
            <p>
              <strong className={heading}>Fort Knox</strong>, near Louisville, holds roughly <span style={{ fontVariantNumeric: 'tabular-nums' }}>4,580</span> tons of gold bullion — about half of the U.S. Treasury&apos;s gold reserves. The vault operates on <strong className={heading}>Eastern Time</strong>. Kentucky&apos;s time zone split runs roughly along a north-south line: <strong className={heading}>Louisville, Lexington, and Covington</strong> are on ET, while <strong className={heading}>Bowling Green, Owensboro, and Paducah</strong> observe CT — a <span style={{ fontVariantNumeric: 'tabular-nums' }}>1</span>-hour difference that affects everything from TV schedules to business calls.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Kentucky Cities — ET &amp; CT Split</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Louisville', pop: '633K', note: 'Largest city, Derby, ET zone' },
              { city: 'Lexington', pop: '322K', note: 'Horse capital, UK Wildcats, ET' },
              { city: 'Bowling Green', pop: '78K', note: 'Corvette Museum, CT zone' },
              { city: 'Owensboro', pop: '61K', note: 'BBQ capital of KY, CT zone' },
              { city: 'Covington', pop: '41K', note: 'Cincinnati metro, ET zone' },
              { city: 'Paducah', pop: '27K', note: 'UNESCO Creative City, CT zone' },
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
