'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function IndianaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Indiana/Indianapolis')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Indiana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT · UTC-4 / CDT · UTC-5' : 'EST · UTC-5 / CST · UTC-6', highlight: true },
          { label: '2 Time Zones' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Indiana Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'ET — Eastern Time (most of state)' },
              { label: 'Western Counties', value: 'CT — near Chicago & Evansville' },
              { label: 'DST History', value: 'Adopted statewide DST only in 2006!' },
              { label: 'IANA Identifiers', value: '5 zones! Indianapolis, Knox, Marengo, etc.' },
              { label: 'Population', value: '~6.8 million' },
              { label: 'Famous For', value: 'Indy 500, basketball, corn, Eli Lilly' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>America&apos;s Most Confusing Timezone State</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Indiana has the <strong className={heading}>most complicated timezone history in the US</strong>. Until <strong className={heading}>2006</strong>, most of Indiana did <strong className={heading}>NOT observe DST</strong> — making it one of only two US states (with Arizona) to skip it. This meant Indiana&apos;s time relationship with neighboring states <strong className={heading}>changed twice a year</strong>, causing massive confusion.
            </p>
            <p>
              Indiana has <strong className={heading}>5 separate IANA timezone entries</strong>: <strong className={heading}>America/Indiana/Indianapolis, America/Indiana/Knox, America/Indiana/Marengo, America/Indiana/Petersburg, and America/Indiana/Vevay</strong>. This is because different counties switched between ET and CT — and adopted or rejected DST — at <strong className={heading}>different times throughout history</strong>.
            </p>
            <p>
              The <strong className={heading}>Indy 500</strong> (the world&apos;s largest single-day sporting event, 300,000+ attendees) starts at <strong className={heading}>12:45 PM ET</strong> on Memorial Day weekend. The race has been held annually since <strong className={heading}>1911</strong> — making it older than most timezone standardizations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Indiana Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Indianapolis', pop: '890K', note: 'ET · State capital, Indy 500, Eli Lilly' },
              { city: 'Fort Wayne', pop: '270K', note: 'ET · 2nd largest, manufacturing' },
              { city: 'Evansville', pop: '120K', note: 'CT · SW Indiana, Ohio River' },
              { city: 'South Bend', pop: '103K', note: 'ET · Notre Dame University' },
              { city: 'Gary', pop: '70K', note: 'CT · Near Chicago, steel industry' },
              { city: 'Bloomington', pop: '80K', note: 'ET · Indiana University, tech' },
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
