'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function BhutanClockClient() {
  const { time, date, mounted } = useClockState('Asia/Thimphu')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-red-700"
        clocks={[{ label: 'Current Time in Bhutan', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'BTT &middot; UTC+6' },
          { label: 'No DST' },
          { label: 'Pop. ~780K' },
        ]}
      />


      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'BTT (UTC+6)'],
            ['Population', '~780,000'],
            ['Capital', 'Thimphu'],
            ['DST', 'Not observed'],
            ['Currency', 'Ngultrum (BTN)'],
            ['Dialing Code', '+975'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Happiness & Heritage */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>The Last Shangri-La</h3>
        <p className={`text-sm leading-relaxed ${subText}`}>
          Bhutan measures prosperity through <strong>Gross National Happiness</strong> rather than GDP&mdash;
          the only country in the world to do so. It is the world&apos;s only <strong>carbon-negative</strong> nation,
          absorbing more CO&#8322; than it produces. The legendary <strong>Tiger&apos;s Nest Monastery</strong> (Paro
          Taktsang) clings to a cliffside at 3,120 metres. Thimphu is the only capital in the world with
          <strong> no traffic lights</strong>&mdash;a policeman directs traffic instead.
        </p>
      </div>

      {/* Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Culture &amp; Traditions</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Archery (datse) is the national sport&mdash;tournaments are festive celebrations</li>
          <li>Television and the internet only arrived in Bhutan in 1999</li>
          <li>Tourism follows a &ldquo;high value, low impact&rdquo; policy with daily fees</li>
          <li>Over 70% of the country is covered by forest, protected by the constitution</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities &amp; Towns</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Thimphu', '115K', 'Capital city'],
            ['Phuntsholing', '27K', 'India border town'],
            ['Paro', '11K', 'Airport &amp; Tiger\u2019s Nest'],
            ['Gelephu', '10K', 'Southern gateway'],
            ['Samdrup Jongkhar', '8K', 'Eastern hub'],
            ['Punakha', '6K', 'Former capital'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop} &middot; {note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
