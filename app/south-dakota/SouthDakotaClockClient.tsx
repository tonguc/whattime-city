'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SouthDakotaClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in South Dakota', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CT UTC−6 / MT UTC−7' },
          { label: '2 Time Zones' },
          { label: 'Mount Rushmore State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Dakota Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Eastern SD', value: 'Central Time (America/Chicago)' },
              { label: 'Western SD', value: 'Mountain Time (America/Denver)' },
              { label: 'CT Offset', value: 'UTC−6 standard / UTC−5 DST' },
              { label: 'MT Offset', value: 'UTC−7 standard / UTC−6 DST' },
              { label: 'Daylight Saving', value: 'Yes — both zones observe DST' },
              { label: 'Population', value: '~900K — Mount Rushmore State' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Badlands, Black Hills &amp; Prairie</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              South Dakota is split by its time zone boundary as much as by its geography. <strong className={heading}>Sioux Falls</strong> in the east is the state&apos;s largest city and an emerging financial and tech hub. <strong className={heading}>Rapid City</strong> in the west is the gateway to the <strong className={heading}>Black Hills</strong> — home to Mount Rushmore, Crazy Horse Memorial, and Custer State Park.
            </p>
            <p>
              The <strong className={heading}>Badlands National Park</strong> sits roughly at the time zone divide, straddling the dramatic shift from Central to Mountain Time. <strong className={heading}>Sturgis</strong>, home to the world&apos;s largest motorcycle rally each August, uses Mountain Time along with most of western South Dakota.
            </p>
            <p>
              South Dakota has <strong className={heading}>no state income tax</strong>, making it a popular state for business registration and banking. <strong className={heading}>Sioux Falls</strong> hosts major credit card processing operations for Citibank, Wells Fargo, and Capital One.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South Dakota Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sioux Falls', pop: '200K', note: 'CT · Largest city, finance hub' },
              { city: 'Rapid City', pop: '75K', note: 'MT · Black Hills gateway' },
              { city: 'Aberdeen', pop: '28K', note: 'CT · Northern SD hub' },
              { city: 'Brookings', pop: '24K', note: 'CT · SDSU, research park' },
              { city: 'Pierre', pop: '14K', note: 'CT · State capital, Missouri River' },
              { city: 'Sturgis', pop: '7K', note: 'MT · Annual motorcycle rally' },
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
