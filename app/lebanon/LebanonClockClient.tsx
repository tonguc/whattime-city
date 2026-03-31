'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LebanonClockClient() {
  const { time, date, mounted, isDST } = useClockState('Asia/Beirut')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Lebanon', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2', highlight: true },
          { label: 'DST Observed' },
          { label: 'Beirut' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Lebanon Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Asia/Beirut' },
              { label: 'Population', value: '~5.5 million' },
              { label: 'Diaspora', value: '~15 million worldwide — 3x domestic pop.' },
              { label: 'Famous For', value: 'Phoenicia, cedars, cuisine, resilience' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lebanon vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Lebanon Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">LB Winter (EET)</th>
                  <th className="pb-2">LB Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'LB +7 hrs', summer: 'LB +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'LB +2 hrs', summer: 'LB +2 hrs' },
                  { zone: 'Paris (CET/CEST)', winter: 'LB +1 hr', summer: 'LB +1 hr' },
                  { zone: 'Dubai (GST)', winter: 'LB −2 hrs', summer: 'LB −1 hr' },
                  { zone: 'S\u00e3o Paulo (BRT)', winter: 'LB +5 hrs', summer: 'LB +6 hrs' },
                  { zone: 'Sydney (AEST)', winter: 'LB −8 hrs', summer: 'LB −7 hrs' },
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

      {/* 2023 DST Crisis */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 2023 DST Chaos — When Lebanon Had Two Timezones</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>March 2023</strong>, Lebanon&apos;s caretaker PM announced a <strong className={heading}>last-minute DST delay</strong> — postponing spring forward by one month to align better with Ramadan. The decision came <strong className={heading}>48 hours before the scheduled change</strong>.
            </p>
            <p>
              The result was <strong className={heading}>complete chaos</strong>: <strong className={heading}>Christian communities and institutions</strong> rejected the change and moved clocks forward anyway. <strong className={heading}>Muslim areas followed the government order</strong>. For <strong className={heading}>~2 weeks</strong>, Lebanon effectively had <strong className={heading}>two timezones</strong> — sometimes within the same city. Flights were confused, meetings were missed, and phone clocks showed different times based on carrier settings.
            </p>
            <p>
              The government eventually reversed course and applied DST as originally scheduled. The incident highlighted how <strong className={heading}>even a 1-hour timezone decision</strong> can fracture a country along sectarian lines.
            </p>
          </div>
        </div>
      </section>

      {/* Diaspora */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>15 Million Diaspora — The Most &ldquo;Timezone-Connected&rdquo; Nation</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Lebanon&apos;s <strong className={heading}>diaspora (~15 million) outnumbers its domestic population (~5.5 million) by 3:1</strong>. Major communities exist in <strong className={heading}>Brazil (7M+), USA (1M+), Australia (400K+), Canada, France, West Africa, and the Gulf</strong>. This makes Lebanese people among the world&apos;s most timezone-diverse populations.
            </p>
            <p>
              A typical Lebanese family WhatsApp group might span <strong className={heading}>S&atilde;o Paulo (UTC-3), Beirut (UTC+2/3), Dubai (UTC+4), Sydney (UTC+10/11), and Montreal (UTC-5)</strong> — a <strong className={heading}>16-hour spread</strong>. Finding a time when everyone is awake is nearly impossible. The phrase <strong className={heading}>&ldquo;yalla, what time is it there?&rdquo;</strong> is a Lebanese diaspora universal.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Lebanese Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Beirut', pop: '2.4M metro', note: 'Capital, Paris of the Middle East' },
              { city: 'Tripoli', pop: '500K', note: '2nd city, Crusader castle, souks' },
              { city: 'Sidon (Saida)', pop: '200K', note: 'Phoenician port, sea castle' },
              { city: 'Jounieh', pop: '120K', note: 'Bay resort, Harissa shrine' },
              { city: 'Byblos (Jbeil)', pop: '40K', note: 'Oldest continuously inhabited city' },
              { city: 'Baalbek', pop: '30K', note: 'Roman temples, music festival' },
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
