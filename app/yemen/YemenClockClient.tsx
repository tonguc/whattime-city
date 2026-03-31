'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function YemenClockClient() {
  const { time, date, mounted } = useClockState('Asia/Aden')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Yemen', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~34M' },
        ]}
      />


      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'AST (UTC+3)'],
            ['Population', '~34 million'],
            ['Capital', 'Sana\u2019a'],
            ['DST', 'Not observed'],
            ['Currency', 'Yemeni Rial (YER)'],
            ['Calling Code', '+967'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Ancient Heritage &amp; UNESCO Sites</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Old City of Sana&apos;a is a UNESCO World Heritage Site with distinctive multi-story tower houses
          dating back over 2,500 years. Socotra Island, another UNESCO site, is called the &ldquo;Galapagos of
          the Indian Ocean&rdquo; for its alien-like dragon blood trees and flora found nowhere else on Earth.
          Yemen is widely considered the birthplace of the Arabian coffee tradition.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Trade &amp; Culture</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Aden&apos;s natural harbor has been a vital trade port for millennia, linking East Africa, India, and
          the Mediterranean via the ancient spice and incense routes. Frankincense and myrrh from Yemen&apos;s
          interior fueled one of the ancient world&apos;s most profitable trades. The country&apos;s architectural
          heritage includes the mud-brick towers of Shibam, often called &ldquo;the Manhattan of the Desert.&rdquo;
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Sana\u2019a', '4M', 'Capital'],
            ['Aden', '1M', 'Port city'],
            ['Taiz', '615K', 'Cultural center'],
            ['Ibb', '480K', 'Green city'],
            ['Al Hudaydah', '430K', 'Red Sea port'],
            ['Mukalla', '300K', 'Coastal hub'],
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
