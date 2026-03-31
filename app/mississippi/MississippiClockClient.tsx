'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MississippiClockClient() {
  const { time, date, mounted } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Mississippi', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CT · UTC-6 / CDT · UTC-5' },
          { label: 'DST Observed' },
          { label: 'Jackson' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Mississippi Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Central Time (CT)' },
              { label: 'UTC Offset', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~3.0 million' },
              { label: 'Capital', value: 'Jackson' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthplace of the Blues */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Birthplace of the Blues</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Mississippi is universally recognized as the <strong className={heading}>birthplace of the blues</strong>. The Mississippi Delta — the flat alluvial plain between the Mississippi and Yazoo rivers — gave rise to Delta blues in the early 20th century. Legends like <strong className={heading}>Robert Johnson, B.B. King, Muddy Waters,</strong> and <strong className={heading}>Son House</strong> all hailed from Mississippi.
            </p>
            <p>
              The <strong className={heading}>Mississippi River</strong>, the second-longest river in North America, forms the state&apos;s entire western border. It has been central to American commerce, culture, and literature — most famously through Mark Twain&apos;s works.
            </p>
            <p>
              Nobel Prize-winning author <strong className={heading}>William Faulkner</strong> set most of his novels in the fictional Yoknapatawpha County, based on Lafayette County, Mississippi. His home, Rowan Oak, in Oxford is now a museum.
            </p>
            <p>
              Mississippi is the <strong className={heading}>leading catfish farming state</strong> in the United States. The Mississippi Delta region produces more farm-raised catfish than any other area in the world, with Humphreys County often called the &quot;Catfish Capital of the World.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Mississippi</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Jackson', pop: '~150K' },
              { city: 'Gulfport', pop: '~73K' },
              { city: 'Southaven', pop: '~55K' },
              { city: 'Hattiesburg', pop: '~48K' },
              { city: 'Biloxi', pop: '~46K' },
              { city: 'Tupelo', pop: '~38K' },
            ].map(({ city, pop }) => (
              <div key={city} className={innerCard}>
                <div className={`text-sm font-semibold ${heading}`}>{city}</div>
                <div className={`text-xs ${mutedText}`}>Central Time · {pop}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
