'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PalauClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Palau')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Palau', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'PWT &middot; UTC+9' },
          { label: 'No DST' },
          { label: 'Pop. ~18K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'PWT (UTC+9)'],
            ['DST', 'Not observed'],
            ['Population', '~18,000'],
            ['Capital', 'Ngerulmud'],
            ['Currency', 'US Dollar (USD)'],
            ['Language', 'Palauan, English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Country Highlights */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Pristine Pacific Paradise</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Palau&apos;s Rock Islands Southern Lagoon is a UNESCO World Heritage Site featuring
          over 400 limestone islands draped in jungle. The famous Jellyfish Lake allows snorkelers
          to swim among millions of golden jellyfish that have lost their sting. In 2009 Palau
          established the world&apos;s first national shark sanctuary. The &ldquo;Palau Pledge&rdquo;
          &mdash; stamped into every visitor&apos;s passport &mdash; is a signed promise to protect
          the islands&apos; environment, making it a global pioneer in eco-tourism.
        </p>
      </div>

      {/* Major Settlements */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Ngerulmud', '300 (capital)'],
            ['Koror', '11K'],
            ['Airai', '2.5K'],
            ['Melekeok', '280'],
            ['Ngarchelong', '280'],
            ['Aimeliik', '270'],
          ].map(([place, pop]) => (
            <div key={place} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{place}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
