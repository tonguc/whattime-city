'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function ThailandClockClient() {
  const { time, date, mounted } = useClockState('Asia/Bangkok')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Thailand', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'ICT \u00B7 UTC+7' },
          { label: 'No DST \u2014 Year-round' },
          { label: 'Bangkok' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Time Zone', value: 'Indochina Time (ICT)' },
          { label: 'UTC Offset', value: 'UTC+7 (always)' },
          { label: 'Daylight Saving', value: 'Never observed' },
          { label: 'IANA Identifier', value: 'Asia/Bangkok' },
          { label: 'Same Offset As', value: 'Vietnam, Laos, Cambodia' },
          { label: 'Buddhist Calendar', value: 'BE 2569 (AD + 543)' },
        ]}
      />

      <ComparisonTable
        title="Thailand Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'ICT is +12 hrs', summer: 'ICT is +11 hrs' },
          { location: 'Los Angeles (PT)', winter: 'ICT is +15 hrs', summer: 'ICT is +14 hrs' },
          { location: 'London (GMT/BST)', winter: 'ICT is +7 hrs', summer: 'ICT is +6 hrs' },
          { location: 'Berlin (CET/CEST)', winter: 'ICT is +6 hrs', summer: 'ICT is +5 hrs' },
          { location: 'India (IST)', winter: 'ICT is +1:30', summer: 'ICT is +1:30' },
          { location: 'China (CST)', winter: 'ICT is \u22121 hr', summer: 'ICT is \u22121 hr' },
          { location: 'Japan (JST)', winter: 'ICT is \u22122 hrs', summer: 'ICT is \u22122 hrs' },
          { location: 'Sydney (AET)', winter: 'ICT is \u22124 hrs', summer: 'ICT is \u22123 hrs' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Thailand&apos;s Buddhist Era Calendar</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Thailand officially uses the <strong className={heading}>Buddhist Era (BE)</strong> calendar, which is <strong className={heading}>543 years ahead</strong> of the Gregorian calendar. So 2026 AD = <strong className={heading}>BE 2569</strong> in Thailand.
            </p>
            <p>
              This affects everyday life: <strong className={heading}>government documents, ID cards, bank forms, and official dates</strong> all use the Buddhist year. However, most international business and digital systems use the Gregorian calendar. Thai people are fluent in both systems.
            </p>
            <p>
              The Thai calendar originally started the new year on <strong className={heading}>April 1</strong> (Songkran). In 1941, Thailand shifted to January 1 to align with the international standard, but <strong className={heading}>Songkran (April 13&ndash;15)</strong> remains the most important holiday.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Buddhist Era', value: 'BE 2569' },
                { label: 'Formula', value: 'AD + 543 = BE' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`}>{z.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Best Time to Call Thailand From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM \u2013 11:00 PM ET', thailand: '8:00 AM \u2013 11:00 AM ICT (next day)', note: 'Thailand morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM \u2013 8:00 PM PT', thailand: '7:00 AM \u2013 10:00 AM ICT (next day)', note: 'Thailand morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '8:00 AM \u2013 10:00 AM ET', thailand: '8:00 PM \u2013 10:00 PM ICT', note: 'Thailand evening, US morning' },
              { label: 'Digital Nomad Tip', best: '9:00 PM \u2013 12:00 AM ET', thailand: '9:00 AM \u2013 12:00 PM ICT', note: 'Popular for US-Thailand remote work' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold tabular-nums ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.thailand}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Thai Cities \u2014 All on ICT (UTC+7)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Bangkok', detail: 'Pop. 10.7M metro \u00B7 Capital, business hub' },
          { name: 'Chiang Mai', detail: 'Pop. 1.2M metro \u00B7 Northern hub, digital nomad capital' },
          { name: 'Phuket', detail: 'Pop. 420K \u00B7 Island tourism, beaches' },
          { name: 'Pattaya', detail: 'Pop. 120K \u00B7 Eastern coast resort city' },
          { name: 'Nonthaburi', detail: 'Pop. 270K \u00B7 Bangkok suburb, 2nd largest' },
          { name: 'Khon Kaen', detail: 'Pop. 150K \u00B7 Northeastern Isan hub' },
        ]}
      />
    </div>
  )
}
