'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ParaguayClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Asuncion')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Paraguay', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'PYST · UTC-3' : 'PYT · UTC-4', highlight: true },
          { label: 'Southern Hemisphere DST' },
          { label: 'Asunci&oacute;n' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Paraguay Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Winter Time', value: 'PYT — Paraguay Time (UTC-4)' },
              { label: 'Summer Time', value: 'PYST (UTC-3) — Southern Hemisphere!' },
              { label: 'DST Rule', value: 'Last Sunday Mar → First Sunday Oct' },
              { label: 'IANA Identifier', value: 'America/Asuncion' },
              { label: 'Population', value: '~7.4 million' },
              { label: 'Famous For', value: 'Itaipú Dam, Guaraní language, tereré' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paraguay vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Paraguay Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Paraguay observes DST in the Southern Hemisphere pattern — summer (Oct-Mar) is UTC-3, winter (Mar-Oct) is UTC-4.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">PY Winter (PYT)</th>
                  <th className="pb-2">PY Summer (PYST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'PY +1 hr', summer: 'PY +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'PY −4 hrs', summer: 'PY −3 hrs' },
                  { zone: 'Argentina (ART)', winter: 'PY +1 hr behind', summer: 'Same time!' },
                  { zone: 'Brazil-SP (BRT)', winter: 'PY +1 hr behind', summer: 'Same time!' },
                  { zone: 'Bolivia (BOT)', winter: 'Same time!', summer: 'PY −1 hr' },
                  { zone: 'Chile (CLT/CLST)', winter: 'PY +1 hr behind', summer: 'Same time!' },
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

      {/* Itaipú Dam */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Itaip&uacute; Dam — The World&apos;s Largest Hydroelectric Generator</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Itaip&uacute; Dam</strong> on the Paran&aacute; River (shared with Brazil) is the <strong className={heading}>world&apos;s largest hydroelectric power plant by annual energy production</strong> — generating <strong className={heading}>~100 TWh/year</strong>. It supplies <strong className={heading}>~90% of Paraguay&apos;s electricity</strong> and <strong className={heading}>~15% of Brazil&apos;s</strong>.
            </p>
            <p>
              Here&apos;s the timezone twist: the dam sits on the <strong className={heading}>Paraguay-Brazil border</strong>, but Paraguay (UTC-4/UTC-3) and Brazil&apos;s Paran&aacute; state (UTC-3) are on <strong className={heading}>different timezones</strong> during Paraguay&apos;s winter. The dam&apos;s control room must coordinate across both countries&apos; clocks — a unique binational operational challenge.
            </p>
            <p>
              Paraguay&apos;s excess electricity from Itaip&uacute; is sold to Brazil at <strong className={heading}>cost price</strong> (a deal many Paraguayans consider unfair). This makes Paraguay one of the world&apos;s <strong className={heading}>cheapest places for electricity</strong> — attracting crypto miners and energy-intensive industries.
            </p>
          </div>
        </div>
      </section>

      {/* Guaraní */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Guaran&iacute; — The Indigenous Language That Won</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Paraguay is the <strong className={heading}>only country in the Americas where an indigenous language is spoken by a majority</strong>. <strong className={heading}>~87% of Paraguayans speak Guaran&iacute;</strong>, including non-indigenous people. It&apos;s an <strong className={heading}>official language alongside Spanish</strong> since 1992.
            </p>
            <p>
              Paraguayans practice <strong className={heading}>jopar&aacute;</strong> — seamlessly mixing Spanish and Guaran&iacute; mid-sentence. The <strong className={heading}>terer&eacute;</strong> (cold mate drink, served with ice water and herbs) is Paraguay&apos;s national obsession — declared <strong className={heading}>UNESCO Intangible Cultural Heritage in 2020</strong>. Unlike Argentine/Uruguayan hot mate, terer&eacute; is essential in Paraguay&apos;s <strong className={heading}>subtropical heat (40°C+ summers)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Paraguayan Cities — All on PYT/PYST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Asunci\u00f3n', pop: '2.5M metro', note: 'Capital, oldest in River Plate region' },
              { city: 'Ciudad del Este', pop: '390K', note: 'Border commerce, Itaipú Dam' },
              { city: 'Encarnaci\u00f3n', pop: '130K', note: '"Pearl of the South", Carnival' },
              { city: 'Pedro Juan Caballero', pop: '130K', note: 'Brazil border, twin city culture' },
              { city: 'Luque', pop: '300K', note: 'CONMEBOL HQ (South American football)' },
              { city: 'Caaguaz\u00fa', pop: '120K', note: 'Central hub, agriculture' },
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
