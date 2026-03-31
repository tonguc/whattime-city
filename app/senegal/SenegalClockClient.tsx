'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SenegalClockClient() {
  const { time, date, mounted } = useClockState('Africa/Dakar')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Senegal', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~18M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'GMT (UTC+0)' },
            { label: 'Population', value: '~18 Million' },
            { label: 'Capital', value: 'Dakar' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* West Africa's Gateway */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>West Africa&apos;s Gateway</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Dakar, perched on Africa&apos;s westernmost point, serves as a major regional hub for commerce and culture.
          Gor&eacute;e Island (UNESCO World Heritage) stands as a powerful memorial to the transatlantic slave trade.
          Senegal&apos;s &ldquo;Teranga&rdquo; hospitality culture is legendary, and the Lions of Teranga football team has captured global fans.
          The country boasts a vibrant music scene &mdash; Youssou N&apos;Dour&apos;s mbalax genre and the original Dakar Rally put Senegal on the world stage.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Dakar', pop: '1.1M', note: 'Capital' },
            { city: 'Pikine', pop: '875K', note: 'Dakar suburb' },
            { city: 'Gu\u00e9diawaye', pop: '350K', note: 'Urban centre' },
            { city: 'Thi\u00e8s', pop: '317K', note: 'Rail junction' },
            { city: 'Saint-Louis', pop: '237K', note: 'Colonial heritage' },
            { city: 'Kaolack', pop: '186K', note: 'Peanut basin' },
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
