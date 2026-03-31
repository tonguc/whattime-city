'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BelgiumClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Brussels')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Belgium', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1' },
          { label: 'Capital of Europe' },
          { label: 'Brussels' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Belgium Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Brussels' },
              { label: 'Population', value: '~11.6 million' },
              { label: 'Languages', value: 'Dutch, French, German — 3 official' },
              { label: 'Famous For', value: 'EU HQ, NATO HQ, chocolate, beer, waffles' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belgium vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Belgium Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">BE Winter (CET)</th>
                  <th className="pb-2">BE Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'BE +6 hrs', summer: 'BE +6 hrs' },
                  { zone: 'Washington DC (ET)', winter: 'BE +6 hrs', summer: 'BE +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BE +1 hr', summer: 'BE +1 hr' },
                  { zone: 'India (IST)', winter: 'BE −4:30', summer: 'BE −3:30' },
                  { zone: 'DR Congo (WAT/CAT)', winter: 'Same to +1', summer: 'Same to +1' },
                  { zone: 'France (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Capital of Europe */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Brussels: Where Europe&apos;s Clock Is Set</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Brussels hosts the <strong className={heading}>European Commission, European Council, European Parliament</strong> (shared with Strasbourg), and <strong className={heading}>NATO Headquarters</strong>. Over <strong className={heading}>30,000 lobbyists</strong> and <strong className={heading}>4,000+ diplomats</strong> work in Brussels — more than in Washington DC.
            </p>
            <p>
              The &ldquo;Brussels timezone&rdquo; is effectively the <strong className={heading}>EU&apos;s default timezone</strong>. When the EU announces deadlines, regulation dates, or meeting times, they&apos;re in <strong className={heading}>CET/CEST</strong>. The European Commission&apos;s working hours (<strong className={heading}>9:00 AM – 5:30 PM CET</strong>) set the rhythm for policy decisions affecting <strong className={heading}>450 million EU citizens</strong>.
            </p>
            <p>
              Fun fact: the EU has debated <strong className={heading}>abolishing DST since 2018</strong> (84% of respondents favored it in a public consultation), but member states couldn&apos;t agree on whether to keep permanent summer or winter time. The proposal is effectively dead.
            </p>
          </div>
        </div>
      </section>

      {/* Three Languages */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Timezone, Three Languages, Two Cultures</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Belgium has <strong className={heading}>3 official languages</strong> — <strong className={heading}>Dutch</strong> (Flanders, 60%), <strong className={heading}>French</strong> (Wallonia, 39%), and <strong className={heading}>German</strong> (eastern cantons, 1%). Brussels is officially bilingual (Dutch/French) but practically French-dominant.
            </p>
            <p>
              Despite being just <strong className={heading}>30,528 km²</strong> (smaller than Maryland), Belgium has <strong className={heading}>6 governments</strong> — federal, Flemish, French Community, German-speaking Community, Walloon Region, and Brussels-Capital Region. In 2010-2011, Belgium went <strong className={heading}>541 days without a federal government</strong> — a world record. Time kept ticking; Belgium kept functioning.
            </p>
          </div>
        </div>
      </section>

      {/* Chocolate & Beer */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Chocolate, Beer & the Belgian Economic Clock</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Belgium produces <strong className={heading}>220,000+ tons of chocolate annually</strong> — Brussels Airport is the world&apos;s largest chocolate selling point. Belgian beer culture is <strong className={heading}>UNESCO-listed</strong> — over <strong className={heading}>1,500 unique beers</strong> from 300+ breweries.
            </p>
            <p>
              Beyond food, Belgium punches above its weight: <strong className={heading}>AB InBev</strong> (world&apos;s largest brewer, Leuven), <strong className={heading}>SWIFT</strong> (global banking network, La Hulpe), <strong className={heading}>Solvay</strong> (chemicals), and <strong className={heading}>Umicore</strong> (battery materials). The Port of Antwerp-Bruges is <strong className={heading}>Europe&apos;s 2nd largest port</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Belgian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Brussels', pop: '1.2M metro', note: 'Capital, EU & NATO HQ' },
              { city: 'Antwerp', pop: '530K', note: 'Diamond capital, Europe\'s 2nd port' },
              { city: 'Ghent', pop: '265K', note: 'University city, tech & biotech' },
              { city: 'Bruges', pop: '120K', note: 'UNESCO medieval center, tourism' },
              { city: 'Li\u00e8ge', pop: '200K', note: 'Wallonia hub, steel heritage' },
              { city: 'Leuven', pop: '105K', note: 'AB InBev HQ, KU Leuven university' },
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
