'use client'
import ClockComparisonSection from '@/components/ClockComparisonSection'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const DXB_TZ = 'Asia/Dubai'

function getGSTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: DXB_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: DXB_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { name: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

// GST = UTC+4, no DST. Business 9AM-6PM GST = UTC 05:00-14:00
// EST (UTC-5): 1AM-10AM EST
// PST (UTC-8): 10PM-7AM PST (prev)
// GMT (UTC+0): 5AM-2PM GMT
// CET (UTC+1): 6AM-3PM CET
// IST (UTC+5:30): 10:30AM-7:30PM IST
// SGT (UTC+8): 1PM-10PM SGT
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '1:00 AM – 10:00 AM EST', gst: '9:00 AM – 6:00 PM GST', note: '9h behind Dubai' },
  { from: 'PST (Los Angeles)', window: '10:00 PM – 7:00 AM PST', gst: '9:00 AM – 6:00 PM GST', note: '12h behind Dubai' },
  { from: 'GMT (London)', window: '5:00 AM – 2:00 PM GMT', gst: '9:00 AM – 6:00 PM GST', note: '4h behind Dubai' },
  { from: 'CET (Berlin/Paris)', window: '6:00 AM – 3:00 PM CET', gst: '9:00 AM – 6:00 PM GST', note: '3h behind Dubai' },
  { from: 'IST (India)', window: '10:30 AM – 7:30 PM IST', gst: '9:00 AM – 6:00 PM GST', note: '1.5h ahead of Dubai' },
  { from: 'SGT (Singapore)', window: '1:00 PM – 10:00 PM SGT', gst: '9:00 AM – 6:00 PM GST', note: '4h ahead of Dubai' },
]

const UAE_CITIES = [
  { label: 'Dubai time', href: '/dubai/', note: 'GST (UTC+4)' },
  { label: 'Abu Dhabi time', href: '/abu-dhabi/', note: 'GST (UTC+4)' },
  { label: 'Sharjah time', href: '/sharjah/', note: 'GST (UTC+4)' },
  { label: 'Dubai → London', href: '/time/dubai/london/', note: '' },
  { label: 'Dubai → New York', href: '/time/dubai/new-york/', note: '' },
  { label: 'Dubai → Mumbai', href: '/time/dubai/mumbai/', note: '' },
]

export default function DubaiClockClient() {
  const [gst, setGst] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setGst(getGSTTime())
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
        <div className="text-xs uppercase tracking-widest font-medium text-orange-600 mb-2">
          Live Dubai Time (GST · UTC+4 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? gst.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? gst.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
          Dubai · Abu Dhabi · Sharjah · Ajman · No DST
        </div>
      </div>

            <ClockComparisonSection primaryTz={DXB_TZ} countryName="Dubai" />

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Dubai</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Dubai / UAE business hours: 9:00 AM – 6:00 PM GST (UTC+4). No DST — offset is fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Dubai Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.gst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>UAE City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {UAE_CITIES.map(c => (
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
