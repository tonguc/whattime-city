'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function WisconsinClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Wisconsin', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CT &middot; UTC-6 / UTC-5' },
          { label: 'Observes DST' },
          { label: 'Pop. ~5.9 Million' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Wisconsin Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Central Time (CT)' },
              { label: 'UTC Offset', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — clocks spring forward in March' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Single Time Zone', value: 'Entire state on Central Time' },
              { label: 'Population', value: '~5.9 million (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>America&apos;s Dairyland &amp; Brewing Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Wisconsin produces over <strong className={heading}>3 billion pounds of cheese annually</strong> &mdash; more than any other US state and enough to rival entire countries. The state&apos;s <strong className={heading}>&ldquo;cheeseheads&rdquo;</strong> proudly wear foam cheese wedge hats, especially at Green Bay Packers games. Wisconsin is also the <strong className={heading}>#1 cranberry producer</strong> in the nation.
            </p>
            <p>
              The <strong className={heading}>Green Bay Packers</strong> are the only publicly-owned, community-owned franchise in the NFL, with over 360,000 shareholders. <strong className={heading}>Milwaukee&apos;s brewing heritage</strong> earned it the nickname &ldquo;Brew City&rdquo; &mdash; once home to Pabst, Schlitz, Miller, and Blatz. <strong className={heading}>Harley-Davidson</strong>, founded in Milwaukee in 1903, remains headquartered there today.
            </p>
            <p>
              <strong className={heading}>Madison</strong>, the state capital, is built on an isthmus between two lakes and consistently ranks among America&apos;s <strong className={heading}>best cities for quality of life</strong>. The University of Wisconsin&ndash;Madison is a top research institution, and the city&apos;s <strong className={heading}>Dane County Farmers&apos; Market</strong> is the largest producer-only farmers&apos; market in the US.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Wisconsin Cities &mdash; All on Central Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Milwaukee', pop: '577K', note: 'Largest city, Brew City, Bucks' },
              { city: 'Madison', pop: '269K', note: 'State capital, UW-Madison' },
              { city: 'Green Bay', pop: '107K', note: 'Packers, Titletown District' },
              { city: 'Kenosha', pop: '100K', note: 'Lake Michigan, Chicago commuters' },
              { city: 'Racine', pop: '77K', note: 'SC Johnson HQ, lakefront' },
              { city: 'Eau Claire', pop: '70K', note: 'Chippewa Valley, music scene' },
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
