'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function DominicanRepublicClockClient() {
  const { time, date, mounted } = useClockState('America/Santo_Domingo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[{ label: 'Current Time in Dominican Republic', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC-4 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'Santo Domingo' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Dominican Republic Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Atlantic Standard Time (UTC-4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'America/Santo_Domingo' },
              { label: 'Population', value: '~11 million' },
              { label: 'Tourism', value: '#1 Caribbean destination — 8M+ visitors/year' },
              { label: 'Famous For', value: 'Baseball, merengue, resorts, amber' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DR vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dominican Republic Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'DR +1 hr', summer: 'Same time!' },
                  { zone: 'Los Angeles (PT)', winter: 'DR −4 hrs', summer: 'DR −3 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'DR −4 hrs', summer: 'DR −5 hrs' },
                  { zone: 'Puerto Rico (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Haiti (EST/EDT)', winter: 'DR +1 hr', summer: 'Same time!' },
                  { zone: 'Spain (CET/CEST)', winter: 'DR −5 hrs', summer: 'DR −6 hrs' },
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

      {/* Shared Island */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Island, Two Timezones — Hispaniola&apos;s Time Split</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Dominican Republic shares <strong className={heading}>Hispaniola</strong> with <strong className={heading}>Haiti</strong> — but they use <strong className={heading}>different timezones</strong>. The DR uses <strong className={heading}>AST (UTC-4) permanently</strong>, while Haiti uses <strong className={heading}>EST/EDT (UTC-5/UTC-4)</strong> with DST. During winter, crossing the border means <strong className={heading}>jumping 1 hour back</strong> into Haiti.
            </p>
            <p>
              During summer (when Haiti is on EDT/UTC-4), both countries are finally <strong className={heading}>on the same time</strong>. This makes Hispaniola one of the <strong className={heading}>few islands in the world divided by a timezone border</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Baseball */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>MLB Pipeline — Dominican Time Feeds American Baseball</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Dominican Republic produces more <strong className={heading}>MLB players than any country outside the US</strong> — roughly <strong className={heading}>25-30% of all MLB players</strong> are Dominican. Every MLB team operates <strong className={heading}>baseball academies</strong> on the island, with young players training on <strong className={heading}>AST (UTC-4)</strong>.
            </p>
            <p>
              The <strong className={heading}>1-hour offset from New York</strong> (in winter) means Dominican academies can coordinate easily with MLB front offices. Dominican Winter League (<strong className={heading}>LIDOM</strong>) games air at <strong className={heading}>7 PM AST</strong> — which is <strong className={heading}>6 PM ET in winter</strong>, perfect for US scouts watching remotely.
            </p>
            <p>
              The DR&apos;s <strong className={heading}>2 million+ diaspora in the US</strong> (concentrated in New York, New Jersey, and Florida) keeps the timezone connection alive — constant calls, remittances ($10B+/year), and business between <strong className={heading}>AST and ET</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dominican Key Cities — All on AST (UTC-4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Santo Domingo', pop: '3.6M metro', note: 'Capital, first European city in Americas' },
              { city: 'Santiago', pop: '1.1M', note: '2nd city, Cibao valley, tobacco' },
              { city: 'Punta Cana', pop: '100K', note: '#1 resort zone, 4M+ tourists/year' },
              { city: 'Puerto Plata', pop: '160K', note: 'North coast, cable car, amber' },
              { city: 'La Romana', pop: '250K', note: 'Casa de Campo, sugar industry' },
              { city: 'San Pedro de Macor\u00eds', pop: '200K', note: 'Baseball capital, most MLBers' },
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
