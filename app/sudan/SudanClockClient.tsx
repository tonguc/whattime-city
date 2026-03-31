'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SudanClockClient() {
  const { time, date, mounted } = useClockState('Africa/Khartoum')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Sudan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~48M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'CAT (UTC+2)' },
            { label: 'Population', value: '~48 Million' },
            { label: 'Capital', value: 'Khartoum' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nile & Ancient Heritage */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Nile &amp; Ancient Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Khartoum sits at the dramatic confluence of the Blue Nile and White Nile, forming the main Nile that flows north to Egypt.
          Sudan is home to the Mero&euml; pyramids &mdash; over 200 ancient structures, more than Egypt &mdash; remnants of the powerful Kingdom of Kush.
          The Nubian civilisation thrived here for millennia, leaving behind temples, royal tombs, and some of the earliest written African scripts.
          Vast desert archaeology sites continue to reveal Sudan&apos;s central role in ancient African and Mediterranean trade networks.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Khartoum', pop: '6M', note: 'Capital' },
            { city: 'Omdurman', pop: '2.8M', note: 'Cultural heart' },
            { city: 'Nyala', pop: '565K', note: 'Darfur region' },
            { city: 'Port Sudan', pop: '490K', note: 'Red Sea coast' },
            { city: 'Kassala', pop: '430K', note: 'Eastern border' },
            { city: 'El-Obeid', pop: '420K', note: 'Kordofan region' },
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
