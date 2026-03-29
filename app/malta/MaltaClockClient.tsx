'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MaltaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Malta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Malta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Malta' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Malta' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Malta</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/30">{isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU DST Rules</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Valletta</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Malta Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Malta' },
              { label: 'Population', value: '~520,000' },
              { label: 'Area', value: '316 km² — EU\'s smallest member' },
              { label: 'Famous For', value: 'iGaming capital, Knights, English + Maltese' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Malta Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">MT Winter (CET)</th>
                  <th className="pb-2">MT Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'MT +6 hrs', summer: 'MT +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'MT +1 hr', summer: 'MT +1 hr' },
                  { zone: 'Italy (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'MT −4:30', summer: 'MT −3:30' },
                  { zone: 'Australia (AEST)', winter: 'MT −9 hrs', summer: 'MT −8 hrs' },
                  { zone: 'Japan (JST)', winter: 'MT −8 hrs', summer: 'MT −7 hrs' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s iGaming Capital — €2 Billion Industry</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Malta is the <strong className={heading}>world&apos;s #1 hub for online gaming (iGaming)</strong> — over <strong className={heading}>300 iGaming companies</strong> are licensed here, generating <strong className={heading}>~12% of GDP</strong>. The Malta Gaming Authority (MGA) was the <strong className={heading}>first EU regulator to create a comprehensive iGaming framework</strong> (2004).
            </p>
            <p>
              The <strong className={heading}>CET timezone</strong> is ideal: Malta-based gaming operations can serve <strong className={heading}>European players during evening hours</strong> (peak gaming time) while running morning operations aligned with <strong className={heading}>UK headquarters</strong> (1 hour behind). Malta also has a booming <strong className={heading}>blockchain and crypto sector</strong> — nicknamed &ldquo;Blockchain Island.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Malta Key Locations — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Valletta', pop: '6K', note: 'Capital, UNESCO, smallest EU capital' },
              { city: 'Sliema/St Julian\'s', pop: '25K', note: 'Tourism, nightlife, iGaming offices' },
              { city: 'Mdina', pop: '300', note: 'Silent City, medieval walled capital' },
              { city: 'Gozo (Victoria)', pop: '37K', note: 'Sister island, rural, Ggantija temples' },
              { city: 'Marsaxlokk', pop: '3K', note: 'Fishing village, Sunday fish market' },
              { city: 'Birgu', pop: '3K', note: 'Three Cities, Fort St Angelo, Knights' },
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
