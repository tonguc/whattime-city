'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function LithuaniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Vilnius', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Vilnius', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Vilnius' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Vilnius' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-yellow-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Lithuania
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-green-400/40">
              {isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU DST Rules</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Vilnius</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Lithuania Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Vilnius' },
              { label: 'Population', value: '~2.8 million' },
              { label: 'Laser Exports', value: '#1 in world — 10% of global laser market' },
              { label: 'Famous For', value: 'Basketball, lasers, fintech, baroque Vilnius' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lithuania vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Lithuania Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">LT Winter (EET)</th>
                  <th className="pb-2">LT Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'LT +7 hrs', summer: 'LT +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'LT +2 hrs', summer: 'LT +2 hrs' },
                  { zone: 'Latvia/Estonia', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Poland (CET/CEST)', winter: 'LT −1 hr', summer: 'LT −1 hr' },
                  { zone: 'Belarus (MSK-like)', winter: 'LT −1 hr', summer: 'Same time!' },
                  { zone: 'Japan (JST)', winter: 'LT −7 hrs', summer: 'LT −6 hrs' },
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

      {/* Laser Capital */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Laser Capital — 10% of Global Production</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Lithuania produces <strong className={heading}>~10% of the world&apos;s scientific and industrial lasers</strong> — more per capita than any other country. Companies like <strong className={heading}>Light Conversion and Ekspla</strong> are global leaders. Lithuanian lasers are used in <strong className={heading}>CERN, NASA, and the Nobel Prize-winning LIGO gravitational wave detector</strong>.
            </p>
            <p>
              This unexpected specialization grew from <strong className={heading}>Soviet-era physics research</strong> at Vilnius University, which pivoted to commercial applications after independence in 1990. Today, Lithuanian laser companies export to <strong className={heading}>90+ countries</strong> — coordinating shipments and technical support across all timezones from their <strong className={heading}>EET base</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Fintech Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Europe&apos;s Fintech Licensing Hub — 130+ EMI Licenses</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Lithuania has issued more <strong className={heading}>electronic money institution (EMI) licenses</strong> than any other EU country — over <strong className={heading}>130 fintech companies</strong> are licensed here, including <strong className={heading}>Revolut&apos;s EU operations</strong>. After Brexit, many UK-based fintechs chose Vilnius for their <strong className={heading}>EU banking license</strong>.
            </p>
            <p>
              The <strong className={heading}>EET timezone</strong> is strategic: Lithuanian fintech teams can support <strong className={heading}>European markets during business hours</strong>, coordinate with <strong className={heading}>UK partners (1 hour behind)</strong>, and handle <strong className={heading}>US East Coast queries</strong> by early afternoon Vilnius time. Lithuania&apos;s <strong className={heading}>Blockchain Centre in Vilnius</strong> was the first government-backed crypto hub in Europe.
            </p>
            <p>
              Basketball is Lithuania&apos;s <strong className={heading}>second religion</strong> — the national team has won <strong className={heading}>3 European Championships and 3 Olympic bronzes</strong>. NBA stars like <strong className={heading}>Arvydas Sabonis and Domantas Sabonis</strong> are national heroes. Game times against US NBA teams require <strong className={heading}>staying up past midnight</strong> in Vilnius.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Lithuania Key Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Vilnius', pop: '590K', note: 'Capital, baroque Old Town UNESCO' },
              { city: 'Kaunas', pop: '290K', note: '2nd city, interwar capital, modernist' },
              { city: 'Klaip\u0117da', pop: '150K', note: 'Port city, Curonian Spit gateway' },
              { city: '\u0160iauliai', pop: '100K', note: 'Hill of Crosses, industrial hub' },
              { city: 'Panev\u0117\u017eys', pop: '85K', note: '5th city, theater tradition' },
              { city: 'Druskininkai', pop: '14K', note: 'Spa resort, Gr\u016btas Park' },
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
