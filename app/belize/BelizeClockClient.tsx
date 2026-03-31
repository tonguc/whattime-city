'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BelizeClockClient() {
  const { time, date, mounted } = useClockState('America/Belize')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Belize', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CST &middot; UTC-6' },
          { label: 'No DST' },
          { label: 'Pop. ~410K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'CST (UTC\u22126)'],
            ['Population', '~410,000'],
            ['Capital', 'Belmopan'],
            ['DST', 'Not observed'],
            ['Currency', 'Belize Dollar (BZD)'],
            ['Dialing Code', '+501'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Natural Wonders */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Caribbean Jewel of Central America</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Belize is the <strong>only English-speaking country</strong> in Central America. The
          <strong> Great Blue Hole</strong>&mdash;a UNESCO World Heritage Site&mdash;is a giant marine
          sinkhole visible from space. Belize&apos;s barrier reef is the <strong>second largest in the
          world</strong>, stretching 300 km along the coast. Ancient <strong>Mayan ruins</strong> like
          Xunantunich and Caracol dot the jungle interior, while the vibrant <strong>Garifuna
          culture</strong> thrives along the southern coast.
        </p>
      </div>

      {/* Highlights */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Highlights</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Great Blue Hole is 300 m across and 125 m deep&mdash;a world-class dive site</li>
          <li>Caracol, the largest Maya site in Belize, once rivaled Tikal in Guatemala</li>
          <li>Garifuna Settlement Day (November 19) celebrates Afro-Caribbean heritage</li>
          <li>Belize moved its capital from Belize City to inland Belmopan after Hurricane Hattie (1961)</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities &amp; Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Belize City', '61K', 'Largest city'],
            ['San Ignacio', '20K', 'Cayo District'],
            ['Belmopan', '17K', 'Capital'],
            ['San Pedro', '16K', 'Ambergris Caye'],
            ['Orange Walk', '14K', 'Sugar region'],
            ['Dangriga', '12K', 'Garifuna capital'],
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
