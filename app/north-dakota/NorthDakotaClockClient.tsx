'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NorthDakotaClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in North Dakota', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CT UTC-6 / MT UTC-7' },
          { label: '2 Time Zones' },
          { label: 'Pop. ~780K' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>North Dakota Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'Central Time (most of state)' },
              { label: 'SW Counties', value: 'Mountain Time (America/Denver)' },
              { label: 'UTC Offset (CT)', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'UTC Offset (MT)', value: 'UTC-7 (standard) / UTC-6 (DST)' },
              { label: 'Daylight Saving', value: 'Yes &mdash; both zones observe DST' },
              { label: 'Population', value: '~780K (smallest Midwest state)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`} dangerouslySetInnerHTML={{ __html: value }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bakken Oil Boom &amp; Prairie Powerhouse</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              North Dakota&apos;s <strong className={heading}>Bakken shale formation</strong> triggered one of America&apos;s biggest oil booms in the 2010s, transforming small towns like <strong className={heading}>Williston</strong> almost overnight. The state became the <strong className={heading}>2nd-largest oil producer</strong> in the US, behind only Texas.
            </p>
            <p>
              Beyond oil, North Dakota is an <strong className={heading}>agricultural powerhouse</strong> &mdash; the #1 US producer of spring wheat, durum, sunflowers, dry beans, and honey. <strong className={heading}>Theodore Roosevelt National Park</strong> in the Badlands preserves the rugged landscape that shaped the 26th president&apos;s conservation philosophy.
            </p>
            <p>
              <strong className={heading}>Fargo</strong>, the largest city, has emerged as a growing <strong className={heading}>tech and startup hub</strong> with companies like Microsoft and Amazon establishing operations. Winters are among the <strong className={heading}>coldest in the contiguous US</strong>, with temperatures regularly dropping below &ndash;20&deg;F.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major North Dakota Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Fargo', pop: '125K', note: 'CT · Largest city, tech hub' },
              { city: 'Bismarck', pop: '75K', note: 'CT · State capital, Missouri River' },
              { city: 'Grand Forks', pop: '59K', note: 'CT · UND, aerospace research' },
              { city: 'Minot', pop: '49K', note: 'CT · Air Force base, Magic City' },
              { city: 'Williston', pop: '29K', note: 'MT · Bakken oil boom epicenter' },
              { city: 'Dickinson', pop: '23K', note: 'MT · Gateway to TR National Park' },
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
