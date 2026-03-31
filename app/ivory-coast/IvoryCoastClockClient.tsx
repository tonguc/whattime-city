'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function IvoryCoastClockClient() {
  const { time, date, mounted } = useClockState('Africa/Abidjan')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Ivory Coast', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~28M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Population', '~28 million'],
            ['Dial Code', '+225'],
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
          <li>Ivory Coast is the world&apos;s number-one cocoa producer, supplying roughly 40% of global output.</li>
          <li>The Basilica of Our Lady of Peace in Yamoussoukro is the largest church in the world by area.</li>
          <li>Abidjan, the economic capital, is often called the &ldquo;Paris of West Africa&rdquo; for its French-influenced culture.</li>
          <li>Ta&iuml; National Park is a UNESCO World Heritage Site protecting one of West Africa&apos;s last primary rainforests.</li>
          <li>Football legend Didier Drogba is the country&apos;s all-time top scorer and a national icon.</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Abidjan', '5.6M', 'Economic capital'],
            ['Yamoussoukro', '355K', 'Political capital'],
            ['Bouak\u00e9', '680K', ''],
            ['Daloa', '319K', ''],
            ['Korhogo', '243K', ''],
            ['San-P\u00e9dro', '196K', ''],
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
