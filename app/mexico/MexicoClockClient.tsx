'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Mexico City \u00B7 CST \u00B7 UTC\u22126': 'America/Mexico_City',
  'Tijuana \u00B7 PST \u00B7 UTC\u22128': 'America/Tijuana',
  'Canc\u00fan \u00B7 EST \u00B7 UTC\u22125': 'America/Cancun',
}

export default function MexicoClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'America/Mexico_City')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[
          { label: 'Mexico City \u00B7 CST \u00B7 UTC\u22126', time: times['Mexico City \u00B7 CST \u00B7 UTC\u22126'] ?? '' },
          { label: 'Tijuana \u00B7 PST \u00B7 UTC\u22128', time: times['Tijuana \u00B7 PST \u00B7 UTC\u22128'] ?? '' },
          { label: 'Canc\u00fan \u00B7 EST \u00B7 UTC\u22125', time: times['Canc\u00fan \u00B7 EST \u00B7 UTC\u22125'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-2xl sm:text-3xl"
        badges={[
          { label: '4 Time Zones' },
          { label: 'No DST since 2022' },
          { label: '130M People' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Mexico\u2019s 4 Time Zones</h2>
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
                  { zone: 'Southeast', offset: 'UTC\u22125', abbr: 'EST', coverage: 'Quintana Roo (Canc\u00fan)' },
                  { zone: 'Central', offset: 'UTC\u22126', abbr: 'CST', coverage: 'Mexico City, Guadalajara, most of country' },
                  { zone: 'Pacific', offset: 'UTC\u22127', abbr: 'MST', coverage: 'Chihuahua, Sinaloa, Sonora' },
                  { zone: 'Northwest', offset: 'UTC\u22128', abbr: 'PST', coverage: 'Baja California (Tijuana)' },
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

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Number of Time Zones', value: '4 (UTC\u22125 to UTC\u22128)' },
          { label: 'Reference Zone', value: 'Central Time (CST, UTC\u22126)' },
          { label: 'DST Status', value: 'Abolished nationwide in Oct 2022' },
          { label: 'Exception', value: 'Border towns near US may keep DST' },
          { label: 'Population', value: '~130 million' },
          { label: 'Same Offset As', value: 'Chicago, Guatemala (UTC\u22126)' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Mexico Time vs World (Mexico City CST)</h2>
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
                  { zone: 'New York (ET)', winter: 'Mexico +1 hr', summer: 'Same time as Mexico' },
                  { zone: 'Los Angeles (PT)', winter: 'Mexico +2 hrs', summer: 'Mexico +1 hr' },
                  { zone: 'London (GMT/BST)', winter: 'Mexico \u22126 hrs', summer: 'Mexico \u22127 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Mexico \u22127 hrs', summer: 'Mexico \u22128 hrs' },
                  { zone: 'India (IST)', winter: 'Mexico \u221211:30', summer: 'Mexico \u221211:30' },
                  { zone: 'Japan (JST)', winter: 'Mexico \u221215 hrs', summer: 'Mexico \u221215 hrs' },
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

      <NarrativeSection title="Mexico\u2019s 2022 DST Abolition" card={card} heading={heading} subText={subText}>
        <p>
          In <strong className={heading}>October 2022</strong>, Mexico officially abolished daylight saving time nationwide. The reform ended nearly <strong className={heading}>26 years</strong> of seasonal clock changes that began in 1996.
        </p>
        <p>
          The government cited <strong className={heading}>health concerns</strong> \u2014 studies showed increased heart attacks, strokes, and traffic accidents during the transition week. A congressional study found DST saved less than <strong className={heading}>1% of national energy consumption</strong>.
        </p>
        <p>
          <strong className={heading}>One exception exists:</strong> municipalities within 20 km of the US border (like Tijuana, Ciudad Ju\u00e1rez, and Nuevo Laredo) may continue observing US DST schedules to maintain economic alignment with their American twin cities.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Why Is Canc\u00fan on Eastern Time?" card={card} heading={heading} subText={subText}>
        <p>
          In <strong className={heading}>2015</strong>, Quintana Roo (home to Canc\u00fan) switched from Central Time to <strong className={heading}>Eastern Standard Time (UTC\u22125)</strong>. The state never changes its clocks \u2014 it stays on EST year-round.
        </p>
        <p>
          The reason was <strong className={heading}>tourism</strong>. With most visitors coming from the US East Coast, aligning with Eastern Time eliminated confusion for hotel check-ins, flight schedules, and dinner reservations. It also gave the resort zone an extra hour of evening sunlight for beach activities.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Mexican Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Mexico City', detail: 'Pop. 21.8M metro \u00B7 Capital, CST (UTC\u22126)' },
          { name: 'Guadalajara', detail: 'Pop. 5.3M metro \u00B7 Jalisco, CST (UTC\u22126)' },
          { name: 'Monterrey', detail: 'Pop. 5.3M metro \u00B7 Industrial hub, CST (UTC\u22126)' },
          { name: 'Canc\u00fan', detail: 'Pop. 900K \u00B7 Tourism, EST (UTC\u22125)' },
          { name: 'Tijuana', detail: 'Pop. 2M metro \u00B7 Border city, PST (UTC\u22128)' },
          { name: 'Puebla', detail: 'Pop. 3.2M metro \u00B7 Colonial city, CST (UTC\u22126)' },
        ]}
      />
    </div>
  )
}
