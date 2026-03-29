'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AlgeriaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Algiers', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Algeria</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">CET &middot; UTC+1</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Algiers</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Algeria Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET — Central European Time (UTC+1)' },
              { label: 'DST Status', value: 'Abolished — last observed 1981' },
              { label: 'IANA Identifier', value: 'Africa/Algiers' },
              { label: 'Population', value: '~45 million — Africa\'s largest country by area' },
              { label: 'Size', value: '2.38M km² — 10th largest country on Earth' },
              { label: 'Famous For', value: 'Sahara Desert, oil/gas, Casbah, couscous' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Timezone for a Continent-Sized Country</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Algeria is the <strong className={heading}>largest country in Africa</strong> (2.38 million km²) — larger than all of Western Europe combined — yet uses a <strong className={heading}>single timezone: CET (UTC+1)</strong>. The country spans <strong className={heading}>nearly 20 degrees of longitude</strong>, meaning sunrise in the far west (Tindouf) can be <strong className={heading}>over an hour later</strong> than in the eastern border with Tunisia.
            </p>
            <p>
              Like neighboring Tunisia, Algeria uses <strong className={heading}>CET — the same time as Paris, Berlin, and Rome</strong>. This is a legacy of <strong className={heading}>French colonial rule (1830-1962)</strong>. The shared timezone facilitates <strong className={heading}>business with France</strong> — Algeria&apos;s largest trade partner — and the <strong className={heading}>large Algerian diaspora in France (4+ million)</strong>.
            </p>
            <p>
              Algeria is the <strong className={heading}>largest natural gas exporter in Africa</strong> and a top supplier to Europe via pipelines. The <strong className={heading}>Hassi Messaoud oil field</strong> and <strong className={heading}>Hassi R&apos;Mel gas field</strong> in the Sahara are among the world&apos;s largest. Energy contracts and pricing follow <strong className={heading}>CET</strong>, aligning with European energy markets.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Algeria Key Cities — All on CET (UTC+1)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Algiers', pop: '3.9M', note: 'Capital, Casbah UNESCO site, Mediterranean' },
              { city: 'Oran', pop: '900K', note: '2nd city, port, raï music capital' },
              { city: 'Constantine', pop: '450K', note: 'City of Bridges, eastern capital' },
              { city: 'Annaba', pop: '350K', note: 'Steel industry, Mediterranean beaches' },
              { city: 'Tamanrasset', pop: '93K', note: 'Deep Sahara, Tuareg culture, Hoggar' },
              { city: 'Ghardaia', pop: '200K', note: 'M\'zab Valley, UNESCO, desert architecture' },
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
