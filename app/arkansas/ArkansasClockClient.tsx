'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ArkansasClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Arkansas
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CT · UTC-6 / CDT · UTC-5</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">DST Observed</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Little Rock</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Arkansas Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Central Time (CT)' },
              { label: 'UTC Offset', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~3.0 million' },
              { label: 'Capital', value: 'Little Rock' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walmart & Corporate Arkansas */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Corporate Powerhouse of the South</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Arkansas punches far above its weight in the business world. <strong className={heading}>Walmart</strong>, headquartered in Bentonville, is the world&apos;s largest company by revenue and the <strong className={heading}>#1 Fortune 500 corporation</strong>. Sam Walton opened the first Walmart in Rogers, Arkansas in 1962, and the company&apos;s home office still drives the economy of Northwest Arkansas.
            </p>
            <p>
              <strong className={heading}>Tyson Foods</strong>, also based in Northwest Arkansas (Springdale), is the world&apos;s second-largest processor of chicken, beef, and pork. Together, Walmart and Tyson make the Bentonville-Fayetteville-Springdale corridor one of the fastest-growing metro areas in the country.
            </p>
            <p>
              <strong className={heading}>Hot Springs National Park</strong>, located within the city of Hot Springs, is the only national park in the US situated inside a city. Its thermal springs have drawn visitors since the early 1800s, and the historic Bathhouse Row is a National Historic Landmark.
            </p>
            <p>
              Arkansas is home to <strong className={heading}>Crater of Diamonds State Park</strong> near Murfreesboro — the only diamond-producing site in the world open to the public. Visitors keep any diamonds they find, and notable discoveries have included gems over 40 carats.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Arkansas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Little Rock', pop: '~202K' },
              { city: 'Fort Smith', pop: '~89K' },
              { city: 'Fayetteville', pop: '~93K' },
              { city: 'Springdale', pop: '~84K' },
              { city: 'Bentonville', pop: '~58K' },
              { city: 'Hot Springs', pop: '~38K' },
            ].map(({ city, pop }) => (
              <div key={city} className={innerCard}>
                <div className={`text-sm font-semibold ${heading}`}>{city}</div>
                <div className={`text-xs ${mutedText}`}>Central Time · {pop}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
