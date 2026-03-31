'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Sydney \u00B7 AEST/AEDT': 'Australia/Sydney',
  'Adelaide \u00B7 ACST/ACDT': 'Australia/Adelaide',
  'Perth \u00B7 AWST': 'Australia/Perth',
}

export default function AustraliaClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Australia/Sydney')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[
          { label: 'Sydney \u00B7 AEST/AEDT', time: times['Sydney \u00B7 AEST/AEDT'] ?? '' },
          { label: 'Adelaide \u00B7 ACST/ACDT', time: times['Adelaide \u00B7 ACST/ACDT'] ?? '' },
          { label: 'Perth \u00B7 AWST', time: times['Perth \u00B7 AWST'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-2xl sm:text-3xl"
        badges={[
          { label: '3 Time Zones' },
          { label: 'Half-hour offsets' },
          { label: 'Split DST rules' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Australia\u2019s 3 Main Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2 pr-4">Summer (DST)</th>
                  <th className="pb-2">States</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Eastern', std: 'AEST (UTC+10)', dst: 'AEDT (UTC+11)', states: 'NSW, VIC, TAS, ACT \u2014 QLD no DST' },
                  { zone: 'Central', std: 'ACST (UTC+9:30)', dst: 'ACDT (UTC+10:30)', states: 'SA \u2014 NT no DST' },
                  { zone: 'Western', std: 'AWST (UTC+8)', dst: 'None', states: 'WA \u2014 No DST' },
                ].map(({ zone, std, dst, states }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{std}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{dst}</td>
                    <td className={`py-2 ${mutedText}`}>{states}</td>
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
          { label: 'Number of Time Zones', value: '3 main + 2 half-hour variants' },
          { label: 'Widest Span', value: 'UTC+8 (Perth) to UTC+11 (Sydney DST)' },
          { label: 'Half-Hour Zones', value: 'SA & NT use UTC+9:30' },
          { label: 'DST Splits', value: 'QLD, WA, NT do NOT observe DST' },
          { label: 'DST Starts', value: 'First Sunday in October' },
          { label: 'DST Ends', value: 'First Sunday in April' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Australia Time vs World (Sydney AEST/AEDT)</h2>
          <p className={`text-sm mb-4 ${subText}`}>Australia&apos;s DST runs October \u2192 April (southern hemisphere summer). When it&apos;s summer in Australia, it&apos;s winter in the US/Europe \u2014 both sides shift.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">AU Summer (Oct\u2013Apr)</th>
                  <th className="pb-2">AU Winter (Apr\u2013Oct)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', auSummer: 'Sydney +16 hrs', auWinter: 'Sydney +14 hrs' },
                  { zone: 'Los Angeles (PT)', auSummer: 'Sydney +19 hrs', auWinter: 'Sydney +17 hrs' },
                  { zone: 'London (GMT/BST)', auSummer: 'Sydney +11 hrs', auWinter: 'Sydney +9 hrs' },
                  { zone: 'India (IST)', auSummer: 'Sydney +5:30', auWinter: 'Sydney +4:30' },
                  { zone: 'Japan (JST)', auSummer: 'Sydney +2 hrs', auWinter: 'Sydney +1 hr' },
                  { zone: 'New Zealand (NZT)', auSummer: 'Sydney \u22122 hrs', auWinter: 'Sydney \u22122 hrs' },
                ].map(({ zone, auSummer, auWinter }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{auSummer}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{auWinter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="Why Australia\u2019s Time Zones Are So Confusing" card={card} heading={heading} subText={subText}>
        <p>
          Australia has <strong className={heading}>3 main time zones</strong>, but DST rules split them further. During summer, Australia effectively has <strong className={heading}>5 different offsets</strong>: UTC+8 (Perth), UTC+9:30 (Darwin), UTC+10 (Brisbane), UTC+10:30 (Adelaide), and UTC+11 (Sydney).
        </p>
        <p>
          <strong className={heading}>Queensland</strong> (Brisbane) is in the Eastern zone but refuses DST, creating a 1-hour difference with neighboring NSW during summer. <strong className={heading}>South Australia</strong> uses the unusual <strong className={heading}>UTC+9:30</strong> offset \u2014 one of few half-hour time zones in the world.
        </p>
        <div className={`${innerCard} mt-3`}>
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {[
              { city: 'Perth', offset: 'UTC+8', dst: 'No DST' },
              { city: 'Darwin', offset: 'UTC+9:30', dst: 'No DST' },
              { city: 'Brisbane', offset: 'UTC+10', dst: 'No DST' },
              { city: 'Adelaide', offset: 'UTC+10:30', dst: 'DST \u2713' },
              { city: 'Sydney', offset: 'UTC+11', dst: 'DST \u2713' },
            ].map(z => (
              <div key={z.city}>
                <div className={mutedText}>{z.city}</div>
                <div className={`font-bold tabular-nums ${heading}`}>{z.offset}</div>
                <div className={mutedText}>{z.dst}</div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-2 text-xs ${mutedText}`}>Summer offsets (Oct\u2013Apr)</div>
        </div>
      </NarrativeSection>

      <CitiesGrid
        title="Major Australian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Sydney', detail: 'Pop. 5.3M \u00B7 NSW, AEST/AEDT, Opera House' },
          { name: 'Melbourne', detail: 'Pop. 5.1M \u00B7 VIC, AEST/AEDT, cultural capital' },
          { name: 'Brisbane', detail: 'Pop. 2.6M \u00B7 QLD, AEST only (no DST)' },
          { name: 'Perth', detail: 'Pop. 2.1M \u00B7 WA, AWST (UTC+8), no DST' },
          { name: 'Adelaide', detail: 'Pop. 1.4M \u00B7 SA, ACST/ACDT (UTC+9:30)' },
          { name: 'Darwin', detail: 'Pop. 150K \u00B7 NT, ACST only (no DST)' },
        ]}
      />
    </div>
  )
}
