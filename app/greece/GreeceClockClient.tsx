'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GreeceClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Athens')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Greece', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2' },
          { label: isDST ? 'Summer Time (Θερινή Ώρα)' : 'Winter Time (Χειμερινή Ώρα)' },
          { label: 'Athens' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Greece Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'Greek Name', value: 'Χειμερινή / Θερινή Ώρα' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Athens' },
              { label: 'Population', value: '~10.4 million' },
              { label: 'Same Zone As', value: 'Romania, Bulgaria, Finland, Egypt (winter)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greece vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Greece Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Greece Winter (EET)</th>
                  <th className="pb-2">Greece Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Greece +7 hrs', summer: 'Greece +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Greece +10 hrs', summer: 'Greece +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Greece +2 hrs', summer: 'Greece +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Greece +1 hr', summer: 'Greece +1 hr' },
                  { zone: 'India (IST)', winter: 'Greece −3:30', summer: 'Greece −2:30' },
                  { zone: 'Japan (JST)', winter: 'Greece −7 hrs', summer: 'Greece −6 hrs' },
                  { zone: 'Turkey (TRT)', winter: 'Greece −1 hr', summer: 'Same as Greece' },
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

      {/* Birthplace of Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Greece: Where Timekeeping Was Born</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Ancient Greece invented many foundational concepts of timekeeping. <strong className={heading}>Anaximander</strong> introduced the <strong className={heading}>gnomon</strong> (sundial) to Greece from Babylon around <strong className={heading}>560 BCE</strong>. The <strong className={heading}>Agora in Athens</strong> had a public sundial that served as the city&apos;s official clock.
            </p>
            <p>
              The <strong className={heading}>Antikythera Mechanism</strong> (c. 100 BCE), discovered in a Greek shipwreck in 1901, is considered the <strong className={heading}>world&apos;s first analog computer</strong>. It calculated astronomical positions, predicted eclipses, and tracked Olympic game dates — centuries ahead of any comparable technology.
            </p>
            <p>
              Greek water clocks (<strong className={heading}>klepsydra</strong>) were used in Athenian courts to limit speech time — literally <strong className={heading}>&ldquo;stealing water&rdquo;</strong> was their name. This concept of measured, allocated time was revolutionary.
            </p>
          </div>
        </div>
      </section>

      {/* Greek Daily Rhythm */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Greek Daily Rhythm — Mesimeri & Volta</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Greek daily life follows a Mediterranean rhythm. The <strong className={heading}>mesimeri</strong> (midday rest) from roughly <strong className={heading}>2:00–5:00 PM</strong> is sacred — shops close, streets empty, and making noise during this period is considered deeply rude (even illegal in some municipalities).
            </p>
            <p>
              The evening <strong className={heading}>volta</strong> (stroll) begins around <strong className={heading}>7:00–8:00 PM</strong> as temperatures cool. Dinner starts at <strong className={heading}>9:00–10:00 PM</strong>, and Greek nightlife rarely begins before <strong className={heading}>midnight</strong>.
            </p>
            <p>
              On the <strong className={heading}>islands</strong> in summer, this rhythm stretches even later — taverna dinners at 10:30 PM and bars open until sunrise are the norm on <strong className={heading}>Mykonos, Santorini, and Ios</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Greek Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Athens', pop: '3.2M metro', note: 'Capital, Acropolis, cradle of democracy' },
              { city: 'Thessaloniki', pop: '1.1M metro', note: 'Northern hub, 2nd largest' },
              { city: 'Heraklion', pop: '175K', note: 'Crete, Minoan civilization' },
              { city: 'Patras', pop: '215K', note: 'Peloponnese, port city' },
              { city: 'Rhodes', pop: '115K', note: 'Dodecanese, tourism, Colossus' },
              { city: 'Santorini', pop: '15K', note: 'Iconic caldera, sunset capital' },
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
