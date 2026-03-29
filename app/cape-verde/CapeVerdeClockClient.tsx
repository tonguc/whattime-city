'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Atlantic/Cape_Verde'

const CITIES = [
  { name: 'Praia', pop: '159K', note: 'Capital, Santiago island' },
  { name: 'Mindelo', pop: '70K', note: 'Cultural capital, S\u00e3o Vicente' },
  { name: 'Espargos', pop: '17K', note: 'Sal island hub' },
  { name: 'Assomada', pop: '12K', note: 'Interior Santiago' },
  { name: 'Santa Maria', pop: '8K', note: 'Beach resort town' },
  { name: 'S\u00e3o Filipe', pop: '8K', note: 'Fogo volcano base' },
]

export default function CapeVerdeClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: TZ, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <div className={card}>
        <div className="text-center">
          <div className={`text-4xl font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</div>
          <div className={`mt-1 text-xs ${mutedText}`}>CVT &middot; UTC&minus;1 &middot; No DST</div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~590,000'],
            ['Time Zone', 'CVT (UTC\u22121)'],
            ['DST', 'Not observed'],
            ['Islands', '10 volcanic islands'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Music & Culture */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Morna Music &amp; the Barefoot Diva</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Cape Verde&apos;s morna genre&mdash;a soulful blend of Portuguese fado and African
          rhythms&mdash;was inscribed on the UNESCO Intangible Cultural Heritage list. The
          genre&apos;s most famous voice, Ces&aacute;ria &Eacute;vora, became known worldwide
          as the &ldquo;Barefoot Diva&rdquo; for performing without shoes, symbolizing her
          connection to Cape Verdean soil and the simplicity of island life.
        </p>
      </div>

      {/* Atlantic Crossroads */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Atlantic Crossroads</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Positioned 570&nbsp;km off the West African coast, Cape Verde has served as a
          transatlantic hub for centuries&mdash;first for the Portuguese maritime trade and today
          as an air and sea bridge between Africa and the Americas. With year-round sunshine and
          steady trade winds, the islands are a world-class destination for windsurfing, kitesurfing,
          and deep-sea fishing.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Major Cities</h3>
        <div className="grid gap-2">
          {CITIES.map((c) => (
            <div key={c.name} className={`flex items-center justify-between ${innerCard}`}>
              <div>
                <span className={`text-sm font-medium ${heading}`}>{c.name}</span>
                <span className={`ml-2 text-xs ${mutedText}`}>{c.note}</span>
              </div>
              <span className={`text-xs font-medium ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
