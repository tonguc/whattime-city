'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NorthMacedoniaClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Skopje')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in North Macedonia', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1', highlight: true },
          { label: 'EU-style DST' },
          { label: 'Skopje' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>North Macedonia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Skopje' },
              { label: 'Population', value: '~1.8 million' },
              { label: 'Name Change', value: '2019 — "Macedonia" → "North Macedonia"' },
              { label: 'Famous For', value: 'Lake Ohrid (UNESCO), Old Bazaar, Mother Teresa' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>North Macedonia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">MK Winter (CET)</th>
                  <th className="pb-2">MK Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'MK +6 hrs', summer: 'MK +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'MK +1 hr', summer: 'MK +1 hr' },
                  { zone: 'Serbia (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Greece (EET/EEST)', winter: 'MK −1 hr', summer: 'MK −1 hr' },
                  { zone: 'Turkey (TRT)', winter: 'MK −2 hrs', summer: 'MK −1 hr' },
                  { zone: 'India (IST)', winter: 'MK −4:30', summer: 'MK −3:30' },
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

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Lake Ohrid — Europe&apos;s Oldest Lake &amp; UNESCO Gem</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Lake Ohrid</strong> is one of <strong className={heading}>Europe&apos;s oldest and deepest lakes</strong> (1-3 million years old, 288m deep) — a <strong className={heading}>UNESCO World Heritage site</strong> shared with Albania. The town of Ohrid has <strong className={heading}>365 churches</strong> — &ldquo;one for each day of the year&rdquo; — earning it the title <strong className={heading}>&ldquo;Jerusalem of the Balkans.&rdquo;</strong>
            </p>
            <p>
              North Macedonia&apos;s <strong className={heading}>Skopje Old Bazaar</strong> is the <strong className={heading}>largest bazaar in the Balkans outside Istanbul</strong>. The country was <strong className={heading}>Mother Teresa&apos;s birthplace</strong> (Skopje, 1910). The <strong className={heading}>CET timezone</strong> keeps it synchronized with <strong className={heading}>Serbia, Kosovo, and Central Europe</strong> — but 1 hour behind neighboring <strong className={heading}>Greece (EET)</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>North Macedonia Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Skopje', pop: '600K', note: 'Capital, Old Bazaar, Mother Teresa' },
              { city: 'Bitola', pop: '75K', note: '2nd city, Ottoman heritage, Heraclea' },
              { city: 'Ohrid', pop: '42K', note: 'UNESCO lake city, 365 churches' },
              { city: 'Kumanovo', pop: '70K', note: '3rd city, northern hub' },
              { city: 'Prilep', pop: '66K', note: 'Tobacco city, Marko\'s Towers' },
              { city: 'Tetovo', pop: '53K', note: 'Painted Mosque, Albanian culture' },
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
