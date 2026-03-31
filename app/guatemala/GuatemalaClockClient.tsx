'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function GuatemalaClockClient() {
  const { time, date, mounted } = useClockState('America/Guatemala')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Guatemala', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST &middot; UTC-6' },
          { label: 'No DST' },
          { label: 'Pop. ~18M' },
        ]}
      />


      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Heart of the Maya World</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Guatemala was the cradle of Maya civilization, home to the monumental ruins of Tikal&mdash;a UNESCO World Heritage Site rising above the Pet&eacute;n jungle canopy. Antigua Guatemala, another UNESCO site, showcases beautifully preserved colonial architecture set against a backdrop of three volcanoes. The country is also one of the world&apos;s top coffee producers, with highland beans prized for their complexity.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-2 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Lake Atitl&aacute;n, ringed by volcanoes and indigenous Maya villages, has been called the &ldquo;most beautiful lake in the world.&rdquo; Deeper in the jungle, the turquoise limestone pools of Semuc Champey remain one of Central America&apos;s best-kept secrets, drawing adventurous travelers year-round.
        </p>
      </div>

      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Guatemala City', '1M \u00b7 Capital'],
            ['Mixco', '473K'],
            ['Villa Nueva', '406K'],
            ['Pet\u00e9n', '170K'],
            ['Quetzaltenango', '152K'],
            ['Escuintla', '103K'],
          ].map(([city, info]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
