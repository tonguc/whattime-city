'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MoldovaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Chisinau')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Moldova', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2', highlight: true },
          { label: 'EU-style DST' },
          { label: 'Chi&#537;in&#259;u' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Moldova Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Chisinau' },
              { label: 'Population', value: '~2.6 million' },
              { label: 'Wine', value: 'World\'s highest vineyard density per capita' },
              { label: 'Famous For', value: 'Wine cellars, Transnistria, IT outsourcing' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Moldova Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">MD Winter (EET)</th>
                  <th className="pb-2">MD Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'MD +7 hrs', summer: 'MD +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'MD +2 hrs', summer: 'MD +2 hrs' },
                  { zone: 'Romania (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Russia-Moscow (MSK)', winter: 'MD −1 hr', summer: 'Same time!' },
                  { zone: 'Germany (CET/CEST)', winter: 'MD −1 hr', summer: 'MD −1 hr' },
                  { zone: 'Transnistria (MSK)', winter: 'MD −1 hr', summer: 'Same time!' },
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

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Transnistria — The Breakaway Region on Moscow Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Transnistria</strong>, a narrow strip of land along the Dniester River, is a <strong className={heading}>de facto independent state</strong> within Moldova&apos;s internationally recognized borders. It uses <strong className={heading}>Moscow Time (UTC+3 permanent)</strong> — creating a <strong className={heading}>1-hour timezone border</strong> within what the world considers one country.
            </p>
            <p>
              Crossing from Chi&#537;in&#259;u to Tiraspol (Transnistria&apos;s capital, just 70 km away) means <strong className={heading}>setting your clock forward 1 hour in winter</strong>. In summer, both sides are on UTC+3 (Moldova via EEST, Transnistria via MSK). This creates one of Europe&apos;s <strong className={heading}>most unusual timezone anomalies</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Biggest Wine Cellars — Underground City of Wine</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>M&#259;le&#537;ti</strong> and <strong className={heading}>Cricova</strong> are the world&apos;s <strong className={heading}>largest wine cellars</strong> — M&#259;le&#537;ti has <strong className={heading}>200 km of underground tunnels</strong> (a former limestone mine). Moldova has the <strong className={heading}>highest vineyard density per capita in the world</strong> — wine is ~3.5% of GDP, with <strong className={heading}>Wine Day</strong> (first weekend of October) being a national celebration.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Moldova Key Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Chi\u0219in\u0103u', pop: '700K', note: 'Capital, parks, IT growth' },
              { city: 'Tiraspol', pop: '130K', note: 'Transnistria capital (de facto MSK)' },
              { city: 'B\u0103l\u021bi', pop: '100K', note: '2nd city (recognized), northern hub' },
              { city: 'Comrat', pop: '25K', note: 'Gagauzia capital, Turkic autonomy' },
              { city: 'Cricova', pop: '10K', note: 'Underground wine city, 120km tunnels' },
              { city: 'Orheiul Vechi', pop: '—', note: 'Cave monastery, UNESCO tentative' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'Heritage site'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
