'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function QatarClockClient() {
  const { time, date, mounted } = useClockState('Asia/Qatar')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Qatar', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC+3 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'Doha' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Qatar Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Qatar' },
              { label: 'Population', value: '~2.9 million (85% expats)' },
              { label: 'GDP per Capita', value: '~$88,000 — among world\'s richest' },
              { label: 'Famous For', value: 'LNG exports, 2022 World Cup, Al Jazeera' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qatar vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Qatar Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'QA +8 hrs', summer: 'QA +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'QA +3 hrs', summer: 'QA +2 hrs' },
                  { zone: 'Dubai (GST)', winter: 'QA −1 hr', summer: 'QA −1 hr' },
                  { zone: 'Saudi Arabia (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'QA −2:30', summer: 'QA −2:30' },
                  { zone: 'Japan (JST)', winter: 'QA −6 hrs', summer: 'QA −6 hrs' },
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

      {/* 2022 World Cup */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 2022 World Cup — When UTC+3 Broke Football&apos;s Schedule</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>2022 FIFA World Cup</strong> was the first held in the <strong className={heading}>Middle East</strong> and the first in <strong className={heading}>November-December</strong> (moved from summer due to Qatar&apos;s <strong className={heading}>50°C+ heat</strong>). The <strong className={heading}>UTC+3 timezone</strong> created unprecedented scheduling chaos for global broadcasters.
            </p>
            <p>
              For <strong className={heading}>European viewers</strong>: matches at 1 PM, 4 PM, and 7 PM local time meant <strong className={heading}>10 AM, 1 PM, and 4 PM</strong> in London — civilized. But for <strong className={heading}>Americans</strong>: 5 AM, 8 AM, and 11 AM ET — leading to workplace productivity plunges. For <strong className={heading}>East Asians</strong>: 6 PM, 9 PM, and midnight — perfect prime-time slots.
            </p>
            <p>
              Qatar spent <strong className={heading}>$220+ billion</strong> on World Cup infrastructure — by far the most expensive sporting event in history. The <strong className={heading}>8 air-conditioned stadiums</strong> cooled open-air arenas to 20°C while outside temperatures hovered at <strong className={heading}>30°C+</strong> even in November.
            </p>
          </div>
        </div>
      </section>

      {/* LNG Empire */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s LNG Superpower — Tiny Peninsula, Enormous Wealth</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Qatar is the <strong className={heading}>world&apos;s largest LNG exporter</strong> — the <strong className={heading}>North Field</strong> contains the planet&apos;s single largest natural gas reservoir. Qatar&apos;s LNG tankers operate on <strong className={heading}>global schedules</strong>, with shipments timed to arrive in <strong className={heading}>East Asia (UTC+8/+9), Europe (UTC+0/+1), and South Asia (UTC+5:30)</strong>.
            </p>
            <p>
              <strong className={heading}>Al Jazeera</strong>, the world&apos;s first major Arabic-language news network, broadcasts from Doha — its <strong className={heading}>UTC+3 position</strong> allows it to cover breaking news in both the Middle East and South Asia during prime time, while running overnight desks that catch the Americas.
            </p>
            <p>
              Qatar has <strong className={heading}>85% expatriate population</strong> — mainly from South Asia (India, Nepal, Philippines). The country is roughly the <strong className={heading}>size of Connecticut</strong> but has the <strong className={heading}>world&apos;s 3rd largest natural gas reserves</strong>. Its sovereign wealth fund (<strong className={heading}>QIA, $475+ billion</strong>) owns stakes in everything from <strong className={heading}>Volkswagen to Harrods</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Qatar Key Locations — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Doha', pop: '2.4M metro', note: 'Capital, The Pearl, Souq Waqif' },
              { city: 'Al Wakrah', pop: '300K', note: 'World Cup venue, old fishing town' },
              { city: 'Al Khor', pop: '200K', note: 'Industrial city, North Field gateway' },
              { city: 'Lusail', pop: 'New city', note: 'World Cup final venue, future CBD' },
              { city: 'Al Rayyan', pop: '600K', note: 'Education City, Qatar Foundation' },
              { city: 'Mesaieed', pop: '30K', note: 'Industrial/port city, desert safaris' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop.includes('New') ? c.pop : `Pop. ${c.pop}`}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
