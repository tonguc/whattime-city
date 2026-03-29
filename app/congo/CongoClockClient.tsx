'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

const TZ = 'Africa/Brazzaville'

const CITIES = [
  { name: 'Brazzaville', pop: '2.4M', note: 'Capital, Congo River bank' },
  { name: 'Pointe-Noire', pop: '1.2M', note: 'Economic capital &amp; port' },
  { name: 'Dolisie', pop: '84K', note: 'Niari valley hub' },
  { name: 'Nkayi', pop: '71K', note: 'Sugar industry center' },
  { name: 'Ou\u00e9sso', pop: '28K', note: 'Northern forest gateway' },
  { name: 'Owando', pop: '25K', note: 'Cuvette region capital' },
]

export default function CongoClockClient() {
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Republic of the Congo</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">WAT &middot; UTC+1</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~6M</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-3`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~6 million'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['DST', 'Not observed'],
            ['Language', 'French (official)'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <div className={`text-xs ${mutedText}`}>{label}</div>
              <div className={`text-sm font-medium ${subText}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Twin Capitals */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>The World&apos;s Closest Capitals</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Brazzaville and Kinshasa (capital of the Democratic Republic of the Congo) face each
          other across the Congo River&mdash;making them the world&apos;s closest pair of
          capital cities, separated by just 1.6&nbsp;km of water. The Congo River itself is the
          second largest in the world by discharge volume, draining an area roughly the size of
          India. The Republic of the Congo&apos;s oil-driven economy is centered at Pointe-Noire,
          the country&apos;s Atlantic port city.
        </p>
      </div>

      {/* Wildlife & Forest */}
      <div className={card}>
        <h3 className={`text-lg font-semibold ${heading} mb-2`}>Odzala-Kokoua &amp; the Great Forest</h3>
        <p className={`text-sm ${subText} leading-relaxed`}>
          Over 65% of the country is covered by tropical forest, making Congo one of Africa&apos;s
          most densely forested nations. Odzala-Kokoua National Park, established in 1935, is among
          the oldest protected areas on the continent and shelters significant populations of
          western lowland gorillas and forest elephants. The northern forests are part of the
          Congo Basin&mdash;the world&apos;s second-largest tropical rainforest after the Amazon.
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
                <span className={`ml-2 text-xs ${mutedText}`} dangerouslySetInnerHTML={{ __html: c.note }} />
              </div>
              <span className={`text-xs font-medium ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{c.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
