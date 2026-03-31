'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = { 'Mainland \u00B7 ECT \u00B7 UTC\u22125': 'America/Guayaquil', 'Gal\u00e1pagos \u00B7 GALT \u00B7 UTC\u22126': 'Pacific/Galapagos' }

export default function EcuadorClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'America/Guayaquil')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[
          { label: 'Mainland \u00B7 ECT \u00B7 UTC\u22125', time: times['Mainland \u00B7 ECT \u00B7 UTC\u22125'] ?? '' },
          { label: 'Gal\u00e1pagos \u00B7 GALT \u00B7 UTC\u22126', time: times['Gal\u00e1pagos \u00B7 GALT \u00B7 UTC\u22126'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        badges={[
          { label: '2 Time Zones' },
          { label: 'No DST \u2014 Equatorial' },
          { label: 'Named After the Equator' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Mainland Time', value: 'ECT \u2014 Ecuador Time (UTC\u22125)' },
          { label: 'Gal\u00e1pagos Time', value: 'GALT (UTC\u22126) \u2014 1 hour behind' },
          { label: 'DST Status', value: 'Never \u2014 equator = consistent daylight' },
          { label: 'IANA Identifiers', value: 'America/Guayaquil, Pacific/Galapagos' },
          { label: 'Population', value: '~18 million' },
          { label: 'Name Origin', value: 'Spanish for \u201cequator\u201d \u2014 it literally is!' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Ecuador Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>Ecuador&apos;s mainland matches US Eastern Standard Time (EST) year-round. But when the US shifts to EDT in summer, Ecuador falls 1 hour behind.</p>
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
                  { zone: 'New York (ET)', winter: 'Same time!', summer: 'EC \u22121 hr' },
                  { zone: 'Los Angeles (PT)', winter: 'EC +3 hrs', summer: 'EC +2 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'EC \u22125 hrs', summer: 'EC \u22126 hrs' },
                  { zone: 'Colombia (COT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Peru (PET)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Gal\u00e1pagos (GALT)', winter: 'EC +1 hr', summer: 'EC +1 hr' },
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

      <NarrativeSection title="The Country Named After the Equator \u2014 Where Time Stands Still" card={card} heading={heading} subText={subText}>
        <p>
          Ecuador is literally named after the <strong className={heading}>equator (la l&iacute;nea ecuatorial)</strong> which crosses the country just north of Quito. At the <strong className={heading}>Mitad del Mundo</strong> (Middle of the World) monument, you can stand with one foot in each hemisphere.
        </p>
        <p>
          Being on the equator means <strong className={heading}>~12 hours of daylight every single day</strong>, year-round. Sunrise is always around <strong className={heading}>6:00\u20136:15 AM</strong>, sunset around <strong className={heading}>6:15\u20136:30 PM</strong>. This consistency is why Ecuador has never needed DST.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Gal\u00e1pagos Islands \u2014 Darwin\u2019s Lab on a Different Clock" card={card} heading={heading} subText={subText}>
        <p>
          The <strong className={heading}>Gal\u00e1pagos Islands</strong> \u2014 1,000 km off Ecuador&apos;s coast \u2014 use <strong className={heading}>GALT (UTC\u22126)</strong>, one hour behind the mainland. Charles Darwin&apos;s 1835 visit here inspired <strong className={heading}>On the Origin of Species</strong> and changed biology forever.
        </p>
        <p>
          Today the islands are a <strong className={heading}>UNESCO World Heritage Site</strong> with strict visitor limits. Tourist flights from Quito/Guayaquil must account for the <strong className={heading}>1-hour time change</strong> \u2014 the 2.5-hour flight appears to take 1.5 hours on your watch.
        </p>
      </NarrativeSection>

      <NarrativeSection title="US Dollars, US Timezone \u2014 Ecuador\u2019s American Connection" card={card} heading={heading} subText={subText}>
        <p>
          Ecuador adopted the <strong className={heading}>US Dollar as its official currency in 2000</strong> after a catastrophic banking crisis. Combined with its <strong className={heading}>EST-aligned timezone</strong>, this makes Ecuador uniquely convenient for American businesses and retirees.
        </p>
        <p>
          <strong className={heading}>Cuenca</strong> has become one of the world&apos;s top retirement destinations for Americans \u2014 same timezone, same currency, and a cost of living <strong className={heading}>60\u201370% lower than the US</strong>.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Ecuadorian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Quito', detail: 'Pop. 2.8M \u00B7 Capital (UTC\u22125), 2,850m, UNESCO Old Town' },
          { name: 'Guayaquil', detail: 'Pop. 2.7M \u00B7 Largest city, Pacific coast' },
          { name: 'Cuenca', detail: 'Pop. 600K \u00B7 UNESCO, expat favorite, colonial charm' },
          { name: 'Santo Domingo', detail: 'Pop. 450K \u00B7 Tropical lowlands, agriculture' },
          { name: 'Ambato', detail: 'Pop. 380K \u00B7 Central highlands' },
          { name: 'Puerto Ayora', detail: 'Pop. 15K \u00B7 Gal\u00e1pagos (UTC\u22126), Darwin Research' },
        ]}
      />
    </div>
  )
}
