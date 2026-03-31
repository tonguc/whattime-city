'use client'

import { useMultiClockState, useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

const TZ = {
  'Santiago (Mainland)': 'America/Santiago',
  'Easter Island': 'Pacific/Easter',
}

export default function ChileClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'America/Santiago')
  const { isDST } = useClockState('America/Santiago')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[
          { label: `Santiago · ${isDST ? 'CLST UTC\u22123' : 'CLT UTC\u22124'}`, time: times['Santiago (Mainland)'] ?? '' },
          { label: `Easter Island · ${isDST ? 'EASST UTC\u22125' : 'EAST UTC\u22126'}`, time: times['Easter Island'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        badges={[
          { label: '2 Time Zones' },
          { label: 'Southern Hemisphere DST' },
          { label: '4,270 km long' },
        ]}
      />

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Chile Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Mainland', value: 'CLT (UTC\u22124) / CLST (UTC\u22123)' },
              { label: 'Easter Island', value: 'EAST (UTC\u22126) / EASST (UTC\u22125)' },
              { label: 'DST Rule', value: 'First Sat in Apr \u2192 First Sat in Sep' },
              { label: 'IANA Identifier', value: 'America/Santiago' },
              { label: 'Population', value: '~19.5 million' },
              { label: 'Length', value: '4,270 km \u2014 world\'s longest country' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chile vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Chile Time vs World (Santiago)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Chile&apos;s DST runs Apr–Sep (Southern Hemisphere winter). The double-DST effect with Northern Hemisphere creates seasonal swings.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Chile Summer (CLST)</th>
                  <th className="pb-2">Chile Winter (CLT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', clst: 'Chile +2 hrs', clt: 'Chile +1 hr' },
                  { zone: 'Los Angeles (PT)', clst: 'Chile +5 hrs', clt: 'Chile +3 hrs' },
                  { zone: 'London (GMT/BST)', clst: 'Chile \u22123 hrs', clt: 'Chile \u22125 hrs' },
                  { zone: 'Berlin (CET/CEST)', clst: 'Chile \u22124 hrs', clt: 'Chile \u22126 hrs' },
                  { zone: 'Japan (JST)', clst: 'Chile \u221212 hrs', clt: 'Chile \u221213 hrs' },
                  { zone: 'Sydney (AET)', clst: 'Chile \u221214 hrs', clt: 'Chile \u221214 hrs' },
                ].map(({ zone, clst, clt }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{clst}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{clt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Permanent Summer Time Experiment */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Chile&apos;s Failed Permanent Summer Time (2015–2019)</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2015</strong>, Chile tried what Russia, Turkey, and others attempted: <strong className={heading}>permanent summer time (CLST, UTC\u22123)</strong>. The goal was to maximize evening daylight and save energy.
            </p>
            <p>
              The experiment lasted <strong className={heading}>4 years</strong> — much longer than expected. But it created serious problems: in winter, <strong className={heading}>Santiago didn&apos;t see sunrise until 8:45 AM</strong>, and in southern cities like Punta Arenas, mornings were dark until <strong className={heading}>nearly 10:00 AM</strong>.
            </p>
            <p>
              Parents complained about children going to school in complete darkness. Health experts warned about circadian disruption. In <strong className={heading}>2019</strong>, Chile restored seasonal clock changes — a rare example of a country reversing a permanent-time decision.
            </p>
          </div>
        </div>
      </section>

      {/* Easter Island */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Easter Island — Chile&apos;s Polynesian Outpost</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Easter Island (Rapa Nui)</strong> lies <strong className={heading}>3,700 km west</strong> of mainland Chile in the Pacific Ocean. It has its own timezone: <strong className={heading}>EAST (UTC\u22126)</strong>, 2 hours behind Santiago.
            </p>
            <p>
              With a population of just <strong className={heading}>~8,000</strong>, it&apos;s one of the most remote inhabited islands on Earth. The famous <strong className={heading}>Moai statues</strong> make it a UNESCO World Heritage Site and a bucket-list destination.
            </p>
            <p>
              Easter Island observes DST synchronized with the mainland — when Santiago is on CLST (UTC\u22123), Easter Island shifts to <strong className={heading}>EASST (UTC\u22125)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Major Chilean Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Santiago', pop: '7.1M metro', note: 'Capital, CLT (UTC\u22124)' },
              { city: 'Valpara\u00edso', pop: '1M metro', note: 'Port city, UNESCO, Congress' },
              { city: 'Concepci\u00f3n', pop: '1M metro', note: 'Southern hub, university city' },
              { city: 'Antofagasta', pop: '425K', note: 'Mining capital, Atacama Desert' },
              { city: 'Punta Arenas', pop: '130K', note: 'Southernmost city, Patagonia' },
              { city: 'Hanga Roa', pop: '8K', note: 'Easter Island, EAST (UTC\u22126)' },
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
