'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function KazakhstanClockClient() {
  const { isLight } = useCityContext()
  const [timeAlmaty, setTimeAlmaty] = useState('--:--:--')
  const [timeAqtobe, setTimeAqtobe] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeAlmaty(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Almaty', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeAqtobe(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Aqtobe', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Almaty', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
      {/* Live Clocks */}
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-red-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Kazakhstan
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeAlmaty : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Almaty / Astana · UTC+6</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeAqtobe : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Aqtobe / Atyrau · UTC+5</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mt-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">World&apos;s 9th Largest Country</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kazakhstan Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zones', value: 'UTC+5 (west) & UTC+6 (east)' },
              { label: 'DST Status', value: 'Abolished in 2005' },
              { label: 'IANA Identifiers', value: 'Asia/Almaty, Asia/Aqtobe, +3 more' },
              { label: 'Population', value: '~20 million' },
              { label: 'Area', value: '2.72M km² — largest landlocked country' },
              { label: 'East-West Span', value: '~3,000 km (1 hr time difference)' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kazakhstan vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kazakhstan Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">vs Almaty (UTC+6)</th>
                  <th className="pb-2">vs Aqtobe (UTC+5)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET winter)', almaty: 'KZ +11 hrs', aqtobe: 'KZ +10 hrs' },
                  { zone: 'London (GMT winter)', almaty: 'KZ +6 hrs', aqtobe: 'KZ +5 hrs' },
                  { zone: 'Moscow (MSK)', almaty: 'KZ +3 hrs', aqtobe: 'KZ +2 hrs' },
                  { zone: 'India (IST)', almaty: 'KZ +0:30', aqtobe: 'KZ −0:30' },
                  { zone: 'China (CST)', almaty: 'KZ −2 hrs', aqtobe: 'KZ −3 hrs' },
                  { zone: 'Uzbekistan (UZT)', almaty: 'KZ +1 hr', aqtobe: 'Same time!' },
                ].map(({ zone, almaty, aqtobe }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{almaty}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{aqtobe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timezone Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Two Zones Across 3,000 Kilometers of Steppe</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kazakhstan is the <strong className={heading}>world&apos;s largest landlocked country</strong> and <strong className={heading}>9th largest overall</strong> — stretching 3,000 km from the Caspian Sea to China. It spans two time zones:
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Zone</th>
                  <th className="pb-2 pr-4">UTC Offset</th>
                  <th className="pb-2">Major Cities</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'Eastern Kazakhstan', offset: 'UTC+6', cities: 'Astana, Almaty, Karaganda, Shymkent' },
                  { zone: 'Western Kazakhstan', offset: 'UTC+5', cities: 'Aqtobe, Atyrau, Aktau, Oral' },
                ].map(({ zone, offset, cities }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`}>{offset}</td>
                    <td className={`py-2 ${subText}`}>{cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`text-sm mt-3 ${subText}`}>
            <p>
              In <strong className={heading}>2005</strong>, Kazakhstan abolished DST, citing economic disruption and health concerns. Unlike Russia (which went through multiple DST reforms), Kazakhstan&apos;s decision was swift and permanent — the clocks haven&apos;t changed since.
            </p>
          </div>
        </div>
      </section>

      {/* Baikonur */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Baikonur Cosmodrome — Where Space Launches Use Moscow Time</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              The <strong className={heading}>Baikonur Cosmodrome</strong> in southern Kazakhstan is the world&apos;s first and largest space launch facility. <strong className={heading}>Yuri Gagarin</strong> launched from here in 1961. All crewed Soyuz missions to the ISS still launch from Baikonur.
            </p>
            <p>
              Here&apos;s the bizarre timezone twist: Baikonur is geographically in Kazakhstan&apos;s <strong className={heading}>UTC+6 zone</strong>, but the city is <strong className={heading}>leased to Russia until 2050</strong> and officially runs on <strong className={heading}>Moscow Time (UTC+3)</strong>. So the cosmodrome is <strong className={heading}>3 hours behind the surrounding Kazakh territory</strong> — creating a timezone island in the middle of the steppe.
            </p>
          </div>
        </div>
      </section>

      {/* Oil & Astana */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Oil Giant & Astana&apos;s Futuristic Capital</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kazakhstan has the <strong className={heading}>12th largest oil reserves in the world</strong> (Kashagan and Tengiz fields in the Caspian). Oil revenue funded the construction of <strong className={heading}>Astana</strong> — one of the world&apos;s most ambitious planned capitals, transferred from Almaty in <strong className={heading}>1997</strong>.
            </p>
            <p>
              Astana (briefly renamed Nur-Sultan 2019-2022) has a <strong className={heading}>temperature range of -40°C to +40°C</strong> — making it the <strong className={heading}>second-coldest capital in the world</strong> (after Ulaanbaatar). The city is a surreal mix of futuristic architecture: the <strong className={heading}>Bayterek Tower, Khan Shatyr tent, and Expo 2017 sphere</strong> rise from the frozen steppe.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Kazakh Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Astana', pop: '1.4M', note: 'Capital (UTC+6), futuristic planned city' },
              { city: 'Almaty', pop: '2.1M', note: 'Former capital (UTC+6), cultural hub' },
              { city: 'Shymkent', pop: '1.2M', note: '3rd city (UTC+6), southern gateway' },
              { city: 'Aqtobe', pop: '520K', note: 'Western hub (UTC+5), chromium mining' },
              { city: 'Atyrau', pop: '400K', note: 'Oil capital (UTC+5), Caspian coast' },
              { city: 'Karaganda', pop: '500K', note: 'Central (UTC+6), mining, Soviet-era' },
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
