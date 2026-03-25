'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/context/CityContext'

const ES_TZ = 'Europe/Madrid'
const CANARY_TZ = 'Atlantic/Canary'

function getESTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: ES_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: ES_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: ES_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CET'
  const canaryTime = now.toLocaleTimeString('en-US', { timeZone: CANARY_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
  const canaryAbbr = now.toLocaleTimeString('en-US', { timeZone: CANARY_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'WET'
  return { time, date, tzAbbr, canaryTime, canaryAbbr }
}

const COMPARE_ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Moscow', tz: 'Europe/Moscow', label: 'MSK' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

export default function SpainClockClient() {
  const [es, setEs] = useState({ time: '--:--:--', date: '', tzAbbr: 'CET', canaryTime: '--:--', canaryAbbr: 'WET' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setEs(getESTime())
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
          <span className="text-2xl">🇪🇸</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Spain (mainland) · {mounted ? es.tzAbbr : 'CET'}</div>
            <div className={`text-xs ${textSecondary}`}>{mounted && es.tzAbbr === 'CEST' ? 'CEST · UTC+2 · Central European Summer Time' : 'CET · UTC+1 · Central European Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? es.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? es.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${textSecondary}`}>
            <span>🏝️ Canary Islands:</span>
            <span className={`font-mono font-semibold ${textPrimary}`}>{es.canaryTime}</span>
            <span>({es.canaryAbbr} · 1h behind mainland)</span>
          </div>
        )}
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Spain vs World Cities</h2>
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
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Best Time to Call Spain</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Calling From</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Call during (local time) → Spain receives 9 AM–6 PM</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {[
                { from: 'New York (EST, UTC−5)', window: '3 AM – 12 PM (morning NY = afternoon Spain)' },
                { from: 'New York (EDT, UTC−4)', window: '4 AM – 1 PM (US summer)' },
                { from: 'Los Angeles (PST, UTC−8)', window: '12 AM – 9 AM' },
                { from: 'London (GMT, UTC+0)', window: '8 AM – 5 PM (Spain is 1h ahead in winter)' },
                { from: 'London (BST, UTC+1)', window: '9 AM – 6 PM (same as Spain in summer)' },
                { from: 'Berlin (CET, UTC+1)', window: '9 AM – 6 PM (same time zone as Spain)' },
                { from: 'Dubai (GST, UTC+4)', window: '12 PM – 9 PM (3h ahead; afternoon overlap)' },
                { from: 'Singapore (SGT, UTC+8)', window: '4 PM – 1 AM next day' },
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
