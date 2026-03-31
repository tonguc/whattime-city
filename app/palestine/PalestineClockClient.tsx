'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PalestineClockClient() {
  const { time, date, mounted, isDST } = useClockState('Asia/Gaza')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Palestine', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2', highlight: true },
          { label: 'DST Observed' },
          { label: 'Gaza / Ramallah' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Palestine Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Saturday Mar → Last Saturday Oct' },
              { label: 'IANA Identifiers', value: 'Asia/Gaza & Asia/Hebron' },
              { label: 'Population', value: '~5.4 million' },
              { label: 'Two IANA Zones', value: 'Gaza & West Bank have separate entries' },
              { label: 'Famous For', value: 'Ancient history, olive oil, resilience' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Two IANA Zones for One Territory</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Palestine has <strong className={heading}>two separate IANA timezone identifiers</strong>: <strong className={heading}>Asia/Gaza</strong> (Gaza Strip) and <strong className={heading}>Asia/Hebron</strong> (West Bank). Both use <strong className={heading}>EET/EEST</strong>, but historically their DST transition dates have occasionally differed — making Palestine one of the few territories with <strong className={heading}>potentially different clocks for the same nominal timezone</strong>.
            </p>
            <p>
              Palestine&apos;s DST schedule is set by the <strong className={heading}>Palestinian Authority</strong> and doesn&apos;t always match Israel&apos;s DST dates. This has occasionally created situations where <strong className={heading}>neighboring areas within a few kilometers</strong> were on <strong className={heading}>different times</strong> for brief periods during transition weekends.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Palestine Key Cities — EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Gaza City', pop: '600K', note: 'Gaza Strip, Mediterranean coast' },
              { city: 'Ramallah', pop: '80K', note: 'De facto capital, PA headquarters' },
              { city: 'Hebron (Al-Khalil)', pop: '220K', note: 'Largest WB city, Ibrahimi Mosque' },
              { city: 'Nablus', pop: '160K', note: 'Old City, soap & sweets industry' },
              { city: 'Bethlehem', pop: '30K', note: 'Nativity Church, tourism' },
              { city: 'Jericho', pop: '25K', note: 'Oldest city on Earth, Dead Sea' },
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
