'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function PhilippinesClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in the Philippines
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">PHT · UTC+8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Manila</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Philippines Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Philippine Time (PHT)' },
              { label: 'UTC Offset', value: 'UTC+8 (always)' },
              { label: 'Daylight Saving', value: 'Not observed since 1978' },
              { label: 'IANA Identifier', value: 'Asia/Manila' },
              { label: 'Population', value: '~115 million' },
              { label: 'Same Offset As', value: 'China, Singapore, Hong Kong, Taiwan, Perth' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philippines vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Philippines Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            PHT (UTC+8) is constant. Differences change only when other countries observe DST.
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
                  { zone: 'New York (ET)', winter: 'PHT +13 hrs', summer: 'PHT +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'PHT +16 hrs', summer: 'PHT +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'PHT +8 hrs', summer: 'PHT +7 hrs' },
                  { zone: 'India (IST)', winter: 'PHT +2:30', summer: 'PHT +2:30' },
                  { zone: 'Japan (JST)', winter: 'PHT −1 hr', summer: 'PHT −1 hr' },
                  { zone: 'Sydney (AET)', winter: 'PHT −3 hrs', summer: 'PHT −2 hrs' },
                  { zone: 'Dubai (GST)', winter: 'PHT +4 hrs', summer: 'PHT +4 hrs' },
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

      {/* BPO Capital */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>The Philippines: BPO Capital of the World</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The Philippines is the <strong className={heading}>world&apos;s #1 destination for voice-based business process outsourcing (BPO)</strong>, surpassing India in 2010. The industry employs over <strong className={heading}>1.4 million Filipinos</strong> and generates $30+ billion annually.
            </p>
            <p>
              Being <strong className={heading}>12–16 hours ahead of the US</strong> means Filipino call center agents typically work the <strong className={heading}>graveyard shift (10 PM – 7 AM PHT)</strong> to align with US business hours. This has created a unique &ldquo;night shift culture&rdquo; in Manila and Cebu, with 24-hour restaurants, gyms, and services catering to BPO workers.
            </p>
            <p>
              The combination of <strong className={heading}>English fluency</strong> (Philippines is the 3rd largest English-speaking country), cultural affinity with the US, and competitive labor costs makes the timezone gap manageable for US companies.
            </p>
          </div>
        </div>
      </section>

      {/* Filipino Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>&ldquo;Filipino Time&rdquo; — A Cultural Phenomenon</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>&ldquo;Filipino Time&rdquo;</strong> is a well-known cultural concept referring to the habit of arriving <strong className={heading}>15–30 minutes late</strong> to social gatherings. It&apos;s so ingrained that event organizers often state times as &ldquo;5:00 PM <strong className={heading}>sharp</strong>&rdquo; (meaning actually on time) versus &ldquo;5:00 PM&rdquo; (meaning 5:30 PM is fine).
            </p>
            <p>
              Interestingly, this only applies to <strong className={heading}>social situations</strong>. In the BPO industry and corporate settings, Filipino workers are known for <strong className={heading}>punctuality and reliability</strong> — the &ldquo;Filipino Time&rdquo; concept does not extend to professional life.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time to Call */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call the Philippines From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 PM – 11:00 PM ET', ph: '9:00 AM – 12:00 PM PHT (next day)', note: 'PH morning, US evening' },
              { label: 'US West Coast (PT)', best: '5:00 PM – 8:00 PM PT', ph: '9:00 AM – 12:00 PM PHT (next day)', note: 'PH morning, US afternoon' },
              { label: 'US East Coast (ET)', best: '7:00 AM – 9:00 AM ET', ph: '8:00 PM – 10:00 PM PHT', note: 'PH evening, US morning' },
              { label: 'OFW Tip', best: '8:00 PM – 10:00 PM ET', ph: '9:00 AM – 11:00 AM PHT', note: 'Popular for OFW family calls' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.ph}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
          <p className={`text-xs mt-3 ${mutedText}`}>
            OFW = Overseas Filipino Workers — over 10 million Filipinos work abroad, making cross-timezone calling extremely common.
          </p>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Philippine Cities — All on PHT (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Manila', pop: '14M metro', note: 'Capital, Luzon island' },
              { city: 'Cebu City', pop: '3.3M metro', note: 'Visayas hub, BPO center' },
              { city: 'Davao City', pop: '1.8M', note: 'Mindanao, agricultural hub' },
              { city: 'Quezon City', pop: '3M', note: 'Largest city by area in Metro Manila' },
              { city: 'Makati', pop: '630K', note: 'Financial district, corporate HQ' },
              { city: 'Taguig (BGC)', pop: '890K', note: 'Modern business district' },
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
