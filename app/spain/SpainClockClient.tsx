'use client'

import {
  useMultiClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

const TIMEZONES = {
  'Mainland Spain': 'Europe/Madrid',
  'Canary Islands': 'Atlantic/Canary',
}

export default function SpainClockClient() {
  const { times, date, mounted, isDST } = useMultiClockState(TIMEZONES, 'Europe/Madrid')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[
          { label: 'Mainland Spain', time: times['Mainland Spain'] || '--:--:--' },
          { label: 'Canary Islands', time: times['Canary Islands'] || '--:--:--' },
        ]}
        date={date}
        mounted={mounted}
        timeSize="text-4xl"
        badges={[
          { label: '2 Time Zones' },
          { label: 'Wrong Time Zone Since 1940' },
          { label: '47M People' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Mainland Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
          { label: 'Canary Islands', value: 'WET (UTC+0) / WEST (UTC+1)' },
          { label: 'Geographic Zone', value: 'Should be GMT/WET (same as UK/Portugal)' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct' },
          { label: 'IANA Identifier', value: 'Europe/Madrid' },
          { label: 'Population', value: '~47 million' },
        ]}
      />

      <ComparisonTable
        title="Spain Time vs World (Madrid)"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'Spain +6 hrs', summer: 'Spain +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'Spain +9 hrs', summer: 'Spain +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'Spain +1 hr', summer: 'Spain +1 hr' },
          { location: 'Portugal (WET)', winter: 'Spain +1 hr', summer: 'Spain +1 hr' },
          { location: 'India (IST)', winter: 'Spain \u22124:30', summer: 'Spain \u22123:30' },
          { location: 'Japan (JST)', winter: 'Spain \u22128 hrs', summer: 'Spain \u22127 hrs' },
          { location: 'Mexico City (CST)', winter: 'Spain \u22127 hrs', summer: 'Spain \u22128 hrs' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Spain Is in the &ldquo;Wrong&rdquo; Time Zone \u2014 Here&apos;s Why</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Spain lies at roughly the <strong className={heading}>same longitude as Britain and Portugal</strong> (between 10\u00b0W and 3\u00b0E). Geographically, it should use <strong className={heading}>GMT/WET (UTC+0)</strong> \u2014 the same as London and Lisbon.
            </p>
            <p>
              In <strong className={heading}>1940</strong>, Franco moved Spain&apos;s clocks forward to <strong className={heading}>CET (UTC+1)</strong> to align with Nazi Germany as a gesture of solidarity during WWII. After the war ended, Spain simply <strong className={heading}>never changed back</strong>.
            </p>
            <p>
              The consequence: solar noon in Madrid occurs around <strong className={heading}>1:30 PM</strong>, and in <strong className={heading}>Galicia (northwest Spain)</strong> as late as <strong className={heading}>2:00 PM</strong>. This is why Spain has Europe&apos;s latest dinner time (<strong className={heading}>9:00\u201310:00 PM</strong>), late nightlife, and the famous <strong className={heading}>siesta</strong> culture.
            </p>
            <p>
              In <strong className={heading}>2013</strong>, a parliamentary commission recommended returning to GMT, arguing the misalignment costs Spain <strong className={heading}>\u20ac8 billion annually</strong> in lost productivity and health issues. The proposal was never implemented.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Lisbon (WET)', value: '12:00 PM', note: 'Same longitude as Madrid' },
                { label: 'Madrid (CET)', value: '1:00 PM', note: '1 hour ahead of geographic zone' },
                { label: 'Vigo (CET)', value: '1:00 PM', note: 'Solar noon actually ~2:00 PM' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading} tabular-nums`}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
            <div className={`text-center mt-2 text-xs ${mutedText}`}>When the sun is at its highest (solar noon)</div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>The Spanish Schedule \u2014 Europe&apos;s Latest</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Lunch', time: '2:00 \u2013 3:30 PM', note: 'Main meal, often 2+ courses' },
              { label: 'Siesta / Break', time: '2:00 \u2013 5:00 PM', note: 'Many shops close' },
              { label: 'Dinner', time: '9:00 \u2013 10:30 PM', note: 'Latest in Europe' },
              { label: 'Prime Time TV', time: '10:30 PM \u2013 12:00 AM', note: 'News at 9 PM, shows after' },
            ].map(item => (
              <div key={item.label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading} tabular-nums`}>{item.time}</div>
                <div className={`text-xs ${subText} mt-1`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CitiesGrid
        title="Major Spanish Cities"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Madrid', detail: 'Pop. 6.8M metro \u00B7 Capital, CET (UTC+1)' },
          { name: 'Barcelona', detail: 'Pop. 5.6M metro \u00B7 Catalonia, CET (UTC+1)' },
          { name: 'Valencia', detail: 'Pop. 1.8M metro \u00B7 Mediterranean coast' },
          { name: 'Seville', detail: 'Pop. 1.5M metro \u00B7 Andalusia, flamenco' },
          { name: 'Las Palmas', detail: 'Pop. 380K \u00B7 Canary Islands, WET (UTC+0)' },
          { name: 'Bilbao', detail: 'Pop. 1M metro \u00B7 Basque Country, Guggenheim' },
        ]}
      />
    </div>
  )
}
