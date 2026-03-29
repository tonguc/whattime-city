'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SriLankaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Colombo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-yellow-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Sri Lanka
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">SLST &middot; UTC+5:30 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Colombo</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Sri Lanka Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'SLST — Sri Lanka Standard Time (UTC+5:30)' },
              { label: 'Same As', value: 'India (IST) — exact same offset' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Colombo' },
              { label: 'Population', value: '~22 million' },
              { label: 'Famous For', value: 'Ceylon tea, cricket, ancient ruins, beaches' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SL vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sri Lanka Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'SL +10:30', summer: 'SL +9:30' },
                  { zone: 'London (GMT/BST)', winter: 'SL +5:30', summer: 'SL +4:30' },
                  { zone: 'India (IST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Dubai (GST)', winter: 'SL −1:30', summer: 'SL −1:30' },
                  { zone: 'Singapore (SGT)', winter: 'SL −2:30', summer: 'SL −2:30' },
                  { zone: 'Japan (JST)', winter: 'SL −3:30', summer: 'SL −3:30' },
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

      {/* Timezone Chaos */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sri Lanka&apos;s Timezone Rollercoaster — 4 Changes Since 1996</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Sri Lanka has one of the <strong className={heading}>most chaotic timezone histories</strong> of any modern country. Until 1996, it used <strong className={heading}>UTC+5:30</strong> (same as India). Then in <strong className={heading}>April 1996</strong>, the government shifted to <strong className={heading}>UTC+6:00</strong> — a full hour ahead of India — reportedly to <strong className={heading}>assert independence</strong> from its larger neighbor.
            </p>
            <p>
              The change was <strong className={heading}>deeply unpopular</strong>. Astrologers complained it ruined horoscope calculations. Businesses hated losing the synchronized clock with India. In <strong className={heading}>October 1996</strong>, Sri Lanka shifted again to <strong className={heading}>UTC+6:30</strong>. Then in <strong className={heading}>April 2006</strong>, it finally returned to <strong className={heading}>UTC+5:30</strong> — exactly where it started a decade earlier.
            </p>
            <p>
              Today, Sri Lanka and India share the <strong className={heading}>exact same time</strong> — despite having separate IANA identifiers (<strong className={heading}>Asia/Colombo vs Asia/Kolkata</strong>). The separate identifiers exist precisely because of Sri Lanka&apos;s <strong className={heading}>10-year timezone adventure</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Ceylon Tea */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Ceylon Tea — The Industry That Runs on Dawn</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Sri Lanka is the <strong className={heading}>world&apos;s 4th largest tea producer</strong> and <strong className={heading}>#1 orthodox tea exporter</strong>. The <strong className={heading}>tea plucking schedule</strong> is dictated by time: <strong className={heading}>best leaves are picked between 6-10 AM</strong> when morning dew has evaporated but before sun stress affects flavor.
            </p>
            <p>
              The <strong className={heading}>hill country plantations</strong> (Nuwara Eliya, Ella, Kandy region at 1,200-2,500m altitude) produce different grades at different elevations. <strong className={heading}>Ceylon tea</strong> is still the country&apos;s <strong className={heading}>largest agricultural export</strong> — over <strong className={heading}>$1.3 billion annually</strong>, shipped to 150+ countries.
            </p>
            <p>
              Sri Lanka&apos;s <strong className={heading}>cricket schedule</strong> also shapes national time perception. As a <strong className={heading}>cricket-obsessed nation</strong>, matches against Australia (UTC+10/11) start at bizarre local hours, while matches against England create prime-time viewing — making timezone awareness a <strong className={heading}>sporting obsession</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Sri Lankan Cities — All on SLST (UTC+5:30)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Colombo', pop: '750K', note: 'Commercial capital, port, finance' },
              { city: 'Sri Jayawardenepura', pop: '120K', note: 'Legislative capital (Kotte)' },
              { city: 'Kandy', pop: '125K', note: 'Cultural capital, Temple of Tooth' },
              { city: 'Galle', pop: '100K', note: 'Dutch Fort UNESCO, cricket ground' },
              { city: 'Jaffna', pop: '90K', note: 'Northern hub, Tamil culture' },
              { city: 'Nuwara Eliya', pop: '30K', note: '"Little England", tea country' },
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
