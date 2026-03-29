'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NorthDakotaClockClient() {
  const { isLight } = useCityContext()
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [timeMT, setTimeMT] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeMT(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in North Dakota</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Most of State (CT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeMT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">SW Corner (MT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CT UTC-6 / MT UTC-7</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pop. ~780K</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>North Dakota Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Zone', value: 'Central Time (most of state)' },
              { label: 'SW Counties', value: 'Mountain Time (America/Denver)' },
              { label: 'UTC Offset (CT)', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'UTC Offset (MT)', value: 'UTC-7 (standard) / UTC-6 (DST)' },
              { label: 'Daylight Saving', value: 'Yes &mdash; both zones observe DST' },
              { label: 'Population', value: '~780K (smallest Midwest state)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`} dangerouslySetInnerHTML={{ __html: value }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bakken Oil Boom &amp; Prairie Powerhouse</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              North Dakota&apos;s <strong className={heading}>Bakken shale formation</strong> triggered one of America&apos;s biggest oil booms in the 2010s, transforming small towns like <strong className={heading}>Williston</strong> almost overnight. The state became the <strong className={heading}>2nd-largest oil producer</strong> in the US, behind only Texas.
            </p>
            <p>
              Beyond oil, North Dakota is an <strong className={heading}>agricultural powerhouse</strong> &mdash; the #1 US producer of spring wheat, durum, sunflowers, dry beans, and honey. <strong className={heading}>Theodore Roosevelt National Park</strong> in the Badlands preserves the rugged landscape that shaped the 26th president&apos;s conservation philosophy.
            </p>
            <p>
              <strong className={heading}>Fargo</strong>, the largest city, has emerged as a growing <strong className={heading}>tech and startup hub</strong> with companies like Microsoft and Amazon establishing operations. Winters are among the <strong className={heading}>coldest in the contiguous US</strong>, with temperatures regularly dropping below &ndash;20&deg;F.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major North Dakota Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Fargo', pop: '125K', note: 'CT · Largest city, tech hub' },
              { city: 'Bismarck', pop: '75K', note: 'CT · State capital, Missouri River' },
              { city: 'Grand Forks', pop: '59K', note: 'CT · UND, aerospace research' },
              { city: 'Minot', pop: '49K', note: 'CT · Air Force base, Magic City' },
              { city: 'Williston', pop: '29K', note: 'MT · Bakken oil boom epicenter' },
              { city: 'Dickinson', pop: '23K', note: 'MT · Gateway to TR National Park' },
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
