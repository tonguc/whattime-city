'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const KST_TZ = 'Asia/Seoul'

function getKSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: KST_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: KST_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Beijing', tz: 'Asia/Shanghai', label: 'CST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// KST = UTC+9, no DST. Same as JST. Business 9AM-6PM = UTC 00:00-09:00
// EST (UTC-5): 7PM-4AM EST
// PST (UTC-8): 4PM-1AM PST
// GMT (UTC+0): Midnight-9AM GMT
// CET (UTC+1): 1AM-10AM CET
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '7:00 PM – 4:00 AM EST', kst: '9:00 AM – 6:00 PM KST', note: '14h behind Korea' },
  { from: 'PST (Los Angeles)', window: '4:00 PM – 1:00 AM PST', kst: '9:00 AM – 6:00 PM KST', note: '17h behind Korea' },
  { from: 'GMT (London)', window: 'Midnight – 9:00 AM GMT', kst: '9:00 AM – 6:00 PM KST', note: '9h behind Korea' },
  { from: 'CET (Berlin/Paris)', window: '1:00 AM – 10:00 AM CET', kst: '9:00 AM – 6:00 PM KST', note: '8h behind Korea' },
  { from: 'IST (India)', window: '5:30 AM – 2:30 PM IST', kst: '9:00 AM – 6:00 PM KST', note: '3.5h behind Korea' },
  { from: 'SGT (Singapore)', window: '8:00 AM – 5:00 PM SGT', kst: '9:00 AM – 6:00 PM KST', note: '1h behind Korea' },
]

const KR_LINKS = [
  { label: 'Seoul time', href: '/seoul/', note: 'KST (UTC+9)' },
  { label: 'Busan time', href: '/busan/', note: 'KST (UTC+9)' },
  { label: 'Seoul → New York', href: '/time/seoul/new-york/', note: '' },
  { label: 'Seoul → London', href: '/time/seoul/london/', note: '' },
  { label: 'Seoul → Tokyo', href: '/time/seoul/tokyo/', note: '' },
  { label: 'Seoul → Singapore', href: '/time/seoul/singapore/', note: '' },
]

export default function SouthKoreaClockClient() {
  const [kst, setKst] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setKst(getKSTTime())
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
        <div className="text-xs uppercase tracking-widest font-medium text-blue-600 mb-2">
          Live South Korea Time (KST · UTC+9 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? kst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? kst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          Seoul · Busan · Incheon · Same time as Tokyo (JST)
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call South Korea</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Korea business hours: 9:00 AM – 6:00 PM KST (UTC+9). No DST — same offset as Japan (JST).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Korea Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.kst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>South Korea City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {KR_LINKS.map(c => (
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
