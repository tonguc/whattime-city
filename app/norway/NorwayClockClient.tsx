'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function NorwayClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Oslo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Norway', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST \u00B7 UTC+2' : 'CET \u00B7 UTC+1' },
          { label: 'Midnight Sun \u00B7 58\u00b0N\u201371\u00b0N' },
          { label: 'Oslo' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct (EU)' },
          { label: 'IANA Identifier', value: 'Europe/Oslo' },
          { label: 'Population', value: '~5.5 million' },
          { label: 'Latitude Range', value: '58\u00b0N \u2013 71\u00b0N (includes Arctic)' },
          { label: 'Territories', value: 'Svalbard (78\u00b0N) \u2014 same CET timezone' },
        ]}
      />

      <ComparisonTable
        title="Norway Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'NO +6 hrs', summer: 'NO +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'NO +9 hrs', summer: 'NO +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'NO +1 hr', summer: 'NO +1 hr' },
          { location: 'India (IST)', winter: 'NO \u22124:30', summer: 'NO \u22123:30' },
          { location: 'Japan (JST)', winter: 'NO \u22128 hrs', summer: 'NO \u22127 hrs' },
          { location: 'Sweden (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Midnight Sun &amp; M&oslash;rketid &mdash; Norway&apos;s Light Extremes</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Norway stretches from <strong className={heading}>58&deg;N to 71&deg;N</strong> &mdash; making it one of the most latitudinally extreme countries on Earth. In <strong className={heading}>Hammerfest</strong> and <strong className={heading}>Troms&oslash;</strong> (above the Arctic Circle), the sun doesn&apos;t set for <strong className={heading}>~2 months</strong> in summer.
            </p>
            <p>
              The flip side is <strong className={heading}>m&oslash;rketid</strong> (dark time): Troms&oslash; gets <strong className={heading}>zero direct sunlight</strong> from late November to mid-January. Norway&apos;s northernmost territory, <strong className={heading}>Svalbard (78&deg;N)</strong>, experiences <strong className={heading}>4 months of midnight sun</strong> and <strong className={heading}>4 months of polar night</strong>.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Midsummer (Jun 21)</th>
                  <th className="pb-2">Midwinter (Dec 21)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { city: 'Oslo (60\u00b0N)', summer: '~18.5 hrs daylight', winter: '~6 hrs daylight' },
                  { city: 'Troms\u00f8 (69\u00b0N)', summer: '24 hrs (midnight sun)', winter: '0 hrs (polar night)' },
                  { city: 'Svalbard (78\u00b0N)', summer: '24 hrs for 4 months', winter: '0 hrs for 4 months' },
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

      <NarrativeSection title="The $1.7 Trillion Oil Fund \u2014 World\u2019s Largest Sovereign Wealth Fund" card={card} heading={heading} subText={subText}>
        <p>
          Norway&apos;s <strong className={heading}>Government Pension Fund Global</strong> (the &ldquo;Oil Fund&rdquo;) is worth over <strong className={heading}>$1.7 trillion</strong> &mdash; roughly <strong className={heading}>$300,000 per Norwegian citizen</strong>. It owns ~1.5% of all publicly listed stocks worldwide.
        </p>
        <p>
          The fund&apos;s managers at <strong className={heading}>Norges Bank Investment Management</strong> in Oslo operate on CET, but manage assets across every timezone. Their trading desk is active from <strong className={heading}>Asian market open (1 AM CET)</strong> through <strong className={heading}>US market close (10 PM CET)</strong> &mdash; nearly 24 hours of market coverage from a single timezone.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Norwegian Cities \u2014 All on CET/CEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Oslo', detail: 'Pop. 1.1M metro \u00B7 Capital, Oil Fund HQ, tech hub' },
          { name: 'Bergen', detail: 'Pop. 285K \u00B7 Fjord gateway, 248 rainy days/year' },
          { name: 'Trondheim', detail: 'Pop. 210K \u00B7 Tech university (NTNU), historic' },
          { name: 'Stavanger', detail: 'Pop. 145K \u00B7 Oil capital, Equinor HQ' },
          { name: 'Troms\u00f8', detail: 'Pop. 77K \u00B7 Arctic Circle, Northern Lights hub' },
          { name: 'Longyearbyen', detail: 'Pop. 2.5K \u00B7 Svalbard, 78\u00b0N, northernmost town' },
        ]}
      />
    </div>
  )
}
