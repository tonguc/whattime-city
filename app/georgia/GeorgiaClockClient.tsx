'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function GeorgiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tbilisi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Tbilisi', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-amber-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Georgia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">GET · UTC+4 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Tbilisi</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Georgia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GET — Georgia Standard Time (UTC+4)' },
              { label: 'DST Status', value: 'Abolished in 2005' },
              { label: 'IANA Identifier', value: 'Asia/Tbilisi' },
              { label: 'Population', value: '~3.7 million' },
              { label: 'Alphabet', value: 'Unique Georgian script (33 letters)' },
              { label: 'Famous For', value: 'Wine birthplace, supra feasts, Caucasus' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Georgia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Georgia Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Georgia is on UTC+4 permanently — same as Dubai and Baku, 1 hour ahead of Moscow.
          </p>
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
                  { zone: 'New York (ET)', winter: 'GE +9 hrs', summer: 'GE +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'GE +4 hrs', summer: 'GE +3 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'GE +3 hrs', summer: 'GE +2 hrs' },
                  { zone: 'Moscow (MSK)', winter: 'GE +1 hr', summer: 'GE +1 hr' },
                  { zone: 'Dubai (GST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'India (IST)', winter: 'GE −1:30', summer: 'GE −1:30' },
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

      {/* Wine Birthplace */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>8,000 Years of Wine — The World&apos;s Oldest Winemaking Tradition</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Georgia is the <strong className={heading}>birthplace of wine</strong> — archaeological evidence shows grape cultivation and winemaking here <strong className={heading}>8,000 years ago</strong> (6000 BC). The Georgian word <strong className={heading}>&ldquo;ghvino&rdquo;</strong> is believed to be the origin of the English word &ldquo;wine.&rdquo;
            </p>
            <p>
              Traditional Georgian wine is fermented in <strong className={heading}>qvevri</strong> — large clay vessels buried underground. This ancient method was added to the <strong className={heading}>UNESCO Intangible Cultural Heritage</strong> list in 2013. Georgia has over <strong className={heading}>525 indigenous grape varieties</strong> — more than France, Italy, and Spain combined.
            </p>
            <p>
              Wine is central to the <strong className={heading}>supra</strong> — Georgia&apos;s legendary multi-course feast led by a <strong className={heading}>tamada (toastmaster)</strong>. Supras can last <strong className={heading}>5-8 hours</strong>, with dozens of toasts, songs, and courses. It&apos;s not uncommon for a supra to start at dinner time and end well past midnight.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Georgia&apos;s Digital Nomad Boom & Timezone Sweet Spot</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Since 2020, Georgia has become a <strong className={heading}>top digital nomad destination</strong>. The &ldquo;Remotely from Georgia&rdquo; program offers <strong className={heading}>1-year visas for remote workers</strong>. Tbilisi offers fast internet, affordable cost of living (~$1,000/month), incredible food, and a vibrant café culture.
            </p>
            <p>
              The <strong className={heading}>UTC+4 timezone</strong> is a sweet spot: <strong className={heading}>European morning overlap</strong> (Georgia&apos;s 10 AM = Berlin 8 AM), <strong className={heading}>some US East Coast overlap</strong> (Georgia&apos;s 5 PM = NYC 9 AM in winter), and full overlap with <strong className={heading}>Middle Eastern and Central Asian markets</strong>.
            </p>
            <p>
              Not to be confused with the <strong className={heading}>US state of Georgia</strong> (which uses Eastern Time, UTC-5) — a <strong className={heading}>9-hour difference</strong>! When it&apos;s noon in Tbilisi, it&apos;s 3 AM in Atlanta.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Georgian Cities — All on GET (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tbilisi', pop: '1.2M', note: 'Capital, sulfur baths, tech hub' },
              { city: 'Batumi', pop: '170K', note: 'Black Sea coast, casinos, modern towers' },
              { city: 'Kutaisi', pop: '150K', note: 'Ancient capital, UNESCO sites' },
              { city: 'Rustavi', pop: '125K', note: 'Industrial city, near Tbilisi' },
              { city: 'Gori', pop: '50K', note: 'Stalin\'s birthplace, central Georgia' },
              { city: 'Zugdidi', pop: '45K', note: 'Western hub, near Svaneti mountains' },
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
