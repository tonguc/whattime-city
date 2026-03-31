'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function WestVirginiaClockClient() {
  const { time, date, mounted } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in West Virginia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'ET &middot; UTC-5 / UTC-4' },
          { label: 'Observes DST' },
          { label: 'Pop. ~1.8 Million' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>West Virginia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Eastern Time (ET)' },
              { label: 'UTC Offset', value: 'UTC-5 (standard) / UTC-4 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — clocks spring forward in March' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Single Time Zone', value: 'Entire state on Eastern Time' },
              { label: 'Population', value: '~1.8 million (2024 est.)' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Mountain State &mdash; Coal to Adventure Tourism</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              West Virginia is the only state <strong className={heading}>entirely within the Appalachian Mountains</strong>, earning its nickname &ldquo;The Mountain State.&rdquo; For over a century, <strong className={heading}>coal mining</strong> defined its economy and culture. Today the state is transitioning toward <strong className={heading}>tourism, tech, and renewable energy</strong>.
            </p>
            <p>
              In 2020, <strong className={heading}>New River Gorge</strong> became America&apos;s newest national park &mdash; the 63rd in the system. The park&apos;s iconic <strong className={heading}>876-foot steel arch bridge</strong> hosts the annual Bridge Day festival, the largest extreme sports event in the US. The <strong className={heading}>Greenbrier</strong> resort in White Sulphur Springs has hosted presidents since 1778 and once concealed a secret Cold War bunker for Congress.
            </p>
            <p>
              West Virginia&apos;s <strong className={heading}>pepperoni roll</strong> &mdash; a bread roll stuffed with pepperoni &mdash; is the unofficial state food, invented by Italian immigrant coal miners as a portable lunch. The state is also home to the <strong className={heading}>Green Bank Observatory</strong>, where cell phones and WiFi are banned in the surrounding National Radio Quiet Zone.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major West Virginia Cities &mdash; All on Eastern Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Charleston', pop: '47K', note: 'State capital, Kanawha Valley' },
              { city: 'Huntington', pop: '46K', note: 'Marshall University, Ohio River' },
              { city: 'Morgantown', pop: '31K', note: 'WVU, growing tech sector' },
              { city: 'Parkersburg', pop: '29K', note: 'Ohio River, Blennerhassett Island' },
              { city: 'Wheeling', pop: '26K', note: 'Historic gateway to the West' },
              { city: 'Beckley', pop: '16K', note: 'Near New River Gorge NP' },
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
