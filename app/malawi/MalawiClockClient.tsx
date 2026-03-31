'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MalawiClockClient() {
  const { time, date, mounted } = useClockState('Africa/Blantyre')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Malawi', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CAT &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~20M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~20 million'],
            ['Capital', 'Lilongwe'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['Nickname', 'Warm Heart of Africa'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lake Malawi */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Lake Malawi &mdash; A Freshwater Sea</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Lake Malawi is the 9th largest lake in the world and the 3rd largest in Africa, stretching 580 km north to south.</li>
          <li>It is a UNESCO World Heritage Site, home to over 1,000 species of cichlid fish&mdash;more than any other lake on Earth.</li>
          <li>The lake covers roughly one-third of Malawi&apos;s total area and is vital for fishing, transport, and tourism.</li>
          <li>Cape Maclear on the southern shore is one of East Africa&apos;s most popular freshwater diving destinations.</li>
        </ul>
      </div>

      {/* Nature & Agriculture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Nature &amp; Agriculture</h3>
        <p className={`text-sm ${subText}`}>
          Mount Mulanje, at 3,002 m, is the highest peak in Central Africa and a premier hiking destination with endemic cedar forests.
          Malawi&apos;s economy relies heavily on agriculture&mdash;tea plantations around Thyolo and Mulanje produce world-class tea,
          while tobacco remains the country&apos;s largest export crop.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Lilongwe', '989K', 'Capital'],
            ['Blantyre', '800K', 'Commercial'],
            ['Mzuzu', '220K', 'Northern'],
            ['Zomba', '105K', 'Former capital'],
            ['Kasungu', '65K', 'Central'],
            ['Mangochi', '54K', 'Lakeside'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
