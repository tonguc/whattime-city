'use client'

import { useMultiClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

const TZ = {
  'Bras\u00edlia \u00B7 BRT \u00B7 UTC\u22123': 'America/Sao_Paulo',
  'Manaus \u00B7 AMT \u00B7 UTC\u22124': 'America/Manaus',
  'Acre \u00B7 ACT \u00B7 UTC\u22125': 'America/Rio_Branco',
}

export default function BrazilClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'America/Sao_Paulo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-cyan-600"
        clocks={[
          { label: 'Bras\u00edlia \u00B7 BRT \u00B7 UTC\u22123', time: times['Bras\u00edlia \u00B7 BRT \u00B7 UTC\u22123'] ?? '' },
          { label: 'Manaus \u00B7 AMT \u00B7 UTC\u22124', time: times['Manaus \u00B7 AMT \u00B7 UTC\u22124'] ?? '' },
          { label: 'Acre \u00B7 ACT \u00B7 UTC\u22125', time: times['Acre \u00B7 ACT \u00B7 UTC\u22125'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-2xl sm:text-3xl"
        badges={[
          { label: '4 Time Zones' },
          { label: 'No DST since 2019' },
          { label: '215M People' },
        ]}
      />

      {/* Time Zone Overview */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Brazil&apos;s 4 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2 pr-4">Abbreviation</th>
                  <th className="pb-2">Coverage</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Fernando de Noronha', offset: 'UTC\u22122', abbr: 'FNT', coverage: 'Atlantic islands only' },
                  { zone: 'Bras\u00edlia', offset: 'UTC\u22123', abbr: 'BRT', coverage: 'S\u00e3o Paulo, Rio, Bras\u00edlia, most of country' },
                  { zone: 'Amazon', offset: 'UTC\u22124', abbr: 'AMT', coverage: 'Manaus, Amazonas, Mato Grosso' },
                  { zone: 'Acre', offset: 'UTC\u22125', abbr: 'ACT', coverage: 'Acre state, western Amazonas' },
                ].map(({ zone, offset, abbr, coverage }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{offset}</td>
                    <td className={`py-2 pr-4 ${mutedText}`}>{abbr}</td>
                    <td className={`py-2 ${subText}`}>{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Brazil Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '4 (UTC\u22122 to UTC\u22125)' },
              { label: 'Reference Zone', value: 'Bras\u00edlia Time (BRT, UTC\u22123)' },
              { label: 'DST Status', value: 'Abolished in 2019 by Bolsonaro' },
              { label: 'IANA Identifier', value: 'America/Sao_Paulo (main)' },
              { label: 'Population', value: '~215 million (6th largest)' },
              { label: 'Same Offset As', value: 'Argentina, Uruguay (UTC\u22123)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brazil vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Brazil Time vs World (Bras\u00edlia BRT)</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Since 2019, Brazil no longer observes DST. Differences change only when other countries shift their clocks.
          </p>
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
                  { zone: 'New York (ET)', winter: 'Brazil +2 hrs', summer: 'Brazil +1 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'Brazil +5 hrs', summer: 'Brazil +4 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Brazil \u22123 hrs', summer: 'Brazil \u22124 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Brazil \u22124 hrs', summer: 'Brazil \u22125 hrs' },
                  { zone: 'India (IST)', winter: 'Brazil \u22128:30', summer: 'Brazil \u22128:30' },
                  { zone: 'Japan (JST)', winter: 'Brazil \u221212 hrs', summer: 'Brazil \u221212 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Brazil \u221214 hrs', summer: 'Brazil \u221213 hrs' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{winter}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DST Abolition */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Why Did Brazil Abolish DST?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>April 2019</strong>, President Bolsonaro signed a decree ending daylight saving time in Brazil. The decision was backed by a <strong className={heading}>government study</strong> showing DST no longer saved significant energy — the original justification from the 1930s.
            </p>
            <p>
              Brazil&apos;s energy matrix had shifted: <strong className={heading}>hydroelectric power</strong> dominated, and air conditioning (not lighting) became the peak load. A public poll showed <strong className={heading}>73% of Brazilians</strong> supported ending DST, citing disrupted sleep and confusion.
            </p>
            <p>
              Before 2019, only <strong className={heading}>southern and southeastern states</strong> observed DST (S\u00e3o Paulo, Rio, Bras\u00edlia). Northern tropical states near the equator never participated, as daylight hours barely change year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Major Brazilian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'S\u00e3o Paulo', pop: '22M metro', note: 'Financial capital, BRT (UTC\u22123)' },
              { city: 'Rio de Janeiro', pop: '13M metro', note: 'Cultural icon, BRT (UTC\u22123)' },
              { city: 'Bras\u00edlia', pop: '4.8M metro', note: 'Federal capital, BRT (UTC\u22123)' },
              { city: 'Manaus', pop: '2.2M', note: 'Amazon gateway, AMT (UTC\u22124)' },
              { city: 'Salvador', pop: '4M metro', note: 'Northeast hub, BRT (UTC\u22123)' },
              { city: 'Fortaleza', pop: '4.1M metro', note: 'Coastal northeast, BRT (UTC\u22123)' },
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
