'use client'

import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'

export default function AlaskaClockClient() {
  const { time, date, mounted } = useClockState('America/Anchorage')
  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()

  return (
    <div className="space-y-4">
      <ClockHero
        bgColor="bg-blue-700"
        clocks={[{ label: 'Current Time in Alaska', time }]}
        date={date}
        mounted={mounted}
        badges={[
          { label: 'AKST UTC−9 / AKDT UTC−8' },
          { label: '2 Time Zones' },
          { label: 'Pop. ~740K' },
        ]}
      />


      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Alaska Time Zone Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Main TZ</div>
              <div className={`font-semibold ${heading}`}>Alaska Time (AKT)</div>
              <div className={`text-sm ${subText}`}>AKST UTC−9 / AKDT UTC−8</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Covers Anchorage, Juneau, Fairbanks</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">Aleutian TZ</div>
              <div className={`font-semibold ${heading}`}>Hawaii–Aleutian Time</div>
              <div className={`text-sm ${subText}`}>HST UTC−10 / HDT UTC−9</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Aleutian Islands west of 169°30′ W</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">DST</div>
              <div className={`font-semibold ${heading}`}>Yes — observes DST</div>
              <div className={`text-sm ${subText}`}>Clocks forward 2nd Sunday March</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Falls back 1st Sunday November</div>
            </div>
            <div className={innerCard}>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">IANA ID</div>
              <div className={`font-semibold ${heading}`}>America/Anchorage</div>
              <div className={`text-sm ${subText}`}>Aleutians: America/Adak</div>
              <div className={`text-xs mt-1 ${mutedText}`}>Used in all scheduling software</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-bold mb-4 ${heading}`}>Alaska vs Major US Cities</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                  <th className={`text-left py-2 pr-4 font-semibold ${subText}`}>City</th>
                  <th className={`text-left py-2 pr-4 font-semibold ${subText}`}>Time Zone</th>
                  <th className={`text-left py-2 font-semibold ${subText}`}>Hours Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { city: 'Los Angeles', tz: 'PST/PDT', diff: '−1 hr (AKST/AKDT)' },
                  { city: 'Denver', tz: 'MST/MDT', diff: '−2 hrs' },
                  { city: 'Chicago', tz: 'CST/CDT', diff: '−3 hrs' },
                  { city: 'New York', tz: 'EST/EDT', diff: '−4 hrs' },
                  { city: 'London', tz: 'GMT/BST', diff: '−9/−10 hrs' },
                  { city: 'Hawaii', tz: 'HST', diff: '−1 hr (AKST)' },
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
