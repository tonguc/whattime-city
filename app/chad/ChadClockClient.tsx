'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Ndjamena'

const CITIES = [
  { name: 'N\u2019Djamena', pop: '1.6M', note: 'Capital on Chari River' },
  { name: 'Moundou', pop: '155K', note: 'Southern industrial city' },
  { name: 'Ab\u00e9ch\u00e9', pop: '119K', note: 'Eastern trade center' },
  { name: 'Sarh', pop: '103K', note: 'Former Fort-Archambault' },
  { name: 'K\u00e9lo', pop: '50K', note: 'Mayo-Kebbi agricultural hub' },
  { name: 'Am Timan', pop: '45K', note: 'Salamat region capital' },
]

export default function ChadClockClient() {
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
          <div className={`mt-1 text-xs ${mutedText}`}>WAT &middot; UTC+1 &middot; No DST</div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~18 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Languages', 'French &amp; Arabic'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          ))}
        </div>
      </div>

      {/* Lake Chad & Sahel */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Where Sahara Meets Sahel</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Chad spans three climate zones&mdash;from the Sahara Desert in the north through the
          semi-arid Sahel to tropical savanna in the south. Lake Chad, once one of Africa&apos;s
          largest lakes, has shrunk by roughly 90% since the 1960s, creating one of the
          continent&apos;s most pressing environmental crises. The Tibesti Mountains in the far
          north contain the highest peaks in the Sahara, reaching 3,445&nbsp;m at Emi Koussi.
        </p>
      </div>

      {/* UNESCO & Wildlife */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Ennedi Plateau &amp; Zakouma</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          The Ennedi Plateau, a UNESCO World Heritage Site, preserves thousands of prehistoric
          rock paintings and engravings dating back over 7,000&nbsp;years. In the southeast,
          Zakouma National Park is an African conservation success story&mdash;its elephant
          population has rebounded from fewer than 450 to over 1,000 after intensive
          anti-poaching efforts, making it one of Central Africa&apos;s most important
          wildlife refuges.
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
