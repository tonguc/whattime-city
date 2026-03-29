'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MississippiClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Mississippi
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
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Jackson</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Mississippi Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Central Time (CT)' },
              { label: 'UTC Offset', value: 'UTC-6 (standard) / UTC-5 (DST)' },
              { label: 'Daylight Saving', value: 'Yes — 2nd Sunday Mar to 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~3.0 million' },
              { label: 'Capital', value: 'Jackson' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthplace of the Blues */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Birthplace of the Blues</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Mississippi is universally recognized as the <strong className={heading}>birthplace of the blues</strong>. The Mississippi Delta — the flat alluvial plain between the Mississippi and Yazoo rivers — gave rise to Delta blues in the early 20th century. Legends like <strong className={heading}>Robert Johnson, B.B. King, Muddy Waters,</strong> and <strong className={heading}>Son House</strong> all hailed from Mississippi.
            </p>
            <p>
              The <strong className={heading}>Mississippi River</strong>, the second-longest river in North America, forms the state&apos;s entire western border. It has been central to American commerce, culture, and literature — most famously through Mark Twain&apos;s works.
            </p>
            <p>
              Nobel Prize-winning author <strong className={heading}>William Faulkner</strong> set most of his novels in the fictional Yoknapatawpha County, based on Lafayette County, Mississippi. His home, Rowan Oak, in Oxford is now a museum.
            </p>
            <p>
              Mississippi is the <strong className={heading}>leading catfish farming state</strong> in the United States. The Mississippi Delta region produces more farm-raised catfish than any other area in the world, with Humphreys County often called the &quot;Catfish Capital of the World.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Major Cities in Mississippi</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Jackson', pop: '~150K' },
              { city: 'Gulfport', pop: '~73K' },
              { city: 'Southaven', pop: '~55K' },
              { city: 'Hattiesburg', pop: '~48K' },
              { city: 'Biloxi', pop: '~46K' },
              { city: 'Tupelo', pop: '~38K' },
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
