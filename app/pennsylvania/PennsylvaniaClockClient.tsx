'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PennsylvaniaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Pennsylvania', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4' : 'EST · UTC-5', highlight: true },
          { label: 'Eastern Time' },
          { label: 'The Keystone State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Pennsylvania Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'ET — Eastern Time (UTC-5/UTC-4)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/New_York' },
              { label: 'Population', value: '~13 million — 5th largest US state' },
              { label: 'Historic Role', value: 'Declaration of Independence signed here' },
              { label: 'Famous For', value: 'Philly cheesesteaks, Amish, steel, Liberty Bell' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Where American Time Began — Pennsylvania&apos;s Clock Legacy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Pennsylvania played a pivotal role in <strong className={heading}>American time standardization</strong>. The <strong className={heading}>Pennsylvania Railroad</strong> — once the largest corporation in the world — was instrumental in pushing for <strong className={heading}>standard time zones in 1883</strong>. Before that, every city set its own local solar time, causing <strong className={heading}>over 300 different local times</strong> across the US.
            </p>
            <p>
              <strong className={heading}>Punxsutawney Phil</strong> — the world&apos;s most famous groundhog — makes his prediction at <strong className={heading}>7:25 AM ET on February 2nd</strong> every year. This event, held since <strong className={heading}>1887</strong>, is broadcast globally and is one of the few <strong className={heading}>time-specific annual traditions</strong> known worldwide.
            </p>
            <p>
              Philadelphia and Pittsburgh anchor opposite ends of the state — both on <strong className={heading}>ET</strong>. Philadelphia is part of the <strong className={heading}>I-95 Northeast Corridor</strong> (alongside NYC and DC), while Pittsburgh is a <strong className={heading}>reinvented tech and healthcare hub</strong> with Carnegie Mellon and UPMC driving a robotics renaissance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Pennsylvania Cities — All on ET</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Philadelphia', pop: '1.6M', note: 'Largest city, Liberty Bell, cheesesteaks' },
              { city: 'Pittsburgh', pop: '300K', note: 'Steel City → tech/healthcare hub' },
              { city: 'Allentown', pop: '125K', note: 'Lehigh Valley, logistics center' },
              { city: 'Erie', pop: '95K', note: 'Great Lakes port, Presque Isle' },
              { city: 'Harrisburg', pop: '50K', note: 'State capital, Susquehanna River' },
              { city: 'State College', pop: '42K', note: 'Penn State University, Happy Valley' },
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
