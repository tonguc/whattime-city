'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LibyaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Tripoli')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Libya', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EET &middot; UTC+2', highlight: true },
          { label: 'No DST' },
          { label: 'Tripoli' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Libya Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET — Eastern European Time (UTC+2)' },
              { label: 'DST Status', value: 'Abolished — last observed 2013' },
              { label: 'IANA Identifier', value: 'Africa/Tripoli' },
              { label: 'TZ Changes', value: '4 timezone switches since 1951!' },
              { label: 'Population', value: '~7 million' },
              { label: 'Famous For', value: 'Sahara Desert, Leptis Magna, oil reserves' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Libya&apos;s Turbulent Timezone History</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Libya has one of the <strong className={heading}>most chaotic timezone histories</strong> in the world. The country has switched between <strong className={heading}>UTC+1 (CET) and UTC+2 (EET)</strong> multiple times: CET until 1959, then EET, back to CET in 1982 under Gaddafi, then EET again in 1990, CET again in 2012, and <strong className={heading}>finally EET (UTC+2) since 2013</strong>.
            </p>
            <p>
              Libya is Africa&apos;s <strong className={heading}>4th largest country by area</strong> (1.76 million km²) — mostly <strong className={heading}>Sahara Desert</strong>. Despite its size, it uses a single timezone. The country holds Africa&apos;s <strong className={heading}>largest proven oil reserves</strong> (~48 billion barrels). Oil pricing and contracts follow <strong className={heading}>EET</strong>, aligned with Eastern European markets.
            </p>
            <p>
              <strong className={heading}>Leptis Magna</strong> — one of the best-preserved Roman cities in the world — sits on Libya&apos;s Mediterranean coast. The ruins are a <strong className={heading}>UNESCO World Heritage Site</strong> rivaling Pompeii in scale and preservation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Libya Key Cities — All on EET (UTC+2)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tripoli', pop: '1.2M', note: 'Capital, Mediterranean coast, medina' },
              { city: 'Benghazi', pop: '630K', note: '2nd city, eastern Libya, port' },
              { city: 'Misrata', pop: '400K', note: '3rd city, industrial, steel' },
              { city: 'Sabha', pop: '130K', note: 'Southern hub, Fezzan gateway, Sahara' },
              { city: 'Zawiya', pop: '200K', note: 'Oil refinery city, near Tripoli' },
              { city: 'Tobruk', pop: '120K', note: 'WWII battle site, eastern port' },
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
