'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Sao_Tome'

export default function SaoTomeAndPrincipeClockClient() {
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
        <div className="flex items-center gap-3 mb-3">
          <div className="h-3 w-3 rounded-full bg-green-600 shadow-lg shadow-green-600/50" />
          <span className={`text-sm font-medium ${subText}`}>GMT &middot; UTC+0 &middot; No DST</span>
        </div>
        <div className={`text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${mutedText}`}>{mounted ? date : '\u00A0'}</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Quick Facts</h3>
        <ul className={`space-y-2 text-sm ${subText}`}>
          <li>&bull; Population: ~225,000 &mdash; the second-smallest African country</li>
          <li>&bull; Timezone: GMT (UTC+0) year-round, no daylight saving time</li>
          <li>&bull; The equator runs directly through Ilh&eacute;u das Rolas, just south of S&atilde;o Tom&eacute; island</li>
          <li>&bull; Once the world&apos;s largest cocoa producer &mdash; chocolate heritage runs deep</li>
        </ul>
      </div>

      {/* Nature & Heritage */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Nature &amp; Heritage</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Obo National Park</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Lush volcanic rainforest covering both islands, sheltering endemic birds, orchids, and the giant begonia.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Cocoa &amp; Ro&ccedil;as</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Portuguese colonial plantation estates (ro&ccedil;as) dot the landscape, some restored as eco-lodges producing fine chocolate.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Pristine Beaches</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Praia Jalé and Praia Banana offer untouched golden sand, sea turtle nesting, and crystal-clear Atlantic waters.</p>
          </div>
          <div className={innerCard}>
            <p className={`font-medium ${heading}`}>Equator Marker</p>
            <p className={`text-sm mt-1 ${mutedText}`}>Stand on the equator line at Ilh&eacute;u das Rolas &mdash; a tiny islet where the Northern and Southern Hemispheres meet.</p>
          </div>
        </div>
      </div>

      {/* Major Towns */}
      <div className={card}>
        <h3 className={`text-lg font-semibold mb-3 ${heading}`}>Major Towns</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: 'S\u00e3o Tom\u00e9', pop: '90K' },
            { name: 'Santo Amaro', pop: '8K' },
            { name: 'Neves', pop: '7K' },
            { name: 'Santana', pop: '7K' },
            { name: 'Trindade', pop: '6K' },
            { name: 'Guadalupe', pop: '5K' },
          ].map((c) => (
            <div key={c.name} className={innerCard}>
              <p className={`font-medium text-sm ${heading}`}>{c.name}</p>
              <p className={`text-xs ${mutedText}`}>{c.pop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
