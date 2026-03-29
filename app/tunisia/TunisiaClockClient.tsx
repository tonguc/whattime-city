'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TunisiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Tunis', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Tunisia</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/30">CET &middot; UTC+1 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Tunis</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Tunisia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET — Central European Time (UTC+1)' },
              { label: 'DST Status', value: 'Abolished 2009 — used intermittently before' },
              { label: 'IANA Identifier', value: 'Africa/Tunis' },
              { label: 'Population', value: '~12 million' },
              { label: 'Arab Spring', value: 'Started here — Dec 2010, birthplace of change' },
              { label: 'Famous For', value: 'Carthage, Star Wars filming, Mediterranean' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Africa on European Time — Tunisia&apos;s CET Advantage</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Tunisia uses <strong className={heading}>CET (UTC+1)</strong> — the <strong className={heading}>same timezone as Paris, Berlin, and Rome</strong> — despite being in <strong className={heading}>North Africa</strong>. This is no coincidence: Tunisia&apos;s economy is deeply tied to <strong className={heading}>France and Italy</strong> (former colonial power + nearest EU neighbor). The <strong className={heading}>shared clock eliminates timezone friction</strong> for business.
            </p>
            <p>
              Tunisia is the <strong className={heading}>closest African country to Europe</strong> — just <strong className={heading}>140 km from Sicily</strong>. This proximity + CET timezone makes Tunisia a major <strong className={heading}>nearshoring destination</strong> for French companies. Over <strong className={heading}>1,300 French companies</strong> operate in Tunisia, taking advantage of <strong className={heading}>French-speaking talent on the same clock</strong>.
            </p>
            <p>
              <strong className={heading}>Tatooine</strong> — the famous Star Wars planet — is named after the <strong className={heading}>real Tunisian town of Tataouine</strong>. Multiple Star Wars filming locations (Mos Espa, Lars Homestead) still stand in the Tunisian desert.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Tunisia Key Cities — All on CET (UTC+1)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tunis', pop: '2.7M metro', note: 'Capital, Carthage ruins, medina' },
              { city: 'Sfax', pop: '600K', note: '2nd city, industrial, olive oil' },
              { city: 'Sousse', pop: '270K', note: 'Tourism hub, "Pearl of the Sahel"' },
              { city: 'Djerba', pop: '170K', note: 'Island, Star Wars, synagogue' },
              { city: 'Kairouan', pop: '120K', note: 'Holy city, Great Mosque, UNESCO' },
              { city: 'Tozeur', pop: '40K', note: 'Desert oasis, Star Wars filming' },
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
