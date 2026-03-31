'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = { 'Ulaanbaatar \u00B7 UTC+8': 'Asia/Ulaanbaatar', 'Hovd \u00B7 UTC+7': 'Asia/Hovd' }

export default function MongoliaClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Asia/Ulaanbaatar')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[
          { label: 'Ulaanbaatar \u00B7 UTC+8', time: times['Ulaanbaatar \u00B7 UTC+8'] ?? '' },
          { label: 'Hovd \u00B7 UTC+7', time: times['Hovd \u00B7 UTC+7'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        badges={[
          { label: '2 Time Zones' },
          { label: 'No DST since 2017' },
          { label: "World's Coldest Capital" },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Eastern Zone', value: 'ULAT \u2014 UTC+8 (Ulaanbaatar + most regions)' },
          { label: 'Western Zone', value: 'HOVT \u2014 UTC+7 (Hovd, Uvs, Bayan-\u00d6lgii)' },
          { label: 'DST Status', value: 'Abolished in 2017' },
          { label: 'IANA Identifiers', value: 'Asia/Ulaanbaatar, Asia/Hovd' },
          { label: 'Population', value: '~3.4 million (least dense country)' },
          { label: 'Area', value: '1.56M km\u00b2 \u2014 2 people per km\u00b2' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Mongolia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">vs Ulaanbaatar (UTC+8)</th>
                  <th className="pb-2">vs Hovd (UTC+7)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET winter)', ub: 'MN +13 hrs', hovd: 'MN +12 hrs' },
                  { zone: 'London (GMT winter)', ub: 'MN +8 hrs', hovd: 'MN +7 hrs' },
                  { zone: 'Moscow (MSK)', ub: 'MN +5 hrs', hovd: 'MN +4 hrs' },
                  { zone: 'China (CST)', ub: 'Same time!', hovd: 'MN \u22121 hr' },
                  { zone: 'Japan (JST)', ub: 'MN \u22121 hr', hovd: 'MN \u22122 hrs' },
                  { zone: 'India (IST)', ub: 'MN +2:30', hovd: 'MN +1:30' },
                ].map(({ zone, ub, hovd }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{ub}</td>
                    <td className={`py-2 tabular-nums ${subText}`}>{hovd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <NarrativeSection title="World\u2019s Coldest Capital \u2014 Ulaanbaatar at -40\u00b0C" card={card} heading={heading} subText={subText}>
        <p>
          <strong className={heading}>Ulaanbaatar</strong> is the <strong className={heading}>world&apos;s coldest capital city</strong> \u2014 average January temperature is <strong className={heading}>-24\u00b0C (-11\u00b0F)</strong>, with extremes reaching <strong className={heading}>-40\u00b0C</strong>. Despite this, nearly <strong className={heading}>half of Mongolia&apos;s population</strong> (1.6M of 3.4M) lives here.
        </p>
        <p>
          The temperature range is staggering: <strong className={heading}>-40\u00b0C in January to +35\u00b0C in July</strong> \u2014 a swing of <strong className={heading}>75 degrees</strong>. This is one of the most extreme continental climates on Earth.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Nomadic Time \u2014 Where GPS Coordinates Replace Street Addresses" card={card} heading={heading} subText={subText}>
        <p>
          Mongolia is the <strong className={heading}>world&apos;s most sparsely populated country</strong> \u2014 just <strong className={heading}>2 people per km\u00b2</strong>. About <strong className={heading}>25\u201330% of Mongolians are still semi-nomadic herders</strong>, living in <strong className={heading}>gers (yurts)</strong> and moving with their livestock across the vast steppe.
        </p>
        <p>
          Mongolia adopted <strong className={heading}>what3words</strong> and <strong className={heading}>plus codes</strong> for postal delivery, making it one of the first countries to use coordinate-based addressing at national scale.
        </p>
      </NarrativeSection>

      <NarrativeSection title="Mining Superpower &amp; Genghis Khan\u2019s Legacy" card={card} heading={heading} subText={subText}>
        <p>
          Mongolia sits on vast <strong className={heading}>mineral wealth</strong>: the <strong className={heading}>Oyu Tolgoi</strong> copper-gold mine is one of the world&apos;s largest. Mining accounts for <strong className={heading}>~25% of GDP and ~90% of exports</strong>.
        </p>
        <p>
          <strong className={heading}>Genghis Khan</strong> (Chinggis Khaan) built the <strong className={heading}>largest contiguous empire in history</strong>, spanning from Korea to Hungary. His <strong className={heading}>Yam relay postal system</strong> was one of history&apos;s first rapid communication networks, with relay stations every 25\u201330 km across the steppe.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Mongolian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Ulaanbaatar', detail: 'Pop. 1.6M \u00B7 Capital (UTC+8), coldest capital' },
          { name: 'Erdenet', detail: 'Pop. 100K \u00B7 Copper mining city (UTC+8)' },
          { name: 'Darkhan', detail: 'Pop. 85K \u00B7 Industrial, northern (UTC+8)' },
          { name: 'Choibalsan', detail: 'Pop. 45K \u00B7 Eastern hub (UTC+8)' },
          { name: 'Hovd', detail: 'Pop. 32K \u00B7 Western capital (UTC+7)' },
          { name: '\u00d6lgii', detail: 'Pop. 35K \u00B7 Eagle hunters, Kazakh culture (UTC+7)' },
        ]}
      />
    </div>
  )
}
