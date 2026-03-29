'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CostaRicaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Costa_Rica', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Costa_Rica', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Costa Rica
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">CST · UTC-6 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — &ldquo;Pura Vida&rdquo;</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">San Jos&eacute;</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Costa Rica Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CST — Central Standard Time (UTC-6)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'America/Costa_Rica' },
              { label: 'Population', value: '~5.2 million' },
              { label: 'No Army', value: 'Abolished in 1948 — unique worldwide' },
              { label: 'Famous For', value: '99% renewable energy, Pura Vida, ecotourism' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costa Rica vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Costa Rica Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'CR +1 hr', summer: 'CR +2 hrs behind' },
                  { zone: 'Los Angeles (PT)', winter: 'CR −2 hrs', summer: 'CR −1 hr' },
                  { zone: 'Chicago (CT)', winter: 'Same time!', summer: 'CR +1 hr behind' },
                  { zone: 'London (GMT/BST)', winter: 'CR −6 hrs', summer: 'CR −7 hrs' },
                  { zone: 'Panama (EST)', winter: 'CR +1 hr behind', summer: 'CR +1 hr behind' },
                  { zone: 'Colombia (COT)', winter: 'CR +1 hr behind', summer: 'CR +1 hr behind' },
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

      {/* Pura Vida */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>&ldquo;Pura Vida&rdquo; — Costa Rica&apos;s Philosophy of Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>&ldquo;Pura Vida&rdquo;</strong> (pure life) is Costa Rica&apos;s national motto and daily greeting — it means hello, goodbye, &ldquo;life is good,&rdquo; and &ldquo;don&apos;t worry.&rdquo; It reflects a <strong className={heading}>deeply relaxed approach to time</strong>. Costa Ricans (Ticos) are famously unhurried — &ldquo;Tico time&rdquo; means events start <strong className={heading}>15-30 minutes late</strong> as a cultural norm.
            </p>
            <p>
              Despite this relaxed culture, Costa Rica is a <strong className={heading}>powerhouse of sustainability</strong>: over <strong className={heading}>99% of electricity comes from renewables</strong> (hydro, geothermal, wind, solar). The country has <strong className={heading}>doubled its forest cover</strong> since the 1980s through aggressive reforestation. Costa Rica is the <strong className={heading}>only tropical country to reverse deforestation</strong>.
            </p>
            <p>
              Costa Rica abolished its <strong className={heading}>military in 1948</strong> — redirecting defense spending to education and healthcare. Life expectancy is <strong className={heading}>80+ years</strong> (higher than the US), and the <strong className={heading}>Nicoya Peninsula</strong> is one of the world&apos;s 5 &ldquo;Blue Zones&rdquo; where people regularly live past 100.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Digital Nomad Paradise & US Nearshoring Hub</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Costa Rica&apos;s <strong className={heading}>CST timezone (UTC-6)</strong> aligns with <strong className={heading}>US Central Time in winter</strong> and is only 1-2 hours behind the US East Coast — making it ideal for <strong className={heading}>remote workers and nearshoring</strong>. Major US companies like <strong className={heading}>Intel, HP, Amazon, and Procter &amp; Gamble</strong> have operations here.
            </p>
            <p>
              The <strong className={heading}>Digital Nomads visa</strong> (introduced 2021) offers 1-year stays for remote workers earning $3,000+/month. Popular bases: <strong className={heading}>Tamarindo</strong> (surf + work), <strong className={heading}>Santa Teresa</strong> (yoga + tech), and <strong className={heading}>San Jos&eacute;</strong> (urban, fast internet). Costa Rica offers <strong className={heading}>universal healthcare</strong> accessible to residents.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Costa Rican Cities — All on CST (UTC-6)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'San Jos\u00e9', pop: '1.4M metro', note: 'Capital, tech hub, central valley' },
              { city: 'Alajuela', pop: '300K', note: 'Near airport, Intel operations' },
              { city: 'Cartago', pop: '160K', note: 'Former capital, Basílica pilgrimage' },
              { city: 'Liberia', pop: '70K', note: 'Guanacaste hub, beach gateway' },
              { city: 'Puerto Lim\u00f3n', pop: '65K', note: 'Caribbean coast, Afro-Costa Rican culture' },
              { city: 'Tamarindo', pop: '10K', note: 'Surf mecca, digital nomad hotspot' },
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
