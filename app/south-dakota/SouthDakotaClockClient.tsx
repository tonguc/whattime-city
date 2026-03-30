'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SouthDakotaClockClient() {
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
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in South Dakota</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Sioux Falls (CT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeMT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">Rapid City (MT)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CT UTC−6 / MT UTC−7</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Mount Rushmore State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Dakota Time Zone Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Eastern SD', value: 'Central Time (America/Chicago)' },
              { label: 'Western SD', value: 'Mountain Time (America/Denver)' },
              { label: 'CT Offset', value: 'UTC−6 standard / UTC−5 DST' },
              { label: 'MT Offset', value: 'UTC−7 standard / UTC−6 DST' },
              { label: 'Daylight Saving', value: 'Yes — both zones observe DST' },
              { label: 'Population', value: '~900K — Mount Rushmore State' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Badlands, Black Hills &amp; Prairie</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              South Dakota is split by its time zone boundary as much as by its geography. <strong className={heading}>Sioux Falls</strong> in the east is the state&apos;s largest city and an emerging financial and tech hub. <strong className={heading}>Rapid City</strong> in the west is the gateway to the <strong className={heading}>Black Hills</strong> — home to Mount Rushmore, Crazy Horse Memorial, and Custer State Park.
            </p>
            <p>
              The <strong className={heading}>Badlands National Park</strong> sits roughly at the time zone divide, straddling the dramatic shift from Central to Mountain Time. <strong className={heading}>Sturgis</strong>, home to the world&apos;s largest motorcycle rally each August, uses Mountain Time along with most of western South Dakota.
            </p>
            <p>
              South Dakota has <strong className={heading}>no state income tax</strong>, making it a popular state for business registration and banking. <strong className={heading}>Sioux Falls</strong> hosts major credit card processing operations for Citibank, Wells Fargo, and Capital One.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South Dakota Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sioux Falls', pop: '200K', note: 'CT · Largest city, finance hub' },
              { city: 'Rapid City', pop: '75K', note: 'MT · Black Hills gateway' },
              { city: 'Aberdeen', pop: '28K', note: 'CT · Northern SD hub' },
              { city: 'Brookings', pop: '24K', note: 'CT · SDSU, research park' },
              { city: 'Pierre', pop: '14K', note: 'CT · State capital, Missouri River' },
              { city: 'Sturgis', pop: '7K', note: 'MT · Annual motorcycle rally' },
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
