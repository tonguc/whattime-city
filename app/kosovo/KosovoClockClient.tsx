'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KosovoClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Belgrade')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Kosovo', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1', highlight: true },
          { label: 'EU-style DST' },
          { label: 'Pristina' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kosovo Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Belgrade (no separate entry)' },
              { label: 'Population', value: '~1.8 million' },
              { label: 'Youngest Country', value: 'Independence 2008 — Europe\'s newest' },
              { label: 'Famous For', value: 'Youngest population in Europe, diaspora' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Europe&apos;s Youngest Country &amp; Population</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kosovo declared independence in <strong className={heading}>2008</strong> — making it <strong className={heading}>Europe&apos;s newest country</strong>. It has the <strong className={heading}>youngest population in Europe</strong> (median age ~30), creating a dynamic, youthful energy. The country uses <strong className={heading}>CET (same as Serbia, Albania&apos;s neighbor)</strong> and has no separate IANA timezone identifier.
            </p>
            <p>
              Kosovo&apos;s <strong className={heading}>large diaspora</strong> (estimated <strong className={heading}>800,000+</strong> in Germany, Switzerland, Scandinavia, and the US) maintains strong connections — <strong className={heading}>remittances account for ~15% of GDP</strong>. The <strong className={heading}>CET timezone</strong> means diaspora in Western/Central Europe are on the <strong className={heading}>exact same clock</strong>, making family calls seamless.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kosovo Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Pristina', pop: '210K', note: 'Capital, Newborn monument, cafés' },
              { city: 'Prizren', pop: '85K', note: 'Cultural capital, Ottoman heritage' },
              { city: 'Peja/Pe\u0107', pop: '100K', note: 'Western hub, Rugova Canyon' },
              { city: 'Gjakova', pop: '90K', note: 'Old Bazaar, Hadum Mosque' },
              { city: 'Mitrovica', pop: '70K', note: 'Divided city (north/south bridge)' },
              { city: 'Ferizaj', pop: '110K', note: 'Southern hub, Camp Bondsteel nearby' },
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
