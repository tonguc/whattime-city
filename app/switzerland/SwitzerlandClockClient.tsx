'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SwitzerlandClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Zurich')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Switzerland', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1' },
          { label: 'Home of Precision Time' },
          { label: 'Zurich · Geneva · Bern' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Switzerland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Zurich' },
              { label: 'Population', value: '~8.8 million' },
              { label: 'Official Languages', value: '4 (German, French, Italian, Romansh)' },
              { label: 'Famous For', value: 'Watches — world capital of horology' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switzerland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Switzerland Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Swiss Winter (CET)</th>
                  <th className="pb-2">Swiss Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Swiss +6 hrs', summer: 'Swiss +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Swiss +9 hrs', summer: 'Swiss +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Swiss +1 hr', summer: 'Swiss +1 hr' },
                  { zone: 'India (IST)', winter: 'Swiss −4:30', summer: 'Swiss −3:30' },
                  { zone: 'China (CST)', winter: 'Swiss −7 hrs', summer: 'Swiss −6 hrs' },
                  { zone: 'Japan (JST)', winter: 'Swiss −8 hrs', summer: 'Swiss −7 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Swiss −10 hrs', summer: 'Swiss −8 hrs' },
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

      {/* Swiss Precision */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Swiss Precision: World Capital of Timekeeping</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Switzerland is synonymous with <strong className={heading}>precision timekeeping</strong>. The Swiss watch industry, centered in the <strong className={heading}>Jura Mountains</strong> (Vallée de Joux, La Chaux-de-Fonds, Biel/Bienne), produces over <strong className={heading}>$20 billion</strong> worth of watches annually.
            </p>
            <p>
              Brands like <strong className={heading}>Rolex, Patek Philippe, Omega, TAG Heuer, and Swatch</strong> are all Swiss. The term <strong className={heading}>&ldquo;Swiss Made&rdquo;</strong> on a watch face is one of the most recognized quality marks in the world, requiring at least 60% of production value to originate in Switzerland.
            </p>
            <p>
              The <strong className={heading}>Swiss Federal Institute of Metrology (METAS)</strong> in Bern maintains Switzerland&apos;s official time, synchronized with UTC via atomic clocks. Switzerland helped develop the <strong className={heading}>CERN particle accelerator</strong>, which requires nanosecond-precision timing.
            </p>
          </div>
        </div>
      </section>

      {/* Swiss Railway Clock */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Swiss Railway Clock — Icon of Punctuality</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Swiss Railway Clock (Mondaine)</strong>, designed by <strong className={heading}>Hans Hilfiker in 1944</strong>, is one of the most iconic clock designs in history. Its distinctive red second hand with a round tip has become a symbol of Swiss efficiency.
            </p>
            <p>
              Swiss trains are legendary for their <strong className={heading}>punctuality</strong> — the SBB network achieves <strong className={heading}>92%+ on-time performance</strong> (within 3 minutes). The clock&apos;s unique behavior: the second hand sweeps around in 58.5 seconds, then <strong className={heading}>pauses at 12</strong> for 1.5 seconds, synchronizing all station clocks simultaneously.
            </p>
            <p>
              Apple famously paid <strong className={heading}>$21 million</strong> to license the design for iOS 6&apos;s Clock app in 2012 after initially using it without permission.
            </p>
          </div>
        </div>
      </section>

      {/* Finance Timezone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Geneva &amp; Zurich: Global Finance Timezone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Switzerland manages roughly <strong className={heading}>$7.9 trillion in cross-border wealth</strong> — more than any other country. Zurich and Geneva host the headquarters of <strong className={heading}>UBS, Credit Suisse (now UBS), Swiss Re</strong>, and hundreds of private banks.
            </p>
            <p>
              The CET timezone is ideal for global finance: <strong className={heading}>full overlap with London</strong> (1 hour ahead), <strong className={heading}>morning overlap with Asia</strong>, and <strong className={heading}>afternoon overlap with US East Coast</strong>. Geneva also hosts <strong className={heading}>WHO, WTO, Red Cross, and UN offices</strong>, making Swiss time a de facto standard for international diplomacy.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Swiss Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Zurich', pop: '1.4M metro', note: 'Financial capital, German-speaking' },
              { city: 'Geneva', pop: '620K metro', note: 'UN/WHO hub, French-speaking' },
              { city: 'Bern', pop: '420K metro', note: 'Federal capital, German-speaking' },
              { city: 'Basel', pop: '540K metro', note: 'Pharma hub (Novartis, Roche)' },
              { city: 'Lausanne', pop: '420K metro', note: 'Olympic HQ, French-speaking' },
              { city: 'Lugano', pop: '150K metro', note: 'Italian-speaking, lake city' },
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
