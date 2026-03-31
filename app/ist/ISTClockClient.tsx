'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function ISTClockClient() {
  const { time, date, mounted } = useClockState('Asia/Kolkata')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  const usZones = [
    { label: 'EST / EDT (New York)', tz: 'America/New_York', std: -5, dst: -4 },
    { label: 'CST / CDT (Chicago)', tz: 'America/Chicago', std: -6, dst: -5 },
    { label: 'MST / MDT (Denver)', tz: 'America/Denver', std: -7, dst: -6 },
    { label: 'PST / PDT (Los Angeles)', tz: 'America/Los_Angeles', std: -8, dst: -7 },
  ]


  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-amber-600"
        clocks={[{ label: 'IST — India Standard Time', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'UTC+5:30' },
          { label: 'No DST — Always UTC+5:30' },
        ]}
      />


      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>IST Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'UTC Offset', value: 'UTC+5:30' },
              { label: 'Abbreviation', value: 'IST' },
              { label: 'Full Name', value: 'India Standard Time' },
              { label: 'Daylight Saving', value: 'None — always UTC+5:30' },
              { label: 'IANA Identifier', value: 'Asia/Kolkata' },
              { label: 'Used By', value: 'All of India (one zone)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IST vs USA time zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>What Is IST Time in the USA?</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            IST is UTC+5:30. The US–India offset changes twice a year when the US observes Daylight Saving Time. India never changes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">US Time Zone</th>
                  <th className="pb-2 pr-4">Offset from IST (winter)</th>
                  <th className="pb-2">Offset from IST (summer)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700'}`}>
                {[
                  { label: 'EST (New York)', winter: -10.5, summer: -9.5 },
                  { label: 'CST (Chicago)', winter: -11.5, summer: -10.5 },
                  { label: 'MST (Denver)', winter: -12.5, summer: -11.5 },
                  { label: 'PST (Los Angeles)', winter: -13.5, summer: -12.5 },
                ].map(({ label, winter, summer }) => {
                  const fmt = (h: number) => {
                    const sign = h < 0 ? '-' : '+'
                    const abs = Math.abs(h)
                    return `${sign}${abs % 1 === 0 ? abs : abs.toString().replace('.5', ':30')} hrs`
                  }
                  return (
                    <tr key={label}>
                      <td className={`py-2 pr-4 font-medium ${heading}`}>{label}</td>
                      <td className={`py-2 pr-4 tabular-nums ${subText}`}>{fmt(winter)}</td>
                      <td className={`py-2 tabular-nums ${subText}`}>{fmt(summer)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            Example: When it is 12:00 PM IST, it is 1:30 AM EST (winter) or 2:30 AM EDT (summer).
          </p>
        </div>
      </section>

      {/* Why UTC+5:30 */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is India UTC+5:30 (30-Minute Offset)?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              India uses a single time zone for the entire country — <strong className={heading}>IST (UTC+5:30)</strong>. The 30-minute offset was chosen as a compromise to cover India's geographic width (spanning roughly UTC+5 in the west to UTC+6 in the east).
            </p>
            <p>
              India adopted a single national time zone in 1906 as a practical solution for unified railway and telegraph systems under British administration. The 5:30 offset was the midpoint between the extremes.
            </p>
            <p>
              <strong className={heading}>India does not observe Daylight Saving Time.</strong> IST is always UTC+5:30 year-round, every year. This means the time difference between India and the US, UK, or Europe changes when those countries switch clocks — not when India does.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
