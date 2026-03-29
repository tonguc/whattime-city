'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function ThailandClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Bangkok', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Thailand
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">ICT · UTC+7</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Bangkok</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Thailand Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Indochina Time (ICT)' },
              { label: 'UTC Offset', value: 'UTC+7 (always)' },
              { label: 'Daylight Saving', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Bangkok' },
              { label: 'Same Offset As', value: 'Vietnam, Laos, Cambodia' },
              { label: 'Buddhist Calendar', value: 'BE 2569 (AD + 543)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thailand vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Thailand Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            ICT (UTC+7) is constant. Differences change only when other countries observe DST.
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
                  { zone: 'New York (ET)', winter: 'ICT is +12 hrs', summer: 'ICT is +11 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'ICT is +15 hrs', summer: 'ICT is +14 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'ICT is +7 hrs', summer: 'ICT is +6 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'ICT is +6 hrs', summer: 'ICT is +5 hrs' },
                  { zone: 'India (IST)', winter: 'ICT is +1:30', summer: 'ICT is +1:30' },
                  { zone: 'China (CST)', winter: 'ICT is −1 hr', summer: 'ICT is −1 hr' },
                  { zone: 'Japan (JST)', winter: 'ICT is −2 hrs', summer: 'ICT is −2 hrs' },
                  { zone: 'Sydney (AET)', winter: 'ICT is −4 hrs', summer: 'ICT is −3 hrs' },
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

      {/* Buddhist Calendar */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Thailand&apos;s Buddhist Era Calendar</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Thailand officially uses the <strong className={heading}>Buddhist Era (BE)</strong> calendar, which is <strong className={heading}>543 years ahead</strong> of the Gregorian calendar. So 2026 AD = <strong className={heading}>BE 2569</strong> in Thailand.
            </p>
            <p>
              This affects everyday life: <strong className={heading}>government documents, ID cards, bank forms, and official dates</strong> all use the Buddhist year. However, most international business and digital systems use the Gregorian calendar. Thai people are fluent in both systems.
            </p>
            <p>
              The Thai calendar originally started the new year on <strong className={heading}>April 1</strong> (Songkran). In 1941, Thailand shifted to January 1 to align with the international standard, but <strong className={heading}>Songkran (April 13–15)</strong> remains the most important holiday.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Gregorian', value: '2026' },
                { label: 'Buddhist Era', value: 'BE 2569' },
                { label: 'Formula', value: 'AD + 543 = BE' },
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

      {/* Best Time to Call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call Thailand From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM – 11:00 PM ET', thailand: '8:00 AM – 11:00 AM ICT (next day)', note: 'Thailand morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM – 8:00 PM PT', thailand: '7:00 AM – 10:00 AM ICT (next day)', note: 'Thailand morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '8:00 AM – 10:00 AM ET', thailand: '8:00 PM – 10:00 PM ICT', note: 'Thailand evening, US morning' },
              { label: 'Digital Nomad Tip', best: '9:00 PM – 12:00 AM ET', thailand: '9:00 AM – 12:00 PM ICT', note: 'Popular for US-Thailand remote work' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.thailand}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Thai Cities — All on ICT (UTC+7)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Bangkok', pop: '10.7M metro', note: 'Capital, business hub' },
              { city: 'Chiang Mai', pop: '1.2M metro', note: 'Northern hub, digital nomad capital' },
              { city: 'Phuket', pop: '420K', note: 'Island tourism, beaches' },
              { city: 'Pattaya', pop: '120K', note: 'Eastern coast resort city' },
              { city: 'Nonthaburi', pop: '270K', note: 'Bangkok suburb, 2nd largest' },
              { city: 'Khon Kaen', pop: '150K', note: 'Northeastern Isan hub' },
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
