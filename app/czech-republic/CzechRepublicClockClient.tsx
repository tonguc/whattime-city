'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CzechRepublicClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Prague', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Prague', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Prague' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Prague' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Czech Republic
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU DST Rules</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Prague</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Czech Republic Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Prague' },
              { label: 'Population', value: '~10.8 million' },
              { label: 'Beer Record', value: '#1 beer consumption per capita in the world' },
              { label: 'Famous For', value: 'Prague, beer, Škoda, Kafka, Bohemian glass' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CZ vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Czech Republic Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">CZ Winter (CET)</th>
                  <th className="pb-2">CZ Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'CZ +6 hrs', summer: 'CZ +6 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'CZ +1 hr', summer: 'CZ +1 hr' },
                  { zone: 'Germany (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Poland (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'CZ −4:30', summer: 'CZ −3:30' },
                  { zone: 'Japan (JST)', winter: 'CZ −8 hrs', summer: 'CZ −7 hrs' },
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

      {/* Prague Astronomical Clock */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Prague&apos;s Astronomical Clock — 600 Years of Telling Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Prague Orloj (Astronomical Clock)</strong>, installed in <strong className={heading}>1410</strong>, is the <strong className={heading}>world&apos;s oldest still-operating astronomical clock</strong>. It displays <strong className={heading}>3 different time systems simultaneously</strong>: Central European Time, Old Czech Time (sunset = 24:00), and Babylonian Time (sunrise = 1st hour).
            </p>
            <p>
              Every hour from 9 AM to 11 PM, the <strong className={heading}>12 Apostles parade</strong> through windows above the clock face. The clock also shows the <strong className={heading}>position of the Sun and Moon through the zodiac</strong>, making it a mechanical planetarium. It&apos;s the <strong className={heading}>most visited tourist attraction in Prague</strong> — roughly <strong className={heading}>6 million visitors</strong> watch its hourly show annually.
            </p>
            <p>
              Czech timekeeping history is rich: the country adopted <strong className={heading}>CET in 1891</strong> along with the Habsburg Empire. During the <strong className={heading}>Nazi occupation (1940-1945)</strong>, Czechoslovakia was forced onto <strong className={heading}>CEST year-round</strong> to match Berlin.
            </p>
          </div>
        </div>
      </section>

      {/* Beer & Industry */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Beer Capital &amp; European Manufacturing Powerhouse</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Czechia consumes <strong className={heading}>~140 liters of beer per person per year</strong> — the <strong className={heading}>world&apos;s highest</strong> for 30+ consecutive years. <strong className={heading}>Pilsner Urquell</strong> (born in Plze&#328; in 1842) invented the <strong className={heading}>pilsner style</strong> that now accounts for ~70% of all beer produced worldwide.
            </p>
            <p>
              The Czech Republic is also Central Europe&apos;s <strong className={heading}>manufacturing powerhouse</strong>: <strong className={heading}>&Scaron;koda Auto</strong> (owned by VW), <strong className={heading}>Avast</strong> (cybersecurity), and a massive <strong className={heading}>automotive supply chain</strong>. The <strong className={heading}>CET timezone</strong> keeps Czech factories synchronized with <strong className={heading}>German automotive giants</strong> (VW, BMW, Mercedes) — just-in-time delivery works seamlessly when you share a clock.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Czech Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Prague', pop: '1.3M', note: 'Capital, Charles Bridge, Kafka city' },
              { city: 'Brno', pop: '380K', note: '2nd city, tech hub, Moravia capital' },
              { city: 'Ostrava', pop: '280K', note: '3rd city, industrial, music scene' },
              { city: 'Plze\u0148', pop: '175K', note: 'Pilsner birthplace, \u0160koda works' },
              { city: 'Liberec', pop: '105K', note: 'Northern Bohemia, Ještěd tower' },
              { city: 'Karlovy Vary', pop: '48K', note: 'Spa capital, film festival' },
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
