'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TongaClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Tongatapu')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Tonga', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'TOT &middot; UTC+13' },
          { label: 'No DST' },
          { label: 'Pop. ~107K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Time Zone', 'TOT (UTC+13)'],
            ['Population', '~107,000'],
            ['DST', 'Not observed'],
            ['Status', 'Polynesian kingdom'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-medium ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pacific Kingdom */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Pacific&apos;s Only Kingdom</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Tonga is the only Pacific island nation never colonized by a European power, maintaining its Polynesian monarchy for over a thousand years. The Ha&apos;amonga &apos;a Maui trilithon&mdash;often called the &ldquo;Stonehenge of the Pacific&rdquo;&mdash;dates to around 1200&nbsp;AD. In January 2022, the Hunga Tonga&ndash;Hunga Ha&apos;apai eruption was one of the most powerful volcanic events in recorded history. Today, Tonga is renowned for humpback whale watching and its warm Polynesian hospitality.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Settlements</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Nuku\u02bbalofa', '25K', 'Capital'],
            ['Neiafu', '6K', 'Vava\u02bbu hub'],
            ['Haveluloto', '4K', 'Tongatapu'],
            ['Vaini', '3K', 'Tongatapu'],
            ['Pangai', '2K', 'Ha\u02bbapai'],
            ['Ohonua', '1K', '\u02bbEua island'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-medium ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
