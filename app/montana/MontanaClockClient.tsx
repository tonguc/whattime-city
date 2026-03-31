'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function MontanaClockClient() {
  const { time, date, mounted, isDST } = useClockState('America/Denver')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Montana', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: isDST ? 'MDT UTC−6' : 'MST UTC−7' },
          { label: 'Mountain Time' },
          { label: 'Big Sky Country' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Montana Time Zone Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Time Zone</div>
              <div className={`font-semibold ${heading}`}>Mountain Time (MT)</div>
              <div className={`text-sm ${subText}`}>MST (UTC−7) / MDT (UTC−6)</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Same as Colorado, Wyoming, Utah</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">IANA Identifier</div>
              <div className={`font-semibold ${heading}`}>America/Denver</div>
              <div className={`text-sm ${subText}`}>Mountain Time Zone</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Used in all scheduling software</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">DST</div>
              <div className={`font-semibold ${heading}`}>Yes — observes DST</div>
              <div className={`text-sm ${subText}`}>Clocks forward 2nd Sunday March</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Falls back 1st Sunday November</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Largest Cities</div>
              <div className={`font-semibold ${heading}`}>Billings, Missoula</div>
              <div className={`text-sm ${subText}`}>Helena (capital), Bozeman</div>
              <div className={`text-xs mt-1 ${mutedText}`}>All on Mountain Time</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Montana vs Major US Cities</h2>
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
                  { city: 'Los Angeles', tz: 'PST/PDT', diff: '+1 hr ahead' },
                  { city: 'Phoenix', tz: 'MST (no DST)', diff: 'Same (MST) / +1 hr (MDT)' },
                  { city: 'Denver', tz: 'MST/MDT', diff: 'Same time' },
                  { city: 'Chicago', tz: 'CST/CDT', diff: '+1 hr ahead' },
                  { city: 'New York', tz: 'EST/EDT', diff: '+2 hrs ahead' },
                  { city: 'London', tz: 'GMT/BST', diff: '+7 hrs ahead (MST)' },
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
