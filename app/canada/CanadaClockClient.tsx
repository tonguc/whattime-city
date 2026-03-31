'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  "St. John\u2019s \u00B7 NST": 'America/St_Johns',
  'Toronto \u00B7 ET': 'America/Toronto',
  'Vancouver \u00B7 PT': 'America/Vancouver',
}

export default function CanadaClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'America/Toronto')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[
          { label: "St. John\u2019s \u00B7 NST", time: times["St. John\u2019s \u00B7 NST"] ?? '' },
          { label: 'Toronto \u00B7 ET', time: times['Toronto \u00B7 ET'] ?? '' },
          { label: 'Vancouver \u00B7 PT', time: times['Vancouver \u00B7 PT'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-2xl sm:text-3xl"
        badges={[
          { label: '6 Time Zones' },
          { label: 'Half-hour zone (Newfoundland)' },
          { label: 'DST observed' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Canada\u2019s 6 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2 pr-4">DST</th>
                  <th className="pb-2">Provinces</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Pacific', std: 'PST (UTC\u22128)', dst: 'PDT (UTC\u22127)', provinces: 'BC, Yukon' },
                  { zone: 'Mountain', std: 'MST (UTC\u22127)', dst: 'MDT (UTC\u22126)', provinces: 'AB, parts of BC/SK/NT' },
                  { zone: 'Central', std: 'CST (UTC\u22126)', dst: 'CDT (UTC\u22125)', provinces: 'MB, SK (no DST), ON west' },
                  { zone: 'Eastern', std: 'EST (UTC\u22125)', dst: 'EDT (UTC\u22124)', provinces: 'ON, QC, Nunavut south' },
                  { zone: 'Atlantic', std: 'AST (UTC\u22124)', dst: 'ADT (UTC\u22123)', provinces: 'NB, NS, PE, parts of QC' },
                  { zone: 'Newfoundland', std: 'NST (UTC\u22123:30)', dst: 'NDT (UTC\u22122:30)', provinces: 'NL (Newfoundland & Labrador)' },
                ].map(({ zone, std, dst, provinces }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{std}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{dst}</td>
                    <td className={`py-2 ${mutedText}`}>{provinces}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Number of Time Zones', value: '6 (including half-hour Newfoundland)' },
          { label: 'DST Rule', value: '2nd Sunday in March \u2192 1st Sunday in November' },
          { label: 'No-DST Exception', value: 'Saskatchewan stays on CST year-round' },
          { label: 'Widest Span', value: 'UTC\u22123:30 (NL) to UTC\u22128 (BC)' },
          { label: 'Unique Feature', value: 'Newfoundland is 30 min ahead of Atlantic' },
          { label: 'Same DST Dates As', value: 'United States (since 2007)' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Canada Time vs World (Toronto ET)</h2>
          <p className={`text-sm mb-4 ${subText}`}>Canada follows the same DST schedule as the US. Most provinces spring forward in March and fall back in November.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Winter (EST)</th>
                  <th className="pb-2">Summer (EDT)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Los Angeles (PT)', winter: 'Toronto +3 hrs', summer: 'Toronto +3 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Toronto \u22125 hrs', summer: 'Toronto \u22125 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Toronto \u22126 hrs', summer: 'Toronto \u22126 hrs' },
                  { zone: 'India (IST)', winter: 'Toronto \u221210:30', summer: 'Toronto \u22129:30' },
                  { zone: 'Japan (JST)', winter: 'Toronto \u221214 hrs', summer: 'Toronto \u221213 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Toronto \u221216 hrs', summer: 'Toronto \u221214 hrs' },
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

      <NarrativeSection title="Why Does Newfoundland Have a Half-Hour Time Zone?" card={card} heading={heading} subText={subText}>
        <p>
          Newfoundland Standard Time (<strong className={heading}>NST, UTC\u22123:30</strong>) is one of the few half-hour time zones in the world. It exists because Newfoundland was a <strong className={heading}>separate British dominion</strong> \u2014 not part of Canada \u2014 until 1949.
        </p>
        <p>
          When Newfoundland set its standard time in 1935, it chose an offset based on its <strong className={heading}>geographic longitude</strong> (roughly 52.5\u00b0W). The half-hour compromise was kept when Newfoundland joined Canada. This creates a unique situation: when it&apos;s <strong className={heading}>12:00 PM in Toronto</strong>, it&apos;s <strong className={heading}>1:30 PM in St. John&apos;s</strong>. Canadian TV networks announce show times as \u201c8:00 Eastern, 8:30 in Newfoundland.\u201d
        </p>
      </NarrativeSection>

      <NarrativeSection title="Saskatchewan: Canada\u2019s No-DST Province" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>Saskatchewan</strong> is the only Canadian province that does not observe DST. It stays on <strong className={heading}>CST (UTC\u22126)</strong> all year. During summer, when Manitoba shifts to CDT (UTC\u22125), Saskatchewan effectively aligns with Alberta&apos;s MDT (UTC\u22126).
        </p>
        <p>
          The exception dates back to <strong className={heading}>1966</strong> when Saskatchewan chose not to adopt uniform DST. Farmers argued that shifting clocks disrupted agricultural schedules and livestock routines.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Canadian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Toronto', detail: 'Pop. 6.2M metro \u00B7 Ontario, ET (UTC\u22125/\u22124)' },
          { name: 'Montreal', detail: 'Pop. 4.3M metro \u00B7 Quebec, ET (UTC\u22125/\u22124)' },
          { name: 'Vancouver', detail: 'Pop. 2.6M metro \u00B7 BC, PT (UTC\u22128/\u22127)' },
          { name: 'Calgary', detail: 'Pop. 1.6M metro \u00B7 Alberta, MT (UTC\u22127/\u22126)' },
          { name: 'Ottawa', detail: 'Pop. 1.5M metro \u00B7 Capital, ET (UTC\u22125/\u22124)' },
          { name: "St. John\u2019s", detail: 'Pop. 210K metro \u00B7 NL, NST (UTC\u22123:30)' },
        ]}
      />
    </div>
  )
}
