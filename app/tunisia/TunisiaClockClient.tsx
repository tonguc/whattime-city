'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function TunisiaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Tunis')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Tunisia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'CET &middot; UTC+1 (always)' },
          { label: 'No DST' },
          { label: 'Tunis' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Tunisia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET — Central European Time (UTC+1)' },
              { label: 'DST Status', value: 'Abolished 2009 — used intermittently before' },
              { label: 'IANA Identifier', value: 'Africa/Tunis' },
              { label: 'Population', value: '~12 million' },
              { label: 'Arab Spring', value: 'Started here — Dec 2010, birthplace of change' },
              { label: 'Famous For', value: 'Carthage, Star Wars filming, Mediterranean' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Africa on European Time — Tunisia&apos;s CET Advantage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Tunisia uses <strong className={heading}>CET (UTC+1)</strong> — the <strong className={heading}>same timezone as Paris, Berlin, and Rome</strong> — despite being in <strong className={heading}>North Africa</strong>. This is no coincidence: Tunisia&apos;s economy is deeply tied to <strong className={heading}>France and Italy</strong> (former colonial power + nearest EU neighbor). The <strong className={heading}>shared clock eliminates timezone friction</strong> for business.
            </p>
            <p>
              Tunisia is the <strong className={heading}>closest African country to Europe</strong> — just <strong className={heading}>140 km from Sicily</strong>. This proximity + CET timezone makes Tunisia a major <strong className={heading}>nearshoring destination</strong> for French companies. Over <strong className={heading}>1,300 French companies</strong> operate in Tunisia, taking advantage of <strong className={heading}>French-speaking talent on the same clock</strong>.
            </p>
            <p>
              <strong className={heading}>Tatooine</strong> — the famous Star Wars planet — is named after the <strong className={heading}>real Tunisian town of Tataouine</strong>. Multiple Star Wars filming locations (Mos Espa, Lars Homestead) still stand in the Tunisian desert.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Tunisia Key Cities — All on CET (UTC+1)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tunis', pop: '2.7M metro', note: 'Capital, Carthage ruins, medina' },
              { city: 'Sfax', pop: '600K', note: '2nd city, industrial, olive oil' },
              { city: 'Sousse', pop: '270K', note: 'Tourism hub, "Pearl of the Sahel"' },
              { city: 'Djerba', pop: '170K', note: 'Island, Star Wars, synagogue' },
              { city: 'Kairouan', pop: '120K', note: 'Holy city, Great Mosque, UNESCO' },
              { city: 'Tozeur', pop: '40K', note: 'Desert oasis, Star Wars filming' },
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
