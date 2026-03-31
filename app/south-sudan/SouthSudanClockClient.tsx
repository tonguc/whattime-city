'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SouthSudanClockClient() {
  const { time, date, mounted } = useClockState('Africa/Juba')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in South Sudan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~11.4M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'CAT (UTC+2)' },
            { label: 'Population', value: '~11.4 Million' },
            { label: 'Capital', value: 'Juba' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World's Newest Nation */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>World&apos;s Newest Nation</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          South Sudan gained independence on 9&nbsp;July&nbsp;2011, making it the world&apos;s youngest internationally recognised country.
          The Sudd &mdash; one of the largest wetlands on Earth &mdash; sprawls across the centre of the country, fed by the White Nile.
          Boma National Park hosts one of Africa&apos;s great wildlife migrations, with vast herds of white-eared kob and tiang antelope.
          The nation holds significant oil reserves, which account for the majority of government revenue and export earnings.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Juba', pop: '525K', note: 'Capital' },
            { city: 'Malakal', pop: '160K', note: 'Upper Nile' },
            { city: 'Wau', pop: '151K', note: 'Western hub' },
            { city: 'Yei', pop: '118K', note: 'Green belt' },
            { city: 'Bor', pop: '45K', note: 'Jonglei state' },
            { city: 'Rumbek', pop: '25K', note: 'Lakes region' },
          ].map((c) => (
            <div key={c.city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{c.city}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop} &middot; {c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
