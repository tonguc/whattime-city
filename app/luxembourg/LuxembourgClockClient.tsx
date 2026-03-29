'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function LuxembourgClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Luxembourg', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Luxembourg', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Luxembourg' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Luxembourg' })
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
      {/* Live Clock */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Luxembourg
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">World&apos;s Richest Country</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Luxembourg City</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Luxembourg Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Luxembourg' },
              { label: 'Population', value: '~660,000 (47% foreign!)' },
              { label: 'Area', value: '2,586 km² — smaller than Rhode Island' },
              { label: 'GDP per Capita', value: '~$135,000 — world\'s highest' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxembourg vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Luxembourg Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">LU Winter (CET)</th>
                  <th className="pb-2">LU Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'LU +6 hrs', summer: 'LU +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'LU +1 hr', summer: 'LU +1 hr' },
                  { zone: 'India (IST)', winter: 'LU −4:30', summer: 'LU −3:30' },
                  { zone: 'Japan (JST)', winter: 'LU −8 hrs', summer: 'LU −7 hrs' },
                  { zone: 'Belgium (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Richest Country */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Richest Country — $135,000 GDP Per Capita</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Luxembourg has the <strong className={heading}>world&apos;s highest GDP per capita</strong> — roughly <strong className={heading}>$135,000</strong>, more than double Switzerland&apos;s and triple the US&apos;s. This tiny country (population 660,000, area 2,586 km²) is an <strong className={heading}>outsized financial powerhouse</strong>.
            </p>
            <p>
              <strong className={heading}>47% of Luxembourg&apos;s residents are foreign nationals</strong> — the highest ratio in the EU. Additionally, <strong className={heading}>~200,000 cross-border commuters</strong> arrive daily from France, Belgium, and Germany — nearly doubling the workforce. The country is a living demonstration of European integration.
            </p>
            <p>
              Luxembourg hosts <strong className={heading}>EU institutions</strong> (European Court of Justice, European Investment Bank, parts of the European Commission), making it — along with Brussels and Strasbourg — one of the <strong className={heading}>EU&apos;s three capitals</strong>. It&apos;s also Europe&apos;s <strong className={heading}>#1 investment fund domicile</strong> — over <strong className={heading}>$5.8 trillion</strong> in assets under management.
            </p>
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Three Languages, One Tiny Country</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Luxembourg has <strong className={heading}>three official languages</strong>: <strong className={heading}>Luxembourgish</strong> (L&euml;tzebuergesch — daily conversation), <strong className={heading}>French</strong> (administration, law), and <strong className={heading}>German</strong> (media, early education). Most Luxembourgers speak all three plus <strong className={heading}>English and often Portuguese</strong> (16% of the population is Portuguese).
            </p>
            <p>
              In 2020, Luxembourg became the <strong className={heading}>first country to make all public transport free</strong> — buses, trams, and trains cost nothing for anyone (residents and visitors). The country also has <strong className={heading}>Michelin stars per capita</strong> rivaling France.
            </p>
          </div>
        </div>
      </section>

      {/* Major Locations */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Luxembourg Key Locations — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Luxembourg City', pop: '130K', note: 'Capital, Kirchberg finance, UNESCO' },
              { city: 'Esch-sur-Alzette', pop: '40K', note: '2nd city, steel heritage, university' },
              { city: 'Differdange', pop: '30K', note: '3rd city, ArcelorMittal' },
              { city: 'Kirchberg', pop: '—', note: 'EU district, EIB, ECJ, Amazon EU HQ' },
              { city: 'Clervaux', pop: '5K', note: 'Castle, "Family of Man" UNESCO exhibit' },
              { city: 'Vianden', pop: '2K', note: 'Victor Hugo\'s castle, tourism' },
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
