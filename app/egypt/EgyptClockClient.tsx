'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function EgyptClockClient() {
  const { time, date, mounted } = useClockState('Africa/Cairo')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Egypt', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'EET · UTC+2' },
          { label: 'No DST since 2014' },
          { label: 'Cairo' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Egypt Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Eastern European Time (EET)' },
              { label: 'UTC Offset', value: 'UTC+2 (always)' },
              { label: 'Daylight Saving', value: 'Abolished permanently in 2014' },
              { label: 'IANA Identifier', value: 'Africa/Cairo' },
              { label: 'Population', value: '~105 million (largest Arab country)' },
              { label: 'Same Offset As', value: 'Greece, Romania, South Africa, Israel' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Egypt vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Egypt Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            EET (UTC+2) is fixed year-round. Differences change only when other countries shift their clocks.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'Egypt +7 hrs', summer: 'Egypt +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Egypt +10 hrs', summer: 'Egypt +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Egypt +2 hrs', summer: 'Egypt +1 hr' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Egypt +1 hr', summer: 'Same as Egypt' },
                  { zone: 'Dubai (GST)', winter: 'Egypt −2 hrs', summer: 'Egypt −2 hrs' },
                  { zone: 'India (IST)', winter: 'Egypt −3:30', summer: 'Egypt −3:30' },
                  { zone: 'Japan (JST)', winter: 'Egypt −7 hrs', summer: 'Egypt −7 hrs' },
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

      {/* DST Chaos */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Egypt&apos;s Chaotic DST History</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Egypt has one of the most <strong className={heading}>turbulent DST histories</strong> of any country. DST was first adopted in <strong className={heading}>1940</strong> and was observed fairly consistently until 2010.
            </p>
            <p>
              In <strong className={heading}>2010</strong>, the government suddenly cancelled DST just 4 days before it was scheduled to begin, citing Ramadan fasting concerns (longer daylight = longer fasts). This caused <strong className={heading}>massive IT chaos</strong> — computers, smartphones, and servers had already auto-updated.
            </p>
            <p>
              The pattern repeated: DST was <strong className={heading}>brought back in 2014 for just one year</strong>, then permanently abolished. Between 2010–2014, Egypt changed its DST policy <strong className={heading}>at least 6 times</strong>, sometimes with only days of notice. Software developers worldwide had to push emergency timezone updates.
            </p>
            <p>
              Since <strong className={heading}>2014</strong>, Egypt has been on permanent EET (UTC+2) — no more clock changes.
            </p>
          </div>
        </div>
      </section>

      {/* Ramadan Factor */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Ramadan Factor</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              A major reason Egypt abandoned DST was <strong className={heading}>Ramadan</strong>. During the holy month, Muslims fast from dawn to sunset. DST extends daylight hours, meaning <strong className={heading}>longer fasting periods</strong> in summer.
            </p>
            <p>
              In Egypt&apos;s hot climate, an extra hour of fasting in <strong className={heading}>40°C+ heat</strong> was considered an undue burden. The government often suspended DST during Ramadan, then reinstated it after — creating confusing mid-year clock changes.
            </p>
            <p>
              The permanent abolition solved the religious scheduling conflict while also ending the technical headaches for airlines, banks, and international businesses operating in Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Egyptian Cities — All on EET (UTC+2)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Cairo', pop: '21M metro', note: 'Capital, largest city in Africa' },
              { city: 'Alexandria', pop: '5.4M', note: 'Mediterranean coast, 2nd largest' },
              { city: 'Giza', pop: '9M metro', note: 'Pyramids, part of Cairo metro' },
              { city: 'Sharm El Sheikh', pop: '73K', note: 'Red Sea resort, Sinai' },
              { city: 'Luxor', pop: '507K', note: 'Valley of the Kings, Karnak' },
              { city: 'Aswan', pop: '350K', note: 'Nubian culture, High Dam' },
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
