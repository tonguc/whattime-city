'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TajikistanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Dushanbe')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Tajikistan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'TJT &middot; UTC+5' },
          { label: 'No DST' },
          { label: 'Pop. ~10M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'TJT (UTC+5)'],
            ['Population', '~10 million'],
            ['DST', 'Not observed'],
            ['Terrain', '93% mountainous'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roof of the World */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Roof of the World</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tajikistan is 93% mountainous, home to the legendary Pamir Highway&mdash;one of the world&apos;s highest international roads. Ismoil Somoni Peak reaches 7,495&nbsp;m, the tallest summit in Central Asia. The Fan Mountains and Iskanderkul Lake draw trekkers, while ancient Silk Road heritage is woven into cities like Panjakent and Istaravshan.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Dushanbe', '863K', 'Capital'],
            ['Khujand', '182K', 'Northern hub'],
            ['Bokhtar', '107K', 'Southern city'],
            ['Kulob', '101K', 'Historic center'],
            ['Istaravshan', '60K', 'Silk Road town'],
            ['Panjakent', '41K', 'Ancient Sogdian site'],
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
