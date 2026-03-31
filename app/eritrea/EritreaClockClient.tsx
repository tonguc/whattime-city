'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function EritreaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Asmara')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Eritrea', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~3.6M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~3.6 million'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Currency', 'Eritrean nakfa (ERN)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Asmara Architecture */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Asmara&apos;s Art Deco Heritage</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Asmara, often called the &ldquo;New Rome,&rdquo; earned UNESCO World Heritage status in 2017 for its
          extraordinary collection of Modernist architecture. Italian colonial-era buildings from the 1930s
          include Art Deco cinemas, Futurist government offices, and Rationalist apartment blocks. The
          Fiat Tagliero service station, shaped like an aircraft, is one of the world&apos;s most iconic
          examples of Futurist architecture.
        </p>
      </div>

      {/* Red Sea & Cycling */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Red Sea Coast &amp; Cycling Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Eritrea&apos;s 1,151&nbsp;km Red Sea coastline includes the Dahlak Archipelago&mdash;over 200
          islands with pristine coral reefs and marine life. The port city of Massawa blends Ottoman,
          Egyptian, and Italian influences. Cycling is deeply embedded in Eritrean culture, a legacy
          of the Italian colonial period. The country has produced world-class cyclists and hosts
          the annual Tour of Eritrea, one of Africa&apos;s oldest stage races.
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
