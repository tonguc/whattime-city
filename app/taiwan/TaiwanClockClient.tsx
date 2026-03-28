'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function TaiwanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Taipei', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Taiwan
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CST · UTC+8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 1979</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Taipei</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Taiwan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'China Standard Time (CST) / National Standard Time' },
              { label: 'UTC Offset', value: 'UTC+8 (always)' },
              { label: 'Daylight Saving', value: 'Abolished in 1979' },
              { label: 'IANA Identifier', value: 'Asia/Taipei' },
              { label: 'Population', value: '~23.5 million' },
              { label: 'Same Offset As', value: 'China, Singapore, Hong Kong, Philippines' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taiwan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Taiwan Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Taiwan +13 hrs', summer: 'Taiwan +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Taiwan +16 hrs', summer: 'Taiwan +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Taiwan +8 hrs', summer: 'Taiwan +7 hrs' },
                  { zone: 'India (IST)', winter: 'Taiwan +2:30', summer: 'Taiwan +2:30' },
                  { zone: 'Japan (JST)', winter: 'Taiwan −1 hr', summer: 'Taiwan −1 hr' },
                  { zone: 'Singapore (SGT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Sydney (AET)', winter: 'Taiwan −3 hrs', summer: 'Taiwan −2 hrs' },
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

      {/* Semiconductor Timezone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Semiconductor Timezone: Taiwan&apos;s Global Impact</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Taiwan produces over <strong className={heading}>60% of the world&apos;s semiconductors</strong> and over <strong className={heading}>90% of advanced chips</strong> (under 7nm). TSMC, the world&apos;s largest chipmaker, is headquartered in <strong className={heading}>Hsinchu Science Park</strong>.
            </p>
            <p>
              This makes Taiwan&apos;s timezone <strong className={heading}>critically important for global tech supply chains</strong>. When TSMC announces quarterly results or production updates, markets worldwide react instantly. Apple, Nvidia, AMD, and Qualcomm all depend on Taiwan&apos;s UTC+8 business hours.
            </p>
            <p>
              Silicon Valley engineers often maintain a <strong className={heading}>&ldquo;Taiwan window&rdquo;</strong> in their schedules — usually <strong className={heading}>5 PM–8 PM PT</strong> (= 9 AM–12 PM Taiwan time) — for critical calls with TSMC and other Taiwanese suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Minguo Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Minguo Calendar — Taiwan&apos;s Year System</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Taiwan officially uses the <strong className={heading}>Minguo calendar (民國)</strong>, which counts years from the founding of the Republic of China in <strong className={heading}>1912</strong>. So 2026 AD = <strong className={heading}>Minguo year 115</strong> (2026 − 1911 = 115).
            </p>
            <p>
              Government documents, driver&apos;s licenses, bank forms, and official dates all use the Minguo year. This creates a <strong className={heading}>Y2K-like issue</strong>: the system will hit year 100+ (already passed in 2011), and some older software that only allocated 2 digits for the year had to be patched.
            </p>
            <p>
              In everyday life, Taiwanese people use both systems fluently — Gregorian for international business and Minguo for domestic affairs.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Minguo (民國)', value: '115' },
                { label: 'Formula', value: 'AD − 1911 = Minguo' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Taiwanese Cities — All on CST (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Taipei', pop: '7M metro', note: 'Capital, tech & cultural hub' },
              { city: 'Kaohsiung', pop: '2.7M', note: 'Southern port, industrial' },
              { city: 'Taichung', pop: '2.8M', note: 'Central, arts & food capital' },
              { city: 'Hsinchu', pop: '450K', note: '"Silicon Valley of Taiwan", TSMC' },
              { city: 'Tainan', pop: '1.9M', note: 'Oldest city, temple capital' },
              { city: 'Taoyuan', pop: '2.3M', note: 'Airport city, industrial hub' },
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
