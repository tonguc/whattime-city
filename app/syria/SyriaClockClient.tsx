'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function SyriaClockClient() {
  const { time, date, mounted } = useClockState('Asia/Damascus')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Syria', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC+3' },
          { label: 'No DST (since 2022)' },
          { label: 'Damascus' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Syria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Permanent UTC+3 since 2022' },
              { label: 'IANA Identifier', value: 'Asia/Damascus' },
              { label: 'Previous Zone', value: 'Was EET/EEST (UTC+2/+3) with DST until 2022' },
              { label: 'Population', value: '~22 million (pre-war)' },
              { label: 'Famous For', value: 'Damascus — oldest continuously inhabited city' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Damascus — The World&apos;s Oldest Continuously Inhabited City</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Damascus</strong> is widely considered the <strong className={heading}>oldest continuously inhabited city in the world</strong> — with evidence of habitation from <strong className={heading}>10,000-8,000 BC</strong>. Humans have been telling time in Damascus for <strong className={heading}>12,000 years</strong>. The city has seen Aramean, Roman, Byzantine, Umayyad, and Ottoman clocks.
            </p>
            <p>
              In <strong className={heading}>2022</strong>, Syria switched to <strong className={heading}>permanent UTC+3</strong> — effectively staying on summer time year-round, like neighboring Jordan. Before this, Syria used <strong className={heading}>EET/EEST with DST</strong>. The change aligns Syria with <strong className={heading}>Saudi Arabia, Iraq, and Jordan</strong> at UTC+3.
            </p>
            <p>
              Syria&apos;s <strong className={heading}>Umayyad Mosque in Damascus</strong> (built 705 AD) is one of the oldest and largest mosques in the world. The country was historically the <strong className={heading}>center of the Umayyad Caliphate</strong> — the world&apos;s largest empire at its peak, stretching from Spain to India.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Syria Key Cities — All on UTC+3</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Damascus', pop: '2.5M', note: 'Capital, oldest city, Umayyad Mosque' },
              { city: 'Aleppo', pop: '2.1M', note: 'Ancient Citadel, UNESCO, souk' },
              { city: 'Homs', pop: '775K', note: 'Central Syria, Krak des Chevaliers nearby' },
              { city: 'Latakia', pop: '400K', note: 'Mediterranean port, coastal city' },
              { city: 'Hama', pop: '350K', note: 'Famous norias (water wheels)' },
              { city: 'Palmyra', pop: '50K', note: 'Ancient ruins, Roman-era UNESCO site' },
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
