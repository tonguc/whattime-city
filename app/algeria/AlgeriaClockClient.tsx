'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AlgeriaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Algiers')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Algeria', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1', highlight: true },
          { label: 'No DST' },
          { label: 'Algiers' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Algeria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET — Central European Time (UTC+1)' },
              { label: 'DST Status', value: 'Abolished — last observed 1981' },
              { label: 'IANA Identifier', value: 'Africa/Algiers' },
              { label: 'Population', value: '~45 million — Africa\'s largest country by area' },
              { label: 'Size', value: '2.38M km² — 10th largest country on Earth' },
              { label: 'Famous For', value: 'Sahara Desert, oil/gas, Casbah, couscous' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Timezone for a Continent-Sized Country</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Algeria is the <strong className={heading}>largest country in Africa</strong> (2.38 million km²) — larger than all of Western Europe combined — yet uses a <strong className={heading}>single timezone: CET (UTC+1)</strong>. The country spans <strong className={heading}>nearly 20 degrees of longitude</strong>, meaning sunrise in the far west (Tindouf) can be <strong className={heading}>over an hour later</strong> than in the eastern border with Tunisia.
            </p>
            <p>
              Like neighboring Tunisia, Algeria uses <strong className={heading}>CET — the same time as Paris, Berlin, and Rome</strong>. This is a legacy of <strong className={heading}>French colonial rule (1830-1962)</strong>. The shared timezone facilitates <strong className={heading}>business with France</strong> — Algeria&apos;s largest trade partner — and the <strong className={heading}>large Algerian diaspora in France (4+ million)</strong>.
            </p>
            <p>
              Algeria is the <strong className={heading}>largest natural gas exporter in Africa</strong> and a top supplier to Europe via pipelines. The <strong className={heading}>Hassi Messaoud oil field</strong> and <strong className={heading}>Hassi R&apos;Mel gas field</strong> in the Sahara are among the world&apos;s largest. Energy contracts and pricing follow <strong className={heading}>CET</strong>, aligning with European energy markets.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Algeria Key Cities — All on CET (UTC+1)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Algiers', pop: '3.9M', note: 'Capital, Casbah UNESCO site, Mediterranean' },
              { city: 'Oran', pop: '900K', note: '2nd city, port, raï music capital' },
              { city: 'Constantine', pop: '450K', note: 'City of Bridges, eastern capital' },
              { city: 'Annaba', pop: '350K', note: 'Steel industry, Mediterranean beaches' },
              { city: 'Tamanrasset', pop: '93K', note: 'Deep Sahara, Tuareg culture, Hoggar' },
              { city: 'Ghardaia', pop: '200K', note: 'M\'zab Valley, UNESCO, desert architecture' },
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
