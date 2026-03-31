'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function GermanyClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Berlin')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Germany', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST \u00B7 UTC+2' : 'CET \u00B7 UTC+1' },
          { label: isDST ? 'Summer Time Active' : 'Central European Time' },
          { label: 'Berlin' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Winter Time', value: 'CET \u2014 Central European Time (UTC+1)' },
          { label: 'Summer Time', value: 'CEST \u2014 Central European Summer Time (UTC+2)' },
          { label: 'Clocks Forward', value: 'Last Sunday in March (2:00 AM \u2192 3:00 AM)' },
          { label: 'Clocks Back', value: 'Last Sunday in October (3:00 AM \u2192 2:00 AM)' },
          { label: 'IANA Identifier', value: 'Europe/Berlin' },
          { label: 'EU DST Rule', value: 'Same dates as all EU countries' },
        ]}
      />

      <ComparisonTable
        title="Germany Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'Germany +6 hrs', summer: 'Germany +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'Germany +9 hrs', summer: 'Germany +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'Germany +1 hr', summer: 'Germany +1 hr' },
          { location: 'India (IST)', winter: 'Germany \u22124:30', summer: 'Germany \u22123:30' },
          { location: 'Japan (JST)', winter: 'Germany \u22128 hrs', summer: 'Germany \u22127 hrs' },
          { location: 'China (CST)', winter: 'Germany \u22127 hrs', summer: 'Germany \u22126 hrs' },
          { location: 'Sydney (AET)', winter: 'Germany \u221210 hrs', summer: 'Germany \u22128 hrs' },
        ]}
      />

      <NarrativeSection title="Will Germany Abolish DST?" card={card} heading={heading} subText={subText}>
        <p>
          In 2019, the <strong className={heading}>European Parliament voted to abolish DST</strong> across the EU. Each member state was supposed to choose permanent summer or winter time by 2021. However, the COVID-19 pandemic stalled the process.
        </p>
        <p>
          As of 2026, <strong className={heading}>no final decision has been made</strong>. Germany and the EU continue to switch clocks twice a year. Surveys show most Germans prefer permanent <strong className={heading}>summer time (CEST, UTC+2)</strong>, though scientists argue permanent winter time (CET) better aligns with circadian rhythms.
        </p>
        <p>
          The challenge: all EU countries must coordinate. If Germany picks summer time but France picks winter time, neighboring countries would be in different zones despite being in the same longitude.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>CET/CEST Switch Dates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">CEST Starts (Clocks Forward)</th>
                  <th className="pb-2">CET Resumes (Clocks Back)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { year: '2025', forward: 'Sunday, March 30', back: 'Sunday, October 26' },
                  { year: '2026', forward: 'Sunday, March 29', back: 'Sunday, October 25' },
                  { year: '2027', forward: 'Sunday, March 28', back: 'Sunday, October 31' },
                ].map(({ year, forward, back }) => (
                  <tr key={year}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{year}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{forward} at 2:00 AM \u2192 3:00 AM</td>
                    <td className={`py-2 ${subText}`}>{back} at 3:00 AM \u2192 2:00 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major German Cities \u2014 All on CET/CEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Berlin', detail: 'Pop. 3.7M \u00B7 Capital, government, startups' },
          { name: 'Munich', detail: 'Pop. 1.5M \u00B7 Bavaria, Oktoberfest, BMW' },
          { name: 'Hamburg', detail: 'Pop. 1.9M \u00B7 Port city, media capital' },
          { name: 'Frankfurt', detail: 'Pop. 750K \u00B7 Financial capital, ECB seat' },
          { name: 'Cologne', detail: 'Pop. 1.1M \u00B7 Cathedral, media, trade fairs' },
          { name: 'Stuttgart', detail: 'Pop. 640K \u00B7 Mercedes-Benz, Porsche HQ' },
        ]}
      />
    </div>
  )
}
