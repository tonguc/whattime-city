'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IrelandClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Dublin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Dublin', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Dublin' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Dublin' })
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
            Current Time in Ireland
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">
              {isDST ? 'IST · UTC+1' : 'GMT · UTC+0'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Europe&apos;s Tech Capital</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Dublin</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Ireland Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Winter Time', value: 'GMT (UTC+0) — same as London' },
              { label: 'Summer Time', value: 'IST (UTC+1) — Irish Standard Time' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Dublin' },
              { label: 'Population', value: '~5.1 million (Republic)' },
              { label: 'Legal Quirk', value: 'IST is the "standard" — GMT is the exception!' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ireland vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ireland Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Ireland matches UK time exactly. Its GMT/IST position makes it a unique bridge between US and European business hours.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">IE Winter (GMT)</th>
                  <th className="pb-2">IE Summer (IST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'IE +5 hrs', summer: 'IE +5 hrs' },
                  { zone: 'San Francisco (PT)', winter: 'IE +8 hrs', summer: 'IE +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Berlin (CET/CEST)', winter: 'IE −1 hr', summer: 'IE −1 hr' },
                  { zone: 'India (IST)', winter: 'IE −5:30', summer: 'IE −4:30' },
                  { zone: 'Japan (JST)', winter: 'IE −9 hrs', summer: 'IE −8 hrs' },
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

      {/* IST Legal Quirk */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ireland&apos;s IST Paradox — The Only Country Where Summer Time Is &ldquo;Standard&rdquo;</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Here&apos;s a bizarre legal fact: under Irish law (<strong className={heading}>Standard Time Act 1968</strong>), <strong className={heading}>IST (Irish Standard Time, UTC+1)</strong> is legally the &ldquo;standard&rdquo; time. GMT (UTC+0) is technically the <strong className={heading}>exception</strong> — a winter deviation from the standard.
            </p>
            <p>
              This is the <strong className={heading}>reverse of every other country</strong>. Most countries define winter time as &ldquo;standard&rdquo; and summer as the deviation. Ireland legally defines summer time as standard and &ldquo;falls back&rdquo; from it. The practical effect is identical to the UK — but the legal framing is unique in the world.
            </p>
            <p>
              Confusingly, Ireland&apos;s IST abbreviation clashes with <strong className={heading}>India&apos;s IST (Indian Standard Time)</strong> — making &ldquo;IST&rdquo; one of the most ambiguous timezone abbreviations globally.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dublin: The Silicon Docks — Europe&apos;s US Tech HQ</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Dublin&apos;s <strong className={heading}>Silicon Docks</strong> district hosts the European headquarters of <strong className={heading}>Google, Meta, Apple, Microsoft, Amazon, Stripe, Airbnb, X (Twitter), TikTok, LinkedIn</strong>, and dozens more US tech giants. Ireland&apos;s <strong className={heading}>12.5% corporate tax rate</strong> (now 15% for large multinationals under OECD rules) was the initial draw — but timezone plays a key role too.
            </p>
            <p>
              Dublin&apos;s <strong className={heading}>GMT/IST position</strong> provides the <strong className={heading}>best US-Europe overlap</strong> of any major tech hub: Irish teams can have morning standups with US Pacific at <strong className={heading}>5 PM Dublin / 9 AM SF</strong>, and still be online for European markets all day. No other European capital offers this much US overlap.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className={heading}>Google&apos;s EMEA HQ</strong> — 8,000+ employees in Dublin</li>
              <li><strong className={heading}>Meta&apos;s EMEA HQ</strong> — handles EU data & policy</li>
              <li><strong className={heading}>Stripe</strong> — co-founded by Irish brothers (Limerick), Dublin office</li>
              <li><strong className={heading}>Intercom, Workhuman, Fenergo</strong> — Irish-founded unicorns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Irish Cities — All on GMT/IST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Dublin', pop: '1.4M metro', note: 'Capital, Silicon Docks, tech HQ' },
              { city: 'Cork', pop: '210K', note: 'Southern hub, Apple EU operations' },
              { city: 'Galway', pop: '85K', note: 'West coast, Medtronic, arts capital' },
              { city: 'Limerick', pop: '100K', note: 'Shannon region, Stripe founders\' city' },
              { city: 'Waterford', pop: '55K', note: 'Oldest city (914 AD), crystal heritage' },
              { city: 'Belfast', pop: '345K', note: 'Northern Ireland (UK), same timezone' },
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
