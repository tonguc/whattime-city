'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SamoaClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Apia')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Samoa', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WST &middot; UTC+13' },
          { label: 'No DST' },
          { label: 'Pop. ~220K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~220,000 &mdash; a small Polynesian island nation in the South Pacific</li>
          <li>&bull; Timezone: WST (UTC+13) &mdash; among the first places on Earth to see each new day</li>
          <li>&bull; In 2011 Samoa skipped December 30 entirely, jumping across the International Date Line</li>
          <li>&bull; Fa&apos;a Samoa (&ldquo;the Samoan way&rdquo;) governs daily life through communal village culture</li>
        </ul>
      </div>

      {/* Culture & Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Culture &amp; Nature</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>First Sunrise</p>
            <p className={`text-sm mt-1 ${mutedText}`}>After the 2011 dateline shift, Samoa became one of the first countries to welcome each new day and new year.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>To Sua Ocean Trench</p>
            <p className={`text-sm mt-1 ${mutedText}`}>A stunning 30-metre-deep swimming hole surrounded by lush gardens &mdash; one of the South Pacific&apos;s iconic landmarks.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Robert Louis Stevenson</p>
            <p className={`text-sm mt-1 ${mutedText}`}>The &ldquo;Treasure Island&rdquo; author spent his final years in Samoa. His hilltop home is now a museum in Apia.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Rugby &amp; Navigation</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Rugby is a national passion. Samoans also carry the legacy of Polynesian star navigation across the Pacific.</p>
          </div>
        </div>
      </div>

      {/* Major Settlements */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Settlements</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'Apia', pop: '37K' },
            { name: 'Vaitele', pop: '8K' },
            { name: 'Faleula', pop: '4K' },
            { name: 'Siusega', pop: '3K' },
            { name: 'Malie', pop: '3K' },
            { name: 'Faleasiu', pop: '3K' },
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
