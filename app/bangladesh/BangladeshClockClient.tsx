'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BangladeshClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Dhaka', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Bangladesh
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">BST · UTC+6 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Dhaka</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bangladesh Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'BST — Bangladesh Standard Time (UTC+6)' },
              { label: 'DST Status', value: 'Tried once (2009) — abandoned after 1 year' },
              { label: 'IANA Identifier', value: 'Asia/Dhaka' },
              { label: 'Population', value: '~175 million' },
              { label: 'Density', value: '~1,265/km² — world\'s most densely populated large country' },
              { label: 'Famous For', value: 'RMG exports, cricket, rivers, Grameen Bank' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangladesh vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bangladesh Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'BD +11 hrs', summer: 'BD +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'BD +6 hrs', summer: 'BD +5 hrs' },
                  { zone: 'India (IST)', winter: 'BD +0:30', summer: 'BD +0:30' },
                  { zone: 'Myanmar (MMT)', winter: 'BD −0:30', summer: 'BD −0:30' },
                  { zone: 'China (CST)', winter: 'BD −2 hrs', summer: 'BD −2 hrs' },
                  { zone: 'Japan (JST)', winter: 'BD −3 hrs', summer: 'BD −3 hrs' },
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

      {/* Failed DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bangladesh&apos;s One-Year DST Disaster (2009)</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              In <strong className={heading}>June 2009</strong>, Bangladesh introduced DST for the first time — advancing clocks by 1 hour to save energy during a severe <strong className={heading}>power crisis</strong>. The experiment lasted exactly <strong className={heading}>one year</strong> before being scrapped in December 2009.
            </p>
            <p>
              The problem: DST clashed with <strong className={heading}>Islamic prayer times</strong> and confused a largely rural population that relied on <strong className={heading}>sunrise/sunset rather than clocks</strong>. Factory workers showed up at wrong times, TV schedules were disrupted, and the energy savings were <strong className={heading}>negligible</strong>. Bangladesh reverted and has stayed on permanent UTC+6 since.
            </p>
          </div>
        </div>
      </section>

      {/* Garment Industry */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s 2nd Largest Garment Exporter — The 24/7 Factories</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Bangladesh is the <strong className={heading}>world&apos;s 2nd largest ready-made garment (RMG) exporter</strong> after China — a <strong className={heading}>$40+ billion industry</strong> employing <strong className={heading}>4+ million workers</strong> (80% women). Brands like <strong className={heading}>H&amp;M, Zara, Uniqlo, and Gap</strong> source heavily from Bangladeshi factories.
            </p>
            <p>
              Dhaka&apos;s garment factories operate <strong className={heading}>near-continuously</strong> to meet global deadlines. The timezone matters: Bangladeshi factory managers coordinate with <strong className={heading}>European buyers (morning in Bangladesh = night in Europe)</strong> and must plan production around <strong className={heading}>shipping schedules</strong> to Chittagong Port — the country&apos;s main export gateway.
            </p>
            <p>
              Bangladesh&apos;s <strong className={heading}>30-minute offset with India (UTC+6 vs UTC+5:30)</strong> creates a minor daily coordination challenge for the many businesses operating across both countries. Despite being neighbors, you always need to check: &ldquo;Is that Dhaka time or Kolkata time?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Rivers & Monsoon */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>175 Million People in a River Delta — Monsoon Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Bangladesh is essentially a <strong className={heading}>giant river delta</strong> — the <strong className={heading}>Ganges, Brahmaputra, and Meghna</strong> rivers converge here, creating the world&apos;s largest delta system. About <strong className={heading}>one-third of the country floods</strong> during the monsoon season (June-September).
            </p>
            <p>
              The <strong className={heading}>Bengali calendar</strong> (Bangla calendar) is still widely used alongside the Gregorian calendar. The Bengali New Year (<strong className={heading}>Pohela Boishakh</strong>) on April 14 is the country&apos;s most colorful cultural celebration. Bangladesh is currently in <strong className={heading}>Bengali year ~1432</strong>.
            </p>
            <p>
              <strong className={heading}>Grameen Bank</strong>, founded by Nobel laureate <strong className={heading}>Muhammad Yunus</strong> in 1983, pioneered <strong className={heading}>microfinance</strong> — lending small amounts to the poorest women without collateral. The model has been replicated in 100+ countries and helped lift millions out of poverty.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Bangladeshi Cities — All on BST (UTC+6)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Dhaka', pop: '22M metro', note: 'Capital, world\'s densest megacity' },
              { city: 'Chittagong', pop: '5.5M', note: '2nd city, main port, shipbreaking' },
              { city: 'Khulna', pop: '1.5M', note: '3rd city, Sundarbans gateway' },
              { city: 'Rajshahi', pop: '900K', note: 'Silk city, university hub, mangoes' },
              { city: 'Sylhet', pop: '700K', note: 'Tea gardens, UK diaspora connections' },
              { city: 'Cox\'s Bazar', pop: '260K', note: 'World\'s longest natural beach (120 km!)' },
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
