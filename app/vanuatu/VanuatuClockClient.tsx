'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function VanuatuClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Efate')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Vanuatu', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'VUT &middot; UTC+11' },
          { label: 'No DST' },
          { label: 'Pop. ~320K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'VUT (UTC+11)'],
            ['Population', '~320,000'],
            ['DST', 'Not observed'],
            ['Languages', '138 indigenous'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Land Diving & Volcanoes */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Land Diving &amp; Active Volcanoes</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Vanuatu is the birthplace of bungee jumping&mdash;the Naghol (land diving) ritual on Pentecost Island inspired the modern sport. Mount Yasur on Tanna is one of the world&apos;s most accessible active volcanoes, erupting almost continuously for over 800&nbsp;years. With 138 indigenous languages, Vanuatu is the most linguistically diverse country per capita on Earth. WWII&apos;s &ldquo;Million Dollar Point&rdquo; and the world&apos;s only underwater post office add to its unique character.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Port Vila', '51K', 'Capital'],
            ['Luganville', '16K', 'Espiritu Santo'],
            ['Norsup', '3K', 'Malakula'],
            ['Isangel', '2K', 'Tanna'],
            ['Sola', '2K', 'Vanua Lava'],
            ['Lakatoro', '1K', 'Malakula'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
