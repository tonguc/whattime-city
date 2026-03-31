'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function DenmarkClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Copenhagen')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Denmark', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST \u00B7 UTC+2' : 'CET \u00B7 UTC+1' },
          { label: 'Hygge & Work-Life Balance' },
          { label: 'Copenhagen' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct (EU)' },
          { label: 'IANA Identifier', value: 'Europe/Copenhagen' },
          { label: 'Population', value: '~5.9 million' },
          { label: 'Territories', value: 'Greenland (UTC-1 to UTC-4), Faroe Islands (UTC+0)' },
          { label: 'Famous For', value: 'Hygge, LEGO, Carlsberg, Maersk' },
        ]}
      />

      <ComparisonTable
        title="Denmark Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'DK +6 hrs', summer: 'DK +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'DK +9 hrs', summer: 'DK +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'DK +1 hr', summer: 'DK +1 hr' },
          { location: 'India (IST)', winter: 'DK \u22124:30', summer: 'DK \u22123:30' },
          { location: 'Greenland (WGT)', winter: 'DK +4 hrs', summer: 'DK +4 hrs' },
          { location: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Denmark&apos;s Secret Timezone Empire &mdash; 5 Time Zones</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Most people think of Denmark as a small Scandinavian country. But the <strong className={heading}>Kingdom of Denmark</strong> actually spans <strong className={heading}>5 time zones</strong> &mdash; thanks to <strong className={heading}>Greenland</strong> and the <strong className={heading}>Faroe Islands</strong>.
            </p>
            <p>
              <strong className={heading}>Greenland</strong> alone covers 4 time zones (UTC-4 to UTC-1), making it the <strong className={heading}>world&apos;s largest island</strong> with extreme timezone variation. In 2023, Greenland moved its main timezone from UTC-3 to <strong className={heading}>UTC-2</strong> to be closer to Denmark and EU business hours.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Territory</th>
                  <th className="pb-2 pr-4">Time Zone</th>
                  <th className="pb-2">Offset vs Copenhagen</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { territory: 'Denmark (mainland)', tz: 'CET/CEST', diff: '\u2014' },
                  { territory: 'Faroe Islands', tz: 'WET/WEST (UTC+0/+1)', diff: '1 hr behind' },
                  { territory: 'Greenland (Nuuk)', tz: 'UTC-2/-1', diff: '3 hrs behind' },
                  { territory: 'Greenland (Ittoqqortoormiit)', tz: 'UTC-1/+0', diff: '2 hrs behind' },
                  { territory: 'Greenland (Danmarkshavn)', tz: 'UTC+0 (no DST)', diff: '1-2 hrs behind' },
                  { territory: 'Greenland (Thule/Pituffik)', tz: 'UTC-4/-3', diff: '5 hrs behind' },
                ].map(({ territory, tz, diff }) => (
                  <tr key={territory}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{territory}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{tz}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="Hygge &amp; the Danish Work-Life Clock" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>Hygge</strong> (pronounced &ldquo;hoo-gah&rdquo;) &mdash; the Danish concept of coziness and contentment &mdash; shapes how Danes structure their time. The average Dane works <strong className={heading}>33 hours per week</strong> (one of the lowest in Europe). Offices typically empty by <strong className={heading}>4:00 PM</strong>.
        </p>
        <p>
          This isn&apos;t laziness &mdash; Denmark has one of the <strong className={heading}>highest productivity rates per hour worked</strong> in the world. The Danish model: <strong className={heading}>arrive early (8 AM), skip long lunches, leave by 4 PM</strong> for family time. Staying late is seen as a sign of inefficiency, not dedication.
        </p>
        <p>
          For international teams, this means Danish colleagues are typically available <strong className={heading}>8:00 AM &ndash; 4:00 PM CET</strong> &mdash; a narrower window than most European countries.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Danish Cities \u2014 All on CET/CEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Copenhagen', detail: 'Pop. 1.4M metro \u00B7 Capital, Maersk HQ, design hub' },
          { name: 'Aarhus', detail: 'Pop. 350K \u00B7 2nd city, LEGO nearby, university' },
          { name: 'Odense', detail: 'Pop. 205K \u00B7 Hans Christian Andersen birthplace' },
          { name: 'Aalborg', detail: 'Pop. 120K \u00B7 Northern hub, cement & tech' },
          { name: 'T\u00f3rshavn', detail: 'Pop. 22K \u00B7 Faroe Islands capital (UTC+0)' },
          { name: 'Nuuk', detail: 'Pop. 19K \u00B7 Greenland capital (UTC-2)' },
        ]}
      />
    </div>
  )
}
