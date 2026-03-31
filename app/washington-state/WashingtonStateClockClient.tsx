'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function WashingtonStateClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Los_Angeles')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Washington State', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'PDT · UTC-7' : 'PST · UTC-8', highlight: true },
          { label: 'Pacific Time' },
          { label: 'The Evergreen State' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Washington State Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'PT — Pacific Time (UTC-8/UTC-7)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'Permanent DST', value: 'Voted 2019 — awaiting Congress approval' },
              { label: 'IANA Identifier', value: 'America/Los_Angeles' },
              { label: 'Population', value: '~7.8 million' },
              { label: 'Famous For', value: 'Microsoft, Amazon, Boeing, Starbucks, rain' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Seattle Time — Cloud Computing Runs on Pacific</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Microsoft (Redmond) and Amazon (Seattle)</strong> — the world&apos;s two largest cloud computing providers — both headquarter in Washington State. <strong className={heading}>Azure and AWS</strong> together control <strong className={heading}>over 50% of global cloud infrastructure</strong>. When these companies push updates, deploy services, or announce outages, the world follows <strong className={heading}>Pacific Time</strong>.
            </p>
            <p>
              In <strong className={heading}>2019</strong>, Washington became the <strong className={heading}>first US state to pass permanent daylight saving time</strong> legislation, voting to stay on <strong className={heading}>PDT (UTC-7) year-round</strong>. Like Florida&apos;s Sunshine Protection Act, this requires <strong className={heading}>Congressional approval</strong>. Washington&apos;s dark winters (Seattle gets <strong className={heading}>less than 8.5 hours of daylight</strong> in December) make the extra evening hour highly valued.
            </p>
            <p>
              <strong className={heading}>Boeing</strong> built its 747, 767, 777, and 787 in <strong className={heading}>Everett, Washington</strong> — home to the <strong className={heading}>world&apos;s largest building by volume</strong>. Starbucks was founded in <strong className={heading}>Seattle&apos;s Pike Place Market in 1971</strong> — now the world&apos;s coffee schedule runs on <strong className={heading}>Starbucks releases timed to PT</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Washington State Cities — All on PT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Seattle', pop: '750K', note: 'Amazon, Microsoft nearby, Space Needle' },
              { city: 'Spokane', pop: '230K', note: 'Eastern WA, Inland Northwest hub' },
              { city: 'Tacoma', pop: '220K', note: 'Port city, Joint Base Lewis-McChord' },
              { city: 'Bellevue', pop: '155K', note: 'Tech suburb, T-Mobile HQ, Meta office' },
              { city: 'Redmond', pop: '75K', note: 'Microsoft HQ, Nintendo of America' },
              { city: 'Olympia', pop: '55K', note: 'State capital, Puget Sound' },
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
