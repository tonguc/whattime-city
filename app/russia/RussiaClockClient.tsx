'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const MSK_TZ = 'Europe/Moscow'

function getMSKTime() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { timeZone: MSK_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const date = now.toLocaleDateString('en-US', { timeZone: MSK_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return { time, date }
}

const RU_ZONES = [
  { city: 'Moscow / St Petersburg', tz: 'Europe/Moscow', label: 'MSK', utc: 'UTC+3' },
  { city: 'Yekaterinburg', tz: 'Asia/Yekaterinburg', label: 'YEKT', utc: 'UTC+5' },
  { city: 'Omsk', tz: 'Asia/Omsk', label: 'OMST', utc: 'UTC+6' },
  { city: 'Novosibirsk / Krasnoyarsk', tz: 'Asia/Krasnoyarsk', label: 'KRAT', utc: 'UTC+7' },
  { city: 'Irkutsk', tz: 'Asia/Irkutsk', label: 'IRKT', utc: 'UTC+8' },
  { city: 'Yakutsk', tz: 'Asia/Yakutsk', label: 'YAKT', utc: 'UTC+9' },
  { city: 'Vladivostok', tz: 'Asia/Vladivostok', label: 'VLAT', utc: 'UTC+10' },
  { city: 'Magadan / Sakhalin', tz: 'Asia/Magadan', label: 'MAGT', utc: 'UTC+11' },
  { city: 'Kamchatka', tz: 'Asia/Kamchatka', label: 'PETT', utc: 'UTC+12' },
]

const COMPARE_ZONES = [
  { city: 'New York', tz: 'America/New_York', label: 'EST/EDT' },
  { city: 'London', tz: 'Europe/London', label: 'GMT/BST' },
  { city: 'Berlin', tz: 'Europe/Berlin', label: 'CET/CEST' },
  { city: 'Dubai', tz: 'Asia/Dubai', label: 'GST' },
  { city: 'Beijing / Singapore', tz: 'Asia/Singapore', label: 'SGT' },
  { city: 'Tokyo', tz: 'Asia/Tokyo', label: 'JST' },
]

export default function RussiaClockClient() {
  const [msk, setMsk] = useState({ time: '--:--:--', date: '' })
  const [zones, setZones] = useState<{ time: string }[]>(RU_ZONES.map(() => ({ time: '--:--' })))
  const [others, setOthers] = useState<{ time: string; abbr: string }[]>(COMPARE_ZONES.map(() => ({ time: '--:--', abbr: '' })))
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      setMsk(getMSKTime())
      const now = new Date()
      setZones(RU_ZONES.map(z => ({
        time: now.toLocaleTimeString('en-US', { timeZone: z.tz, hour: '2-digit', minute: '2-digit', hour12: false }),
      })))
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
          <span className="text-2xl">🇷🇺</span>
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${textSecondary}`}>Moscow · Moscow Time</div>
            <div className={`text-xs ${textSecondary}`}>MSK · UTC+3 · No Daylight Saving Time · Russia reference clock</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${textPrimary}`}>
          {mounted ? msk.time : '--:--:--'}
        </div>
        <div className={`text-sm mt-1 ${textSecondary}`}>{mounted ? msk.date : ''}</div>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>All Russia Time Zones — Live</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${tableRowClass}`}>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>City / Region</th>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>Zone</th>
                <th className={`text-left py-2 pr-4 font-medium ${textSecondary}`}>UTC</th>
                <th className={`text-left py-2 font-medium ${textSecondary}`}>Local Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableRowClass}`}>
              {RU_ZONES.map((z, i) => (
                <tr key={z.city}>
                  <td className={`py-2 pr-4 font-medium ${textPrimary}`}>{z.city}</td>
                  <td className={`py-2 pr-4 ${textSecondary}`}>{z.label}</td>
                  <td className={`py-2 pr-4 ${textSecondary}`}>{z.utc}</td>
                  <td className={`py-2 font-mono ${textPrimary}`}>{mounted ? zones[i].time : '--:--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`text-xs mt-3 ${textSecondary}`}>Russia has 11 time zones spanning UTC+2 (Kaliningrad) to UTC+12 (Kamchatka). Moscow Time (MSK, UTC+3) is used as the official reference nationwide. Russia abolished Daylight Saving Time in 2014.</p>
      </div>

      <div className={cardBase}>
        <h2 className={`text-base font-semibold mb-3 ${textPrimary}`}>Moscow vs World Cities</h2>
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
    </div>
  )
}
