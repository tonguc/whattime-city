'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TennesseeClockClient() {
  const { isLight } = useCityContext()
  const [timeCT, setTimeCT] = useState('--:--:--')
  const [timeET, setTimeET] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeCT(now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeET(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-orange-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Tennessee</div>
          <div className="flex justify-center gap-8 mb-1">
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeCT : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">West &amp; Middle TN (CT)</div>
            </div>
            <div>
              <div className="text-5xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? timeET : '--:--:--'}</div>
              <div className="text-xs opacity-70 mt-1">East Tennessee (ET)</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">
              {isDST ? 'CDT · UTC-5 / EDT · UTC-4' : 'CST · UTC-6 / EST · UTC-5'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">2 Time Zones</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Tennessee Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Western TN', value: 'CT — Memphis, Nashville, Jackson' },
              { label: 'Eastern TN', value: 'ET — Knoxville, Chattanooga, Tri-Cities' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'TZ Boundary', value: 'Roughly along the Cumberland Plateau' },
              { label: 'Population', value: '~7 million' },
              { label: 'Famous For', value: 'Nashville music, Memphis BBQ, Smoky Mountains' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Music City to Memphis — Tennessee&apos;s Two-Clock State</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Tennessee is split between <strong className={heading}>CT (west and middle) and ET (east)</strong>. <strong className={heading}>Nashville</strong> (country music capital) and <strong className={heading}>Memphis</strong> (blues/rock birthplace) are on <strong className={heading}>CT</strong>, while <strong className={heading}>Knoxville</strong> and <strong className={heading}>Chattanooga</strong> are on <strong className={heading}>ET</strong>. The boundary roughly follows the <strong className={heading}>Cumberland Plateau</strong>.
            </p>
            <p>
              <strong className={heading}>Nashville</strong> is the <strong className={heading}>fastest-growing major US city</strong> and the undisputed <strong className={heading}>capital of country music</strong>. The <strong className={heading}>Grand Ole Opry</strong> broadcasts live every weekend on <strong className={heading}>CT</strong>. Nashville has also become a major <strong className={heading}>healthcare, tech, and tourism hub</strong> — <strong className={heading}>HCA Healthcare ($60B+)</strong> and <strong className={heading}>AllianceBernstein</strong> are headquartered here.
            </p>
            <p>
              <strong className={heading}>Memphis</strong> is where <strong className={heading}>Elvis Presley</strong> lived at Graceland, where <strong className={heading}>B.B. King</strong> played on Beale Street, and where <strong className={heading}>FedEx</strong> operates the <strong className={heading}>world&apos;s largest cargo hub</strong> at Memphis International Airport. FedEx&apos;s overnight delivery guarantee is built around <strong className={heading}>CT sorting times</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Tennessee Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Nashville', pop: '690K', note: 'CT · Music City, healthcare, tech boom' },
              { city: 'Memphis', pop: '630K', note: 'CT · Blues, BBQ, FedEx hub, Graceland' },
              { city: 'Knoxville', pop: '190K', note: 'ET · UT campus, Smoky Mountains gateway' },
              { city: 'Chattanooga', pop: '185K', note: 'ET · Gig City (1Gbps fiber), outdoors' },
              { city: 'Clarksville', pop: '170K', note: 'CT · Fort Campbell, Nashville metro' },
              { city: 'Murfreesboro', pop: '160K', note: 'CT · Geographic center of TN' },
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
