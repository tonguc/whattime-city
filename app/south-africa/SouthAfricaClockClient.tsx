'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function SouthAfricaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Johannesburg')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in South Africa', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SAST \u00B7 UTC+2' },
          { label: 'No DST \u2014 Year-round' },
          { label: '3 Capitals' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'South Africa Standard Time (SAST)' },
          { label: 'UTC Offset', value: 'UTC+2 (always)' },
          { label: 'Daylight Saving', value: 'Never observed' },
          { label: 'IANA Identifier', value: 'Africa/Johannesburg' },
          { label: 'Population', value: '~60 million (Rainbow Nation)' },
          { label: 'Same Offset As', value: 'Egypt, Israel, Greece, Romania' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>South Africa Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>SAST (UTC+2) never changes. A major advantage for business: SA overlaps with both European and Asian business hours.</p>
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
                  { zone: 'New York (ET)', winter: 'SA +7 hrs', summer: 'SA +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'SA +10 hrs', summer: 'SA +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'SA +2 hrs', summer: 'SA +1 hr' },
                  { zone: 'Berlin (CET/CEST)', winter: 'SA +1 hr', summer: 'Same as SA' },
                  { zone: 'India (IST)', winter: 'SA \u22123:30', summer: 'SA \u22123:30' },
                  { zone: 'China (CST)', winter: 'SA \u22126 hrs', summer: 'SA \u22126 hrs' },
                  { zone: 'Sydney (AET)', winter: 'SA \u22129 hrs', summer: 'SA \u22128 hrs' },
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

      <NarrativeSection title="South Africa\u2019s Strategic Time Zone Advantage" card={card} heading={heading} subText={subText}>
        <p>
          South Africa&apos;s UTC+2 position gives it a <strong className={heading}>unique business advantage</strong>: significant overlap with both <strong className={heading}>European and Asian</strong> working hours in a single day.
        </p>
        <p>
          A Johannesburg-based worker can call <strong className={heading}>London from 9:00 AM to 5:00 PM</strong> (overlaps fully), <strong className={heading}>Mumbai from 8:00 AM to 4:00 PM</strong> (overlaps ~6 hours), and still reach <strong className={heading}>New York from 3:00 PM to 5:00 PM</strong> (2-hour overlap in winter).
        </p>
        <p>
          This makes South Africa an increasingly popular hub for <strong className={heading}>international BPO, fintech, and remote work</strong> &mdash; a bridge between Europe, Asia, and the Americas.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Three Capitals, One Time Zone</h2>
          <p className={`text-sm mb-3 ${subText}`}>South Africa is one of the few countries with <strong className={heading}>three capital cities</strong>, each serving a different branch of government:</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { city: 'Pretoria', role: 'Administrative Capital', branch: 'Executive (President & Cabinet)', pop: '2.6M metro' },
              { city: 'Cape Town', role: 'Legislative Capital', branch: 'Parliament', pop: '4.6M metro' },
              { city: 'Bloemfontein', role: 'Judicial Capital', branch: 'Supreme Court of Appeal', pop: '750K metro' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs font-medium ${subText}`}>{c.role}</div>
                <div className={`text-xs ${mutedText} mt-1`}>{c.branch}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NarrativeSection title="Load Shedding &amp; Time" card={card} heading={heading} subText={subText}>
        <p>
          South Africa&apos;s <strong className={heading}>load shedding</strong> (scheduled power outages) has made time management uniquely critical. Eskom, the state power utility, implements rolling blackouts in <strong className={heading}>2&ndash;4 hour blocks</strong> on a published schedule.
        </p>
        <p>
          South Africans plan their entire day around load shedding stages &mdash; cooking, charging devices, and scheduling meetings must account for <strong className={heading}>when power will be available</strong>. Apps like EskomSePush became essential tools, with millions of daily users checking their time-block schedules.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major South African Cities \u2014 All on SAST (UTC+2)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Johannesburg', detail: 'Pop. 6M metro \u00B7 Financial capital, Gauteng' },
          { name: 'Cape Town', detail: 'Pop. 4.6M metro \u00B7 Legislative capital, Western Cape' },
          { name: 'Durban', detail: 'Pop. 3.9M metro \u00B7 Indian Ocean coast, KZN' },
          { name: 'Pretoria', detail: 'Pop. 2.6M metro \u00B7 Admin capital, Jacaranda City' },
          { name: 'Port Elizabeth', detail: 'Pop. 1.3M metro \u00B7 Eastern Cape, automotive' },
          { name: 'Stellenbosch', detail: 'Pop. 180K \u00B7 Wine capital, university town' },
        ]}
      />
    </div>
  )
}
