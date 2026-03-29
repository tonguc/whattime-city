'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MoroccoClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Casablanca', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Morocco
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">UTC+1 (Permanent)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Reverse DST During Ramadan</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Casablanca</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Morocco Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Current Offset', value: 'UTC+1 (permanent since 2018)' },
              { label: 'Ramadan Exception', value: 'Clocks go BACK to UTC+0 during Ramadan' },
              { label: 'Geographic Zone', value: 'Should be UTC+0 (same longitude as UK)' },
              { label: 'IANA Identifier', value: 'Africa/Casablanca' },
              { label: 'Population', value: '~37 million' },
              { label: 'Same Offset As', value: 'CET (France, Germany) — but NOT EU DST' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morocco vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Morocco Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Morocco is normally on UTC+1, but reverts to UTC+0 during Ramadan. Outside Ramadan, it matches CET.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">Normal (UTC+1)</th>
                  <th className="pb-2">Ramadan (UTC+0)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET winter)', normal: 'Morocco +6 hrs', ramadan: 'Morocco +5 hrs' },
                  { zone: 'London (GMT)', normal: 'Morocco +1 hr', ramadan: 'Same as Morocco' },
                  { zone: 'Paris (CET)', normal: 'Same as Morocco', ramadan: 'Morocco −1 hr' },
                  { zone: 'Dubai (GST)', normal: 'Morocco −3 hrs', ramadan: 'Morocco −4 hrs' },
                  { zone: 'India (IST)', normal: 'Morocco −4:30', ramadan: 'Morocco −5:30' },
                ].map(({ zone, normal, ramadan }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{normal}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{ramadan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reverse DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Morocco&apos;s &ldquo;Reverse DST&rdquo; — The World&apos;s Strangest Clock Rule</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Morocco has the <strong className={heading}>most unusual DST system in the world</strong>. In <strong className={heading}>2018</strong>, the government permanently adopted UTC+1 (previously summer time). But there&apos;s a catch: during <strong className={heading}>Ramadan</strong>, clocks go <strong className={heading}>BACK one hour to UTC+0</strong>.
            </p>
            <p>
              This is <strong className={heading}>&ldquo;reverse DST&rdquo;</strong> — most countries spring forward and fall back seasonally; Morocco falls back for a religious month and springs forward after. The goal: make fasting hours shorter by ensuring sunrise comes an hour earlier on the clock.
            </p>
            <p>
              Since Ramadan follows the <strong className={heading}>Islamic lunar calendar</strong> (shifting ~11 days earlier each year), the dates of Morocco&apos;s clock changes are <strong className={heading}>different every year</strong> and announced by royal decree. This creates a <strong className={heading}>nightmare for timezone database maintainers</strong> — Morocco&apos;s IANA entry is one of the most frequently updated.
            </p>
            <p>
              In a typical year, Moroccans change their clocks <strong className={heading}>4 times</strong>: back for Ramadan start, forward for Ramadan end. No other country does this.
            </p>
          </div>
        </div>
      </section>

      {/* Nearshoring Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Morocco: Africa&apos;s Francophone Tech Hub</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Morocco&apos;s <strong className={heading}>UTC+1 alignment with France</strong> (its largest trade partner) has made it a growing <strong className={heading}>nearshoring destination</strong> for French and European companies. Casablanca&apos;s <strong className={heading}>CasaNearshore</strong> tech park hosts offices for Atos, Capgemini, and CGI.
            </p>
            <p>
              With <strong className={heading}>French-Arabic bilingualism</strong>, competitive costs, and being just <strong className={heading}>14 km from Spain</strong> (across the Strait of Gibraltar), Morocco bridges Europe and Africa in both geography and business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Moroccan Cities — All on UTC+1 (UTC+0 during Ramadan)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Casablanca', pop: '3.7M', note: 'Economic capital, Hassan II Mosque' },
              { city: 'Rabat', pop: '1.9M metro', note: 'Political capital, UNESCO medina' },
              { city: 'Marrakech', pop: '1.3M metro', note: 'Tourism capital, Jemaa el-Fnaa' },
              { city: 'Fes', pop: '1.2M', note: 'Oldest medina, cultural capital' },
              { city: 'Tangier', pop: '1.1M', note: 'Strait of Gibraltar, gateway to Europe' },
              { city: 'Agadir', pop: '600K', note: 'Atlantic beach resort, argan oil' },
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
