'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function PolandClockClient() {
  const { time, date, mounted, isDST } = useClockState('Europe/Warsaw')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Poland', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'CEST · UTC+2' : 'CET · UTC+1' },
          { label: isDST ? 'Summer Time (Czas Letni)' : 'Winter Time (Czas Zimowy)' },
          { label: 'Warsaw' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Poland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'Polish Name', value: 'Czas Zimowy / Czas Letni' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Warsaw' },
              { label: 'Population', value: '~38 million' },
              { label: 'Same Zone As', value: 'Germany, France, Italy, Spain' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Poland Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Poland Winter (CET)</th>
                  <th className="pb-2">Poland Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Poland +6 hrs', summer: 'Poland +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Poland +9 hrs', summer: 'Poland +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Poland +1 hr', summer: 'Poland +1 hr' },
                  { zone: 'India (IST)', winter: 'Poland −4:30', summer: 'Poland −3:30' },
                  { zone: 'Japan (JST)', winter: 'Poland −8 hrs', summer: 'Poland −7 hrs' },
                  { zone: 'Sydney (AET)', winter: 'Poland −10 hrs', summer: 'Poland −8 hrs' },
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

      {/* Poland's IT Boom */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Poland: Europe&apos;s IT Outsourcing Powerhouse</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Poland has become <strong className={heading}>Europe&apos;s #1 destination for IT outsourcing</strong>, with over <strong className={heading}>300,000 software developers</strong> — the largest developer pool in Central Europe. Cities like <strong className={heading}>Warsaw, Kraków, and Wrocław</strong> host offices for Google, Amazon, Microsoft, and hundreds of EU startups.
            </p>
            <p>
              Poland&apos;s CET timezone is a <strong className={heading}>massive advantage</strong>: full overlap with Western European business hours, and a <strong className={heading}>6-hour overlap with US East Coast</strong> (9 AM–3 PM US = 3 PM–9 PM Poland). This makes Poland ideal for nearshoring — European quality at competitive rates.
            </p>
            <p>
              Polish developers consistently rank in the <strong className={heading}>top 5 globally</strong> on HackerRank and TopCoder. Combined with EU membership and CET timezone, Poland has attracted <strong className={heading}>$2+ billion in IT investment</strong> annually.
            </p>
          </div>
        </div>
      </section>

      {/* Name Day Culture */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Imieniny — Poland&apos;s Name Day Tradition</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In Poland, <strong className={heading}>imieniny</strong> (name days) are often celebrated <strong className={heading}>more than birthdays</strong>. Every day of the calendar is associated with specific Polish names, and people celebrate when their name day arrives — often with cake, flowers, and parties.
            </p>
            <p>
              Polish calendars and daily newspapers print the day&apos;s names. Colleagues at work bring treats on their <strong className={heading}>imieniny</strong>, and it&apos;s considered more important than a birthday in traditional Polish culture. This time-linked tradition makes the <strong className={heading}>calendar deeply personal</strong> in Poland.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Polish Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Warsaw', pop: '3.1M metro', note: 'Capital, business hub' },
              { city: 'Kraków', pop: '1.7M metro', note: 'Cultural capital, IT hub' },
              { city: 'Wrocław', pop: '1.1M metro', note: 'Tech hub, "Polish Silicon Valley"' },
              { city: 'Gdańsk', pop: '800K metro', note: 'Baltic coast, Solidarity movement' },
              { city: 'Poznań', pop: '850K metro', note: 'Trade fair city, western Poland' },
              { city: 'Łódź', pop: '680K', note: 'Film school city, central Poland' },
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
