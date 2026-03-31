'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BahamasClockClient() {
  const { time, date, mounted } = useClockState('America/Nassau')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in The Bahamas', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EST/EDT &middot; UTC-5 / UTC-4' },
          { label: 'Observes DST' },
          { label: 'Pop. ~400K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'EST/EDT (UTC\u22125/\u22124)'],
            ['Population', '~400,000'],
            ['Capital', 'Nassau'],
            ['DST', 'Yes (Mar\u2013Nov)'],
            ['Currency', 'Bahamian Dollar (BSD)'],
            ['Dialing Code', '+1-242'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Islands & History */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>700 Islands of Paradise</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          The Bahamas comprises <strong>700 islands and cays</strong>, of which only about 30 are
          inhabited. The famous <strong>swimming pigs of Exuma</strong> draw visitors from around the
          world. Nassau&apos;s <strong>pirate history</strong> dates back to the early 1700s when it served
          as a base for Blackbeard and other notorious pirates. <strong>Atlantis Paradise Island</strong> is
          one of the Caribbean&apos;s most iconic resorts. The Bahamas is also a major
          <strong> financial center</strong> and tax haven, with no income, capital gains, or wealth taxes.
        </p>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Natural Wonders</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Dean&apos;s Blue Hole on Long Island is the world&apos;s deepest known blue hole (202 m)</li>
          <li>The Exuma Cays Land and Sea Park was the Caribbean&apos;s first marine park</li>
          <li>Andros Island has the third-largest barrier reef in the world</li>
          <li>Pink sand beaches on Harbour Island get their colour from crushed coral and shells</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Islands &amp; Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Nassau', '275K', 'Capital / New Providence'],
            ['Freeport', '27K', 'Grand Bahama'],
            ['Marsh Harbour', '6K', 'Abaco Islands'],
            ['George Town', '1.5K', 'Exuma capital'],
            ['Governor\u2019s Harbour', '1.5K', 'Eleuthera'],
            ['Alice Town', '800', 'Bimini gateway'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
