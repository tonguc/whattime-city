'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Indian/Comoro'

const CITIES = [
  { name: 'Moroni', pop: '54K', note: 'Capital, Grande Comore' },
  { name: 'Mutsamudu', pop: '30K', note: 'Anjouan island capital' },
  { name: 'Fomboni', pop: '20K', note: 'Moh\u00e9li island capital' },
  { name: 'Domoni', pop: '15K', note: 'Historic Anjouan port' },
  { name: 'Mitsamiouli', pop: '10K', note: 'Northern beach town' },
  { name: 'Ouani', pop: '8K', note: 'Anjouan airport town' },
]

export default function ComorosClockClient() {
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
          <div className={`mt-1 text-xs ${mutedText}`}>EAT &middot; UTC+3 &middot; No DST</div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~900,000'],
            ['Time Zone', 'EAT (UTC+3)'],
            ['DST', 'Not observed'],
            ['Islands', '3 main volcanic islands'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Volcanic Archipelago */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Volcanic Archipelago</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Comoros is a volcanic archipelago in the Mozambique Channel between Madagascar and
          the African mainland. Mount Karthala on Grande Comore is one of the world&apos;s most
          active volcanoes, rising 2,361&nbsp;m above sea level. The islands blend French, Arab,
          African, and Malagasy cultural influences into a unique Comorian identity.
        </p>
      </div>

      {/* Perfume &amp; Nature */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Perfume Islands &amp; Living Fossils</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Comoros is the world&apos;s largest producer of ylang-ylang essence, the fragrant oil
          used in luxury perfumes&mdash;earning the nickname &ldquo;Perfume Islands.&rdquo; The
          waters off Comoros are also where the coelacanth, a prehistoric fish once thought extinct
          for 65&nbsp;million years, was rediscovered alive. These &ldquo;living fossils&rdquo;
          still inhabit the deep volcanic caves around the islands.
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
