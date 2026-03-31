'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function UnitedArabEmiratesClockClient() {
  const { time, date, mounted } = useClockState('Asia/Dubai')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'Current Time in the UAE', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'GST &middot; UTC+4 (always)', highlight: true },
          { label: 'No DST' },
          { label: 'Dubai / Abu Dhabi' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>UAE Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GST — Gulf Standard Time (UTC+4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Dubai' },
              { label: 'Population', value: '~10 million (88% expats!)' },
              { label: 'Weekend', value: 'Sat-Sun (changed from Fri-Sat in 2022)' },
              { label: 'Famous For', value: 'Burj Khalifa, oil, aviation hubs, luxury' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UAE Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'UAE +9 hrs', summer: 'UAE +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'UAE +4 hrs', summer: 'UAE +3 hrs' },
                  { zone: 'India (IST)', winter: 'UAE −1:30', summer: 'UAE −1:30' },
                  { zone: 'Singapore (SGT)', winter: 'UAE −4 hrs', summer: 'UAE −4 hrs' },
                  { zone: 'Saudi Arabia (AST)', winter: 'UAE −1 hr', summer: 'UAE −1 hr' },
                  { zone: 'Japan (JST)', winter: 'UAE −5 hrs', summer: 'UAE −5 hrs' },
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

      {/* Weekend Shift */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 2022 Weekend Revolution — Friday → Saturday-Sunday</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>January 2022</strong>, the UAE made a historic shift: the official weekend moved from <strong className={heading}>Friday-Saturday to Saturday-Sunday</strong>, with the workweek now running <strong className={heading}>Monday to Friday (4.5 days)</strong>. Friday became a half-day, ending at <strong className={heading}>12 PM for government</strong>.
            </p>
            <p>
              This was a <strong className={heading}>deliberate timezone strategy</strong>: the old Fri-Sat weekend meant UAE markets were closed on Thursday/Friday, missing <strong className={heading}>2 days of overlap with Western markets</strong>. The new schedule gives the UAE <strong className={heading}>4.5 overlapping trading days with New York and London</strong> instead of 3 — a massive boost for Dubai&apos;s ambition to be the <strong className={heading}>world&apos;s #1 financial hub</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Aviation Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UTC+4: The Perfect Aviation Timezone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Dubai International Airport (<strong className={heading}>DXB</strong>) is the <strong className={heading}>world&apos;s busiest for international passengers</strong> — over <strong className={heading}>87 million in 2023</strong>. Emirates and Etihad leverage the <strong className={heading}>UTC+4 timezone</strong> brilliantly: flights depart Dubai at <strong className={heading}>2-4 AM</strong> and arrive in Europe/Americas during <strong className={heading}>morning hours</strong>.
            </p>
            <p>
              The <strong className={heading}>geographic + timezone position</strong> means Dubai is within <strong className={heading}>8 hours of flight time</strong> from 2/3 of the world&apos;s population. Late-night departures and morning arrivals create a <strong className={heading}>&ldquo;no wasted day&rdquo;</strong> travel experience that has made Dubai the world&apos;s <strong className={heading}>#1 international transit hub</strong>.
            </p>
            <p>
              The UAE also has <strong className={heading}>88% expatriate population</strong> — the highest in the world. This means millions of residents need to coordinate calls with family and business across <strong className={heading}>virtually every timezone</strong> — making &ldquo;what time is it in Dubai?&rdquo; one of the most searched timezone queries globally.
            </p>
          </div>
        </div>
      </section>

      {/* Emirates */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 7 Emirates — All on GST (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Dubai', pop: '3.6M', note: 'Business capital, Burj Khalifa, tourism' },
              { city: 'Abu Dhabi', pop: '1.5M', note: 'Federal capital, oil wealth, Louvre' },
              { city: 'Sharjah', pop: '1.8M', note: 'Cultural capital, UNESCO, universities' },
              { city: 'Ajman', pop: '540K', note: 'Smallest emirate, growing industrial' },
              { city: 'Ras Al Khaimah', pop: '400K', note: 'Tourism, Jebel Jais mountain' },
              { city: 'Fujairah', pop: '250K', note: 'East coast, Indian Ocean port' },
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
