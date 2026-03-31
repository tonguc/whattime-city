'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MicronesiaClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Chuuk')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Micronesia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CHUT &middot; UTC+10' },
          { label: 'No DST' },
          { label: 'Pop. ~115K' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Micronesia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'Chuuk Time (CHUT) UTC+10' },
              { label: 'Eastern Islands', value: 'Pohnpei & Kosrae UTC+11' },
              { label: 'Daylight Saving', value: 'Not observed' },
              { label: 'IANA Identifier', value: 'Pacific/Chuuk' },
              { label: 'Time Zones', value: '2 zones across 4 states' },
              { label: 'Population', value: '~115,000 (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>607 Islands Across the Pacific</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Federated States of Micronesia spans <strong className={heading}>607 islands</strong> scattered across the western Pacific, organized into four states: Yap, Chuuk, Pohnpei, and Kosrae. Yap and Chuuk follow <strong className={heading}>UTC+10</strong>, while Pohnpei and Kosrae are on <strong className={heading}>UTC+11</strong> &mdash; making it one of the smallest nations with two time zones.
            </p>
            <p>
              <strong className={heading}>Chuuk Lagoon</strong> is the world&apos;s premier wreck-diving destination, with over 60 Japanese WWII warships resting on the seafloor. On Pohnpei, the ancient city of <strong className={heading}>Nan Madol</strong> &mdash; a UNESCO World Heritage Site dubbed the &ldquo;Venice of the Pacific&rdquo; &mdash; features 92 artificial islets built on coral reefs between 1200 and 1500 AD.
            </p>
            <p>
              Micronesia operates under a <strong className={heading}>Compact of Free Association</strong> with the United States, granting citizens visa-free US entry and access to federal programs. Despite its remote location, the nation&apos;s waters encompass one of the <strong className={heading}>richest marine ecosystems</strong> on Earth.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Towns &amp; Islands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Palikir', pop: '7K', note: 'National capital, Pohnpei (UTC+11)' },
              { city: 'Weno', pop: '14K', note: 'Largest town, Chuuk (UTC+10)' },
              { city: 'Kolonia', pop: '6K', note: 'Pohnpei hub, near Nan Madol' },
              { city: 'Tofol', pop: '3K', note: 'Kosrae state capital (UTC+11)' },
              { city: 'Colonia', pop: '3K', note: 'Yap state capital (UTC+10)' },
              { city: 'Lelu', pop: '2K', note: 'Kosrae, ancient ruins site' },
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
