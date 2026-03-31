'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MissouriClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Missouri', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CDT · UTC-5' : 'CST · UTC-6', highlight: true },
          { label: 'Central Time' },
          { label: 'The Show-Me State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Missouri Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~6.2 million' },
              { label: 'Gateway Arch', value: 'St. Louis — Gateway to the West' },
              { label: 'Famous For', value: 'BBQ, jazz, Gateway Arch, Anheuser-Busch' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Geographic Center of America — Missouri on CT</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Missouri sits near the <strong className={heading}>geographic center of the contiguous US</strong> and served as the <strong className={heading}>Gateway to the West</strong> — the <strong className={heading}>Lewis and Clark expedition</strong> departed from St. Louis in 1804. The iconic <strong className={heading}>Gateway Arch (630 ft)</strong> commemorates this westward expansion and is the <strong className={heading}>tallest monument in the US</strong>.
            </p>
            <p>
              <strong className={heading}>Kansas City</strong> is the <strong className={heading}>BBQ capital of the world</strong> with over <strong className={heading}>100 BBQ restaurants</strong>. The city also sits right on the <strong className={heading}>Missouri-Kansas state border</strong> — spanning two states but one timezone (CT). Kansas City&apos;s central location makes it a major <strong className={heading}>logistics and distribution hub</strong>.
            </p>
            <p>
              <strong className={heading}>Anheuser-Busch</strong> (Budweiser) was founded in St. Louis in 1852. The <strong className={heading}>Clydesdale stables</strong> at the brewery are a national landmark. Missouri is also home to <strong className={heading}>Emerson Electric, Edward Jones, and Cerner</strong> — all Fortune 500 companies on <strong className={heading}>CT</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Missouri Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kansas City', pop: '510K', note: 'BBQ capital, Chiefs, logistics hub' },
              { city: 'St. Louis', pop: '295K', note: 'Gateway Arch, Budweiser, Cardinals' },
              { city: 'Springfield', pop: '170K', note: 'Bass Pro Shops HQ, Ozarks' },
              { city: 'Columbia', pop: '130K', note: 'University of Missouri, college town' },
              { city: 'Independence', pop: '125K', note: 'Truman Library, Oregon Trail start' },
              { city: 'Jefferson City', pop: '45K', note: 'State capital, Missouri River' },
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
