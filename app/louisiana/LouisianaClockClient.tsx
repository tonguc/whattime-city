'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LouisianaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Chicago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Louisiana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CDT · UTC-5' : 'CST · UTC-6', highlight: true },
          { label: 'Central Time' },
          { label: 'The Pelican State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Louisiana Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~4.6 million — 25th largest state' },
              { label: 'Capital', value: 'Baton Rouge — on the Mississippi' },
              { label: 'Famous For', value: 'Jazz, Mardi Gras, Cajun cuisine' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Jazz, Gumbo &amp; Napoleonic Code — Louisiana on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>New Orleans</strong> is the birthplace of <strong className={heading}>jazz</strong> and home to <strong className={heading}>Mardi Gras</strong>, the largest annual celebration in North America. Fat Tuesday parades roll through the French Quarter starting as early as <span style={{ fontVariantNumeric: 'tabular-nums' }}>8:00 AM CT</span> and continue well past midnight. The city&apos;s live music scene on Frenchmen Street runs nightly from <span style={{ fontVariantNumeric: 'tabular-nums' }}>9:00 PM</span> to <span style={{ fontVariantNumeric: 'tabular-nums' }}>3:00 AM CT</span>.
            </p>
            <p>
              Louisiana is the only U.S. state whose legal system is based on the <strong className={heading}>Napoleonic Code</strong> rather than English common law — a legacy of its French and Spanish colonial heritage. <strong className={heading}>Cajun country</strong> in the Acadiana region around <strong className={heading}>Lafayette</strong> preserves a unique French-speaking culture with its own cuisine, music (zydeco), and traditions found nowhere else in America.
            </p>
            <p>
              The state&apos;s <strong className={heading}>offshore oil and gas industry</strong> in the Gulf of Mexico is a pillar of the U.S. energy sector. Port Fourchon, south of <strong className={heading}>Lafourche Parish</strong>, services over <span style={{ fontVariantNumeric: 'tabular-nums' }}>90%</span> of deepwater rigs in the Gulf. Crew changes and supply runs operate on <strong className={heading}>Central Time</strong>, with helicopter flights departing at dawn — around <span style={{ fontVariantNumeric: 'tabular-nums' }}>5:30 AM CT</span>. Louisiana also hosts the <strong className={heading}>Port of South Louisiana</strong>, the largest tonnage port in the Western Hemisphere.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Louisiana Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'New Orleans', pop: '383K', note: 'Jazz capital, French Quarter' },
              { city: 'Baton Rouge', pop: '227K', note: 'State capital, LSU Tigers' },
              { city: 'Shreveport', pop: '187K', note: 'Northwest hub, Red River city' },
              { city: 'Lafayette', pop: '121K', note: 'Cajun heartland, zydeco music' },
              { city: 'Lake Charles', pop: '84K', note: 'Petrochemical industry, casinos' },
              { city: 'Metairie', pop: '142K', note: 'New Orleans suburb, Jefferson Parish' },
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
