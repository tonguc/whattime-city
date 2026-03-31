'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function ChinaClockClient() {
  const { time, date, mounted } = useClockState('Asia/Shanghai')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in China', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST \u00B7 UTC+8' },
          { label: 'No DST \u2014 Year-round' },
          { label: '1.4 Billion People' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'China Standard Time (CST)' },
          { label: 'UTC Offset', value: 'UTC+8 (always)' },
          { label: 'Daylight Saving', value: 'Not observed since 1991' },
          { label: 'IANA Identifier', value: 'Asia/Shanghai' },
          { label: 'East\u2013West Span', value: '5,200 km \u2014 one single zone' },
          { label: 'Same Offset As', value: 'Singapore, Hong Kong, Taiwan, Perth' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>China Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>CST (UTC+8) never changes. Time differences shift only when other countries observe DST.</p>
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
                  { zone: 'New York (ET)', winter: 'CST is +13 hrs', summer: 'CST is +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'CST is +16 hrs', summer: 'CST is +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'CST is +8 hrs', summer: 'CST is +7 hrs' },
                  { zone: 'India (IST)', winter: 'CST is +2:30', summer: 'CST is +2:30' },
                  { zone: 'Japan (JST)', winter: 'CST is \u22121 hr', summer: 'CST is \u22121 hr' },
                  { zone: 'Sydney (AET)', winter: 'CST is \u22123 hrs', summer: 'CST is \u22122 hrs' },
                  { zone: 'Dubai (GST)', winter: 'CST is +4 hrs', summer: 'CST is +4 hrs' },
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

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Why Does China Have Only One Time Zone?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              China spans <strong className={heading}>5 geographical time zones</strong> (UTC+5 to UTC+9) but uses a single standard: <strong className={heading}>Beijing Time (UTC+8)</strong>. This was established in 1949 when the Communist Party unified the country under one clock to symbolize national unity.
            </p>
            <p>
              The practical impact is enormous. In <strong className={heading}>Fuyuan</strong> (easternmost city), the sun rises around <strong className={heading}>3:30 AM</strong> in summer. In <strong className={heading}>Kashgar</strong> (far west, near Pakistan), sunrise doesn&apos;t happen until <strong className={heading}>10:00 AM</strong> Beijing Time &mdash; a 6.5-hour difference in solar noon.
            </p>
            <p>
              In response, <strong className={heading}>Xinjiang (\u65b0\u7586)</strong> and parts of western China informally use <strong className={heading}>&ldquo;&Uuml;r&uuml;mqi Time&rdquo; (UTC+6)</strong>, 2 hours behind Beijing. Government offices use Beijing Time, but local Uyghur businesses often operate on Xinjiang Time, creating a dual-time system.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { city: 'Fuyuan (East)', sunrise: '~3:30 AM', note: 'Earliest sunrise' },
                { city: 'Beijing (Center)', sunrise: '~5:15 AM', note: 'Standard reference' },
                { city: 'Kashgar (West)', sunrise: '~10:00 AM', note: 'Latest sunrise' },
              ].map(z => (
                <div key={z.city}>
                  <div className={mutedText}>{z.city}</div>
                  <div className={`font-bold tabular-nums ${heading}`}>{z.sunrise}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
            <div className={`text-center mt-2 text-xs ${mutedText}`}>Summer sunrise times (Beijing Time / UTC+8)</div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Best Time to Call China From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM \u2013 11:00 PM ET', china: '9:00 AM \u2013 12:00 PM CST (next day)', note: 'China morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM \u2013 8:00 PM PT', china: '9:00 AM \u2013 12:00 PM CST (next day)', note: 'China morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM \u2013 9:00 AM ET', china: '8:00 PM \u2013 10:00 PM CST', note: 'China evening, US morning' },
              { label: 'Business Overlap', best: '8:00 PM \u2013 12:00 AM ET', china: '9:00 AM \u2013 1:00 PM CST', note: 'Peak for US-China business' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold tabular-nums ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.china}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Chinese Cities \u2014 All on CST (UTC+8)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Shanghai', detail: 'Pop. 28M metro \u00B7 Financial center, largest city' },
          { name: 'Beijing', detail: 'Pop. 21M \u00B7 Capital, political center' },
          { name: 'Shenzhen', detail: 'Pop. 17M \u00B7 Tech hub, near Hong Kong' },
          { name: 'Guangzhou', detail: 'Pop. 16M \u00B7 Southern trade hub, Canton' },
          { name: 'Chengdu', detail: 'Pop. 21M metro \u00B7 Western hub, pandas, tech' },
          { name: 'Hong Kong', detail: 'Pop. 7.5M \u00B7 SAR, HKT = UTC+8 (same)' },
        ]}
      />
    </div>
  )
}
