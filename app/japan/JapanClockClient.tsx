'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function JapanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Tokyo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Japan
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">JST · UTC+9</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Since 1952</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Tokyo</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Japan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Japan Standard Time (JST)' },
              { label: 'UTC Offset', value: 'UTC+9 (always)' },
              { label: 'Daylight Saving', value: 'Abolished in 1952' },
              { label: 'IANA Identifier', value: 'Asia/Tokyo' },
              { label: 'Same Offset As', value: 'South Korea (KST), Palau' },
              { label: 'Major Cities', value: 'Tokyo, Osaka, Kyoto, Yokohama' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Japan Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            JST (UTC+9) never changes. Differences shift when other countries observe DST.
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
                  { zone: 'New York (ET)', winter: 'JST is +14 hrs', summer: 'JST is +13 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'JST is +17 hrs', summer: 'JST is +16 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'JST is +9 hrs', summer: 'JST is +8 hrs' },
                  { zone: 'India (IST)', winter: 'JST is +3:30', summer: 'JST is +3:30' },
                  { zone: 'South Korea (KST)', winter: 'Same time', summer: 'Same time' },
                  { zone: 'China (CST)', winter: 'JST is +1 hr', summer: 'JST is +1 hr' },
                  { zone: 'Sydney (AET)', winter: 'JST is −2 hrs', summer: 'JST is −1 hr' },
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
          <p className={`text-xs mt-3 ${mutedText}`}>
            Example: When it is 9:00 AM JST in Tokyo, it is 7:00 PM EST (previous day) in New York.
          </p>
        </div>
      </section>

      {/* Why no DST */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Doesn&apos;t Japan Observe Daylight Saving Time?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Japan briefly used DST during the <strong className={heading}>Allied Occupation (1948–1951)</strong>, but it was deeply unpopular. Japanese workers felt the extended daylight hours led to <strong className={heading}>longer working hours</strong> rather than more leisure time. The Diet (parliament) abolished DST in 1952 after sovereignty was restored.
            </p>
            <p>
              DST was briefly reconsidered before the <strong className={heading}>2020 Tokyo Olympics</strong> to combat summer heat by starting events earlier, but the proposal was abandoned. Japan remains on <strong className={heading}>JST (UTC+9)</strong> year-round, valuing consistency over daylight manipulation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call Japan From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '7:00 PM – 10:00 PM ET', japan: '9:00 AM – 12:00 PM JST (next day)', note: 'Japan morning, US evening' },
              { label: 'US West Coast (PT)', best: '4:00 PM – 7:00 PM PT', japan: '9:00 AM – 12:00 PM JST (next day)', note: 'Japan morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM – 9:00 AM ET', japan: '9:00 PM – 11:00 PM JST', note: 'Japan evening, US morning' },
              { label: 'Business Overlap', best: '8:00 PM – 11:00 PM ET', japan: '10:00 AM – 1:00 PM JST', note: 'Peak overlap for US-Japan teams' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.japan}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Japanese Cities — All on JST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tokyo', pop: '37M metro', note: 'Capital, world\'s largest metro area' },
              { city: 'Osaka', pop: '19M metro', note: 'Commercial hub, street food capital' },
              { city: 'Yokohama', pop: '3.7M', note: 'Port city south of Tokyo' },
              { city: 'Nagoya', pop: '9.1M metro', note: 'Toyota headquarters, industrial hub' },
              { city: 'Kyoto', pop: '1.5M', note: 'Former capital, temples & shrines' },
              { city: 'Fukuoka', pop: '5.5M metro', note: 'Gateway to Asia, tech hub' },
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
