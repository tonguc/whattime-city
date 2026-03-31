'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SloveniaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Ljubljana')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Slovenia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1', highlight: true },
          { label: 'EU DST Rules' },
          { label: 'Ljubljana' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Slovenia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Ljubljana' },
              { label: 'Population', value: '~2.1 million' },
              { label: 'Forest Cover', value: '60% — 3rd most forested in Europe' },
              { label: 'Famous For', value: 'Lake Bled, caves, Alps meets Mediterranean' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SI vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Slovenia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">SI Winter (CET)</th>
                  <th className="pb-2">SI Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'SI +6 hrs', summer: 'SI +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'SI +1 hr', summer: 'SI +1 hr' },
                  { zone: 'Austria/Italy', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Croatia (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'SI −4:30', summer: 'SI −3:30' },
                  { zone: 'Japan (JST)', winter: 'SI −8 hrs', summer: 'SI −7 hrs' },
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

      {/* Micro Diversity */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>4 Landscapes in 20,273 km&sup2; — Europe in Miniature</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Slovenia packs <strong className={heading}>Alps, Mediterranean coast, Pannonian plains, and karst caves</strong> into an area <strong className={heading}>smaller than New Jersey</strong>. You can ski in the <strong className={heading}>Julian Alps</strong> in the morning and swim in the <strong className={heading}>Adriatic Sea</strong> by afternoon — all without changing timezone.
            </p>
            <p>
              <strong className={heading}>Lake Bled</strong> (with its fairy-tale island church) is one of Europe&apos;s most photographed locations. The <strong className={heading}>Postojna Cave</strong> system (24 km of passages) and <strong className={heading}>Predjama Castle</strong> (built into a cliff) attract visitors from across Europe — all in the <strong className={heading}>CET timezone</strong> that aligns with major European markets.
            </p>
            <p>
              Slovenia is the <strong className={heading}>only EU country to border Italy, Austria, Hungary, and Croatia</strong> — a crossroads of Germanic, Romance, and Slavic cultures. Ljubljana was named the <strong className={heading}>European Green Capital in 2016</strong>, with a car-free city center and <strong className={heading}>60% forest cover</strong> nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Beekeeping */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World Beekeeping Capital — 1 Beekeeper per 200 People</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Slovenia has the <strong className={heading}>highest density of beekeepers in Europe</strong> — about <strong className={heading}>1 in every 200 Slovenians keeps bees</strong>. The <strong className={heading}>Carniolan bee (Apis mellifera carnica)</strong>, native to Slovenia, is one of the world&apos;s most popular bee subspecies. Slovenia successfully lobbied the UN to declare <strong className={heading}>May 20 as World Bee Day</strong> (2018).
            </p>
            <p>
              The Slovenian tech scene punches above its weight: <strong className={heading}>Bitstamp</strong> (one of the world&apos;s first crypto exchanges) was founded in Slovenia. The country has one of Europe&apos;s <strong className={heading}>highest startup-per-capita rates</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Slovenia Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Ljubljana', pop: '290K', note: 'Capital, dragon bridge, green city' },
              { city: 'Maribor', pop: '95K', note: '2nd city, oldest vine in world (400+ yrs)' },
              { city: 'Koper', pop: '53K', note: 'Adriatic port, Italian heritage' },
              { city: 'Kranj', pop: '38K', note: 'Alpine gateway, Gorenjska capital' },
              { city: 'Bled', pop: '8K', note: 'Lake Bled, tourism icon, rowing' },
              { city: 'Piran', pop: '4K', note: 'Venetian coastal gem, salt pans' },
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
