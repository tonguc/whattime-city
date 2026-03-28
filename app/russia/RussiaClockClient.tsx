'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function RussiaClockClient() {
  const { isLight } = useCityContext()
  const [times, setTimes] = useState({ kaliningrad: '--:--', moscow: '--:--', yekaterinburg: '--:--', vladivostok: '--:--' })
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const fmt = (tz: string) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      setTimes({
        kaliningrad: fmt('Europe/Kaliningrad'),
        moscow: fmt('Europe/Moscow'),
        yekaterinburg: fmt('Asia/Yekaterinburg'),
        vladivostok: fmt('Asia/Vladivostok'),
      })
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Moscow', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clock — 4 time zones */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-3 opacity-90">
            Current Time in Russia
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
            {[
              { city: 'Kaliningrad', tz: 'KALT UTC+2', time: times.kaliningrad },
              { city: 'Moscow', tz: 'MSK UTC+3', time: times.moscow },
              { city: 'Yekaterinburg', tz: 'YEKT UTC+5', time: times.yekaterinburg },
              { city: 'Vladivostok', tz: 'VLAT UTC+10', time: times.vladivostok },
            ].map(z => (
              <div key={z.city}>
                <div className="text-xs opacity-70 mb-1">{z.city}</div>
                <div className="text-2xl sm:text-3xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {mounted ? z.time : '--:--:--'}
                </div>
                <div className="text-xs opacity-60 mt-0.5">{z.tz}</div>
              </div>
            ))}
          </div>
          <div className="text-sm opacity-80">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">11 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2014</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">UTC+2 to UTC+12</span>
          </div>
        </div>
      </section>

      {/* All 11 Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Russia&apos;s 11 Time Zones</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2 pr-4">Abbreviation</th>
                  <th className="pb-2">Major City</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Kaliningrad', offset: 'UTC+2', abbr: 'KALT', city: 'Kaliningrad' },
                  { zone: 'Moscow', offset: 'UTC+3', abbr: 'MSK', city: 'Moscow, St. Petersburg' },
                  { zone: 'Samara', offset: 'UTC+4', abbr: 'SAMT', city: 'Samara, Saratov' },
                  { zone: 'Yekaterinburg', offset: 'UTC+5', abbr: 'YEKT', city: 'Yekaterinburg, Chelyabinsk' },
                  { zone: 'Omsk', offset: 'UTC+6', abbr: 'OMST', city: 'Omsk' },
                  { zone: 'Krasnoyarsk', offset: 'UTC+7', abbr: 'KRAT', city: 'Krasnoyarsk, Novosibirsk' },
                  { zone: 'Irkutsk', offset: 'UTC+8', abbr: 'IRKT', city: 'Irkutsk' },
                  { zone: 'Yakutsk', offset: 'UTC+9', abbr: 'YAKT', city: 'Yakutsk, Chita' },
                  { zone: 'Vladivostok', offset: 'UTC+10', abbr: 'VLAT', city: 'Vladivostok, Khabarovsk' },
                  { zone: 'Magadan', offset: 'UTC+11', abbr: 'MAGT', city: 'Magadan, Sakhalin' },
                  { zone: 'Kamchatka', offset: 'UTC+12', abbr: 'PETT', city: 'Petropavlovsk-Kamchatsky' },
                ].map(({ zone, offset, abbr, city }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{offset}</td>
                    <td className={`py-2 pr-4 ${mutedText}`}>{abbr}</td>
                    <td className={`py-2 ${subText}`}>{city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Russia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Number of Time Zones', value: '11 (most in the world)' },
              { label: 'Widest Span', value: 'UTC+2 (Kaliningrad) to UTC+12 (Kamchatka)' },
              { label: 'Reference Zone', value: 'Moscow Time (MSK, UTC+3)' },
              { label: 'DST Status', value: 'Permanently abolished in 2014' },
              { label: 'East–West Distance', value: '~10,000 km (6,200 miles)' },
              { label: 'Train Schedules', value: 'Historically used Moscow Time' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DST History */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Russia&apos;s DST Saga: Medvedev vs Putin</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>2011</strong>, President Medvedev abolished seasonal clock changes and put Russia on <strong className={heading}>permanent summer time</strong>. The idea was to end the disruption of twice-yearly clock shifts.
            </p>
            <p>
              The result was disastrous. Russians in northern cities experienced <strong className={heading}>sunrise at 10:00 AM</strong> in winter. Depression rates increased, and public backlash was fierce. Health experts warned that permanent summer time misaligned human circadian rhythms.
            </p>
            <p>
              In <strong className={heading}>2014</strong>, President Putin reversed the decision, moving Russia to <strong className={heading}>permanent standard (winter) time</strong>. Clocks went back one hour and have stayed there since. Russia now has no DST — but on the &ldquo;correct&rdquo; side of the clock.
            </p>
          </div>
        </div>
      </section>

      {/* Russia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Moscow Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Moscow +8 hrs', summer: 'Moscow +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Moscow +11 hrs', summer: 'Moscow +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Moscow +3 hrs', summer: 'Moscow +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Moscow +2 hrs', summer: 'Moscow +1 hr' },
                  { zone: 'India (IST)', winter: 'Moscow −2:30', summer: 'Moscow −2:30' },
                  { zone: 'China (CST)', winter: 'Moscow −5 hrs', summer: 'Moscow −5 hrs' },
                  { zone: 'Tokyo (JST)', winter: 'Moscow −6 hrs', summer: 'Moscow −6 hrs' },
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

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Russian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Moscow', pop: '12.6M', note: 'Capital, MSK (UTC+3)' },
              { city: 'St. Petersburg', pop: '5.4M', note: 'Cultural capital, MSK (UTC+3)' },
              { city: 'Novosibirsk', pop: '1.6M', note: 'Siberian hub, KRAT (UTC+7)' },
              { city: 'Yekaterinburg', pop: '1.5M', note: 'Urals capital, YEKT (UTC+5)' },
              { city: 'Vladivostok', pop: '600K', note: 'Pacific port, VLAT (UTC+10)' },
              { city: 'Kaliningrad', pop: '490K', note: 'Baltic exclave, KALT (UTC+2)' },
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
