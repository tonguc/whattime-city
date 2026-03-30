'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IdahoClockClient() {
  const { isLight } = useCityContext()
  const [timeMT, setTimeMT] = useState('--:--:--')
  const [timePT, setTimePT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeMT(now.toLocaleTimeString('en-US', { timeZone: 'America/Boise', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimePT(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Boise', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Idaho</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeMT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Boise, S/E Idaho (MT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timePT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Panhandle (PT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">MT UTC−7 / PT UTC−8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Gem State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Idaho Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Southern/Eastern ID', value: 'Mountain Time (America/Boise)' },
              { label: 'Northern Panhandle', value: 'Pacific Time (America/Los_Angeles)' },
              { label: 'MT Offset', value: 'UTC−7 standard / UTC−6 DST' },
              { label: 'PT Offset', value: 'UTC−8 standard / UTC−7 DST' },
              { label: 'Daylight Saving', value: 'Yes — both zones observe DST' },
              { label: 'Population', value: '~2M — fastest growing US state' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Tech Boom, Potatoes &amp; Sun Valley</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Boise</strong> has emerged as one of the fastest-growing cities in the United States, attracting tech workers priced out of Seattle and San Francisco. Companies like <strong className={heading}>Micron Technology</strong> (semiconductors) and <strong className={heading}>HP</strong> have long-standing operations in the Treasure Valley. The area is sometimes called the <strong className={heading}>&ldquo;Silicon Slopes&rdquo; of the Northwest</strong>.
            </p>
            <p>
              Idaho produces about <strong className={heading}>30% of all US potatoes</strong>. The famous Idaho Russet Burbank potato thrives in the volcanic soil and high desert climate of the <strong className={heading}>Snake River Plain</strong>. Agriculture — potatoes, trout aquaculture, dairy, and wheat — remains a major economic driver.
            </p>
            <p>
              The <strong className={heading}>northern panhandle</strong> is geographically and economically aligned with <strong className={heading}>Spokane, Washington</strong> — which is why it uses Pacific Time despite being in Idaho. Coeur d&apos;Alene&apos;s lake and resort scene is a major tourism draw, and many Spokane metro residents live just across the Idaho border.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Idaho Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Boise', pop: '240K', note: 'MT · Capital, tech hub' },
              { city: 'Nampa', pop: '110K', note: 'MT · Treasure Valley suburb' },
              { city: 'Meridian', pop: '130K', note: 'MT · Fastest growing city' },
              { city: 'Idaho Falls', pop: '65K', note: 'MT · Snake River, nuclear lab' },
              { city: 'Coeur d\'Alene', pop: '55K', note: 'PT · Panhandle, lakeside resort' },
              { city: 'Pocatello', pop: '55K', note: 'MT · ISU, Gateway to Northwest' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>Pop. {c.pop}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
