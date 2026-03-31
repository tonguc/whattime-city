'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PapuaNewGuineaClockClient() {
  const { time, date, mounted } = useClockState('Pacific/Port_Moresby')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-purple-700"
        clocks={[{ label: 'Current Time in Papua New Guinea', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'PGT &middot; UTC+10' },
          { label: 'No DST' },
          { label: 'Pop. ~10 Million' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Papua New Guinea Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Papua New Guinea Time (PGT)' },
              { label: 'UTC Offset', value: 'UTC+10 year-round' },
              { label: 'Daylight Saving', value: 'Not observed' },
              { label: 'IANA Identifier', value: 'Pacific/Port_Moresby' },
              { label: 'Single Time Zone', value: 'Entire country on PGT' },
              { label: 'Population', value: '~10 million (2024 est.)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Most Linguistically Diverse Nation</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Papua New Guinea is home to over <strong className={heading}>840 living languages</strong> &mdash; roughly 12% of all languages on Earth &mdash; making it the most linguistically diverse country in the world. Most of its <strong className={heading}>10 million people</strong> live in remote highland villages connected by few roads, preserving cultures largely unchanged for thousands of years.
            </p>
            <p>
              The legendary <strong className={heading}>Kokoda Track</strong> is a grueling 96-kilometer trail through dense jungle and mountain passes, retracing a pivotal WWII battleground. Highland <strong className={heading}>sing-sing festivals</strong> bring together dozens of tribes in spectacular displays of body paint, feathered headdresses, and traditional dance &mdash; the most famous being the Goroka and Mount Hagen shows.
            </p>
            <p>
              PNG is one of the <strong className={heading}>least explored countries</strong> on Earth, with vast tracts of uncharted rainforest sheltering <strong className={heading}>birds of paradise</strong> &mdash; 38 of the world&apos;s 42 species are found here. The nation&apos;s waters host some of the richest coral reef systems in the <strong className={heading}>Coral Triangle</strong>, rivaling the Great Barrier Reef in biodiversity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Papua New Guinea Cities &mdash; All on PGT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Port Moresby', pop: '365K', note: 'National capital, coastal hub' },
              { city: 'Lae', pop: '149K', note: 'Industrial center, Morobe Province' },
              { city: 'Mount Hagen', pop: '46K', note: 'Highlands hub, sing-sing festival' },
              { city: 'Arawa', pop: '40K', note: 'Bougainville, autonomous region' },
              { city: 'Madang', pop: '32K', note: 'Scenic coast, diving destination' },
              { city: 'Wewak', pop: '28K', note: 'East Sepik, WWII history' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
