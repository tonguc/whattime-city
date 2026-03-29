'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function RomaniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Bucharest', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Bucharest', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Bucharest' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Bucharest' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Romania
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400/30">Europe&apos;s IT Outsourcing Star</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Bucharest</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Romania Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Bucharest' },
              { label: 'Population', value: '~19 million' },
              { label: 'EU Member', value: 'Since 2007 — Schengen air 2024' },
              { label: 'Famous For', value: 'Dracula, Carpathians, IT talent, UiPath' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Romania vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Romania Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">RO Winter (EET)</th>
                  <th className="pb-2">RO Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'RO +7 hrs', summer: 'RO +7 hrs' },
                  { zone: 'San Francisco (PT)', winter: 'RO +10 hrs', summer: 'RO +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'RO +2 hrs', summer: 'RO +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'RO +1 hr', summer: 'RO +1 hr' },
                  { zone: 'India (IST)', winter: 'RO −3:30', summer: 'RO −2:30' },
                  { zone: 'Moldova (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
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

      {/* IT Powerhouse */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Romania: Europe&apos;s Hidden IT Superpower</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Romania has quietly become one of <strong className={heading}>Europe&apos;s largest IT outsourcing hubs</strong>. Over <strong className={heading}>200,000 IT professionals</strong> work in the sector — producing a disproportionate number of world-class developers relative to population.
            </p>
            <p>
              <strong className={heading}>UiPath</strong> — the world&apos;s leading RPA (Robotic Process Automation) company valued at ~$7B — was founded in <strong className={heading}>Bucharest by Daniel Dines</strong>. Romania also hosts major engineering offices for <strong className={heading}>Microsoft, Google, Amazon, Oracle, IBM, and Endava</strong>.
            </p>
            <p>
              The timezone advantage: EET gives Romania <strong className={heading}>full overlap with Western European clients</strong> (just 1 hour ahead) while maintaining a <strong className={heading}>morning window with US East Coast</strong> (afternoons in Romania). Rates are <strong className={heading}>40-60% lower than Western Europe</strong> — making Romania the sweet spot for EU-based outsourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Dracula & Transylvania */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Transylvania, Dracula & Romania&apos;s Timezone History</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Romania&apos;s most famous export is <strong className={heading}>Count Dracula</strong> — Bram Stoker&apos;s 1897 novel was inspired by <strong className={heading}>Vlad III &ldquo;the Impaler&rdquo;</strong> and set in Transylvania. Today, <strong className={heading}>Bran Castle</strong> draws 800,000+ tourists annually — despite Vlad likely never living there.
            </p>
            <p>
              Romania adopted <strong className={heading}>EET (UTC+2) in 1931</strong> under the standard timezone system. Before that, Bucharest used its own local mean time. The Transylvania region (historically part of <strong className={heading}>Austria-Hungary</strong>) was on CET before unification — so parts of Romania shifted a full hour forward when they joined.
            </p>
            <p>
              Romania has some of Europe&apos;s <strong className={heading}>fastest internet speeds</strong> (consistently top 5 globally). This is partly because communist-era infrastructure was so poor that Romania <strong className={heading}>skipped copper and went straight to fiber</strong> in the 2000s — a leapfrog effect similar to Africa&apos;s mobile banking revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Romanian Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bucharest', pop: '2.1M', note: 'Capital, UiPath HQ, IT hub' },
              { city: 'Cluj-Napoca', pop: '330K', note: '"Silicon Valley of Romania", Bosch R&D' },
              { city: 'Timi\u0219oara', pop: '320K', note: '1989 revolution birthplace, IT center' },
              { city: 'Ia\u0219i', pop: '310K', note: 'Cultural capital, Amazon & Continental' },
              { city: 'Constan\u021ba', pop: '285K', note: 'Black Sea port, largest EU port' },
              { city: 'Bra\u0219ov', pop: '255K', note: 'Carpathian hub, near Bran Castle' },
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
