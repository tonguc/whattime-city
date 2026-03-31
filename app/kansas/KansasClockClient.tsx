'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KansasClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Kansas', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CT · UTC-6 / CDT · UTC-5' },
          { label: 'MT · UTC-7 / MDT · UTC-6' },
          { label: 'DST Observed' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kansas Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Time Zone', value: 'Central Time (CT) — most of state' },
              { label: 'Secondary Zone', value: 'Mountain Time (MT) — western counties' },
              { label: 'UTC Offsets', value: 'CT: UTC-6 / CDT: UTC-5 · MT: UTC-7 / MDT: UTC-6' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'Population', value: '~2.9 million' },
              { label: 'IANA Identifiers', value: 'America/Chicago · America/Denver' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Center & Unique Content */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Geographic Heart of America</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kansas holds a unique distinction: the <strong className={heading}>geographic center of the contiguous United States</strong> is located near Lebanon, Kansas (Smith County). A stone monument marks the spot at 39&deg;50&prime;N, 98&deg;35&prime;W, making Kansas quite literally the heart of America.
            </p>
            <p>
              Wichita, the state&apos;s largest city, is known as the <strong className={heading}>&quot;Air Capital of the World.&quot;</strong> Major aerospace manufacturers including Boeing, Spirit AeroSystems, Cessna, Learjet, and Textron Aviation all have significant operations here. The aerospace industry has shaped the city since the 1920s.
            </p>
            <p>
              Kansas is also forever linked to <strong className={heading}>The Wizard of Oz</strong> — L. Frank Baum&apos;s classic tale begins on a Kansas farm. The state embraces this heritage: Liberal, Kansas has a &quot;Dorothy&apos;s House&quot; museum, and the phrase &quot;There&apos;s no place like home&quot; resonates deeply with Kansans.
            </p>
            <p>
              The two-timezone split affects a handful of western counties including Greeley, Hamilton, Grant, Stanton, Morton, Stevens, Seward, Haskell, and parts of Finney County. The city of <strong className={heading}>Goodland</strong> in Sherman County is the largest community on Mountain Time in Kansas.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Kansas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Wichita', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Overland Park', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Kansas City, KS', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Topeka', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Goodland', zone: 'MT', tz: 'America/Denver' },
              { city: 'Dodge City', zone: 'CT', tz: 'America/Chicago' },
            ].map(({ city, zone }) => (
              <div key={city} className={innerCard}>
                <div className={`text-sm font-semibold ${heading}`}>{city}</div>
                <div className={`text-xs ${mutedText}`}>{zone === 'MT' ? 'Mountain Time' : 'Central Time'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
