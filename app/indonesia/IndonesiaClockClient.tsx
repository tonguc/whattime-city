'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Jakarta \u00B7 WIB \u00B7 UTC+7': 'Asia/Jakarta',
  'Makassar \u00B7 WITA \u00B7 UTC+8': 'Asia/Makassar',
  'Jayapura \u00B7 WIT \u00B7 UTC+9': 'Asia/Jayapura',
}

export default function IndonesiaClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Asia/Jakarta')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[
          { label: 'Jakarta \u00B7 WIB \u00B7 UTC+7', time: times['Jakarta \u00B7 WIB \u00B7 UTC+7'] ?? '' },
          { label: 'Makassar \u00B7 WITA \u00B7 UTC+8', time: times['Makassar \u00B7 WITA \u00B7 UTC+8'] ?? '' },
          { label: 'Jayapura \u00B7 WIT \u00B7 UTC+9', time: times['Jayapura \u00B7 WIT \u00B7 UTC+9'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-2xl sm:text-3xl"
        badges={[
          { label: '3 Time Zones' },
          { label: 'No DST \u2014 Equatorial' },
          { label: '275M People' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Indonesia\u2019s 3 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">Indonesian Name</th>
                  <th className="pb-2 pr-4">UTC</th>
                  <th className="pb-2">Coverage</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'WIB', name: 'Waktu Indonesia Barat (Western)', utc: 'UTC+7', coverage: 'Sumatra, Java, West/Central Kalimantan' },
                  { zone: 'WITA', name: 'Waktu Indonesia Tengah (Central)', utc: 'UTC+8', coverage: 'Bali, Sulawesi, East/South Kalimantan, Nusa Tenggara' },
                  { zone: 'WIT', name: 'Waktu Indonesia Timur (Eastern)', utc: 'UTC+9', coverage: 'Papua, Maluku Islands' },
                ].map(({ zone, name, utc, coverage }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-bold ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{name}</td>
                    <td className={`py-2 pr-4 tabular-nums ${heading}`}>{utc}</td>
                    <td className={`py-2 ${mutedText}`}>{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Number of Time Zones', value: '3 (WIB, WITA, WIT)' },
          { label: 'Reference Zone', value: 'WIB (UTC+7) \u2014 Jakarta, capital' },
          { label: 'DST Status', value: 'Never observed (equatorial)' },
          { label: 'IANA Identifier', value: 'Asia/Jakarta (WIB)' },
          { label: 'East\u2013West Span', value: '5,120 km \u2014 wider than continental US' },
          { label: 'Population', value: '~275 million (4th largest)' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Indonesia Time vs World (Jakarta WIB)</h2>
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
                  { zone: 'New York (ET)', winter: 'WIB +12 hrs', summer: 'WIB +11 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'WIB +15 hrs', summer: 'WIB +14 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'WIB +7 hrs', summer: 'WIB +6 hrs' },
                  { zone: 'India (IST)', winter: 'WIB +1:30', summer: 'WIB +1:30' },
                  { zone: 'Singapore (SGT)', winter: 'WIB \u22121 hr', summer: 'WIB \u22121 hr' },
                  { zone: 'Japan (JST)', winter: 'WIB \u22122 hrs', summer: 'WIB \u22122 hrs' },
                  { zone: 'Sydney (AET)', winter: 'WIB \u22124 hrs', summer: 'WIB \u22123 hrs' },
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

      <NarrativeSection title="The Single Time Zone Proposal" card={card} heading={heading} subText={subText}>
        <p>
          In <strong className={heading}>2012 and again in 2022</strong>, Indonesian officials proposed unifying the country under a <strong className={heading}>single time zone (WITA, UTC+8)</strong>. The argument: simplify business, reduce scheduling confusion, and boost productivity.
        </p>
        <p>
          The proposal would move Jakarta&apos;s clocks <strong className={heading}>1 hour forward</strong> to UTC+8, aligning with Singapore and Malaysia. Critics argued it would mean <strong className={heading}>sunrise at 7:30 AM in Papua</strong> and <strong className={heading}>4:30 AM in Sumatra</strong> \u2014 disrupting prayer times, agriculture, and daily routines. The proposal remains under discussion.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Indonesian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Jakarta', detail: 'Pop. 34M metro \u00B7 Capital, WIB (UTC+7)' },
          { name: 'Surabaya', detail: 'Pop. 7.6M metro \u00B7 East Java, WIB (UTC+7)' },
          { name: 'Bali (Denpasar)', detail: 'Pop. 950K \u00B7 Tourism hub, WITA (UTC+8)' },
          { name: 'Bandung', detail: 'Pop. 8.5M metro \u00B7 Highland city, WIB (UTC+7)' },
          { name: 'Makassar', detail: 'Pop. 1.5M \u00B7 Sulawesi, WITA (UTC+8)' },
          { name: 'Medan', detail: 'Pop. 2.5M \u00B7 Sumatra, WIB (UTC+7)' },
        ]}
      />
    </div>
  )
}
