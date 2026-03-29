'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IvoryCoastClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Abidjan', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Abidjan', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="mb-1 text-sm font-medium uppercase tracking-wider text-orange-700">Ivory Coast Time &mdash; GMT</div>
        <div className={`text-4xl font-semibold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <div className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</div>
        <div className={`mt-2 text-xs ${mutedText}`}>UTC+0 &middot; No DST observed</div>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Timezone', 'GMT (UTC+0)'],
            ['DST', 'Not observed'],
            ['Population', '~28 million'],
            ['Dial Code', '+225'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Did You Know?</h3>
        <ul className={`list-disc space-y-2 pl-5 text-sm ${subText}`}>
          <li>Ivory Coast is the world&apos;s number-one cocoa producer, supplying roughly 40% of global output.</li>
          <li>The Basilica of Our Lady of Peace in Yamoussoukro is the largest church in the world by area.</li>
          <li>Abidjan, the economic capital, is often called the &ldquo;Paris of West Africa&rdquo; for its French-influenced culture.</li>
          <li>Ta&iuml; National Park is a UNESCO World Heritage Site protecting one of West Africa&apos;s last primary rainforests.</li>
          <li>Football legend Didier Drogba is the country&apos;s all-time top scorer and a national icon.</li>
        </ul>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Abidjan', '5.6M', 'Economic capital'],
            ['Yamoussoukro', '355K', 'Political capital'],
            ['Bouak\u00e9', '680K', ''],
            ['Daloa', '319K', ''],
            ['Korhogo', '243K', ''],
            ['San-P\u00e9dro', '196K', ''],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <div className={`text-sm font-medium ${heading}`}>{city}</div>
              <div className={`text-xs ${mutedText}`}>{pop}{note ? ` \u00B7 ${note}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
