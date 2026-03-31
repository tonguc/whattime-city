'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TZ = {
  'Kaliningrad \u00B7 KALT \u00B7 UTC+2': 'Europe/Kaliningrad',
  'Moscow \u00B7 MSK \u00B7 UTC+3': 'Europe/Moscow',
  'Yekaterinburg \u00B7 YEKT \u00B7 UTC+5': 'Asia/Yekaterinburg',
  'Vladivostok \u00B7 VLAT \u00B7 UTC+10': 'Asia/Vladivostok',
}

export default function RussiaClockClient() {
  const { times, date, mounted } = useMultiClockState(TZ, 'Europe/Moscow')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[
          { label: 'Kaliningrad \u00B7 KALT \u00B7 UTC+2', time: times['Kaliningrad \u00B7 KALT \u00B7 UTC+2'] ?? '' },
          { label: 'Moscow \u00B7 MSK \u00B7 UTC+3', time: times['Moscow \u00B7 MSK \u00B7 UTC+3'] ?? '' },
          { label: 'Yekaterinburg \u00B7 YEKT \u00B7 UTC+5', time: times['Yekaterinburg \u00B7 YEKT \u00B7 UTC+5'] ?? '' },
          { label: 'Vladivostok \u00B7 VLAT \u00B7 UTC+10', time: times['Vladivostok \u00B7 VLAT \u00B7 UTC+10'] ?? '' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-xl sm:text-2xl"
        badges={[
          { label: '11 Time Zones' },
          { label: 'No DST since 2014' },
          { label: 'UTC+2 to UTC+12' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Russia\u2019s 11 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2 pr-4">Abbreviation</th>
                  <th className="pb-2">Major City</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Kaliningrad', offset: 'UTC+2', abbr: 'KALT', city: 'Kaliningrad' },
                  { zone: 'Moscow', offset: 'UTC+3', abbr: 'MSK', city: 'Moscow, St. Petersburg' },
                  { zone: 'Samara', offset: 'UTC+4', abbr: 'SAMT', city: 'Samara, Saratov' },
                  { zone: 'Yekaterinburg', offset: 'UTC+5', abbr: 'YEKT', city: 'Yekaterinburg, Chelyabinsk' },
                  { zone: 'Omsk', offset: 'UTC+6', abbr: 'OMST', city: 'Omsk' },
                  { zone: 'Krasnoyarsk', offset: 'UTC+7', abbr: 'KRAT', city: 'Krasnoyarsk, Novosibirsk' },
                  { zone: 'Irkutsk', offset: 'UTC+8', abbr: 'IRKT', city: 'Irkutsk' },
                  { zone: 'Yakutsk', offset: 'UTC+9', abbr: 'YAKT', city: 'Yakutsk, Chita' },
                  { zone: 'Vladivostok', offset: 'UTC+10', abbr: 'VLAT', city: 'Vladivostok, Khabarovsk' },
                  { zone: 'Magadan', offset: 'UTC+11', abbr: 'MAGT', city: 'Magadan, Sakhalin' },
                  { zone: 'Kamchatka', offset: 'UTC+12', abbr: 'PETT', city: 'Petropavlovsk-Kamchatsky' },
                ].map(({ zone, offset, abbr, city }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 tabular-nums ${subText}`}>{offset}</td>
                    <td className={`py-2 pr-4 ${mutedText}`}>{abbr}</td>
                    <td className={`py-2 ${subText}`}>{city}</td>
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
          { label: 'Number of Time Zones', value: '11 (most in the world)' },
          { label: 'Widest Span', value: 'UTC+2 (Kaliningrad) to UTC+12 (Kamchatka)' },
          { label: 'Reference Zone', value: 'Moscow Time (MSK, UTC+3)' },
          { label: 'DST Status', value: 'Permanently abolished in 2014' },
          { label: 'East\u2013West Distance', value: '~10,000 km (6,200 miles)' },
          { label: 'Train Schedules', value: 'Historically used Moscow Time' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Moscow Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Moscow +8 hrs', summer: 'Moscow +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Moscow +11 hrs', summer: 'Moscow +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Moscow +3 hrs', summer: 'Moscow +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Moscow +2 hrs', summer: 'Moscow +1 hr' },
                  { zone: 'India (IST)', winter: 'Moscow \u22122:30', summer: 'Moscow \u22122:30' },
                  { zone: 'China (CST)', winter: 'Moscow \u22125 hrs', summer: 'Moscow \u22125 hrs' },
                  { zone: 'Tokyo (JST)', winter: 'Moscow \u22126 hrs', summer: 'Moscow \u22126 hrs' },
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

      <NarrativeSection title="Russia\u2019s DST Saga: Medvedev vs Putin" card={card} heading={heading} subText={subText}>
        <p>
          In <strong className={heading}>2011</strong>, President Medvedev abolished seasonal clock changes and put Russia on <strong className={heading}>permanent summer time</strong>. The result was disastrous \u2014 Russians in northern cities experienced <strong className={heading}>sunrise at 10:00 AM</strong> in winter, and public backlash was fierce.
        </p>
        <p>
          In <strong className={heading}>2014</strong>, President Putin reversed the decision, moving Russia to <strong className={heading}>permanent standard (winter) time</strong>. Clocks went back one hour and have stayed there since. Russia now has no DST \u2014 but on the \u201ccorrect\u201d side of the clock.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major Russian Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Moscow', detail: 'Pop. 12.6M \u00B7 Capital, MSK (UTC+3)' },
          { name: 'St. Petersburg', detail: 'Pop. 5.4M \u00B7 Cultural capital, MSK (UTC+3)' },
          { name: 'Novosibirsk', detail: 'Pop. 1.6M \u00B7 Siberian hub, KRAT (UTC+7)' },
          { name: 'Yekaterinburg', detail: 'Pop. 1.5M \u00B7 Urals capital, YEKT (UTC+5)' },
          { name: 'Vladivostok', detail: 'Pop. 600K \u00B7 Pacific port, VLAT (UTC+10)' },
          { name: 'Kaliningrad', detail: 'Pop. 490K \u00B7 Baltic exclave, KALT (UTC+2)' },
        ]}
      />
    </div>
  )
}
