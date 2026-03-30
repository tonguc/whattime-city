'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AlaskaClockClient() {
  const { isLight } = useCityContext()
  const [timeAKST, setTimeAKST] = useState('--:--:--')
  const [timeHST, setTimeHST] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeAKST(now.toLocaleTimeString('en-US', { timeZone: 'America/Anchorage', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeHST(now.toLocaleTimeString('en-US', { timeZone: 'America/Adak', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Anchorage', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate/500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Alaska</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeAKST : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of Alaska (AKT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeHST : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Aleutian Islands (HT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">AKST UTC−9 / AKDT UTC−8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~740K</span>
          </div>
        </div>
      </section>

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
