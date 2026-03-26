'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const TR_TZ = 'Europe/Istanbul'

function getTRTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: TR_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: TR_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
  return { time, date }
}

function getCityTime(tz: string) {
  return new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false })
}

const WORLD_CITIES = [
  { name: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { name: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { name: 'Berlin / Paris', tz: 'Europe/Paris', label: 'CET/CEST' },
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Moscow', tz: 'Europe/Moscow', label: 'MSK' },
]

// TRT = UTC+3, no DST (since 2016). Business 9AM-6PM TRT = UTC 06:00-15:00
// EST (UTC-5): 1AM-10AM EST
// PST (UTC-8): 10PM-7AM PST (prev)
// GMT (UTC+0): 6AM-3PM GMT
// CET (UTC+1): 7AM-4PM CET
// IST (UTC+5:30): 11:30AM-8:30PM IST
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '1:00 AM – 10:00 AM EST', trt: '9:00 AM – 6:00 PM TRT', note: '8h behind Turkey' },
  { from: 'PST (Los Angeles)', window: '10:00 PM – 7:00 AM PST', trt: '9:00 AM – 6:00 PM TRT', note: '11h behind Turkey' },
  { from: 'GMT (London)', window: '6:00 AM – 3:00 PM GMT', trt: '9:00 AM – 6:00 PM TRT', note: '3h behind Turkey' },
  { from: 'CET (Berlin/Paris)', window: '7:00 AM – 4:00 PM CET', trt: '9:00 AM – 6:00 PM TRT', note: '2h behind Turkey' },
  { from: 'IST (India)', window: '11:30 AM – 8:30 PM IST', trt: '9:00 AM – 6:00 PM TRT', note: '2.5h ahead of Turkey' },
  { from: 'GST (Dubai)', window: '10:00 AM – 7:00 PM GST', trt: '9:00 AM – 6:00 PM TRT', note: '1h ahead of Turkey' },
]

const TR_CITIES = [
  { label: 'Istanbul time', href: '/istanbul/', note: 'TRT (UTC+3)' },
  { label: 'Ankara time', href: '/ankara/', note: 'TRT (UTC+3)' },
  { label: 'Izmir time', href: '/izmir/', note: 'TRT (UTC+3)' },
  { label: 'Istanbul → London', href: '/time/istanbul/london/', note: '' },
  { label: 'Istanbul → New York', href: '/time/istanbul/new-york/', note: '' },
  { label: 'Istanbul → Dubai', href: '/time/istanbul/dubai/', note: '' },
]

export default function TurkeyClockClient() {
  const [trt, setTrt] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setTrt(getTRTTime())
      const t: Record<string, string> = {}
      WORLD_CITIES.forEach(c => { t[c.name] = getCityTime(c.tz) })
      setCityTimes(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
  const text = isLight ? 'text-slate-700' : 'text-slate-200'
  const head = isLight ? 'text-slate-800' : 'text-white'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const div = isLight ? 'border-slate-100' : 'border-slate-700'
  const link = isLight
    ? 'border border-slate-200 text-slate-700 hover:bg-slate-50'
    : 'border border-slate-600 text-slate-300 hover:bg-slate-700'

  return (
    <div className="space-y-4">
      <div className={`rounded-2xl p-6 text-center ${card}`}>
        <div className="text-xs uppercase tracking-widest font-medium text-red-700 mb-2">
          Live Turkey Time (TRT · UTC+3 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? trt.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? trt.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
          Istanbul · Ankara · Izmir · Antalya · No DST since 2016
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Turkey</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Turkey business hours: 9:00 AM – 6:00 PM TRT (UTC+3). No DST — fixed offset since September 2016.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Turkey Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.trt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Turkey City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {TR_CITIES.map(c => (
            <Link key={c.href} href={c.href}
              className={`px-3 py-2 rounded-xl transition-colors text-center ${link}`}>
              <div className="font-medium">{c.label}</div>
              {c.note && <div className={`text-xs ${muted}`}>{c.note}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
