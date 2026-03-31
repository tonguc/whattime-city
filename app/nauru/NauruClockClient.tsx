'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NauruClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Nauru')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Nauru', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'NRT &middot; UTC+12' },
          { label: 'No DST' },
          { label: 'Pop. ~12.5K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Time Zone', 'NRT (UTC+12)'],
            ['DST', 'Not observed'],
            ['Population', '~12,500'],
            ['Capital', 'No official capital'],
            ['Currency', 'Australian Dollar (AUD)'],
            ['Area', '21 km\u00B2'],
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
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>The Smallest Island Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Nauru is the world&apos;s smallest island nation and third-smallest country by area,
          covering just 21&nbsp;km&sup2;. In the 1970s and 1980s, phosphate mining made Nauru
          the richest country per capita on Earth, but reserves have since been largely depleted.
          The island has no official capital &mdash; government offices are concentrated in the
          Yaren district. With no natural harbour and limited tourism infrastructure, Nauru
          remains one of the least visited countries in the world.
        </p>
      </div>

      {/* Districts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Districts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Yaren', '1.1K'],
            ['Denigomodu', '1.8K'],
            ['Meneng', '1.8K'],
            ['Boe', '850'],
            ['Aiwo', '1.1K'],
            ['Buada', '739'],
          ].map(([district, pop]) => (
            <div key={district} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{district}</p>
              <p className={`text-xs ${mutedText}`}>Pop. {pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
