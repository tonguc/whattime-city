'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Almaty / Astana \u00B7 UTC+6': 'Asia/Almaty',
  'Aqtobe / Atyrau \u00B7 UTC+5': 'Asia/Aqtobe',
}

export default function KazakhstanClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Asia/Almaty')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[
          { label: 'Almaty / Astana \u00B7 UTC+6', time: times['Almaty / Astana \u00B7 UTC+6'] ?? '' },
          { label: 'Aqtobe / Atyrau \u00B7 UTC+5', time: times['Aqtobe / Atyrau \u00B7 UTC+5'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        badges={[
          { label: '2 Time Zones' },
          { label: 'No DST' },
          { label: "World\u2019s 9th Largest Country" },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zones', value: 'UTC+5 (west) & UTC+6 (east)' },
          { label: 'DST Status', value: 'Abolished in 2005' },
          { label: 'IANA Identifiers', value: 'Asia/Almaty, Asia/Aqtobe, +3 more' },
          { label: 'Population', value: '~20 million' },
          { label: 'Area', value: '2.72M km\u00b2 \u2014 largest landlocked country' },
          { label: 'East-West Span', value: '~3,000 km (1 hr time difference)' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Kazakhstan Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">vs Almaty (UTC+6)</th>
                  <th className="pb-2">vs Aqtobe (UTC+5)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET winter)', almaty: 'KZ +11 hrs', aqtobe: 'KZ +10 hrs' },
                  { zone: 'London (GMT winter)', almaty: 'KZ +6 hrs', aqtobe: 'KZ +5 hrs' },
                  { zone: 'Moscow (MSK)', almaty: 'KZ +3 hrs', aqtobe: 'KZ +2 hrs' },
                  { zone: 'India (IST)', almaty: 'KZ +0:30', aqtobe: 'KZ \u22120:30' },
                  { zone: 'China (CST)', almaty: 'KZ \u22122 hrs', aqtobe: 'KZ \u22123 hrs' },
                  { zone: 'Uzbekistan (UZT)', almaty: 'KZ +1 hr', aqtobe: 'Same time!' },
                ].map(({ zone, almaty, aqtobe }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{almaty}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{aqtobe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Two Zones Across 3,000 Kilometers of Steppe</h2>
          <div className={`text-sm leading-relaxed mb-3 ${subText}`}>
            Kazakhstan is the <strong className={heading}>world&apos;s largest landlocked country</strong> and <strong className={heading}>9th largest overall</strong> \u2014 stretching 3,000 km from the Caspian Sea to China.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2">Major Cities</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Eastern Kazakhstan', offset: 'UTC+6', cities: 'Astana, Almaty, Karaganda, Shymkent' },
                  { zone: 'Western Kazakhstan', offset: 'UTC+5', cities: 'Aqtobe, Atyrau, Aktau, Oral' },
                ].map(({ zone, offset, cities }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{offset}</td>
                    <td className={`py-2 ${subText}`}>{cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-sm mt-3 ${subText}`}>
            In <strong className={heading}>2005</strong>, Kazakhstan abolished DST, citing economic disruption and health concerns. Unlike Russia, Kazakhstan&apos;s decision was swift and permanent \u2014 the clocks haven&apos;t changed since.
          </p>
        </div>
      </section>

      <NarrativeSection title="Baikonur Cosmodrome \u2014 Where Space Launches Use Moscow Time" card={card} heading={heading} subText={subText}>
        <p>
          The <strong className={heading}>Baikonur Cosmodrome</strong> in southern Kazakhstan is the world&apos;s first and largest space launch facility. <strong className={heading}>Yuri Gagarin</strong> launched from here in 1961. All crewed Soyuz missions to the ISS still launch from Baikonur.
        </p>
        <p>
          Here&apos;s the bizarre timezone twist: Baikonur is geographically in Kazakhstan&apos;s <strong className={heading}>UTC+6 zone</strong>, but the city is <strong className={heading}>leased to Russia until 2050</strong> and officially runs on <strong className={heading}>Moscow Time (UTC+3)</strong> \u2014 creating a timezone island 3 hours behind the surrounding Kazakh territory.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Oil Giant &amp; Astana\u2019s Futuristic Capital" card={card} heading={heading} subText={subText}>
        <p>
          Kazakhstan has the <strong className={heading}>12th largest oil reserves in the world</strong> (Kashagan and Tengiz fields in the Caspian). Oil revenue funded the construction of <strong className={heading}>Astana</strong> \u2014 one of the world&apos;s most ambitious planned capitals, transferred from Almaty in <strong className={heading}>1997</strong>.
        </p>
        <p>
          Astana has a <strong className={heading}>temperature range of -40\u00b0C to +40\u00b0C</strong> \u2014 making it the <strong className={heading}>second-coldest capital in the world</strong> (after Ulaanbaatar). Its skyline features the <strong className={heading}>Bayterek Tower, Khan Shatyr tent, and Expo 2017 sphere</strong>.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Kazakh Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Astana', detail: 'Pop. 1.4M \u00B7 Capital (UTC+6), futuristic planned city' },
          { name: 'Almaty', detail: 'Pop. 2.1M \u00B7 Former capital (UTC+6), cultural hub' },
          { name: 'Shymkent', detail: 'Pop. 1.2M \u00B7 3rd city (UTC+6), southern gateway' },
          { name: 'Aqtobe', detail: 'Pop. 520K \u00B7 Western hub (UTC+5), chromium mining' },
          { name: 'Atyrau', detail: 'Pop. 400K \u00B7 Oil capital (UTC+5), Caspian coast' },
          { name: 'Karaganda', detail: 'Pop. 500K \u00B7 Central (UTC+6), mining, Soviet-era' },
        ]}
      />
    </div>
  )
}
