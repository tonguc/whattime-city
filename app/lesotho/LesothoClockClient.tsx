'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function LesothoClockClient() {
  const { time, date, mounted } = useClockState('Africa/Maseru')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Lesotho', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'SAST &middot; UTC+2' },
          { label: 'No DST' },
          { label: 'Pop. ~2.3M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'SAST (UTC+2)'],
            ['DST', 'Not observed'],
            ['Population', '~2.3 million'],
            ['Dial Code', '+266'],
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
          <li>Lesotho is the &ldquo;Kingdom in the Sky&rdquo; &mdash; the only country entirely above 1,000 meters elevation.</li>
          <li>Maletsunyane Falls drops 192 meters, making it one of the highest single-drop waterfalls in southern Africa.</li>
          <li>Afriski Mountain Resort offers skiing and snowboarding in Africa, open from June to August.</li>
          <li>The iconic Basotho blanket is a cultural symbol worn as everyday attire across the country.</li>
          <li>Diamond mining is a key industry; the Letšeng mine produces some of the world&apos;s most valuable stones.</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Maseru', '330K', 'Capital'],
            ['Teyateyaneng', '76K', ''],
            ['Mafeteng', '69K', ''],
            ['Hlotse', '48K', 'Leribe'],
            ['Mohale\u2019s Hoek', '33K', ''],
            ['Qacha\u2019s Nek', '25K', ''],
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
