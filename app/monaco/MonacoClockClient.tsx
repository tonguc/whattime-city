'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MonacoClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Paris')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Monaco', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1' },
          { label: 'EU DST Rules' },
          { label: 'Monte Carlo' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Monaco Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Paris (shares with France)' },
              { label: 'Population', value: '~39,000 — 2nd smallest country' },
              { label: 'Area', value: '2.02 km² — world\'s 2nd smallest sovereign state' },
              { label: 'Famous For', value: 'Casino, F1 Grand Prix, tax haven, yachts' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Monaco Grand Prix — When 2 km&sup2; Becomes the World&apos;s Stage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Monaco Grand Prix</strong> is the most prestigious race in Formula 1 — run through the <strong className={heading}>streets of Monte Carlo</strong> since 1929. Race start is at <strong className={heading}>3 PM CEST</strong> (May/June), perfect for European TV viewers and <strong className={heading}>9 AM ET for Americans</strong>. The entire country of <strong className={heading}>2.02 km²</strong> essentially becomes a racing circuit.
            </p>
            <p>
              Monaco has <strong className={heading}>no income tax</strong> — attracting the world&apos;s ultra-wealthy. About <strong className={heading}>1 in 3 residents is a millionaire</strong>. The <strong className={heading}>Casino de Monte-Carlo</strong> (1863) is where the phrase &ldquo;breaking the bank&rdquo; originated. Despite being smaller than Central Park, Monaco is a <strong className={heading}>sovereign UN member state</strong> with its own timezone entry (though it uses France&apos;s Europe/Paris).
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Monaco Key Areas — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Monte Carlo', pop: '—', note: 'Casino, luxury hotels, F1 circuit' },
              { city: 'Monaco-Ville', pop: '—', note: 'Old Town, Prince\'s Palace, cathedral' },
              { city: 'La Condamine', pop: '—', note: 'Port, market, commercial district' },
              { city: 'Fontvieille', pop: '—', note: 'Reclaimed land, stadium, gardens' },
              { city: 'Larvotto', pop: '—', note: 'Beach district, Japanese Garden' },
              { city: 'Port Hercules', pop: '—', note: 'Superyacht marina, 700 berths' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Quarter</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
