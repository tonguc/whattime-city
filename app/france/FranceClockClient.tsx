'use client'

import {
  useClockState, useClockTheme, ClockHero, FactsGrid,
  ComparisonTable, NarrativeSection, CitiesGrid,
} from '@/components/ClockPage'

export default function FranceClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Paris')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in France', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST \u00B7 UTC+2' : 'CET \u00B7 UTC+1' },
          { label: isDST ? 'Summer Time Active' : 'Winter Time (Standard)' },
          { label: '12 Time Zones Total' },
        ]}
      />

      <FactsGrid
        card={card} heading={heading} subText={subText} mutedText={mutedText}
        facts={[
          { label: 'Metropolitan France', value: 'CET (UTC+1) / CEST (UTC+2)' },
          { label: 'Total Time Zones', value: '12 \u2014 most in the world!' },
          { label: 'DST Rule', value: 'Last Sunday Mar \u2192 Last Sunday Oct' },
          { label: 'IANA Identifier', value: 'Europe/Paris' },
          { label: 'Population', value: '~68 million (metro France)' },
          { label: 'Same Zone As', value: 'Germany, Italy, Spain, Netherlands' },
        ]}
      />

      <ComparisonTable
        title="France Time vs World"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText} isLight={isLight}
        rows={[
          { location: 'New York (ET)', winter: 'France +6 hrs', summer: 'France +6 hrs' },
          { location: 'Los Angeles (PT)', winter: 'France +9 hrs', summer: 'France +9 hrs' },
          { location: 'London (GMT/BST)', winter: 'France +1 hr', summer: 'France +1 hr' },
          { location: 'India (IST)', winter: 'France \u22124:30', summer: 'France \u22123:30' },
          { location: 'China (CST)', winter: 'France \u22127 hrs', summer: 'France \u22126 hrs' },
          { location: 'Japan (JST)', winter: 'France \u22128 hrs', summer: 'France \u22127 hrs' },
          { location: 'Sydney (AET)', winter: 'France \u221210 hrs', summer: 'France \u22128 hrs' },
        ]}
      />

      <section>
        <div className={card}>
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>Why Does France Have 12 Time Zones?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              France holds the world record for <strong className={heading}>most time zones of any country: 12</strong> (or 13 including Ad\u00e9lie Land in Antarctica). This is entirely due to France&apos;s <strong className={heading}>overseas territories</strong> scattered across every ocean.
            </p>
            <p>
              Metropolitan France uses just one zone (CET/CEST), but territories like <strong className={heading}>French Polynesia (UTC\u221210)</strong>, <strong className={heading}>New Caledonia (UTC+11)</strong>, <strong className={heading}>R\u00e9union (UTC+4)</strong>, <strong className={heading}>Guadeloupe/Martinique (UTC\u22124)</strong>, and <strong className={heading}>French Guiana (UTC\u22123)</strong> span the entire globe.
            </p>
            <p>
              This means when it&apos;s noon in Paris, it&apos;s <strong className={heading}>1:00 AM in Tahiti</strong> and <strong className={heading}>11:00 PM in Noum\u00e9a</strong>. The sun literally never sets on French territory.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { territory: 'French Polynesia', offset: 'UTC\u221210' },
                { territory: 'Martinique', offset: 'UTC\u22124' },
                { territory: 'French Guiana', offset: 'UTC\u22123' },
                { territory: 'Metro France', offset: 'UTC+1/+2' },
                { territory: 'R\u00e9union', offset: 'UTC+4' },
                { territory: 'New Caledonia', offset: 'UTC+11' },
              ].map(z => (
                <div key={z.territory}>
                  <div className={mutedText}>{z.territory}</div>
                  <div className={`font-bold ${heading} tabular-nums`}>{z.offset}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NarrativeSection title="Why Is France on CET Instead of GMT?" card={card} heading={heading} subText={subText}>
        <p>
          Geographically, France lies at roughly the <strong className={heading}>same longitude as Britain</strong> (0\u00b0 to 5\u00b0E). It should logically use <strong className={heading}>GMT/WET (UTC+0)</strong>, as it did before World War II.
        </p>
        <p>
          During the <strong className={heading}>German occupation in 1940</strong>, France was forced to adopt Central European Time (UTC+1) to align with Berlin. After liberation, France simply <strong className={heading}>never switched back</strong>. Spain, which is even further west, made the same decision for political solidarity.
        </p>
        <p>
          The result: solar noon in <strong className={heading}>Brest (western France)</strong> occurs around <strong className={heading}>1:30 PM</strong> clock time. This contributes to France&apos;s famously late dinner culture \u2014 an 8:00 PM dinner is closer to 6:30 PM in solar time.
        </p>
      </NarrativeSection>

      <CitiesGrid
        title="Major French Cities \u2014 All on CET/CEST"
        card={card} innerCard={innerCard} heading={heading} subText={subText} mutedText={mutedText}
        cities={[
          { name: 'Paris', detail: 'Pop. 12.2M metro \u00B7 Capital, City of Light' },
          { name: 'Marseille', detail: 'Pop. 1.9M metro \u00B7 Mediterranean port, 2nd largest' },
          { name: 'Lyon', detail: 'Pop. 2.3M metro \u00B7 Gastronomy capital, tech hub' },
          { name: 'Toulouse', detail: 'Pop. 1.4M metro \u00B7 Aerospace capital (Airbus)' },
          { name: 'Nice', detail: 'Pop. 1M metro \u00B7 Riviera, tourism hub' },
          { name: 'Strasbourg', detail: 'Pop. 800K metro \u00B7 EU Parliament seat, Alsace' },
        ]}
      />
    </div>
  )
}
