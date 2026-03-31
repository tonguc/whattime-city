'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function WashingtonDCClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/New_York')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Washington, D.C.', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'EDT UTC−4' : 'EST UTC−5' },
          { label: 'Eastern Time' },
          { label: 'US Capital' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Washington D.C. Time Zone Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Time Zone</div>
              <div className={`font-semibold ${heading}`}>Eastern Time (ET)</div>
              <div className={`text-sm ${subText}`}>EST (UTC−5) / EDT (UTC−4)</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Same as New York, Miami, Atlanta</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">IANA Identifier</div>
              <div className={`font-semibold ${heading}`}>America/New_York</div>
              <div className={`text-sm ${subText}`}>Eastern Time Zone</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Shared with 23 US states</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">DST</div>
              <div className={`font-semibold ${heading}`}>Yes — observes DST</div>
              <div className={`text-sm ${subText}`}>Clocks forward 2nd Sunday March</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Falls back 1st Sunday November</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Status</div>
              <div className={`font-semibold ${heading}`}>Federal District</div>
              <div className={`text-sm ${subText}`}>Not a US state</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Home of the US federal government</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Washington D.C. vs World Capitals</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                  <th className={`text-left py-2 pr-4 font-semibold ${subText}`}>City</th>
                  <th className={`text-left py-2 pr-4 font-semibold ${subText}`}>Time Zone</th>
                  <th className={`text-left py-2 font-semibold ${subText}`}>Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { city: 'New York', tz: 'EST/EDT', diff: 'Same time' },
                  { city: 'Chicago', tz: 'CST/CDT', diff: '−1 hr' },
                  { city: 'Los Angeles', tz: 'PST/PDT', diff: '−3 hrs' },
                  { city: 'London', tz: 'GMT/BST', diff: '−5 hrs (EST)' },
                  { city: 'Brussels', tz: 'CET/CEST', diff: '−6 hrs (EST)' },
                  { city: 'Beijing', tz: 'CST (UTC+8)', diff: '−13 hrs (EST)' },
                ].map((r, i) => (
                  <tr key={r.city} className={`border-b ${isLight ? (i % 2 === 0 ? 'bg-slate-50' : 'bg-white') : (i % 2 === 0 ? 'bg-slate-800/30' : '')} ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{r.city}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{r.tz}</td>
                    <td className={`py-2 ${subText}`}>{r.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
