'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function KansasClockClient() {
  const { isLight } = useCityContext()
  const [ctTime, setCtTime] = useState('--:--:--')
  const [mtTime, setMtTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setCtTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setMtTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock Hero */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Kansas
          </div>
          <div className="flex justify-center gap-8 flex-wrap mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? ctTime : '--:--:--'}
              </div>
              <div className="text-xs mt-1 opacity-80">Central Time (most of state)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? mtTime : '--:--:--'}
              </div>
              <div className="text-xs mt-1 opacity-80">Mountain Time (western counties)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CT · UTC-6 / CDT · UTC-5</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">MT · UTC-7 / MDT · UTC-6</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST Observed</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kansas Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Time Zone', value: 'Central Time (CT) — most of state' },
              { label: 'Secondary Zone', value: 'Mountain Time (MT) — western counties' },
              { label: 'UTC Offsets', value: 'CT: UTC-6 / CDT: UTC-5 · MT: UTC-7 / MDT: UTC-6' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'Population', value: '~2.9 million' },
              { label: 'IANA Identifiers', value: 'America/Chicago · America/Denver' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Center & Unique Content */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Geographic Heart of America</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kansas holds a unique distinction: the <strong className={heading}>geographic center of the contiguous United States</strong> is located near Lebanon, Kansas (Smith County). A stone monument marks the spot at 39&deg;50&prime;N, 98&deg;35&prime;W, making Kansas quite literally the heart of America.
            </p>
            <p>
              Wichita, the state&apos;s largest city, is known as the <strong className={heading}>&quot;Air Capital of the World.&quot;</strong> Major aerospace manufacturers including Boeing, Spirit AeroSystems, Cessna, Learjet, and Textron Aviation all have significant operations here. The aerospace industry has shaped the city since the 1920s.
            </p>
            <p>
              Kansas is also forever linked to <strong className={heading}>The Wizard of Oz</strong> — L. Frank Baum&apos;s classic tale begins on a Kansas farm. The state embraces this heritage: Liberal, Kansas has a &quot;Dorothy&apos;s House&quot; museum, and the phrase &quot;There&apos;s no place like home&quot; resonates deeply with Kansans.
            </p>
            <p>
              The two-timezone split affects a handful of western counties including Greeley, Hamilton, Grant, Stanton, Morton, Stevens, Seward, Haskell, and parts of Finney County. The city of <strong className={heading}>Goodland</strong> in Sherman County is the largest community on Mountain Time in Kansas.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Kansas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Wichita', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Overland Park', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Kansas City, KS', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Topeka', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Goodland', zone: 'MT', tz: 'America/Denver' },
              { city: 'Dodge City', zone: 'CT', tz: 'America/Chicago' },
            ].map(({ city, zone }) => (
              <div key={city} className={innerCard}>
                <div className={`text-sm font-semibold ${heading}`}>{city}</div>
                <div className={`text-xs ${mutedText}`}>{zone === 'MT' ? 'Mountain Time' : 'Central Time'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
