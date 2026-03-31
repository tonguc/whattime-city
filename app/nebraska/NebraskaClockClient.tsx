'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NebraskaClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Nebraska', time }]}
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nebraska Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Time Zone', value: 'Central Time (CT) — most of state' },
              { label: 'Secondary Zone', value: 'Mountain Time (MT) — western panhandle' },
              { label: 'UTC Offsets', value: 'CT: UTC-6 / CDT: UTC-5 · MT: UTC-7 / MDT: UTC-6' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'Population', value: '~2.0 million' },
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

      {/* Omaha & Unique Content */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Omaha: The Oracle&apos;s Home Base</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Omaha is home to <strong className={heading}>Warren Buffett&apos;s Berkshire Hathaway</strong>, one of the most valuable companies on Earth. Buffett, known as the &quot;Oracle of Omaha,&quot; has lived and worked in the city for decades. The annual Berkshire Hathaway shareholders meeting draws tens of thousands to Omaha each May.
            </p>
            <p>
              Nebraska has deep ties to <strong className={heading}>US strategic defense</strong>. Offutt Air Force Base near Bellevue was the headquarters of <strong className={heading}>Strategic Air Command (SAC)</strong> during the Cold War and now hosts US Strategic Command (USSTRATCOM), which oversees the nation&apos;s nuclear deterrent.
            </p>
            <p>
              Every June, Omaha hosts the <strong className={heading}>NCAA College World Series</strong> at Charles Schwab Field. The city has been the permanent home of this championship since 1950, making it one of the longest-running relationships between a city and a major sporting event in American history.
            </p>
            <p>
              The <strong className={heading}>Nebraska Sandhills</strong> are one of the largest grass-stabilized dune systems in the Western Hemisphere, covering roughly a quarter of the state. This vast, sparsely populated region sits atop the Ogallala Aquifer and supports one of the largest cattle-ranching areas in the US.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Nebraska</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Omaha', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Lincoln', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Bellevue', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Grand Island', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Scottsbluff', zone: 'MT', tz: 'America/Denver' },
              { city: 'North Platte', zone: 'CT', tz: 'America/Chicago' },
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
