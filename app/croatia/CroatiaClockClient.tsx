'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CroatiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Zagreb', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Zagreb', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Zagreb' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Zagreb' })
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
            Current Time in Croatia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">Adriatic Pearl</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Zagreb</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Croatia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Zagreb' },
              { label: 'Population', value: '~3.9 million' },
              { label: 'EU & Schengen', value: 'EU 2013, Euro & Schengen 2023' },
              { label: 'Coastline', value: '1,777 km + 1,246 islands' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Croatia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Croatia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">HR Winter (CET)</th>
                  <th className="pb-2">HR Summer (CEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'HR +6 hrs', summer: 'HR +6 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'HR +9 hrs', summer: 'HR +9 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'HR +1 hr', summer: 'HR +1 hr' },
                  { zone: 'India (IST)', winter: 'HR −4:30', summer: 'HR −3:30' },
                  { zone: 'Australia (AEST)', winter: 'HR −10 hrs', summer: 'HR −8 hrs' },
                  { zone: 'Italy (CET/CEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* Dalmatian Coast */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Dalmatian Coast — Where Summer Time Really Matters</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Croatia&apos;s <strong className={heading}>1,777 km Adriatic coastline</strong> with <strong className={heading}>1,246 islands</strong> makes it one of Europe&apos;s premier summer destinations. During CEST (summer time), sunset in Dubrovnik is around <strong className={heading}>8:30 PM</strong> — perfect for the famous <strong className={heading}>Stradun evening promenade</strong>.
            </p>
            <p>
              The coast&apos;s rhythm is distinctly Mediterranean: mornings at the beach, lunch around <strong className={heading}>1:00-2:00 PM</strong>, afternoon rest during peak heat (<strong className={heading}>2:00-5:00 PM</strong>), then the real social life begins in the <strong className={heading}>golden hour (5:00-8:00 PM)</strong>. Dinner rarely starts before <strong className={heading}>8:00 PM</strong> in summer.
            </p>
            <p>
              <strong className={heading}>Dubrovnik</strong> gained global fame as the filming location for <strong className={heading}>King&apos;s Landing in Game of Thrones</strong> — tourism surged so dramatically that the city had to implement <strong className={heading}>visitor caps</strong> to protect the UNESCO-listed Old Town.
            </p>
          </div>
        </div>
      </section>

      {/* Nikola Tesla */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Nikola Tesla&apos;s Homeland & Croatia&apos;s Innovation Spirit</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Nikola Tesla</strong> — the inventor of AC power, the Tesla coil, and foundational radio technology — was born in <strong className={heading}>Smiljan, Croatia</strong> (then Austrian Empire) in 1856. The Tesla memorial center in Smiljan is a pilgrimage site for engineers worldwide.
            </p>
            <p>
              Croatia also gave the world the <strong className={heading}>necktie</strong> (Croatian: <em>kravata</em> — French soldiers saw Croatian mercenaries&apos; neckwear in the 17th century and named it <em>cravate</em>), the <strong className={heading}>torpedo</strong> (invented by Giovanni Lupis in Rijeka), and the <strong className={heading}>mechanical pencil</strong> (Slavoljub Penkala).
            </p>
            <p>
              Today, Croatia&apos;s tech scene is growing: <strong className={heading}>Rimac Automobili</strong> (Mate Rimac) produces the world&apos;s fastest electric hypercar and now controls <strong className={heading}>Bugatti</strong>. <strong className={heading}>Infobip</strong> (Vodnjan) is a $1B+ cloud communications unicorn. Zagreb&apos;s tech community is small but punches above its weight.
            </p>
          </div>
        </div>
      </section>

      {/* Euro 2023 */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>2023: Euro, Schengen & Croatia&apos;s European Integration</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              January 1, 2023 was a landmark date: Croatia simultaneously joined the <strong className={heading}>Eurozone</strong> (adopting the Euro, replacing the Kuna) and the <strong className={heading}>Schengen Area</strong>. This made Croatia the <strong className={heading}>20th Eurozone member</strong> and removed border checks with EU neighbors.
            </p>
            <p>
              For a country of just <strong className={heading}>3.9 million people</strong>, Croatia has an outsized cultural footprint: <strong className={heading}>FIFA World Cup 2018 finalist</strong> (3rd place 2022), <strong className={heading}>Dubrovnik&apos;s Game of Thrones fame</strong>, and a tourism industry that accounts for <strong className={heading}>~20% of GDP</strong> — one of the highest ratios in Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Croatian Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Zagreb', pop: '810K', note: 'Capital, tech hub, Rimac HQ' },
              { city: 'Split', pop: '180K', note: 'Diocletian\'s Palace, Adriatic hub' },
              { city: 'Rijeka', pop: '130K', note: '3rd city, port, European Capital of Culture 2020' },
              { city: 'Dubrovnik', pop: '44K', note: 'UNESCO, Game of Thrones, "Pearl of Adriatic"' },
              { city: 'Osijek', pop: '105K', note: 'Eastern hub, Slavonia, continental' },
              { city: 'Zadar', pop: '75K', note: 'Sea Organ, Sun Salutation, Roman ruins' },
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
