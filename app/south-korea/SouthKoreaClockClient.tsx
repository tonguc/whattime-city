'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function SouthKoreaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Seoul', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-indigo-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in South Korea
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">KST · UTC+9</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Seoul</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>South Korea Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Korea Standard Time (KST)' },
              { label: 'UTC Offset', value: 'UTC+9 (always)' },
              { label: 'Daylight Saving', value: 'Not observed since 1988' },
              { label: 'IANA Identifier', value: 'Asia/Seoul' },
              { label: 'Same Offset As', value: 'Japan (JST), Palau, East Timor' },
              { label: 'Major Cities', value: 'Seoul, Busan, Incheon, Daegu' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Korea vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>South Korea Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            KST (UTC+9) is identical to Japan&apos;s JST. Differences shift when other countries change clocks for DST.
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
                  { zone: 'New York (ET)', winter: 'KST is +14 hrs', summer: 'KST is +13 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'KST is +17 hrs', summer: 'KST is +16 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'KST is +9 hrs', summer: 'KST is +8 hrs' },
                  { zone: 'Japan (JST)', winter: 'Same time', summer: 'Same time' },
                  { zone: 'China (CST)', winter: 'KST is +1 hr', summer: 'KST is +1 hr' },
                  { zone: 'India (IST)', winter: 'KST is +3:30', summer: 'KST is +3:30' },
                  { zone: 'Sydney (AET)', winter: 'KST is −2 hrs', summer: 'KST is −1 hr' },
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

      {/* KST History */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>History of Korean Standard Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Korea&apos;s time zone has a complex history tied to its colonial past. Before 1908, Korea used its own standard based on <strong className={heading}>127.5°E longitude (UTC+8:30)</strong>. During <strong className={heading}>Japanese occupation (1910–1945)</strong>, Korea was forced onto Japan Standard Time (UTC+9).
            </p>
            <p>
              After liberation in 1945, South Korea briefly returned to UTC+8:30 but switched back to <strong className={heading}>UTC+9 in 1961</strong> under Park Chung-hee for economic alignment with Japan. North Korea adopted UTC+8:30 (&ldquo;Pyongyang Time&rdquo;) in 2015 but reverted to UTC+9 in 2018 during inter-Korean talks.
            </p>
            <p>
              South Korea used DST during the <strong className={heading}>1988 Seoul Olympics</strong> but discontinued it afterward. Today both Koreas use UTC+9.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time to Call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call South Korea From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '7:00 PM – 10:00 PM ET', korea: '9:00 AM – 12:00 PM KST (next day)', note: 'Korea morning, US evening' },
              { label: 'US West Coast (PT)', best: '4:00 PM – 7:00 PM PT', korea: '9:00 AM – 12:00 PM KST (next day)', note: 'Korea morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '6:00 AM – 8:00 AM ET', korea: '8:00 PM – 10:00 PM KST', note: 'Korea evening, US morning' },
              { label: 'Business Overlap', best: '8:00 PM – 12:00 AM ET', korea: '10:00 AM – 2:00 PM KST', note: 'Peak for US-Korea business' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.korea}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major South Korean Cities — All on KST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Seoul', pop: '25M metro', note: 'Capital, K-pop, tech hub' },
              { city: 'Busan', pop: '3.4M', note: 'Port city, beaches, film festival' },
              { city: 'Incheon', pop: '3.0M', note: 'International airport, free trade zone' },
              { city: 'Daegu', pop: '2.4M', note: 'Textile center, apple capital' },
              { city: 'Daejeon', pop: '1.5M', note: 'Science city, KAIST university' },
              { city: 'Jeju', pop: '680K', note: 'Volcanic island, UNESCO heritage' },
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
