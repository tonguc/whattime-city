'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function CaliforniaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Los_Angeles')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in California', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'PDT · UTC-7' : 'PST · UTC-8', highlight: true },
          { label: 'Pacific Time' },
          { label: 'The Golden State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>California Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'PT — Pacific Time (UTC-8/UTC-7)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Los_Angeles' },
              { label: 'Population', value: '~39 million — largest US state' },
              { label: 'GDP', value: '$3.6T — world\'s 5th largest economy' },
              { label: 'Famous For', value: 'Silicon Valley, Hollywood, wine, surfing' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Silicon Valley Time — The World Runs on Pacific</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Silicon Valley</strong> (Apple, Google, Meta, Netflix, Tesla, OpenAI) operates on <strong className={heading}>Pacific Time</strong>. This means the <strong className={heading}>entire global tech industry</strong> effectively follows PT: product launches, earnings calls, and keynotes are timed for <strong className={heading}>10 AM PT</strong> — which is <strong className={heading}>1 PM ET, 6 PM GMT, and 2:30 AM IST (next day)</strong>.
            </p>
            <p>
              California&apos;s <strong className={heading}>$3.6 trillion GDP</strong> makes it the <strong className={heading}>world&apos;s 5th largest economy</strong> — ahead of India and the UK. If California were a country, its <strong className={heading}>Pacific timezone</strong> would be the <strong className={heading}>most economically powerful timezone on Earth</strong>.
            </p>
            <p>
              <strong className={heading}>Hollywood</strong> also sets global entertainment schedules. Award shows (Oscars, Emmys) air at <strong className={heading}>5 PM PT</strong>, which means <strong className={heading}>European audiences watch at 2-3 AM</strong>. Streaming services now release content at <strong className={heading}>12 AM PT</strong> — making Pacific Time the <strong className={heading}>&ldquo;zero hour&rdquo; of global entertainment</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major California Cities — All on PT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Los Angeles', pop: '3.9M', note: 'Hollywood, entertainment capital' },
              { city: 'San Francisco', pop: '870K', note: 'Tech HQ, Golden Gate, startups' },
              { city: 'San Diego', pop: '1.4M', note: 'Navy, biotech, Mexico border' },
              { city: 'San Jose', pop: '1M', note: 'Silicon Valley capital, Apple/Google' },
              { city: 'Sacramento', pop: '520K', note: 'State capital, Central Valley' },
              { city: 'Fresno', pop: '540K', note: 'Agricultural capital, Central Valley' },
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
