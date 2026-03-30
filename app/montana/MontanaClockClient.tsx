'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MontanaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Denver', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janOffset = -new Date(jan.toLocaleString('en-US', { timeZone: 'America/Denver' })).getTimezoneOffset()
      const nowOffset = -new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' })).getTimezoneOffset()
      setIsDST(nowOffset !== janOffset)
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
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Montana</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'MDT UTC−6' : 'MST UTC−7'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Mountain Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Big Sky Country</span>
          </div>
        </div>
      </section>

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
