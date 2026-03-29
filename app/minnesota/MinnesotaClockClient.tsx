'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MinnesotaClockClient() {
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Minnesota</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-orange-400/40">{isDST ? 'CDT · UTC-5' : 'CST · UTC-6'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Central Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Land of 10,000 Lakes</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Minnesota Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CT — Central Time (UTC-6/UTC-5)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Chicago' },
              { label: 'Population', value: '~5.7 million' },
              { label: 'Fortune 500', value: '16 Fortune 500 HQs — most per capita' },
              { label: 'Famous For', value: 'Mall of America, Target, 3M, Mayo Clinic' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Corporate Powerhouse on Central Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Minnesota punches far above its weight: <strong className={heading}>16 Fortune 500 companies</strong> are headquartered here — the <strong className={heading}>most per capita of any US state</strong>. <strong className={heading}>UnitedHealth Group (#5), Target, 3M, US Bancorp, Best Buy, General Mills, and Medtronic</strong> all run on <strong className={heading}>Central Time</strong>. UnitedHealth alone is a <strong className={heading}>$350B+ revenue</strong> company.
            </p>
            <p>
              The <strong className={heading}>Mayo Clinic</strong> in Rochester, Minnesota is consistently ranked the <strong className={heading}>#1 hospital in the world</strong>. Patients fly from every country to receive care here. Medical appointments, surgical schedules, and research collaborations all operate on <strong className={heading}>CT</strong>.
            </p>
            <p>
              The <strong className={heading}>Mall of America</strong> in Bloomington is the <strong className={heading}>largest mall in the Western Hemisphere</strong> — with over <strong className={heading}>520 stores, an indoor amusement park, and an aquarium</strong>. It attracts <strong className={heading}>40 million visitors annually</strong>, more than the populations of many countries.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Minnesota Cities — All on CT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Minneapolis', pop: '430K', note: 'Largest city, Target HQ, music scene' },
              { city: 'Saint Paul', pop: '310K', note: 'State capital, twin city, 3M HQ' },
              { city: 'Rochester', pop: '120K', note: 'Mayo Clinic, medical tourism hub' },
              { city: 'Bloomington', pop: '90K', note: 'Mall of America, MSP airport area' },
              { city: 'Duluth', pop: '90K', note: 'Lake Superior, iron ore, shipping' },
              { city: 'Plymouth', pop: '80K', note: 'Medtronic HQ, tech suburb' },
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
