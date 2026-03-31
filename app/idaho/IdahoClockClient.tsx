'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function IdahoClockClient() {
  const { time, date, mounted } = useClockState('America/Boise')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Idaho', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MT UTC−7 / PT UTC−8' },
          { label: '2 Time Zones' },
          { label: 'Gem State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Idaho Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Southern/Eastern ID', value: 'Mountain Time (America/Boise)' },
              { label: 'Northern Panhandle', value: 'Pacific Time (America/Los_Angeles)' },
              { label: 'MT Offset', value: 'UTC−7 standard / UTC−6 DST' },
              { label: 'PT Offset', value: 'UTC−8 standard / UTC−7 DST' },
              { label: 'Daylight Saving', value: 'Yes — both zones observe DST' },
              { label: 'Population', value: '~2M — fastest growing US state' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Tech Boom, Potatoes &amp; Sun Valley</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Boise</strong> has emerged as one of the fastest-growing cities in the United States, attracting tech workers priced out of Seattle and San Francisco. Companies like <strong className={heading}>Micron Technology</strong> (semiconductors) and <strong className={heading}>HP</strong> have long-standing operations in the Treasure Valley. The area is sometimes called the <strong className={heading}>&ldquo;Silicon Slopes&rdquo; of the Northwest</strong>.
            </p>
            <p>
              Idaho produces about <strong className={heading}>30% of all US potatoes</strong>. The famous Idaho Russet Burbank potato thrives in the volcanic soil and high desert climate of the <strong className={heading}>Snake River Plain</strong>. Agriculture — potatoes, trout aquaculture, dairy, and wheat — remains a major economic driver.
            </p>
            <p>
              The <strong className={heading}>northern panhandle</strong> is geographically and economically aligned with <strong className={heading}>Spokane, Washington</strong> — which is why it uses Pacific Time despite being in Idaho. Coeur d&apos;Alene&apos;s lake and resort scene is a major tourism draw, and many Spokane metro residents live just across the Idaho border.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Idaho Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Boise', pop: '240K', note: 'MT · Capital, tech hub' },
              { city: 'Nampa', pop: '110K', note: 'MT · Treasure Valley suburb' },
              { city: 'Meridian', pop: '130K', note: 'MT · Fastest growing city' },
              { city: 'Idaho Falls', pop: '65K', note: 'MT · Snake River, nuclear lab' },
              { city: 'Coeur d\'Alene', pop: '55K', note: 'PT · Panhandle, lakeside resort' },
              { city: 'Pocatello', pop: '55K', note: 'MT · ISU, Gateway to Northwest' },
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
