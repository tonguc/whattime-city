'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function UgandaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Kampala')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Uganda', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EAT &middot; UTC+3' },
          { label: 'No DST' },
          { label: 'Pop. ~47M' },
        ]}
      />


      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'EAT (UTC+3)'],
            ['Population', '~47 million'],
            ['Capital', 'Kampala'],
            ['DST', 'Not observed'],
            ['Currency', 'Ugandan Shilling (UGX)'],
            ['Calling Code', '+256'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>The Pearl of Africa</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Winston Churchill famously called Uganda &ldquo;the Pearl of Africa&rdquo; for its stunning natural beauty.
          Bwindi Impenetrable National Park is home to roughly half the world&apos;s mountain gorillas, making Uganda
          the top destination for gorilla trekking. The source of the Nile at Jinja draws adventurers for white-water
          rafting, while Queen Elizabeth National Park offers tree-climbing lions.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-2 text-lg font-semibold ${heading}`}>Innovation &amp; Growth</h2>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Kampala has emerged as East Africa&apos;s fastest-growing tech hub, with startups in fintech, agritech, and
          healthtech attracting international investment. Uganda borders Lake Victoria&mdash;Africa&apos;s largest
          lake&mdash;and the Rwenzori Mountains (&ldquo;Mountains of the Moon&rdquo;) rise to 5,109 m with equatorial
          glaciers, offering some of Africa&apos;s most unique trekking experiences.
        </p>
      </div>

      <div className={card}>
        <h2 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Kampala', '1.7M', 'Capital'],
            ['Gulu', '155K', 'Northern hub'],
            ['Lira', '120K', 'Lango region'],
            ['Mbarara', '100K', 'Western Uganda'],
            ['Jinja', '77K', 'Source of the Nile'],
            ['Entebbe', '70K', 'Int\u2019l airport'],
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
