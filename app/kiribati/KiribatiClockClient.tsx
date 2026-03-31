'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KiribatiClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Tarawa')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Kiribati', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GILT &middot; UTC+12' },
          { label: 'No DST' },
          { label: 'Pop. ~120K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'GILT (UTC+12)'],
            ['DST', 'Not observed'],
            ['Population', '~120,000'],
            ['Dial Code', '+686'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Kiribati is the only country that spans all four hemispheres &mdash; north, south, east, and west.</li>
          <li>The Line Islands (UTC+14) are the first place on Earth to welcome each new day and every New Year.</li>
          <li>Tarawa was the site of one of the bloodiest WWII battles in the Pacific Theater (November 1943).</li>
          <li>Kiribati is on the frontline of climate change; many atolls sit less than 2 meters above sea level.</li>
          <li>It holds one of the largest exclusive economic zones relative to land area of any nation.</li>
        </ul>
      </div>

      {/* Major Atolls & Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Atolls &amp; Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['South Tarawa', '63K', 'Capital'],
            ['Betio', '17K', ''],
            ['Kiritimati', '7K', 'Christmas Island'],
            ['Abaiang', '6K', ''],
            ['Tabiteuea', '5K', ''],
            ['Butaritari', '4K', ''],
          ].map(([place, pop, note]) => (
            <div key={place} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{place}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
