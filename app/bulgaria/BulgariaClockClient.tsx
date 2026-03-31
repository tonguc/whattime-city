'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BulgariaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Sofia')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Bulgaria', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2' },
          { label: 'EU&apos;s IT Outsourcing Gem', highlight: true },
          { label: 'Sofia' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bulgaria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Sofia' },
              { label: 'Population', value: '~6.5 million' },
              { label: 'EU Member', value: 'Since 2007 — Euro target ~2026' },
              { label: 'Alphabet', value: 'Cyrillic (Bulgaria invented it!)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulgaria vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bulgaria Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">BG Winter (EET)</th>
                  <th className="pb-2">BG Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'BG +7 hrs', summer: 'BG +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BG +2 hrs', summer: 'BG +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'BG +1 hr', summer: 'BG +1 hr' },
                  { zone: 'India (IST)', winter: 'BG −3:30', summer: 'BG −2:30' },
                  { zone: 'Turkey (TRT)', winter: 'BG −1 hr', summer: 'Same time!' },
                  { zone: 'Romania (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cyrillic */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bulgaria Invented the Cyrillic Alphabet</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Cyrillic alphabet</strong> — used by over <strong className={heading}>250 million people</strong> (Russian, Ukrainian, Serbian, Macedonian, Mongolian, and more) — was created in <strong className={heading}>9th-century Bulgaria</strong> by disciples of Saints Cyril and Methodius. Bulgaria celebrates this with a national holiday on <strong className={heading}>May 24</strong> (Bulgarian Education and Culture Day).
            </p>
            <p>
              When Bulgaria joined the EU in 2007, Cyrillic became the <strong className={heading}>EU&apos;s third official alphabet</strong> (after Latin and Greek). Euro banknotes now include <strong className={heading}>&ldquo;\u0415\u0412\u0420\u041e&rdquo;</strong> in Cyrillic — thanks to Bulgaria.
            </p>
          </div>
        </div>
      </section>

      {/* IT Outsourcing */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sofia: The EU&apos;s Best-Kept IT Outsourcing Secret</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Bulgaria&apos;s IT sector has grown explosively: <strong className={heading}>100,000+ IT professionals</strong>, with Sofia housing major offices for <strong className={heading}>VMware, SAP, Uber, Bosch, and Progress Software</strong>. Bulgaria has the EU&apos;s <strong className={heading}>lowest labor costs</strong> combined with strong technical education — a powerful combination.
            </p>
            <p>
              The EET timezone gives Bulgaria <strong className={heading}>1-hour lead over Western European clients</strong> while maintaining full workday overlap. Bulgaria&apos;s <strong className={heading}>10% flat tax rate</strong> (one of the EU&apos;s lowest) attracts freelancers and digital businesses. The country also boasts some of Europe&apos;s <strong className={heading}>fastest internet</strong> (averaging 90+ Mbps).
            </p>
            <p>
              Bulgaria&apos;s unique position: <strong className={heading}>same timezone as Romania and Greece</strong>, 1 hour behind Turkey, full overlap with most of Eastern Europe. For companies wanting EU-based development teams at competitive rates, Sofia is increasingly the <strong className={heading}>top choice over Bucharest or Warsaw</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Rose Valley */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Rose Valley — 85% of the World&apos;s Rose Oil</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Bulgaria&apos;s <strong className={heading}>Rose Valley (Розова долина)</strong> near Kazanlak produces <strong className={heading}>~85% of the world&apos;s rose oil</strong> — a key ingredient in perfumes by Chanel, Dior, and Lancôme. Rose oil is more expensive than gold by weight — <strong className={heading}>~$6,000-8,000 per kg</strong>.
            </p>
            <p>
              The rose harvest happens in a precise <strong className={heading}>3-week window in May-June</strong>, with picking starting at <strong className={heading}>5:00 AM EET</strong> before the morning dew evaporates and the essential oils dissipate. It takes <strong className={heading}>~3,000 kg of rose petals</strong> to produce just 1 kg of rose oil — all handpicked. The annual <strong className={heading}>Rose Festival in Kazanlak</strong> celebrates this tradition with parades and a Rose Queen coronation.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Bulgarian Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sofia', pop: '1.3M', note: 'Capital, IT hub, Vitosha mountain' },
              { city: 'Plovdiv', pop: '350K', note: 'Europe\'s oldest city (8,000 yrs), Culture Capital 2019' },
              { city: 'Varna', pop: '340K', note: 'Black Sea capital, beach resort' },
              { city: 'Burgas', pop: '210K', note: 'Southern coast, oil refinery, Sunny Beach' },
              { city: 'Ruse', pop: '150K', note: 'Danube city, "Little Vienna"' },
              { city: 'Veliko Tarnovo', pop: '70K', note: 'Medieval capital, Tsarevets fortress' },
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
