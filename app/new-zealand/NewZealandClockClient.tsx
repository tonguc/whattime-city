'use client'
import { getFlagUrl } from '@/shared/utils'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const NZ_TZ = 'Pacific/Auckland'
const CHATHAMS_TZ = 'Pacific/Chatham'

function getNZTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: NZ_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: NZ_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const tzAbbr = now.toLocaleTimeString('en-US', { timeZone: NZ_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'NZST'
  const chathamTime = now.toLocaleTimeString('en-US', { timeZone: CHATHAMS_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
  const chathamAbbr = now.toLocaleTimeString('en-US', { timeZone: CHATHAMS_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'CHAST'
  return { time, date, tzAbbr, chathamTime, chathamAbbr }
}

const COMPARE_ZONES = [
  { city: 'Sydney', tz: 'Australia/Sydney', label: 'AEST/AEDT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
  { city: 'Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles', label: 'PST/PDT' },
]

export default function NewZealandClockClient() {
  const [nz, setNz] = useState({ time: '--:--:--', date: '', tzAbbr: 'NZST', chathamTime: '--:--', chathamAbbr: 'CHAST' })
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setNz(getNZTime())
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

  const isDST = mounted && (nz.tzAbbr === 'NZDT')

  return (
    <div className="space-y-4">
      <div className={cardBase}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('NZ', 'sm')} alt="NZ flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>New Zealand · {mounted ? nz.tzAbbr : 'NZST'}</div>
            <div className={`text-xs ${textSecondary}`}>{isDST ? 'NZDT · UTC+13 · NZ Daylight Time (Southern Hemisphere summer)' : 'NZST · UTC+12 · NZ Standard Time'}</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? nz.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? nz.date : ''}</div>
        {mounted && (
          <div className={`mt-3 text-sm flex items-center gap-2 ${textSecondary}`}>
            <span>🏝️ Chatham Islands:</span>
            <span className={`font-mono font-semibold ${textPrimary}`}>{nz.chathamTime}</span>
            <span>({nz.chathamAbbr} · 45 min ahead of mainland)</span>
          </div>
        )}
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>New Zealand vs World Cities</h2>
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
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Best Time to Call New Zealand (NZST UTC+12)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Calling From</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Call during (local time) → NZ receives 9 AM–6 PM NZST</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {[
                { from: 'Sydney (AEST, UTC+10)', window: '7 AM – 4 PM (2h behind NZ; good overlap)' },
                { from: 'Tokyo (JST, UTC+9)', window: '6 AM – 3 PM (3h behind NZ)' },
                { from: 'Singapore (SGT, UTC+8)', window: '5 AM – 2 PM (4h behind NZ)' },
                { from: 'Dubai (GST, UTC+4)', window: '1 AM – 10 AM (8h behind NZ)' },
                { from: 'London (GMT, UTC+0)', window: '9 PM prev. day – 6 AM (12h behind)' },
                { from: 'New York (EST, UTC−5)', window: '4 PM – 1 AM (17h behind; evening NY = next-day NZ morning)' },
                { from: 'Los Angeles (PST, UTC−8)', window: '1 PM – 10 PM (20h behind NZ)' },
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
