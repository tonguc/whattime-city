'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function ItalyClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Rome')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Italy', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST \u00B7 UTC+2' : 'CET \u00B7 UTC+1' },
          { label: isDST ? 'Summer Time (Ora Legale)' : 'Winter Time (Ora Solare)' },
          { label: 'Rome' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
          { label: 'Italian Name', value: 'Ora Solare / Ora Legale' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct' },
          { label: 'IANA Identifier', value: 'Europe/Rome' },
          { label: 'Population', value: '~59 million' },
          { label: 'Same Zone As', value: 'France, Germany, Spain, Benelux' },
        ]}
      />

      <ComparisonTable
        title="Italy Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'Italy +6 hrs', summer: 'Italy +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'Italy +9 hrs', summer: 'Italy +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'Italy +1 hr', summer: 'Italy +1 hr' },
          { location: 'India (IST)', winter: 'Italy \u22124:30', summer: 'Italy \u22123:30' },
          { location: 'China (CST)', winter: 'Italy \u22127 hrs', summer: 'Italy \u22126 hrs' },
          { location: 'Japan (JST)', winter: 'Italy \u22128 hrs', summer: 'Italy \u22127 hrs' },
          { location: 'Sydney (AET)', winter: 'Italy \u221210 hrs', summer: 'Italy \u22128 hrs' },
        ]}
      />

      <NarrativeSection title="Italian Time Culture: La Passeggiata & Riposo" card={card} heading={heading} subText={subText}>
        <p>
          Italian daily life follows a distinctive rhythm. The <strong className={heading}>riposo</strong> (afternoon break) runs roughly from <strong className={heading}>1:00 PM to 3:30 PM</strong> — shops close, streets quiet, and lunch is a proper sit-down affair. This isn&apos;t just southern tradition; even in Milan and Turin, many smaller businesses observe it.
        </p>
        <p>
          The evening <strong className={heading}>passeggiata</strong> (promenade) begins around <strong className={heading}>6:00&ndash;7:00 PM</strong> in summer &mdash; Italians stroll through town centers, stop for an <strong className={heading}>aperitivo</strong>, and socialize before dinner at <strong className={heading}>8:30&ndash;9:30 PM</strong> (much later in the south).
        </p>
        <p>
          Italian business hours typically run <strong className={heading}>9:00 AM &ndash; 1:00 PM</strong> and <strong className={heading}>3:30 PM &ndash; 7:30 PM</strong> &mdash; the split schedule confuses visitors but is deeply integrated into Italian culture.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>DST Switch Dates &mdash; Italy (CET ↔ CEST)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">Spring Forward (&rarr; CEST)</th>
                  <th className="pb-2">Fall Back (&rarr; CET)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { year: '2025', spring: 'March 30 at 2:00 AM', fall: 'October 26 at 3:00 AM' },
                  { year: '2026', spring: 'March 29 at 2:00 AM', fall: 'October 25 at 3:00 AM' },
                  { year: '2027', spring: 'March 28 at 2:00 AM', fall: 'October 31 at 3:00 AM' },
                ].map(({ year, spring, fall }) => (
                  <tr key={year}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{year}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{spring}</td>
                    <td className={`py-2 ${subText}`}>{fall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>Italy follows EU DST rules. The 2019 EU vote to abolish clock changes remains unimplemented.</p>
        </div>
      </section>

      <CitiesGrid
        title="Major Italian Cities \u2014 All on CET/CEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Rome', detail: 'Pop. 4.3M metro \u00B7 Capital, Eternal City' },
          { name: 'Milan', detail: 'Pop. 5.3M metro \u00B7 Financial capital, fashion hub' },
          { name: 'Naples', detail: 'Pop. 3M metro \u00B7 Southern hub, pizza origin' },
          { name: 'Turin', detail: 'Pop. 2.3M metro \u00B7 Industrial hub, Fiat/Ferrari' },
          { name: 'Florence', detail: 'Pop. 1M metro \u00B7 Tuscany, Renaissance art' },
          { name: 'Venice', detail: 'Pop. 260K \u00B7 Lagoon city, tourism icon' },
        ]}
      />
    </div>
  )
}
