'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ChinaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Shanghai', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in China
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">CST · UTC+8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">1.4 Billion People</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>China Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'China Standard Time (CST)' },
              { label: 'UTC Offset', value: 'UTC+8 (always)' },
              { label: 'Daylight Saving', value: 'Not observed since 1991' },
              { label: 'IANA Identifier', value: 'Asia/Shanghai' },
              { label: 'East–West Span', value: '5,200 km — one single zone' },
              { label: 'Same Offset As', value: 'Singapore, Hong Kong, Taiwan, Perth' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* China vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>China Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            CST (UTC+8) never changes. Time differences shift only when other countries observe DST.
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
                  { zone: 'New York (ET)', winter: 'CST is +13 hrs', summer: 'CST is +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'CST is +16 hrs', summer: 'CST is +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'CST is +8 hrs', summer: 'CST is +7 hrs' },
                  { zone: 'India (IST)', winter: 'CST is +2:30', summer: 'CST is +2:30' },
                  { zone: 'Japan (JST)', winter: 'CST is −1 hr', summer: 'CST is −1 hr' },
                  { zone: 'Sydney (AET)', winter: 'CST is −3 hrs', summer: 'CST is −2 hrs' },
                  { zone: 'Dubai (GST)', winter: 'CST is +4 hrs', summer: 'CST is +4 hrs' },
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

      {/* One Zone for 5,200 km */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Does China Have Only One Time Zone?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              China spans <strong className={heading}>5 geographical time zones</strong> (UTC+5 to UTC+9) but uses a single standard: <strong className={heading}>Beijing Time (UTC+8)</strong>. This was established in 1949 when the Communist Party unified the country under one clock to symbolize national unity.
            </p>
            <p>
              The practical impact is enormous. In <strong className={heading}>Fuyuan</strong> (easternmost city), the sun rises around <strong className={heading}>3:30 AM</strong> in summer. In <strong className={heading}>Kashgar</strong> (far west, near Pakistan), sunrise doesn&apos;t happen until <strong className={heading}>10:00 AM</strong> Beijing Time — a 6.5-hour difference in solar noon.
            </p>
            <p>
              In response, <strong className={heading}>Xinjiang (新疆)</strong> and parts of western China informally use <strong className={heading}>&ldquo;Ürümqi Time&rdquo; (UTC+6)</strong>, 2 hours behind Beijing. Government offices use Beijing Time, but local Uyghur businesses often operate on Xinjiang Time, creating a dual-time system.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { city: 'Fuyuan (East)', sunrise: '~3:30 AM', note: 'Earliest sunrise' },
                { city: 'Beijing (Center)', sunrise: '~5:15 AM', note: 'Standard reference' },
                { city: 'Kashgar (West)', sunrise: '~10:00 AM', note: 'Latest sunrise' },
              ].map(z => (
                <div key={z.city}>
                  <div className={mutedText}>{z.city}</div>
                  <div className={`font-bold ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{z.sunrise}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
            <div className={`text-center mt-2 text-xs ${mutedText}`}>Summer sunrise times (Beijing Time / UTC+8)</div>
          </div>
        </div>
      </section>

      {/* Best Time to Call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call China From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM – 11:00 PM ET', china: '9:00 AM – 12:00 PM CST (next day)', note: 'China morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM – 8:00 PM PT', china: '9:00 AM – 12:00 PM CST (next day)', note: 'China morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM – 9:00 AM ET', china: '8:00 PM – 10:00 PM CST', note: 'China evening, US morning' },
              { label: 'Business Overlap', best: '8:00 PM – 12:00 AM ET', china: '9:00 AM – 1:00 PM CST', note: 'Peak for US-China business' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.china}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Chinese Cities — All on CST (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Shanghai', pop: '28M metro', note: 'Financial center, largest city' },
              { city: 'Beijing', pop: '21M', note: 'Capital, political center' },
              { city: 'Shenzhen', pop: '17M', note: 'Tech hub, near Hong Kong' },
              { city: 'Guangzhou', pop: '16M', note: 'Southern trade hub, Canton' },
              { city: 'Chengdu', pop: '21M metro', note: 'Western hub, pandas, tech' },
              { city: 'Hong Kong', pop: '7.5M', note: 'SAR, HKT = UTC+8 (same)' },
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
