'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

const PK_TZ = 'Asia/Karachi'

function getPKTTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: PK_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  const date = now.toLocaleDateString('en-US', {
    timeZone: PK_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
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
  { name: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { name: 'Mumbai (IST)', tz: 'Asia/Kolkata', label: 'IST' },
  { name: 'Kabul', tz: 'Asia/Kabul', label: 'AFT' },
  { name: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { name: 'Beijing', tz: 'Asia/Shanghai', label: 'CST' },
]

// PKT = UTC+5, no DST. Business 9AM-6PM PKT = UTC 04:00-13:00
// EST (UTC-5): 11PM-8AM EST (prev day)
// PST (UTC-8): 8PM-5AM PST (prev day)
// GMT (UTC+0): 4AM-1PM GMT
// BST (UK summer, UTC+1): 5AM-2PM BST
// IST (UTC+5:30): 9:30AM-6:30PM IST (30min ahead)
// GST (UTC+4): 8AM-5PM GST (1h behind PKT)
const CALL_WINDOWS = [
  { from: 'EST (New York)', window: '11:00 PM – 8:00 AM EST', pkt: '9:00 AM – 6:00 PM PKT', note: '10h behind Pakistan' },
  { from: 'PST (Los Angeles)', window: '8:00 PM – 5:00 AM PST', pkt: '9:00 AM – 6:00 PM PKT', note: '13h behind Pakistan' },
  { from: 'GMT (London)', window: '4:00 AM – 1:00 PM GMT', pkt: '9:00 AM – 6:00 PM PKT', note: '5h behind Pakistan' },
  { from: 'GST (Dubai)', window: '8:00 AM – 5:00 PM GST', pkt: '9:00 AM – 6:00 PM PKT', note: '1h behind Pakistan' },
  { from: 'IST (India)', window: '9:30 AM – 6:30 PM IST', pkt: '9:00 AM – 6:00 PM PKT', note: '30min behind Pakistan' },
  { from: 'SGT (Singapore)', window: '2:00 PM – 11:00 PM SGT', pkt: '9:00 AM – 6:00 PM PKT', note: '3h ahead of Pakistan' },
]

const PK_CITIES = [
  { label: 'Karachi time', href: '/karachi/', note: 'PKT (UTC+5)' },
  { label: 'Lahore time', href: '/lahore/', note: 'PKT (UTC+5)' },
  { label: 'Islamabad time', href: '/islamabad/', note: 'PKT (UTC+5)' },
  { label: 'Karachi → London', href: '/time/karachi/london/', note: '' },
  { label: 'Karachi → New York', href: '/time/karachi/new-york/', note: '' },
  { label: 'Karachi → Dubai', href: '/time/karachi/dubai/', note: '' },
]

export default function PakistanClockClient() {
  const [pkt, setPkt] = useState({ time: '--:--:--', date: '' })
  const [cityTimes, setCityTimes] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setPkt(getPKTTime())
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
        <div className="text-xs uppercase tracking-widest font-medium text-green-700 mb-2">
          Live Pakistan Time (PKT · UTC+5 · No DST)
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${head}`}>
          {mounted ? pkt.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-2 ${muted}`}>{mounted ? pkt.date : ''}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
          Karachi · Lahore · Islamabad · No DST
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Best Time to Call Pakistan</h2>
        <p className={`text-sm mb-3 ${muted}`}>
          Pakistan business hours: 9:00 AM – 6:00 PM PKT (UTC+5). No DST — fixed year-round.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${div}`}>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Calling From</th>
                <th className={`text-left py-2 pr-3 font-medium ${muted}`}>Your Time</th>
                <th className={`text-left py-2 font-medium ${muted}`}>Pakistan Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${div}`}>
              {CALL_WINDOWS.map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-3 font-medium ${text}`}>{r.from}</td>
                  <td className={`py-2 pr-3 ${text}`}>{r.window}</td>
                  <td className={`py-2 ${text}`}>{r.pkt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`rounded-2xl p-5 ${card}`}>
        <h2 className={`text-lg font-semibold mb-3 ${head}`}>Pakistan City Times</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {PK_CITIES.map(c => (
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
