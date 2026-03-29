'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function AfghanistanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kabul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Kabul', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Afghanistan</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">AFT &middot; UTC+4:30</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Kabul</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Afghanistan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'AFT — Afghanistan Time (UTC+4:30)' },
              { label: 'DST Status', value: 'Never observed DST' },
              { label: 'IANA Identifier', value: 'Asia/Kabul' },
              { label: 'Offset Type', value: 'Half-hour offset — one of only ~10 worldwide' },
              { label: 'Population', value: '~40 million' },
              { label: 'Calendar', value: 'Solar Hijri (Persian calendar) — year ~1404' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UTC+4:30 — Afghanistan&apos;s Unique Half-Hour Offset</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Afghanistan uses <strong className={heading}>UTC+4:30</strong> — a <strong className={heading}>half-hour offset</strong> shared by very few places on Earth. This puts Afghanistan <strong className={heading}>30 minutes ahead of the UAE (UTC+4)</strong> and <strong className={heading}>1 hour behind Pakistan (UTC+5)</strong>. The offset was chosen to align with Kabul&apos;s <strong className={heading}>solar noon</strong> more accurately than a whole-hour zone would.
            </p>
            <p>
              Afghanistan uses the <strong className={heading}>Solar Hijri calendar (Shamsi)</strong> — a solar calendar starting from the Prophet Muhammad&apos;s migration. The current year is approximately <strong className={heading}>1404 SH</strong>. The Afghan New Year (<strong className={heading}>Nowruz</strong>) falls on <strong className={heading}>March 20-21</strong>, celebrated with the spring equinox — one of the world&apos;s oldest holidays.
            </p>
            <p>
              Afghanistan sits at a <strong className={heading}>geographic crossroads</strong> between Central Asia, South Asia, and the Middle East. The <strong className={heading}>Wakhan Corridor</strong> — a narrow strip of land — gives Afghanistan a <strong className={heading}>border with China</strong>, making it one of the few countries connecting four distinct cultural-timezone regions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Afghanistan Key Cities — All on AFT (UTC+4:30)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kabul', pop: '4.6M', note: 'Capital, 3,500m elevation, ancient Silk Road' },
              { city: 'Kandahar', pop: '615K', note: '2nd city, southern hub, founded by Alexander' },
              { city: 'Herat', pop: '575K', note: 'Western city, Persian culture, citadel' },
              { city: 'Mazar-i-Sharif', pop: '470K', note: 'Blue Mosque, northern hub, trade' },
              { city: 'Jalalabad', pop: '360K', note: 'Eastern city, Khyber Pass gateway' },
              { city: 'Bamyan', pop: '100K', note: 'Buddha statues site, Band-e-Amir lakes' },
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
