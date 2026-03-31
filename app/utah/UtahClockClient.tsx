'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function UtahClockClient() {
  const { time, date, mounted } = useClockState('America/Denver')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Utah', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'MT · UTC-7 / UTC-6' },
          { label: 'Observes DST' },
          { label: 'Pop. ~3.4 Million' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Utah Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Mountain Time (MT)' },
              { label: 'UTC Offset', value: 'UTC-7 (standard) / UTC-6 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — clocks spring forward in March' },
              { label: 'IANA Identifier', value: 'America/Denver' },
              { label: 'Single Time Zone', value: 'Entire state on Mountain Time' },
              { label: 'Population', value: '~3.4 million (2024 est.)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silicon Slopes */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Silicon Slopes &mdash; Utah&apos;s Tech Boom</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Utah&apos;s tech corridor, known as <strong className={heading}>&ldquo;Silicon Slopes,&rdquo;</strong> stretches from Salt Lake City south through Lehi, Provo, and Orem. It&apos;s home to major tech companies including <strong className={heading}>Qualtrics, Pluralsight, Domo, Lucid Software, and Vivint</strong>, plus large operations from Adobe, Microsoft, and Goldman Sachs.
            </p>
            <p>
              The name &ldquo;Silicon Slopes&rdquo; is a nod to both Silicon Valley and the Wasatch Mountains that form the dramatic backdrop to the corridor. Utah consistently ranks among the <strong className={heading}>top states for economic growth</strong>, with one of the youngest and fastest-growing populations in the US.
            </p>
            <p>
              Salt Lake City hosted the <strong className={heading}>2002 Winter Olympics</strong> and has been selected to host the <strong className={heading}>2034 Winter Olympics</strong>, making it one of the few cities to host the Games twice. The annual <strong className={heading}>Sundance Film Festival</strong> in Park City (founded by Robert Redford) is the premier independent film festival in the world.
            </p>
          </div>
        </div>
      </section>

      {/* The Mighty Five */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Mighty Five &mdash; Utah&apos;s National Parks</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Utah is the only state with <strong className={heading}>five national parks</strong>, collectively marketed as &ldquo;The Mighty Five.&rdquo; They draw over 10 million visitors annually:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Zion', visitors: '4.7M/yr', highlight: 'The Narrows, Angels Landing' },
                { name: 'Arches', visitors: '1.8M/yr', highlight: '2,000+ natural stone arches' },
                { name: 'Bryce Canyon', visitors: '2.4M/yr', highlight: 'Hoodoo formations, dark skies' },
                { name: 'Canyonlands', visitors: '911K/yr', highlight: 'Island in the Sky, vast canyons' },
                { name: 'Capitol Reef', visitors: '1.4M/yr', highlight: 'Waterpocket Fold, remote beauty' },
              ].map(p => (
                <div key={p.name} className={innerCard}>
                  <div className={`font-semibold text-sm ${heading}`}>{p.name} National Park</div>
                  <div className={`text-xs ${mutedText}`}>{p.visitors} visitors</div>
                  <div className={`text-xs ${subText} mt-0.5`}>{p.highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Utah Cities &mdash; All on Mountain Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Salt Lake City', pop: '200K', note: 'State capital, 2002 Olympics' },
              { city: 'West Valley City', pop: '140K', note: 'SLC metro, diverse community' },
              { city: 'Provo', pop: '115K', note: 'BYU, Silicon Slopes south' },
              { city: 'West Jordan', pop: '116K', note: 'SLC suburban hub' },
              { city: 'St. George', pop: '100K', note: 'Gateway to Zion, retirement' },
              { city: 'Park City', pop: '8K', note: 'Sundance, 2002 Olympic venues' },
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
