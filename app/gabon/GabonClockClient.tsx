'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GabonClockClient() {
  const { time, date, mounted } = useClockState('Africa/Libreville')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  const cities = [
    { name: 'Libreville', pop: '703K', note: 'Capital' },
    { name: 'Port-Gentil', pop: '136K', note: 'Oil hub' },
    { name: 'Franceville', pop: '110K', note: 'Southeast' },
    { name: 'Oyem', pop: '60K', note: 'Northern capital' },
    { name: 'Moanda', pop: '47K', note: 'Manganese mining' },
    { name: 'Lambaréné', pop: '26K', note: 'Schweitzer hospital' },
  ]

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Gabon', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT &middot; UTC+1' },
          { label: 'No DST' },
          { label: 'Pop. ~2.4M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~2.4 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Currency', 'Central African CFA franc'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rainforest */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Africa&apos;s Rainforest Kingdom</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Roughly 88% of Gabon is covered by dense tropical rainforest&mdash;the highest percentage of any
          African nation. The country has set aside 13 national parks protecting over 11% of its territory.
          Lop&eacute; National Park, a UNESCO World Heritage Site, shelters western lowland gorillas, forest
          elephants, and chimpanzees in one of Africa&apos;s most pristine wilderness areas.
        </p>
      </div>

      {/* Oil & Surf */}
      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Oil Wealth &amp; Point Denis</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Gabon is one of sub-Saharan Africa&apos;s wealthiest nations per capita, driven largely by offshore
          oil production centered around Port-Gentil. Beyond industry, the country offers unexpected
          attractions&mdash;Point Denis, a sandy peninsula near Libreville, is known for surfable Atlantic
          waves and nesting leatherback sea turtles. Lambar&eacute;n&eacute; is home to the historic Albert
          Schweitzer Hospital, a landmark of humanitarian medicine.
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
