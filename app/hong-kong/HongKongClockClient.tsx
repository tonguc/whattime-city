'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function HongKongClockClient() {
  const { time, date, mounted } = useClockState('Asia/Hong_Kong')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Hong Kong', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'HKT &middot; UTC+8 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'Asia&apos;s World City' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Hong Kong Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'HKT — Hong Kong Time (UTC+8)' },
              { label: 'DST Status', value: 'Abolished in 1979 — last used 1941-79' },
              { label: 'IANA Identifier', value: 'Asia/Hong_Kong' },
              { label: 'Population', value: '~7.4 million' },
              { label: 'Density', value: '~6,800/km² — one of the world\'s densest' },
              { label: 'Famous For', value: 'Finance hub, dim sum, Victoria Harbour' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HK vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hong Kong Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'HK +13 hrs', summer: 'HK +12 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'HK +8 hrs', summer: 'HK +7 hrs' },
                  { zone: 'Tokyo (JST)', winter: 'HK −1 hr', summer: 'HK −1 hr' },
                  { zone: 'Singapore (SGT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Shanghai (CST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Sydney (AEST)', winter: 'HK −2 hrs', summer: 'HK −3 hrs' },
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

      {/* Financial Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Asia&apos;s Financial Capital — The 24-Hour Money Bridge</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Hong Kong is the <strong className={heading}>world&apos;s 3rd largest financial center</strong> after New York and London. Its <strong className={heading}>UTC+8 timezone</strong> is strategically perfect: when New York closes at 4 PM ET, it&apos;s <strong className={heading}>5 AM in Hong Kong</strong> — giving traders just enough time for overnight analysis before Asian markets open.
            </p>
            <p>
              The <strong className={heading}>HKEX (Hong Kong Stock Exchange)</strong> trades from <strong className={heading}>9:30 AM to 4 PM HKT</strong>, overlapping with Tokyo, Shanghai, and Singapore. This creates the <strong className={heading}>Asian trading corridor</strong> where $2+ trillion moves daily. Hong Kong&apos;s fixed <strong className={heading}>USD peg (HKD 7.75-7.85:$1)</strong> since 1983 makes it the <strong className={heading}>gateway between Chinese and Western capital markets</strong>.
            </p>
            <p>
              Over <strong className={heading}>1,400 multinational companies</strong> have their Asia-Pacific headquarters in Hong Kong, specifically because the timezone allows them to communicate with both <strong className={heading}>European offices (morning) and American offices (evening)</strong> within a single workday.
            </p>
          </div>
        </div>
      </section>

      {/* DST History */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hong Kong&apos;s DST History — Used It, Ditched It</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Hong Kong observed DST from <strong className={heading}>1941 to 1979</strong> (with wartime Japanese occupation using JST UTC+9 from 1941-45). After the war, the British colonial government maintained summer time until <strong className={heading}>1979 when it was permanently abolished</strong>.
            </p>
            <p>
              The reason: Hong Kong is at latitude <strong className={heading}>22°N</strong> — subtropical enough that daylight variation is minimal (13.5 hrs in summer vs 10.7 hrs in winter). The <strong className={heading}>energy savings were negligible</strong> compared to the disruption, especially since Hong Kong&apos;s economy was increasingly tied to <strong className={heading}>Mainland China (which also doesn&apos;t observe DST)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 24/7 City */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The City That Never Sleeps — Hong Kong After Dark</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Hong Kong operates on a <strong className={heading}>near-24/7 cycle</strong>. The iconic <strong className={heading}>Symphony of Lights</strong> laser show at Victoria Harbour runs nightly at 8 PM. <strong className={heading}>Dai pai dong</strong> (open-air food stalls) serve until the early hours. The <strong className={heading}>MTR</strong> subway runs from 6 AM to 1 AM — one of the world&apos;s <strong className={heading}>most efficient transit systems (99.9% on-time)</strong>.
            </p>
            <p>
              Hong Kong&apos;s <strong className={heading}>7 million people live in just 1,110 km²</strong> — but only ~25% is developed (the rest is protected countryside). This creates the world&apos;s <strong className={heading}>most vertical city</strong>: over <strong className={heading}>9,000 skyscrapers</strong> — more than New York and London combined. Average apartment size: <strong className={heading}>~40 m²</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Areas */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hong Kong Key Districts — All on HKT (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Central', pop: '—', note: 'Finance district, HKEX, IFC Tower' },
              { city: 'Tsim Sha Tsui', pop: '—', note: 'Tourism hub, Victoria Harbour views' },
              { city: 'Mong Kok', pop: '—', note: 'World\'s densest neighborhood, night markets' },
              { city: 'Wan Chai', pop: '—', note: 'Convention centre, nightlife district' },
              { city: 'Kowloon', pop: '2.1M', note: 'Peninsula, shopping, former Walled City' },
              { city: 'Lantau Island', pop: '—', note: 'Airport, Disneyland, Big Buddha' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'District'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
