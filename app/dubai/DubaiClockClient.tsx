'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function DubaiClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Dubai', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Dubai
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">GST &middot; UTC+4 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">City of the Future</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Dubai Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'GST — Gulf Standard Time (UTC+4)' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Dubai' },
              { label: 'Population', value: '~3.6 million (92% expats!)' },
              { label: 'Weekend', value: 'Sat-Sun (changed from Fri-Sat in 2022)' },
              { label: 'Famous For', value: 'Burj Khalifa, luxury, global transit hub' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dubai Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Dubai +9 hrs', summer: 'Dubai +8 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Dubai +4 hrs', summer: 'Dubai +3 hrs' },
                  { zone: 'India (IST)', winter: 'Dubai −1:30', summer: 'Dubai −1:30' },
                  { zone: 'Hong Kong (HKT)', winter: 'Dubai −4 hrs', summer: 'Dubai −4 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Dubai +12 hrs', summer: 'Dubai +11 hrs' },
                  { zone: 'Sydney (AEST)', winter: 'Dubai −6 hrs', summer: 'Dubai −7 hrs' },
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

      {/* Burj Khalifa */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Burj Khalifa — Where You Can See 3 Sunsets in One Day</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Burj Khalifa (828m)</strong> is so tall that the sun sets <strong className={heading}>~3 minutes later</strong> at the top than at ground level. During Ramadan, residents on upper floors must wait <strong className={heading}>2-3 minutes longer to break their fast</strong> than those at street level — the Dubai government issued an <strong className={heading}>official iftar time adjustment</strong> based on floor number.
            </p>
            <p>
              You can theoretically <strong className={heading}>watch the sunset from the ground</strong>, take the elevator up, and <strong className={heading}>watch it again from the observation deck</strong>. This is the world&apos;s most dramatic demonstration of how <strong className={heading}>altitude affects local time perception</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Global Hub */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>UTC+4: The Perfect Bridge Timezone</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Dubai&apos;s <strong className={heading}>UTC+4 position</strong> is its secret weapon. A Dubai executive can hold a <strong className={heading}>morning call with Singapore (UTC+8)</strong> at 8 AM Dubai / noon SGT, then a <strong className={heading}>lunch call with London (UTC+0/+1)</strong> at 1 PM Dubai / 9 AM GMT, then an <strong className={heading}>afternoon call with New York (UTC-5)</strong> at 5 PM Dubai / 9 AM ET — <strong className={heading}>all in one business day</strong>.
            </p>
            <p>
              This timezone advantage is why <strong className={heading}>92% of Dubai&apos;s population is expatriate</strong> — the world&apos;s highest ratio. People from <strong className={heading}>200+ nationalities</strong> need to coordinate with home countries spanning <strong className={heading}>every timezone</strong>. &ldquo;What time is it in Dubai?&rdquo; is one of the <strong className={heading}>top 5 most-searched timezone queries globally</strong>.
            </p>
            <p>
              Dubai&apos;s <strong className={heading}>DXB airport</strong> handles <strong className={heading}>87+ million international passengers</strong> annually. Emirates airline&apos;s hub-and-spoke model means flights depart at <strong className={heading}>2-4 AM GST</strong> and arrive in Europe during morning hours — the &ldquo;red eye&rdquo; that <strong className={heading}>wastes no daylight</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Dubai Districts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Dubai Key Districts — All on GST (UTC+4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Downtown Dubai', pop: '—', note: 'Burj Khalifa, Dubai Mall, fountains' },
              { city: 'DIFC', pop: '—', note: 'Finance hub, 500+ firms, own courts' },
              { city: 'Dubai Marina', pop: '—', note: 'Waterfront towers, expat lifestyle' },
              { city: 'Deira', pop: '—', note: 'Historic souks, gold & spice markets' },
              { city: 'Jebel Ali', pop: '—', note: 'World\'s largest port, free zone' },
              { city: 'Palm Jumeirah', pop: '—', note: 'Artificial island, luxury resorts' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>District</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
