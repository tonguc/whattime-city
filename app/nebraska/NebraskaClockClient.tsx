'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NebraskaClockClient() {
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
            Current Time in Nebraska
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
              <div className="text-xs mt-1 opacity-80">Mountain Time (western panhandle)</div>
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
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nebraska Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Primary Time Zone', value: 'Central Time (CT) — most of state' },
              { label: 'Secondary Zone', value: 'Mountain Time (MT) — western panhandle' },
              { label: 'UTC Offsets', value: 'CT: UTC-6 / CDT: UTC-5 · MT: UTC-7 / MDT: UTC-6' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'Population', value: '~2.0 million' },
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

      {/* Omaha & Unique Content */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Omaha: The Oracle&apos;s Home Base</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Omaha is home to <strong className={heading}>Warren Buffett&apos;s Berkshire Hathaway</strong>, one of the most valuable companies on Earth. Buffett, known as the &quot;Oracle of Omaha,&quot; has lived and worked in the city for decades. The annual Berkshire Hathaway shareholders meeting draws tens of thousands to Omaha each May.
            </p>
            <p>
              Nebraska has deep ties to <strong className={heading}>US strategic defense</strong>. Offutt Air Force Base near Bellevue was the headquarters of <strong className={heading}>Strategic Air Command (SAC)</strong> during the Cold War and now hosts US Strategic Command (USSTRATCOM), which oversees the nation&apos;s nuclear deterrent.
            </p>
            <p>
              Every June, Omaha hosts the <strong className={heading}>NCAA College World Series</strong> at Charles Schwab Field. The city has been the permanent home of this championship since 1950, making it one of the longest-running relationships between a city and a major sporting event in American history.
            </p>
            <p>
              The <strong className={heading}>Nebraska Sandhills</strong> are one of the largest grass-stabilized dune systems in the Western Hemisphere, covering roughly a quarter of the state. This vast, sparsely populated region sits atop the Ogallala Aquifer and supports one of the largest cattle-ranching areas in the US.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Nebraska</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Omaha', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Lincoln', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Bellevue', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Grand Island', zone: 'CT', tz: 'America/Chicago' },
              { city: 'Scottsbluff', zone: 'MT', tz: 'America/Denver' },
              { city: 'North Platte', zone: 'CT', tz: 'America/Chicago' },
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
