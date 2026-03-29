'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function OmanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Muscat', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Muscat', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Oman</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-green-400/40">GST &middot; UTC+4 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Muscat</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Oman Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GST — Gulf Standard Time (UTC+4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Muscat' },
              { label: 'Population', value: '~5.1 million' },
              { label: 'Coastline', value: '3,165 km — Arabian Sea + Gulf of Oman' },
              { label: 'Famous For', value: 'Frankincense, Sultan Qaboos, fjords' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oman Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Their Winter</th>
                  <th className="pb-2">Their Summer</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'OM +9 hrs', summer: 'OM +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'OM +4 hrs', summer: 'OM +3 hrs' },
                  { zone: 'Dubai (GST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Saudi Arabia (AST)', winter: 'OM −1 hr', summer: 'OM −1 hr' },
                  { zone: 'India (IST)', winter: 'OM −1:30', summer: 'OM −1:30' },
                  { zone: 'Iran (IRST)', winter: 'OM −0:30', summer: 'OM +0:30' },
                ].map(({ zone, winter, summer }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{winter}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Strait of Hormuz — Where 20% of World&apos;s Oil Passes</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Oman guards one side of the <strong className={heading}>Strait of Hormuz</strong> — the world&apos;s most critical oil chokepoint. About <strong className={heading}>20% of all globally traded oil</strong> passes through this <strong className={heading}>39-km wide</strong> strait. Tanker traffic operates <strong className={heading}>24/7 on GST (UTC+4)</strong>, coordinated by Oman&apos;s coast guard.
            </p>
            <p>
              Unlike its flashier Gulf neighbors, Oman has pursued <strong className={heading}>quiet modernization</strong> under Sultan Qaboos (ruled 1970-2020). The country has <strong className={heading}>no income tax</strong>, stunning natural beauty (fjords of Musandam, Wahiba Sands desert, frankincense groves of Dhofar), and a reputation as the <strong className={heading}>Gulf&apos;s most authentic cultural destination</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oman Key Cities — All on GST (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Muscat', pop: '1.4M', note: 'Capital, Grand Mosque, Royal Opera' },
              { city: 'Salalah', pop: '340K', note: 'Frankincense capital, monsoon (khareef)' },
              { city: 'Sohar', pop: '140K', note: 'Industrial port, Sindbad\'s birthplace' },
              { city: 'Nizwa', pop: '70K', note: 'Former capital, fort, souq, dates' },
              { city: 'Sur', pop: '70K', note: 'Dhow-building, turtle nesting beaches' },
              { city: 'Khasab', pop: '20K', note: 'Musandam fjords, "Norway of Arabia"' },
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
