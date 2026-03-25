'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const VN_TZ = 'Asia/Ho_Chi_Minh'

function getVNTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: VN_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: VN_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return { time, date }
}

const COMPARE_ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
]

export default function VietnamClockClient() {
  const [vn, setVn] = useState({ time: '--:--:--', date: '' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setVn(getVNTime())
      const now = new Date()
      setOthers(COMPARE_ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
        abbr: now.toLocaleTimeString('en-US', { timeZone: z.tz, timeZoneName: 'short' }).split(' ').pop() ?? z.label,
      })))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const cardBase = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const textPrimary = isLight ? 'text-slate-800' : 'text-white'
  const textSecondary = isLight ? 'text-slate-500' : 'text-slate-400'
  const tableRowClass = isLight ? 'border-slate-100' : 'border-slate-700'

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🇻🇳</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Vietnam · Indochina Time</div>
            <div className={`text-xs ${textSecondary}`}>ICT · UTC+7 · No Daylight Saving Time</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? vn.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? vn.date : ''}</div>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Vietnam vs World Cities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>City</th>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Zone</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Local Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {COMPARE_ZONES.map((z, i) => (
                <tr key={z.city}>
                  <td className={`py-2 pr-4 font-medium ${textPrimary}`}>{z.city}</td>
                  <td className={`py-2 pr-4 ${textSecondary}`}>{mounted ? others[i].abbr : z.label}</td>
                  <td className={`py-2 font-mono ${textPrimary}`}>{mounted ? others[i].time : '--:--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Best Time to Call Vietnam (ICT UTC+7)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Calling From</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Call during (local time) → Vietnam receives 9 AM–6 PM</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {[
                { from: 'New York (EST, UTC−5)', window: '9 PM – 6 AM next day (evening overlap only)' },
                { from: 'New York (EDT, UTC−4)', window: '10 PM – 7 AM next day (US summer)' },
                { from: 'Los Angeles (PST, UTC−8)', window: '6 PM – 3 AM next day' },
                { from: 'London (GMT, UTC+0)', window: '2 AM – 11 AM (morning calls reach afternoon Vietnam)' },
                { from: 'London (BST, UTC+1)', window: '3 AM – 12 PM' },
                { from: 'Dubai (GST, UTC+4)', window: '6 AM – 3 PM (good overlap)' },
                { from: 'Singapore (SGT, UTC+8)', window: '10 AM – 7 PM (1h ahead; excellent overlap)' },
                { from: 'Tokyo (JST, UTC+9)', window: '11 AM – 8 PM (2h ahead; good overlap)' },
                { from: 'Sydney (AEST, UTC+10)', window: '12 PM – 9 PM (3h ahead; afternoon overlap)' },
              ].map(r => (
                <tr key={r.from}>
                  <td className={`py-2 pr-4 font-medium ${textPrimary} whitespace-nowrap`}>{r.from}</td>
                  <td className={`py-2 ${textSecondary}`}>{r.window}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
