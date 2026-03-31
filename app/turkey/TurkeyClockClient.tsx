'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function TurkeyClockClient() {
  const { time, date, mounted } = useClockState('Europe/Istanbul')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Turkey', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'TRT \u00B7 UTC+3' },
          { label: 'Permanent Summer Time' },
          { label: 'Istanbul' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'Turkey Time (TRT)' },
          { label: 'UTC Offset', value: 'UTC+3 (always \u2014 permanent summer time)' },
          { label: 'Geographic Zone', value: 'Should be UTC+2 based on longitude' },
          { label: 'DST Status', value: 'Permanent summer time since Sep 2016' },
          { label: 'IANA Identifier', value: 'Europe/Istanbul' },
          { label: 'Same Offset As', value: 'Moscow, Saudi Arabia, East Africa' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Turkey Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>TRT (UTC+3) is fixed year-round. Differences shift when other countries observe DST.</p>
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
                  { zone: 'New York (ET)', winter: 'Turkey +8 hrs', summer: 'Turkey +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Turkey +11 hrs', summer: 'Turkey +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Turkey +3 hrs', summer: 'Turkey +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Turkey +2 hrs', summer: 'Turkey +1 hr' },
                  { zone: 'Dubai (GST)', winter: 'Turkey \u22121 hr', summer: 'Turkey \u22121 hr' },
                  { zone: 'India (IST)', winter: 'Turkey \u22122:30', summer: 'Turkey \u22122:30' },
                  { zone: 'Japan (JST)', winter: 'Turkey \u22126 hrs', summer: 'Turkey \u22126 hrs' },
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

      <NarrativeSection title="Turkey\u2019s Permanent Summer Time \u2014 Why UTC+3?" card={card} heading={heading} subText={subText}>
        <p>
          In <strong className={heading}>September 2016</strong>, Turkey made a controversial decision: instead of falling back to winter time (UTC+2), the government kept clocks on <strong className={heading}>permanent summer time (UTC+3)</strong>. The change was announced just days before the scheduled switch.
        </p>
        <p>
          Geographically, Turkey sits mostly between <strong className={heading}>26\u00b0E and 45\u00b0E longitude</strong>, which corresponds to UTC+2. By staying on UTC+3, solar noon occurs around <strong className={heading}>1:00 PM</strong> \u2014 mornings are darker and evenings are lighter. Critics point to winter sunrises around <strong className={heading}>8:30 AM in Istanbul</strong>, affecting school children and morning commuters.
        </p>
        <div className={`${innerCard} mt-3`}>
          <div className="grid grid-cols-2 gap-4 text-center text-xs">
            {[
              { label: 'Winter Sunrise (Istanbul)', value: '~8:15 AM', note: 'Would be ~7:15 AM on UTC+2' },
              { label: 'Winter Sunset (Istanbul)', value: '~5:30 PM', note: 'Would be ~4:30 PM on UTC+2' },
            ].map(z => (
              <div key={z.label}>
                <div className={mutedText}>{z.label}</div>
                <div className={`font-bold tabular-nums ${heading}`}>{z.value}</div>
                <div className={mutedText}>{z.note}</div>
              </div>
            ))}
          </div>
        </div>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Turkey\u2019s Time Zone History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Period</th>
                  <th className="pb-2 pr-4">Standard</th>
                  <th className="pb-2">Notes</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { period: 'Before 1910', standard: 'Local solar time', notes: 'No standardized time' },
                  { period: '1910\u20131978', standard: 'EET (UTC+2)', notes: 'Standard European time' },
                  { period: '1978\u20132016', standard: 'EET/EEST', notes: 'Seasonal DST like EU (UTC+2 winter, UTC+3 summer)' },
                  { period: '2016\u2013Present', standard: 'TRT (UTC+3)', notes: 'Permanent summer time, no DST' },
                ].map(({ period, standard, notes }) => (
                  <tr key={period}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{period}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{standard}</td>
                    <td className={`py-2 ${mutedText}`}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Turkish Cities \u2014 All on TRT (UTC+3)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Istanbul', detail: 'Pop. 16M \u00B7 Largest city, spans two continents' },
          { name: 'Ankara', detail: 'Pop. 5.7M \u00B7 Capital, government center' },
          { name: 'Izmir', detail: 'Pop. 4.4M \u00B7 Aegean coast, third largest' },
          { name: 'Bursa', detail: 'Pop. 3.1M \u00B7 Industrial center, former capital' },
          { name: 'Antalya', detail: 'Pop. 2.6M \u00B7 Mediterranean tourism hub' },
          { name: 'Adana', detail: 'Pop. 2.3M \u00B7 Southern hub, agriculture' },
        ]}
      />
    </div>
  )
}
