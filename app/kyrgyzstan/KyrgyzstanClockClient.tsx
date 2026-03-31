'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KyrgyzstanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Bishkek')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Kyrgyzstan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'KGT &middot; UTC+6' },
          { label: 'No DST' },
          { label: 'Pop. ~7M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'KGT (UTC+6)'],
            ['DST', 'Not observed'],
            ['Population', '~7 million'],
            ['Dial Code', '+996'],
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
          <li>Issyk-Kul is the world&apos;s second-largest alpine lake and never freezes despite surrounding mountains.</li>
          <li>Kyrgyzstan is often called the &ldquo;Switzerland of Central Asia&rdquo; for its dramatic mountain scenery.</li>
          <li>Nomadic yurt culture remains central to Kyrgyz identity; the yurt even appears on the national flag.</li>
          <li>The ancient Silk Road passed through the country, leaving centuries of trading heritage.</li>
          <li>Eagle hunting (berkutchi) is a living tradition, with hunters training golden eagles to catch prey.</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Bishkek', '1.1M', 'Capital'],
            ['Osh', '300K', ''],
            ['Jalal-Abad', '110K', ''],
            ['Karakol', '72K', ''],
            ['Tokmok', '64K', ''],
            ['Naryn', '40K', ''],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
