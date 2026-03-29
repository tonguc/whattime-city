'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PakistanClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Karachi', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-green-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Pakistan
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">PKT · UTC+5</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2009</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">230M People</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Pakistan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Pakistan Standard Time (PKT)' },
              { label: 'UTC Offset', value: 'UTC+5 (always)' },
              { label: 'Daylight Saving', value: 'Briefly tried 2002, 2008-2009' },
              { label: 'IANA Identifier', value: 'Asia/Karachi' },
              { label: 'Population', value: '~230 million (5th largest)' },
              { label: 'Difference from India', value: 'PKT is 30 min behind IST' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Pakistan Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'PKT +10 hrs', summer: 'PKT +9 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'PKT +13 hrs', summer: 'PKT +12 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'PKT +5 hrs', summer: 'PKT +4 hrs' },
                  { zone: 'India (IST)', winter: 'PKT +0:30', summer: 'PKT +0:30' },
                  { zone: 'Dubai (GST)', winter: 'PKT +1 hr', summer: 'PKT +1 hr' },
                  { zone: 'China (CST)', winter: 'PKT −3 hrs', summer: 'PKT −3 hrs' },
                  { zone: 'Japan (JST)', winter: 'PKT −4 hrs', summer: 'PKT −4 hrs' },
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

      {/* Pakistan vs India */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The 30-Minute Border: Pakistan vs India</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Pakistan (UTC+5) and India (UTC+5:30) are separated by just <strong className={heading}>30 minutes</strong> — one of the smallest timezone differences between neighboring countries. This half-hour gap has real consequences.
            </p>
            <p>
              The famous <strong className={heading}>Wagah Border ceremony</strong> (flag-lowering at the India-Pakistan border near Lahore/Amritsar) happens at <strong className={heading}>sunset</strong>, which means the two sides coordinate across a 30-minute offset. TV broadcasts of cricket matches between the two countries show different clock times.
            </p>
            <p>
              India chose UTC+5:30 in 1947 based on the <strong className={heading}>82.5°E Mirzapur meridian</strong>. Pakistan chose the rounder UTC+5, which better fits Karachi&apos;s longitude (~67°E). Despite proposals to adopt UTC+5:30 for economic alignment with India, Pakistan has kept its distinct timezone.
            </p>
          </div>
        </div>
      </section>

      {/* IT Industry */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Pakistan&apos;s Booming Freelance Economy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Pakistan is the <strong className={heading}>4th largest freelancer market</strong> in the world, with over <strong className={heading}>2 million registered freelancers</strong> on platforms like Upwork, Fiverr, and Freelancer.com. The IT export industry generates <strong className={heading}>$2.6+ billion</strong> annually.
            </p>
            <p>
              PKT (UTC+5) provides excellent overlap with <strong className={heading}>Middle Eastern clients</strong> (Dubai is just +1 hour) and <strong className={heading}>European clients</strong> (4-5 hours ahead of CET). For US clients, Pakistani freelancers often work <strong className={heading}>evening shifts (6 PM–2 AM PKT)</strong> to align with US business hours.
            </p>
            <p>
              <strong className={heading}>Lahore and Islamabad</strong> have emerged as tech hubs, with companies like <strong className={heading}>Careem (acquired by Uber), Bykea, and Daraz (Alibaba)</strong> building their engineering teams locally.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Pakistani Cities — All on PKT (UTC+5)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Karachi', pop: '16M', note: 'Financial capital, Sindh' },
              { city: 'Lahore', pop: '13M', note: 'Cultural capital, Punjab' },
              { city: 'Islamabad', pop: '2.2M', note: 'Federal capital, planned city' },
              { city: 'Faisalabad', pop: '3.6M', note: 'Textile hub, "Manchester of Pakistan"' },
              { city: 'Rawalpindi', pop: '2.1M', note: 'Twin city of Islamabad, military HQ' },
              { city: 'Peshawar', pop: '2M', note: 'Khyber Pakhtunkhwa, historic Silk Road' },
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
