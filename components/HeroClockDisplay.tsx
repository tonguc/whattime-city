'use client'
import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
import { getFlagUrl } from '@/shared/utils'

interface Props {
  tz: string
  countryCode: string
  countryName: string
  tzLabel: string  // e.g. "TRT · UTC+3"
}

export default function HeroClockDisplay({ tz, countryCode, countryName, tzLabel }: Props) {
  const [time, setTime]   = useState('--:--:--')
  const [date, setDate]   = useState('')
  const [abbr, setAbbr]   = useState('')
  const [mounted, setMounted] = useState(false)
  const { isLight } = useCityContext()

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
      setDate(now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      setAbbr(now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? '')
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [tz])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const tp = isLight ? 'text-slate-800' : 'text-white'
  const ts = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <div className={`${card} text-center`}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <img src={getFlagUrl(countryCode, 'sm')} alt={`${countryCode} flag`} className="w-6 h-4 object-cover rounded-sm" />
        <span className={`text-xs font-semibold uppercase tracking-widest ${ts}`}>
          {countryName} · {mounted && abbr ? abbr : tzLabel.split(' ')[0]}
        </span>
      </div>
      <div className={`text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums ${tp}`}>
        {mounted ? time : '--:--:--'}
      </div>
      <div className={`text-sm mt-2 ${ts}`}>{mounted ? date : ''}</div>
      <div className={`mt-3 text-xs ${ts}`}>{tzLabel}</div>
    </div>
  )
}
