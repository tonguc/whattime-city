'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function HungaryClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Budapest', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Budapest', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Budapest' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Budapest' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Hungary
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">Thermal Baths Capital</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Budapest</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Hungary Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Budapest' },
              { label: 'Population', value: '~9.6 million' },
              { label: 'EU Member', value: 'Since 2004 — Schengen 2007' },
              { label: 'Famous For', value: 'Thermal baths, Rubik\'s Cube, goulash' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hungary vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hungary Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">HU Winter (CET)</th>
                  <th className="pb-2">HU Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'HU +6 hrs', summer: 'HU +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'HU +9 hrs', summer: 'HU +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'HU +1 hr', summer: 'HU +1 hr' },
                  { zone: 'India (IST)', winter: 'HU −4:30', summer: 'HU −3:30' },
                  { zone: 'Japan (JST)', winter: 'HU −8 hrs', summer: 'HU −7 hrs' },
                  { zone: 'Austria (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Budapest Baths */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Budapest: World&apos;s Only Capital with 120+ Thermal Springs</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Budapest sits on a <strong className={heading}>geological fault line</strong> that produces <strong className={heading}>70 million liters of thermal water daily</strong>. The city has <strong className={heading}>120+ natural hot springs</strong> — more than any other capital city on Earth.
            </p>
            <p>
              The thermal bath culture dates back <strong className={heading}>2,000 years</strong> to the Romans, was expanded by <strong className={heading}>Ottoman Turks</strong> (16th-17th century — the Rudas and Kir&aacute;ly baths still operate), and became a social institution in the Austro-Hungarian era. Today, the <strong className={heading}>Sz&eacute;chenyi Baths</strong> is Europe&apos;s largest thermal bath complex — open year-round, including winter, when steam rises from the outdoor pools into freezing air.
            </p>
            <p>
              For Budapest locals, the thermal bath is what the <em>caf&eacute;</em> is for Parisians or the <em>pub</em> for Londoners — a <strong className={heading}>social institution tied to daily rhythm</strong>. Many regulars visit before work (baths open at <strong className={heading}>6:00 AM</strong>) or after.
            </p>
          </div>
        </div>
      </section>

      {/* Inventions */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Hungarian Inventions That Changed the World</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Hungary has produced an extraordinary number of groundbreaking inventions for its size. <strong className={heading}>Ern\u0151 Rubik</strong> invented the <strong className={heading}>Rubik&apos;s Cube</strong> in Budapest in 1974 — it became the world&apos;s best-selling puzzle toy (450M+ sold). <strong className={heading}>L&aacute;szl&oacute; B&iacute;r&oacute;</strong> invented the <strong className={heading}>ballpoint pen</strong> (in Spanish, pens are still called &ldquo;bir&oacute;me&rdquo;).
            </p>
            <p>
              <strong className={heading}>John von Neumann</strong> (Budapest-born) created the architecture underlying every modern computer. <strong className={heading}>Dennis Gabor</strong> invented holography (Nobel Prize). <strong className={heading}>Albert Szent-Gy&ouml;rgyi</strong> discovered Vitamin C. Hungary has <strong className={heading}>13 Nobel Prize winners</strong> — the most per capita of any country.
            </p>
            <p>
              Today Budapest is a growing <strong className={heading}>tech hub</strong> with companies like <strong className={heading}>Prezi</strong> (presentation software, founded in Budapest), <strong className={heading}>LogMeIn/GoTo</strong>, and major R&amp;D centers for <strong className={heading}>Microsoft, Ericsson, and Nokia</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Hungarian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Budapest', pop: '1.8M', note: 'Capital, thermal baths, Prezi HQ' },
              { city: 'Debrecen', pop: '200K', note: '2nd city, IT center, BMW factory' },
              { city: 'Szeged', pop: '160K', note: 'University city, "City of Sunshine"' },
              { city: 'Miskolc', pop: '155K', note: 'Cave bath, industrial heritage' },
              { city: 'P\u00e9cs', pop: '145K', note: 'Cultural capital, Ottoman heritage' },
              { city: 'Gy\u0151r', pop: '135K', note: 'Audi engine factory, baroque center' },
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
