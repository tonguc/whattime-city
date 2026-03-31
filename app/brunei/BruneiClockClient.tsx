'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BruneiClockClient() {
  const { time, date, mounted } = useClockState('Asia/Brunei')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Brunei', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'BNT &middot; UTC+8' },
          { label: 'No DST' },
          { label: 'Pop. ~450K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'BNT (UTC+8)'],
            ['Population', '~450,000'],
            ['Capital', 'Bandar Seri Begawan'],
            ['DST', 'Not observed'],
            ['Currency', 'Brunei Dollar (BND)'],
            ['Dialing Code', '+673'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wealth & Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Wealth &amp; Heritage</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Brunei is one of the <strong>wealthiest nations per capita</strong> in the world, fueled by its
          oil and gas reserves. Citizens pay <strong>no income tax</strong>, and the Sultan of Brunei is
          among the richest monarchs globally. The iconic <strong>Omar Ali Saifuddien Mosque</strong> is
          often called the most beautiful mosque in Southeast Asia. <strong>Kampong Ayer</strong>&mdash;
          a historic water village of 30,000 residents&mdash;sits on stilts above the Brunei River.
        </p>
      </div>

      {/* Nature & Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Nature &amp; Culture</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Temburong District is home to pristine primary rainforest</li>
          <li>Ulu Temburong National Park features a 60-metre canopy walkway</li>
          <li>Oil and gas account for over 90% of government revenue</li>
          <li>Brunei&apos;s rainforest covers roughly 70% of the country&apos;s total land</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities &amp; Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Bandar Seri Begawan', '100K', 'Capital'],
            ['Seria', '36K', 'Oil town'],
            ['Kuala Belait', '31K', 'Western hub'],
            ['Tutong', '19K', 'District center'],
            ['Temburong', '10K', 'Rainforest gateway'],
            ['Jerudong', '7K', 'Leisure district'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
