'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function UkClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/London')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in the United Kingdom', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'BST \u00B7 UTC+1' : 'GMT \u00B7 UTC+0' },
          { label: isDST ? 'Summer Time Active' : 'Greenwich Mean Time' },
          { label: 'London' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Winter Time', value: 'GMT (UTC+0)' },
          { label: 'Summer Time', value: 'BST (UTC+1)' },
          { label: 'Clocks Forward', value: 'Last Sunday in March' },
          { label: 'Clocks Back', value: 'Last Sunday in October' },
          { label: 'IANA Identifier', value: 'Europe/London' },
          { label: 'Major Cities', value: 'London, Manchester, Edinburgh' },
        ]}
      />

      <ComparisonTable
        title="UK Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'UK is +5 hrs', summer: 'UK is +5 hrs' },
          { location: 'Los Angeles (PT)', winter: 'UK is +8 hrs', summer: 'UK is +8 hrs' },
          { location: 'Central Europe (CET)', winter: 'UK is \u22121 hr', summer: 'UK is \u22121 hr' },
          { location: 'India (IST)', winter: 'UK is \u22125:30', summer: 'UK is \u22124:30' },
          { location: 'Japan (JST)', winter: 'UK is \u22129 hrs', summer: 'UK is \u22128 hrs' },
          { location: 'Dubai (GST)', winter: 'UK is \u22124 hrs', summer: 'UK is \u22123 hrs' },
          { location: 'Sydney (AET)', winter: 'UK is \u221211 hrs', summer: 'UK is \u22129 hrs' },
        ]}
      />

      <NarrativeSection title="GMT vs BST vs UTC \u2014 What&apos;s the Difference?" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>GMT (Greenwich Mean Time)</strong> is the UK&apos;s winter time zone, based on the <strong className={heading}>Prime Meridian (0\u00b0 longitude)</strong> at the Royal Observatory in Greenwich, London. It is equivalent to UTC+0.
        </p>
        <p>
          <strong className={heading}>BST (British Summer Time)</strong> is the UK&apos;s summer time zone \u2014 clocks move forward 1 hour to UTC+1. BST runs from the last Sunday in March to the last Sunday in October.
        </p>
        <p>
          <strong className={heading}>UTC (Coordinated Universal Time)</strong> is the global time standard that replaced GMT as the reference. While GMT and UTC are often used interchangeably, UTC is technically defined by atomic clocks and is the basis for all time zones worldwide.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>British Summer Time (BST) Dates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Year</th>
                  <th className="pb-2 pr-4">Clocks Forward (BST starts)</th>
                  <th className="pb-2">Clocks Back (GMT resumes)</th>
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
                    <td className={`py-2 pr-4 ${subText}`}>{forward} at 1:00 AM \u2192 2:00 AM</td>
                    <td className={`py-2 ${subText}`}>{back} at 2:00 AM \u2192 1:00 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>Note: UK and US DST dates differ by about 2\u20133 weeks. There are brief periods in March and November when the offset shifts by 1 hour.</p>
        </div>
      </section>

      <CitiesGrid
        title="Major UK Cities \u2014 All on GMT/BST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'London', detail: 'Pop. 9.5M metro \u00B7 Capital, financial center' },
          { name: 'Manchester', detail: 'Pop. 2.8M metro \u00B7 Northern hub, media city' },
          { name: 'Birmingham', detail: 'Pop. 2.6M metro \u00B7 Second city, Midlands' },
          { name: 'Edinburgh', detail: 'Pop. 540K \u00B7 Scottish capital, festivals' },
          { name: 'Glasgow', detail: 'Pop. 1.8M metro \u00B7 Scotland\'s largest city' },
          { name: 'Liverpool', detail: 'Pop. 910K metro \u00B7 The Beatles, maritime heritage' },
        ]}
      />
    </div>
  )
}
