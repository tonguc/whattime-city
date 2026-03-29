'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CaliforniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in California</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">{isDST ? 'PDT · UTC-7' : 'PST · UTC-8'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Pacific Time</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">The Golden State</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>California Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'PT — Pacific Time (UTC-8/UTC-7)' },
              { label: 'DST Rule', value: '2nd Sunday Mar → 1st Sunday Nov' },
              { label: 'IANA Identifier', value: 'America/Los_Angeles' },
              { label: 'Population', value: '~39 million — largest US state' },
              { label: 'GDP', value: '$3.6T — world\'s 5th largest economy' },
              { label: 'Famous For', value: 'Silicon Valley, Hollywood, wine, surfing' },
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
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Silicon Valley Time — The World Runs on Pacific</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Silicon Valley</strong> (Apple, Google, Meta, Netflix, Tesla, OpenAI) operates on <strong className={heading}>Pacific Time</strong>. This means the <strong className={heading}>entire global tech industry</strong> effectively follows PT: product launches, earnings calls, and keynotes are timed for <strong className={heading}>10 AM PT</strong> — which is <strong className={heading}>1 PM ET, 6 PM GMT, and 2:30 AM IST (next day)</strong>.
            </p>
            <p>
              California&apos;s <strong className={heading}>$3.6 trillion GDP</strong> makes it the <strong className={heading}>world&apos;s 5th largest economy</strong> — ahead of India and the UK. If California were a country, its <strong className={heading}>Pacific timezone</strong> would be the <strong className={heading}>most economically powerful timezone on Earth</strong>.
            </p>
            <p>
              <strong className={heading}>Hollywood</strong> also sets global entertainment schedules. Award shows (Oscars, Emmys) air at <strong className={heading}>5 PM PT</strong>, which means <strong className={heading}>European audiences watch at 2-3 AM</strong>. Streaming services now release content at <strong className={heading}>12 AM PT</strong> — making Pacific Time the <strong className={heading}>&ldquo;zero hour&rdquo; of global entertainment</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major California Cities — All on PT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Los Angeles', pop: '3.9M', note: 'Hollywood, entertainment capital' },
              { city: 'San Francisco', pop: '870K', note: 'Tech HQ, Golden Gate, startups' },
              { city: 'San Diego', pop: '1.4M', note: 'Navy, biotech, Mexico border' },
              { city: 'San Jose', pop: '1M', note: 'Silicon Valley capital, Apple/Google' },
              { city: 'Sacramento', pop: '520K', note: 'State capital, Central Valley' },
              { city: 'Fresno', pop: '540K', note: 'Agricultural capital, Central Valley' },
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
