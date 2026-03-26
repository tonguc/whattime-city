'use client'
import { getFlagUrl } from '@/shared/utils'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
const TG_TZ = 'Africa/Lome'
function getLocalTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: TG_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: TG_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: TG_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'GMT',
  }
}
export default function TogoClockClient() {
  const [local, setLocal] = useState({ time: '--:--:--', date: '', tzAbbr: 'GMT' })
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()
  useEffect(() => {
    setMounted(true)
    const update = () => setLocal(getLocalTime())
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const tp = isLight ? 'text-slate-800' : 'text-white'
  const ts = isLight ? 'text-slate-500' : 'text-slate-400'
  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center gap-3 mb-1">
          <img src={getFlagUrl('TG', 'sm')} alt="TG flag" className="w-7 h-5 object-cover rounded-sm" />
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${ts}`}>Togo · {mounted ? local.tzAbbr : 'GMT'}</div>
            <div className={`text-xs ${ts}`}>GMT (UTC+0) · UTC+0</div>
          </div>
        </div>
        <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>{mounted ? local.time : '--:--:--'}</div>
        <div className={`text-sm mt-1 ${ts}`}>{mounted ? local.date : ''}</div>
      </div>
    </div>
  )
}
