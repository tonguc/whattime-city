'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function EswatiniClockClient() {
  const { time, date, mounted } = useClockState('Africa/Mbabane')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  const cities = [
    { name: 'Manzini', pop: '110K', note: 'Largest city' },
    { name: 'Mbabane', pop: '95K', note: 'Admin capital' },
    { name: 'Lobamba', pop: '—', note: 'Ceremonial capital' },
    { name: 'Siteki', pop: '25K', note: 'Eastern region' },
    { name: 'Nhlangano', pop: '10K', note: 'Southern hub' },
    { name: 'Big Bend', pop: '10K', note: 'Sugar industry' },
  ]

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Eswatini', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SAST &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~1.2M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~1.2 million'],
            ['Time Zone', 'SAST (UTC+2)'],
            ['DST', 'Not observed'],
            ['Currency', 'Swazi lilangeni (SZL)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monarchy */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Africa&apos;s Last Absolute Monarchy</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Eswatini&mdash;formerly known as Swaziland until its renaming in 2018&mdash;is the last absolute
          monarchy in Africa. The country has two capitals: Mbabane serves as the administrative capital,
          while Lobamba is the traditional and ceremonial seat of the monarchy. The annual Umhlanga
          (Reed Dance) festival draws tens of thousands of young women in a celebration of cultural
          heritage and national unity.
        </p>
      </div>

      {/* Wildlife */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Hlane Royal National Park</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Hlane Royal National Park is Eswatini&apos;s largest protected area and a key site for rhino
          conservation in southern Africa. The park shelters both white and black rhinos alongside
          elephants, lions, and diverse birdlife. Despite being one of Africa&apos;s smallest countries
          at just 17,364&nbsp;km&sup2;, Eswatini&apos;s varied terrain&mdash;from highveld mountains to
          lowveld savanna&mdash;supports remarkable ecological diversity.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid gap-2">
          {cities.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <p className={`text-sm font-medium ${heading}`}>{c.name}</p>
                <p className={`text-xs ${mutedText}`}>{c.note}</p>
              </div>
              <span className={`text-xs font-medium ${subText}`}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
