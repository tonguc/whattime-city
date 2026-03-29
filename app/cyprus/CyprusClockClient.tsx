'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CyprusClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Nicosia', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Nicosia', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Asia/Nicosia' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Asia/Nicosia' })
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
        <div className="rounded-2xl text-white p-6 text-center bg-emerald-600">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Cyprus
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-blue-400/40">
              {isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU DST Rules</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Nicosia</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Cyprus Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Asia/Nicosia' },
              { label: 'Population', value: '~1.2 million' },
              { label: 'Divided Island', value: 'North uses Turkey time (UTC+3 permanent)' },
              { label: 'Famous For', value: 'Aphrodite, halloumi, Mediterranean sun' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyprus vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Cyprus Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">CY Winter (EET)</th>
                  <th className="pb-2">CY Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'CY +7 hrs', summer: 'CY +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'CY +2 hrs', summer: 'CY +2 hrs' },
                  { zone: 'Greece (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Turkey (TRT)', winter: 'CY −1 hr', summer: 'Same time!' },
                  { zone: 'Israel (IST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Dubai (GST)', winter: 'CY −2 hrs', summer: 'CY −1 hr' },
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

      {/* Divided Timezones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>One Island, Two Timezones — The Nicosia Divide</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Cyprus is the <strong className={heading}>only EU member state with its capital divided by a timezone border</strong>. The Republic of Cyprus (south) uses <strong className={heading}>EET/EEST (UTC+2/+3)</strong> following EU rules. Northern Cyprus uses <strong className={heading}>Turkey Time (TRT, UTC+3 permanent)</strong> — no DST.
            </p>
            <p>
              During <strong className={heading}>winter months</strong>, crossing the <strong className={heading}>Green Line</strong> in central Nicosia means jumping <strong className={heading}>1 hour forward</strong> into Northern Cyprus. In summer, both sides are on UTC+3 — the <strong className={heading}>only time the island is synchronized</strong>. This creates unique situations: a meeting at &ldquo;3 PM&rdquo; could mean different things depending on which side you&apos;re on.
            </p>
            <p>
              Despite being <strong className={heading}>geographically in Asia</strong> (east of Istanbul), Cyprus is politically European — an <strong className={heading}>EU member since 2004</strong> using the <strong className={heading}>Euro</strong>. Its IANA timezone is <strong className={heading}>Asia/Nicosia</strong> (not Europe/) — one of the few EU countries in the Asia/ timezone namespace.
            </p>
          </div>
        </div>
      </section>

      {/* Business Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mediterranean Business Hub — Where Europe Meets the Middle East</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Cyprus has become a major <strong className={heading}>tech and shipping hub</strong>, leveraging its timezone position between Europe and the Middle East. The <strong className={heading}>EET timezone (UTC+2)</strong> gives Cyprus a <strong className={heading}>2-hour head start on London</strong> — markets open earlier, and there&apos;s overlap with both <strong className={heading}>Asian afternoon sessions and US morning sessions</strong>.
            </p>
            <p>
              <strong className={heading}>Limassol</strong> is the world&apos;s <strong className={heading}>largest ship management center</strong> — managing over <strong className={heading}>20% of the world&apos;s merchant fleet</strong> by tonnage. The city hosts <strong className={heading}>200+ shipping companies</strong> that coordinate global vessel movements across all timezones.
            </p>
            <p>
              Cyprus has also attracted a <strong className={heading}>massive forex and fintech industry</strong> — over <strong className={heading}>200 regulated forex brokers</strong> operate from Limassol and Nicosia, taking advantage of the <strong className={heading}>EU regulatory passport</strong> and the timezone overlap with <strong className={heading}>Middle Eastern and Asian trading hours</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Cyprus Key Cities — EET/EEST (UTC+2/+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Nicosia', pop: '340K', note: 'Capital, divided, last divided capital' },
              { city: 'Limassol', pop: '240K', note: 'Business hub, shipping, fintech' },
              { city: 'Larnaca', pop: '85K', note: 'Airport city, Hala Sultan Tekke' },
              { city: 'Paphos', pop: '65K', note: 'Aphrodite\'s birthplace, UNESCO' },
              { city: 'Famagusta', pop: '50K', note: 'Ghost city (Varosha), Northern CY' },
              { city: 'Kyrenia', pop: '35K', note: 'Harbor town, Northern CY, castles' },
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
