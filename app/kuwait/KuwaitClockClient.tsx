'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function KuwaitClockClient() {
  const { time, date, mounted } = useClockState('Asia/Kuwait')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in Kuwait', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AST &middot; UTC+3 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'Kuwait City' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kuwait Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AST — Arabia Standard Time (UTC+3)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Kuwait' },
              { label: 'Population', value: '~4.3 million (70% expats)' },
              { label: 'Oil Reserves', value: '~7% of world total — 6th largest' },
              { label: 'Famous For', value: 'Oil wealth, Kuwait Towers, diwaniya culture' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kuwait Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'KW +8 hrs', summer: 'KW +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'KW +3 hrs', summer: 'KW +2 hrs' },
                  { zone: 'Saudi Arabia (AST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Dubai (GST)', winter: 'KW −1 hr', summer: 'KW −1 hr' },
                  { zone: 'India (IST)', winter: 'KW −2:30', summer: 'KW −2:30' },
                  { zone: 'Japan (JST)', winter: 'KW −6 hrs', summer: 'KW −6 hrs' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oil Wealth &amp; the Kuwait Investment Authority</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Kuwait Investment Authority (KIA)</strong>, established in <strong className={heading}>1953</strong>, is the <strong className={heading}>world&apos;s oldest sovereign wealth fund</strong> — managing <strong className={heading}>$900+ billion</strong>. Kuwait was the first Gulf state to convert oil wealth into long-term global investments, predating even the UAE and Saudi funds by decades.
            </p>
            <p>
              Kuwait&apos;s <strong className={heading}>AST (UTC+3)</strong> timezone aligns perfectly with <strong className={heading}>Saudi Arabia and Iraq</strong> — crucial for regional oil pricing and OPEC coordination. The <strong className={heading}>Kuwait Stock Exchange (Boursa Kuwait)</strong> trades from <strong className={heading}>9 AM to 12:40 PM AST</strong>, overlapping with European morning trading.
            </p>
            <p>
              The <strong className={heading}>diwaniya</strong> is Kuwait&apos;s unique social institution — evening gatherings (typically <strong className={heading}>after 9 PM</strong>) where men discuss politics, business, and society. This <strong className={heading}>late-night culture</strong> is shaped by the extreme heat: during summer, outdoor temperatures hit <strong className={heading}>50°C+</strong>, so social life shifts to nighttime hours.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kuwait Key Areas — All on AST (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kuwait City', pop: '2.4M metro', note: 'Capital, Kuwait Towers, finance' },
              { city: 'Hawalli', pop: '900K', note: 'Expat hub, commercial district' },
              { city: 'Salmiya', pop: '180K', note: 'Shopping, restaurants, Marina Mall' },
              { city: 'Jahra', pop: '500K', note: 'Agricultural area, northern hub' },
              { city: 'Ahmadi', pop: '400K', note: 'Oil industry center, KOC HQ' },
              { city: 'Fahaheel', pop: '200K', note: 'Southern city, refinery area' },
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
