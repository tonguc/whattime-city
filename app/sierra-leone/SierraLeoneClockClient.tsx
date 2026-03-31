'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SierraLeoneClockClient() {
  const { time, date, mounted } = useClockState('Africa/Freetown')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Sierra Leone', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~8.6M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Time Zone', value: 'GMT (UTC+0)' },
            { label: 'Population', value: '~8.6 Million' },
            { label: 'Capital', value: 'Freetown' },
            { label: 'DST', value: 'Not Observed' },
          ].map((f) => (
            <div key={f.label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{f.label}</p>
              <p className={`text-sm font-semibold ${heading}`}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freedom & Natural Beauty */}
      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Freedom &amp; Natural Beauty</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Freetown was founded in 1792 by freed slaves from Britain and North America, giving the city &mdash; and the nation &mdash; its name.
          The stunning Lumley Beach stretches along Freetown&apos;s coast, while the Banana Islands offer secluded tropical escapes.
          Sierra Leone&apos;s diamond industry has shaped its modern history, and responsible mining initiatives now drive economic growth.
          The Tacugama Chimpanzee Sanctuary protects western chimpanzees in the rainforest hills above the capital.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { city: 'Freetown', pop: '1.2M', note: 'Capital' },
            { city: 'Bo', pop: '234K', note: 'Southern hub' },
            { city: 'Kenema', pop: '200K', note: 'Eastern province' },
            { city: 'Makeni', pop: '126K', note: 'Northern centre' },
            { city: 'Koidu', pop: '124K', note: 'Diamond district' },
            { city: 'Lunsar', pop: '30K', note: 'Mining town' },
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
