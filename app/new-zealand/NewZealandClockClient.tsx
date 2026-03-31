'use client'

import {
  useMultiClockState, useClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Auckland / Wellington': 'Pacific/Auckland',
  'Chatham Islands': 'Pacific/Chatham',
}

export default function NewZealandClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Pacific/Auckland')
  const { isDST } = useClockState('Pacific/Auckland')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[
          { label: 'Auckland / Wellington', time: times['Auckland / Wellington'] ?? '' },
          { label: 'Chatham Islands', time: times['Chatham Islands'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'NZDT \u00B7 UTC+13' : 'NZST \u00B7 UTC+12' },
          { label: 'DST: Southern Hemisphere' },
          { label: '45-min offset (Chatham)' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Standard Time', value: 'NZST (UTC+12)' },
          { label: 'Daylight Saving', value: 'NZDT (UTC+13) \u2014 Sep to Apr' },
          { label: 'Chatham Islands', value: 'CHAST (UTC+12:45) \u2014 45 min ahead' },
          { label: 'DST Rule', value: 'Last Sunday Sep \u2192 First Sunday Apr' },
          { label: 'IANA Identifier', value: 'Pacific/Auckland' },
          { label: 'First Sunrise', value: 'Gisborne \u2014 first city to see the sun' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>New Zealand Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>NZ DST runs Sep\u2013Apr (Southern Hemisphere). The double-DST effect with Northern Hemisphere countries creates dramatic seasonal swings.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">NZ Summer (NZDT)</th>
                  <th className="pb-2">NZ Winter (NZST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', nzSummer: 'NZ \u221218 hrs', nzWinter: 'NZ \u221216 hrs' },
                  { zone: 'Los Angeles (PT)', nzSummer: 'NZ \u221221 hrs', nzWinter: 'NZ \u221219 hrs' },
                  { zone: 'London (GMT/BST)', nzSummer: 'NZ \u221213 hrs', nzWinter: 'NZ \u221211 hrs' },
                  { zone: 'India (IST)', nzSummer: 'NZ \u22127:30', nzWinter: 'NZ \u22126:30' },
                  { zone: 'Sydney (AET)', nzSummer: 'NZ \u22122 hrs', nzWinter: 'NZ \u22122 hrs' },
                  { zone: 'Japan (JST)', nzSummer: 'NZ \u22124 hrs', nzWinter: 'NZ \u22123 hrs' },
                ].map(({ zone, nzSummer, nzWinter }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{nzSummer}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{nzWinter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="First Country to See the New Day" card={card} heading={heading} subText={subText}>
        <p>
          New Zealand is the <strong className={heading}>first major country to see each new day&apos;s sunrise</strong>. The city of <strong className={heading}>Gisborne</strong> on the North Island&apos;s east coast is the first city in the world to greet each morning.
        </p>
        <p>
          During NZDT, New Zealand runs at <strong className={heading}>UTC+13</strong> \u2014 actually ahead of the International Date Line. This makes New Zealand the <strong className={heading}>global epicenter of New Year&apos;s Eve celebrations</strong> \u2014 Auckland&apos;s Sky Tower fireworks are broadcast worldwide as the first New Year countdown each year.
        </p>
      </NarrativeSection>

      <NarrativeSection title="The Chatham Islands: UTC+12:45" card={card} heading={heading} subText={subText}>
        <p>
          The <strong className={heading}>Chatham Islands</strong> use one of the world&apos;s rarest time offsets: <strong className={heading}>UTC+12:45</strong> (CHAST), which is <strong className={heading}>45 minutes ahead</strong> of mainland New Zealand. Only Nepal (UTC+5:45) shares this 45-minute offset distinction.
        </p>
        <p>
          Home to just <strong className={heading}>~600 people</strong>, the Chathams are 800 km east of mainland NZ. The 45-minute offset was chosen to approximate the islands&apos; geographic longitude while maintaining a reasonable relationship with the mainland clock.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>NZ DST Switch Dates (NZST \u21d4 NZDT)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Period</th>
                  <th className="pb-2 pr-4">Spring Forward (\u2192 NZDT)</th>
                  <th className="pb-2">Fall Back (\u2192 NZST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { period: '2025\u201326', spring: 'Sep 28, 2025 at 2:00 AM', fall: 'Apr 5, 2026 at 3:00 AM' },
                  { period: '2026\u201327', spring: 'Sep 27, 2026 at 2:00 AM', fall: 'Apr 4, 2027 at 3:00 AM' },
                  { period: '2027\u201328', spring: 'Sep 26, 2027 at 2:00 AM', fall: 'Apr 2, 2028 at 3:00 AM' },
                ].map(({ period, spring, fall }) => (
                  <tr key={period}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{period}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{spring}</td>
                    <td className={`py-2 ${subText}`}>{fall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>Southern Hemisphere: DST starts in September (spring) and ends in April (autumn).</p>
        </div>
      </section>

      <CitiesGrid
        title="Major New Zealand Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Auckland', detail: 'Pop. 1.7M metro \u00B7 Largest city, North Island' },
          { name: 'Wellington', detail: 'Pop. 420K metro \u00B7 Capital, windy, North Island' },
          { name: 'Christchurch', detail: 'Pop. 390K \u00B7 Largest in South Island' },
          { name: 'Hamilton', detail: 'Pop. 180K \u00B7 Waikato region, North Island' },
          { name: 'Queenstown', detail: 'Pop. 50K \u00B7 Adventure capital, South Island' },
          { name: 'Gisborne', detail: 'Pop. 38K \u00B7 First city to see sunrise' },
        ]}
      />
    </div>
  )
}
