'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function OregonClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Los_Angeles')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Oregon', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'PDT · UTC-7 / MDT · UTC-6' : 'PST · UTC-8 / MST · UTC-7', highlight: true },
          { label: '2 Time Zones' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Oregon Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'PT — Pacific Time (most of state)' },
              { label: 'Eastern Oregon', value: 'MT — Mountain Time (Malheur County)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Permanent DST', value: 'Voted 2019 (with WA) — awaiting Congress' },
              { label: 'Population', value: '~4.2 million' },
              { label: 'Famous For', value: 'Nike, Portland, Crater Lake, no sales tax' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Portland Time — Where Nike and Intel Set the Pacific Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Nike</strong> — the world&apos;s largest sportswear company — is headquartered in <strong className={heading}>Beaverton, Oregon</strong>. Global product launches, athlete endorsement announcements, and earnings calls all happen on <strong className={heading}>Pacific Time</strong>. Oregon is also home to <strong className={heading}>Intel&apos;s largest manufacturing site</strong> (Hillsboro), where <strong className={heading}>cutting-edge chip fabrication</strong> runs 24/7.
            </p>
            <p>
              Oregon is one of the few US states split between <strong className={heading}>two time zones</strong>. The vast majority follows <strong className={heading}>PT</strong>, but <strong className={heading}>Malheur County</strong> in the far southeast corner uses <strong className={heading}>Mountain Time</strong> — it&apos;s geographically and economically tied to <strong className={heading}>Boise, Idaho</strong> rather than Portland.
            </p>
            <p>
              Oregon has <strong className={heading}>no sales tax</strong> — making it a <strong className={heading}>shopping destination</strong> for neighboring Washington and California residents. Portland is also famous for its <strong className={heading}>food cart culture</strong> (600+ carts), <strong className={heading}>craft beer scene</strong> (70+ breweries in the city), and the motto <strong className={heading}>&ldquo;Keep Portland Weird.&rdquo;</strong>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Oregon Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Portland', pop: '650K', note: 'PT · Largest city, Nike, craft beer' },
              { city: 'Salem', pop: '180K', note: 'PT · State capital, Willamette Valley' },
              { city: 'Eugene', pop: '175K', note: 'PT · U of Oregon, Track Town USA' },
              { city: 'Hillsboro', pop: '110K', note: 'PT · Intel campus, Silicon Forest' },
              { city: 'Bend', pop: '105K', note: 'PT · Outdoor recreation, ski resort' },
              { city: 'Ontario', pop: '12K', note: 'MT · Malheur County, Idaho border' },
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
