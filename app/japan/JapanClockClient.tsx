'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function JapanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Tokyo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Japan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'JST \u00B7 UTC+9' },
          { label: 'No DST \u2014 Since 1952' },
          { label: 'Tokyo' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'Japan Standard Time (JST)' },
          { label: 'UTC Offset', value: 'UTC+9 (always)' },
          { label: 'Daylight Saving', value: 'Abolished in 1952' },
          { label: 'IANA Identifier', value: 'Asia/Tokyo' },
          { label: 'Same Offset As', value: 'South Korea (KST), Palau' },
          { label: 'Major Cities', value: 'Tokyo, Osaka, Kyoto, Yokohama' },
        ]}
      />

      <ComparisonTable
        title="Japan Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'JST is +14 hrs', summer: 'JST is +13 hrs' },
          { location: 'Los Angeles (PT)', winter: 'JST is +17 hrs', summer: 'JST is +16 hrs' },
          { location: 'London (GMT/BST)', winter: 'JST is +9 hrs', summer: 'JST is +8 hrs' },
          { location: 'India (IST)', winter: 'JST is +3:30', summer: 'JST is +3:30' },
          { location: 'South Korea (KST)', winter: 'Same time', summer: 'Same time' },
          { location: 'China (CST)', winter: 'JST is +1 hr', summer: 'JST is +1 hr' },
          { location: 'Sydney (AET)', winter: 'JST is \u22122 hrs', summer: 'JST is \u22121 hr' },
        ]}
      />

      <NarrativeSection title="Why Doesn&apos;t Japan Observe Daylight Saving Time?" card={card} heading={heading} subText={subText}>
        <p>
          Japan briefly used DST during the <strong className={heading}>Allied Occupation (1948\u20131951)</strong>, but it was deeply unpopular. Japanese workers felt the extended daylight hours led to <strong className={heading}>longer working hours</strong> rather than more leisure time. The Diet (parliament) abolished DST in 1952 after sovereignty was restored.
        </p>
        <p>
          DST was briefly reconsidered before the <strong className={heading}>2020 Tokyo Olympics</strong> to combat summer heat by starting events earlier, but the proposal was abandoned. Japan remains on <strong className={heading}>JST (UTC+9)</strong> year-round, valuing consistency over daylight manipulation.
        </p>
      </NarrativeSection>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Best Time to Call Japan From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '7:00 PM \u2013 10:00 PM ET', japan: '9:00 AM \u2013 12:00 PM JST (next day)', note: 'Japan morning, US evening' },
              { label: 'US West Coast (PT)', best: '4:00 PM \u2013 7:00 PM PT', japan: '9:00 AM \u2013 12:00 PM JST (next day)', note: 'Japan morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM \u2013 9:00 AM ET', japan: '9:00 PM \u2013 11:00 PM JST', note: 'Japan evening, US morning' },
              { label: 'Business Overlap', best: '8:00 PM \u2013 11:00 PM ET', japan: '10:00 AM \u2013 1:00 PM JST', note: 'Peak overlap for US-Japan teams' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.japan}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Japanese Cities \u2014 All on JST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Tokyo', detail: 'Pop. 37M metro \u00B7 Capital, world\'s largest metro area' },
          { name: 'Osaka', detail: 'Pop. 19M metro \u00B7 Commercial hub, street food capital' },
          { name: 'Yokohama', detail: 'Pop. 3.7M \u00B7 Port city south of Tokyo' },
          { name: 'Nagoya', detail: 'Pop. 9.1M metro \u00B7 Toyota headquarters, industrial hub' },
          { name: 'Kyoto', detail: 'Pop. 1.5M \u00B7 Former capital, temples & shrines' },
          { name: 'Fukuoka', detail: 'Pop. 5.5M metro \u00B7 Gateway to Asia, tech hub' },
        ]}
      />
    </div>
  )
}
