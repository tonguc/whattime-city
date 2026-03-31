'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function FinlandClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Helsinki')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Finland', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST \u00B7 UTC+3' : 'EET \u00B7 UTC+2' },
          { label: 'Midnight Sun & Polar Night' },
          { label: 'Helsinki' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct (EU)' },
          { label: 'IANA Identifier', value: 'Europe/Helsinki' },
          { label: 'Population', value: '~5.6 million' },
          { label: 'Latitude Range', value: '60\u00b0N \u2013 70\u00b0N (extreme daylight variation)' },
          { label: 'Famous For', value: 'Happiest country, saunas, Nokia, Linux' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Finland Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>Finland is on EET/EEST &mdash; one hour ahead of Central Europe, same as the Baltic states and Eastern Europe.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">FI Winter (EET)</th>
                  <th className="pb-2">FI Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'FI +7 hrs', summer: 'FI +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'FI +10 hrs', summer: 'FI +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'FI +2 hrs', summer: 'FI +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'FI +1 hr', summer: 'FI +1 hr' },
                  { zone: 'India (IST)', winter: 'FI \u22123:30', summer: 'FI \u22122:30' },
                  { zone: 'Estonia (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
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

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Midnight Sun &amp; Kaamos &mdash; Finland&apos;s Extreme Light Cycle</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Finland is one of the <strong className={heading}>world&apos;s northernmost countries</strong> &mdash; one-third lies above the <strong className={heading}>Arctic Circle</strong>. This creates the most extreme daylight variation in the EU.
            </p>
            <p>
              In <strong className={heading}>Utsjoki</strong> (Finland&apos;s northernmost municipality, 70&deg;N), the sun doesn&apos;t set for <strong className={heading}>73 consecutive days</strong> in summer. In winter, it doesn&apos;t rise for <strong className={heading}>51 days</strong> &mdash; a period Finns call <strong className={heading}>&ldquo;kaamos&rdquo;</strong> (polar night). Even Helsinki gets only <strong className={heading}>~6 hours of daylight</strong> in December.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">City</th>
                  <th className="pb-2 pr-4">Midsummer (Jun 21)</th>
                  <th className="pb-2">Midwinter (Dec 21)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { city: 'Helsinki (60\u00b0N)', summer: '~19 hrs daylight', winter: '~5.5 hrs daylight' },
                  { city: 'Oulu (65\u00b0N)', summer: '~24 hrs (near midnight sun)', winter: '~3 hrs daylight' },
                  { city: 'Utsjoki (70\u00b0N)', summer: '73 days continuous sun', winter: '51 days polar night' },
                ].map(({ city, summer, winter }) => (
                  <tr key={city}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{city}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{summer}</td>
                    <td className={`py-2 ${subText}`}>{winter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="Sauna Nation \u2014 3.3 Million Saunas for 5.6 Million People" card={card} heading={heading} subText={subText}>
        <p>
          Finland has <strong className={heading}>3.3 million saunas</strong> for a population of <strong className={heading}>5.6 million</strong> &mdash; nearly one sauna per household. The Finnish Parliament building has a sauna. So do McDonald&apos;s locations, Burger Kings, and even a Ferris wheel gondola in Helsinki.
        </p>
        <p>
          The traditional Finnish sauna ritual is <strong className={heading}>deeply tied to time</strong>: the ideal sauna session is <strong className={heading}>Saturday evening</strong> (the word <em>lauantai</em> comes from &ldquo;washing day&rdquo;). Business saunas are common &mdash; many Finnish deals are closed in the sauna, not the boardroom. If a Finnish colleague invites you to sauna, it&apos;s a sign of <strong className={heading}>trust and respect</strong>.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Finland: Where Linux, Nokia &amp; Supercell Were Born" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>Linus Torvalds</strong> created Linux in his Helsinki dorm room in <strong className={heading}>1991</strong>. <strong className={heading}>Nokia</strong> &mdash; once the world&apos;s largest phone maker &mdash; is headquartered in Espoo. <strong className={heading}>Supercell</strong> (Clash of Clans, $10B valuation) and <strong className={heading}>Rovio</strong> (Angry Birds) are Finnish gaming powerhouses.
        </p>
        <p>
          Finland&apos;s EET timezone gives a <strong className={heading}>1-hour lead over Central Europe</strong> and a meaningful overlap with both <strong className={heading}>Asian markets</strong> (afternoon) and <strong className={heading}>US East Coast</strong> (late afternoon). The country has been ranked the <strong className={heading}>happiest in the world</strong> for 7 consecutive years &mdash; a major talent attractor for the tech sector.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Finnish Cities \u2014 All on EET/EEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Helsinki', detail: 'Pop. 1.3M metro \u00B7 Capital, design district, tech hub' },
          { name: 'Espoo', detail: 'Pop. 300K \u00B7 Nokia HQ, Aalto University' },
          { name: 'Tampere', detail: 'Pop. 250K \u00B7 Industrial heart, \u201csauna capital\u201d' },
          { name: 'Turku', detail: 'Pop. 200K \u00B7 Former capital, oldest city' },
          { name: 'Oulu', detail: 'Pop. 210K \u00B7 Arctic tech hub, 5G R&D center' },
          { name: 'Rovaniemi', detail: 'Pop. 65K \u00B7 Arctic Circle, Santa Claus Village' },
        ]}
      />
    </div>
  )
}
