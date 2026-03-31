'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SouthCarolinaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in South Carolina', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Palmetto State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Carolina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~5.2 million — 23rd largest state' },
              { label: 'Capital', value: 'Columbia — center of the Midlands' },
              { label: 'Famous For', value: 'Boeing, beaches, BMW, history' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dreamliners, Beaches &amp; BMW — South Carolina on Eastern Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Charleston</strong> is home to <strong className={heading}>Boeing&apos;s 787 Dreamliner factory</strong>, one of the largest buildings in the world by volume. The North Charleston assembly line operates on <strong className={heading}>Eastern Time</strong>, coordinating deliveries with suppliers across time zones. Charleston also draws millions of tourists annually to its historic district, plantations, and waterfront — consistently ranked among America&apos;s top cities.
            </p>
            <p>
              In <strong className={heading}>Spartanburg</strong>, <strong className={heading}>BMW operates its largest factory worldwide</strong>, producing over <span style={{ fontVariantNumeric: 'tabular-nums' }}>1,500</span> vehicles per day. The plant employs more than <span style={{ fontVariantNumeric: 'tabular-nums' }}>11,000</span> workers and is South Carolina&apos;s single largest exporter. Shifts and logistics run strictly on ET, syncing with BMW&apos;s Munich headquarters <span style={{ fontVariantNumeric: 'tabular-nums' }}>6</span> hours ahead in CET.
            </p>
            <p>
              <strong className={heading}>Myrtle Beach</strong> welcomes over <span style={{ fontVariantNumeric: 'tabular-nums' }}>20</span> million visitors annually along the <strong className={heading}>Grand Strand</strong>, a <span style={{ fontVariantNumeric: 'tabular-nums' }}>60</span>-mile stretch of coastline. And at <strong className={heading}>Fort Sumter</strong> in Charleston Harbor, the first shots of the <strong className={heading}>Civil War</strong> were fired on April <span style={{ fontVariantNumeric: 'tabular-nums' }}>12</span>, <span style={{ fontVariantNumeric: 'tabular-nums' }}>1861</span> at <span style={{ fontVariantNumeric: 'tabular-nums' }}>4:30 AM</span> — a moment that changed the course of American history.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South Carolina Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charleston', pop: '150K', note: 'Boeing factory, historic port city' },
              { city: 'Columbia', pop: '137K', note: 'State capital, Univ. of South Carolina' },
              { city: 'Greenville', pop: '74K', note: 'Upstate hub, revitalized downtown' },
              { city: 'Myrtle Beach', pop: '35K', note: 'Grand Strand, 20M+ visitors/year' },
              { city: 'Spartanburg', pop: '38K', note: 'BMW world\'s largest plant' },
              { city: 'Rock Hill', pop: '75K', note: 'Charlotte metro, fast-growing' },
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
