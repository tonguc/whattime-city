'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MissouriClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Chicago' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Chicago' })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Missouri</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Show-Me State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Missouri Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~6.2 million' },
              { label: 'Gateway Arch', value: 'St. Louis — Gateway to the West' },
              { label: 'Famous For', value: 'BBQ, jazz, Gateway Arch, Anheuser-Busch' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Geographic Center of America — Missouri on CT</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Missouri sits near the <strong className={heading}>geographic center of the contiguous US</strong> and served as the <strong className={heading}>Gateway to the West</strong> — the <strong className={heading}>Lewis and Clark expedition</strong> departed from St. Louis in 1804. The iconic <strong className={heading}>Gateway Arch (630 ft)</strong> commemorates this westward expansion and is the <strong className={heading}>tallest monument in the US</strong>.
            </p>
            <p>
              <strong className={heading}>Kansas City</strong> is the <strong className={heading}>BBQ capital of the world</strong> with over <strong className={heading}>100 BBQ restaurants</strong>. The city also sits right on the <strong className={heading}>Missouri-Kansas state border</strong> — spanning two states but one timezone (CT). Kansas City&apos;s central location makes it a major <strong className={heading}>logistics and distribution hub</strong>.
            </p>
            <p>
              <strong className={heading}>Anheuser-Busch</strong> (Budweiser) was founded in St. Louis in 1852. The <strong className={heading}>Clydesdale stables</strong> at the brewery are a national landmark. Missouri is also home to <strong className={heading}>Emerson Electric, Edward Jones, and Cerner</strong> — all Fortune 500 companies on <strong className={heading}>CT</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Missouri Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kansas City', pop: '510K', note: 'BBQ capital, Chiefs, logistics hub' },
              { city: 'St. Louis', pop: '295K', note: 'Gateway Arch, Budweiser, Cardinals' },
              { city: 'Springfield', pop: '170K', note: 'Bass Pro Shops HQ, Ozarks' },
              { city: 'Columbia', pop: '130K', note: 'University of Missouri, college town' },
              { city: 'Independence', pop: '125K', note: 'Truman Library, Oregon Trail start' },
              { city: 'Jefferson City', pop: '45K', note: 'State capital, Missouri River' },
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
