'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MaliClockClient() {
  const { time, date, mounted } = useClockState('Africa/Bamako')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Mali', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GMT &middot; UTC+0' },
          { label: 'No DST' },
          { label: 'Pop. ~22M' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~22 million &mdash; one of West Africa&apos;s largest nations</li>
          <li>&bull; Timezone: GMT (UTC+0) year-round, no daylight saving time</li>
          <li>&bull; The ancient Mali Empire under Mansa Musa was the richest in recorded history</li>
          <li>&bull; Timbuktu was a legendary center of Islamic scholarship and trade</li>
        </ul>
      </div>

      {/* Heritage & Landmarks */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Heritage &amp; Landmarks</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Great Mosque of Djenn&eacute;</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The world&apos;s largest mud-brick building and a UNESCO World Heritage Site, rebuilt annually by the community.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Dogon Country</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Dramatic Bandiagara escarpment with cliff dwellings and rich spiritual traditions dating back centuries.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Music Heritage</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Home to Ali Farka Tour&eacute;, Salif Keita, and griot traditions that influenced the blues genre worldwide.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Timbuktu Libraries</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Hundreds of thousands of ancient manuscripts preserved in private libraries, spanning science, law, and astronomy.</p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Bamako', pop: '2.5M' },
            { name: 'Sikasso', pop: '226K' },
            { name: 'Koutiala', pop: '141K' },
            { name: 'S\u00e9gou', pop: '130K' },
            { name: 'Mopti', pop: '114K' },
            { name: 'Timbuktu', pop: '55K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
