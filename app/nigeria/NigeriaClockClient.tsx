'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function NigeriaClockClient() {
  const { time, date, mounted } = useClockState('Africa/Lagos')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-emerald-600"
        clocks={[{ label: 'Current Time in Nigeria', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'WAT · UTC+1' },
          { label: 'No DST — Year-round' },
          { label: 'Africa&apos;s Most Populous' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nigeria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'West Africa Time (WAT)' },
              { label: 'UTC Offset', value: 'UTC+1 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Africa/Lagos' },
              { label: 'Population', value: '~220 million (Africa\'s #1)' },
              { label: 'Same Offset As', value: 'CET (France, Germany) in winter' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nigeria vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Nigeria Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            WAT (UTC+1) is fixed year-round. Nigeria aligns with CET in winter, making European business collaboration easy.
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
                  { zone: 'New York (ET)', winter: 'Nigeria +6 hrs', summer: 'Nigeria +5 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Nigeria +9 hrs', summer: 'Nigeria +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Nigeria +1 hr', summer: 'Same as Nigeria' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Same as Nigeria', summer: 'Nigeria +1 hr behind' },
                  { zone: 'India (IST)', winter: 'Nigeria −4:30', summer: 'Nigeria −4:30' },
                  { zone: 'South Africa (SAST)', winter: 'Nigeria −1 hr', summer: 'Nigeria −1 hr' },
                  { zone: 'Dubai (GST)', winter: 'Nigeria −3 hrs', summer: 'Nigeria −3 hrs' },
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

      {/* Africa's Tech Giant */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Nigeria: Africa&apos;s Tech Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Lagos is the <strong className={heading}>undisputed tech hub of Africa</strong>, home to the continent&apos;s largest startup ecosystem. Companies like <strong className={heading}>Flutterwave, Paystack (acquired by Stripe), Andela, and Jumia</strong> were all born here.
            </p>
            <p>
              Nigeria&apos;s WAT (UTC+1) alignment with <strong className={heading}>European CET in winter</strong> and just 1 hour behind in summer makes it a natural partner for European companies outsourcing tech work. Lagos is sometimes called <strong className={heading}>&ldquo;Africa&apos;s Silicon Valley&rdquo;</strong>.
            </p>
            <p>
              The <strong className={heading}>&ldquo;Yaba&rdquo;</strong> neighborhood in Lagos has become so concentrated with tech companies that it earned the nickname <strong className={heading}>&ldquo;Yabacon Valley&rdquo;</strong> — a play on Silicon Valley.
            </p>
          </div>
        </div>
      </section>

      {/* "African Time" */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>&ldquo;African Time&rdquo; — The Cultural Context</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The concept of <strong className={heading}>&ldquo;African Time&rdquo;</strong> (a more relaxed approach to punctuality) is widely discussed in Nigeria. Events often start <strong className={heading}>30–60 minutes late</strong> — so much so that invitations sometimes specify <strong className={heading}>&ldquo;African Time&rdquo; or &ldquo;London Time&rdquo;</strong> to set expectations.
            </p>
            <p>
              However, this is rapidly changing in <strong className={heading}>Lagos&apos;s tech scene and corporate world</strong>. The traffic-related challenges (Lagos commutes can take 2–3 hours) also mean people plan their schedules around <strong className={heading}>peak traffic windows</strong> rather than strict clock times.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Nigerian Cities — All on WAT (UTC+1)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Lagos', pop: '21M metro', note: 'Economic capital, Africa\'s largest city' },
              { city: 'Abuja', pop: '3.6M', note: 'Federal capital since 1991' },
              { city: 'Kano', pop: '4.1M metro', note: 'Northern hub, historic trade center' },
              { city: 'Ibadan', pop: '3.6M', note: 'Oyo State, university city' },
              { city: 'Port Harcourt', pop: '3.1M metro', note: 'Oil capital, Rivers State' },
              { city: 'Enugu', pop: '880K', note: 'Southeast hub, Coal City' },
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
