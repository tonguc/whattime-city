'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function UkraineClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Kyiv')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Ukraine', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EEST · UTC+3' : 'EET · UTC+2', highlight: true },
          { label: isDST ? 'Summer Time' : 'Winter Time' },
          { label: 'Kyiv' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ukraine Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Kyiv (renamed from Europe/Kiev)' },
              { label: 'Population', value: '~37 million (pre-2022)' },
              { label: 'Same Zone As', value: 'Greece, Romania, Finland, Bulgaria' },
              { label: 'IT Workforce', value: '300,000+ tech workers' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ukraine vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ukraine Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Ukraine Winter (EET)</th>
                  <th className="pb-2">Ukraine Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Ukraine +7 hrs', summer: 'Ukraine +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Ukraine +10 hrs', summer: 'Ukraine +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Ukraine +2 hrs', summer: 'Ukraine +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Ukraine +1 hr', summer: 'Ukraine +1 hr' },
                  { zone: 'India (IST)', winter: 'Ukraine −3:30', summer: 'Ukraine −2:30' },
                  { zone: 'Japan (JST)', winter: 'Ukraine −7 hrs', summer: 'Ukraine −6 hrs' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IANA Rename */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Europe/Kiev → Europe/Kyiv: The IANA Rename</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2022</strong>, the IANA timezone database renamed <strong className={heading}>Europe/Kiev</strong> to <strong className={heading}>Europe/Kyiv</strong> — using the Ukrainian transliteration instead of the Russian one. This was one of the most politically significant changes in IANA history.
            </p>
            <p>
              The change reflected the broader <strong className={heading}>KyivNotKiev</strong> campaign that began in 2018, urging international organizations to use Ukrainian-language names. Major airlines, news agencies, and now timezone databases adopted the spelling.
            </p>
            <p>
              For developers: <strong className={heading}>Europe/Kiev</strong> still works as a backwards-compatible alias, but <strong className={heading}>Europe/Kyiv</strong> is the canonical identifier in IANA tzdata 2022b and later.
            </p>
          </div>
        </div>
      </section>

      {/* IT Outsourcing Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ukraine&apos;s IT Industry — Eastern Europe&apos;s Largest</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Before 2022, Ukraine had <strong className={heading}>Eastern Europe&apos;s largest IT workforce</strong> — over <strong className={heading}>300,000 developers</strong>. Kyiv, Lviv, Kharkiv, and Dnipro hosted R&D centers for <strong className={heading}>Samsung, Oracle, Boeing, Snap, and hundreds of startups</strong>.
            </p>
            <p>
              Ukraine&apos;s EET timezone provided <strong className={heading}>excellent overlap</strong>: 1 hour ahead of most EU clients and a 5-hour overlap with US East Coast business hours. Ukrainian teams were known for <strong className={heading}>strong STEM education, competitive rates, and high English proficiency</strong>.
            </p>
            <p>
              Despite the challenges since 2022, the Ukrainian IT sector has shown remarkable resilience — many companies relocated to <strong className={heading}>Lviv (western Ukraine), Poland, and Portugal</strong> while maintaining operations.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Ukrainian Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kyiv', pop: '3M', note: 'Capital, political & tech center' },
              { city: 'Lviv', pop: '720K', note: 'Western hub, UNESCO heritage' },
              { city: 'Kharkiv', pop: '1.4M', note: 'Eastern hub, university city' },
              { city: 'Odesa', pop: '1M', note: 'Black Sea port, cultural hub' },
              { city: 'Dnipro', pop: '980K', note: 'Industrial & aerospace hub' },
              { city: 'Zaporizhzhia', pop: '730K', note: 'Industrial city, Dnieper River' },
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
