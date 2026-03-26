'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
import { getFlagUrl } from '@/shared/utils'

const BR_TZ = 'America/Sao_Paulo'

function getBRTTime() {
  const now = new Date()
  return {
    time: now.toLocaleTimeString('en-US', { timeZone: BR_TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
    date: now.toLocaleDateString('en-US', { timeZone: BR_TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    tzAbbr: now.toLocaleTimeString('en-US', { timeZone: BR_TZ, timeZoneName: 'short' }).split(' ').pop() ?? 'BRT',
  }
}

export default function BrazilClockClient() {
  const [brt, setBrt] = useState({ time: '--:--:--', date: '', tzAbbr: 'BRT' })
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => setBrt(getBRTTime())
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const tp = isLight ? 'text-slate-800' : 'text-white'
  const ts = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <div className={`${card} text-center`}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <img src={getFlagUrl('BR', 'sm')} alt="BR flag" className="w-7 h-5 object-cover rounded-sm" />
        <div className="text-left">
          <div className="text-xs uppercase tracking-widest font-medium text-green-600">Live Brazil Time</div>
          <div className={`text-xs ${ts}`}>BRT · UTC−3 · No DST</div>
        </div>
      </div>
      <div className={`font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-3 ${tp}`}>
        {mounted ? brt.time : '--:--:--'}
      </div>
      <div className={`text-sm mt-1 ${ts}`}>{mounted ? brt.date : ''}</div>
      <div className={`mt-3 inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 ${isLight ? 'bg-slate-100 text-slate-500' : 'bg-slate-700/50 text-slate-400'}`}>
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
        São Paulo · Rio de Janeiro · Brasília · No DST
      </div>
    </div>
  )
}
