'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MongoliaClockClient() {
  const { isLight } = useCityContext()
  const [timeUB, setTimeUB] = useState('--:--:--')
  const [timeHovd, setTimeHovd] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTimeUB(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Ulaanbaatar', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setTimeHovd(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Hovd', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Ulaanbaatar', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Mongolia
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeUB : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Ulaanbaatar · UTC+8</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {mounted ? timeHovd : '--:--:--'}
              </div>
              <div className="text-xs opacity-70 mt-1">Hovd (western) · UTC+7</div>
            </div>
          </div>
          <div className="text-sm opacity-80 mt-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap mt-3">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">2 Time Zones</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST since 2017</span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">World&apos;s Coldest Capital</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Mongolia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Eastern Zone', value: 'ULAT — UTC+8 (Ulaanbaatar + most regions)' },
              { label: 'Western Zone', value: 'HOVT — UTC+7 (Hovd, Uvs, Bayan-\u00d6lgii)' },
              { label: 'DST Status', value: 'Abolished in 2017' },
              { label: 'IANA Identifiers', value: 'Asia/Ulaanbaatar, Asia/Hovd' },
              { label: 'Population', value: '~3.4 million (least dense country)' },
              { label: 'Area', value: '1.56M km\u00b2 — 2 people per km\u00b2' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mongolia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mongolia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">vs Ulaanbaatar (UTC+8)</th>
                  <th className="pb-2">vs Hovd (UTC+7)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET winter)', ub: 'MN +13 hrs', hovd: 'MN +12 hrs' },
                  { zone: 'London (GMT winter)', ub: 'MN +8 hrs', hovd: 'MN +7 hrs' },
                  { zone: 'Moscow (MSK)', ub: 'MN +5 hrs', hovd: 'MN +4 hrs' },
                  { zone: 'China (CST)', ub: 'Same time!', hovd: 'MN −1 hr' },
                  { zone: 'Japan (JST)', ub: 'MN −1 hr', hovd: 'MN −2 hrs' },
                  { zone: 'India (IST)', ub: 'MN +2:30', hovd: 'MN +1:30' },
                ].map(({ zone, ub, hovd }) => (
                  <tr key={zone}>
                    <td className={`py-2 pr-4 font-medium ${heading}`}>{zone}</td>
                    <td className={`py-2 pr-4 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{ub}</td>
                    <td className={`py-2 ${subText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{hovd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coldest Capital */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Coldest Capital — Ulaanbaatar at -40&deg;C</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              <strong className={heading}>Ulaanbaatar</strong> is the <strong className={heading}>world&apos;s coldest capital city</strong> — average January temperature is <strong className={heading}>-24&deg;C (-11&deg;F)</strong>, with extremes reaching <strong className={heading}>-40&deg;C</strong>. Despite this, nearly <strong className={heading}>half of Mongolia&apos;s population</strong> (1.6M of 3.4M) lives here.
            </p>
            <p>
              The extreme cold shapes daily rhythms: in winter, the city is shrouded in <strong className={heading}>coal-burning smog</strong> that can make air quality the worst in the world. Schools close when temperatures drop below <strong className={heading}>-35&deg;C</strong>. Workers bundle up for the commute but offices and apartments are heated to comfortable levels.
            </p>
            <p>
              The temperature range is staggering: <strong className={heading}>-40&deg;C in January to +35&deg;C in July</strong> — a swing of <strong className={heading}>75 degrees</strong>. This is one of the most extreme continental climates on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Nomadic Heritage */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Nomadic Time — Where GPS Coordinates Replace Street Addresses</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Mongolia is the <strong className={heading}>world&apos;s most sparsely populated country</strong> — just <strong className={heading}>2 people per km&sup2;</strong>. About <strong className={heading}>25-30% of Mongolians are still semi-nomadic herders</strong>, living in <strong className={heading}>gers (yurts)</strong> and moving with their livestock across the vast steppe.
            </p>
            <p>
              For nomads, time is governed by <strong className={heading}>natural cycles</strong> rather than clocks: sunrise, the position of the sun, seasonal migrations. The Mongolian lunar calendar (aligned with Tibetan Buddhist tradition) determines major events like <strong className={heading}>Tsagaan Sar</strong> (Lunar New Year) — a 3-day celebration that shifts dates each year.
            </p>
            <p>
              Ulaanbaatar itself had a <strong className={heading}>addressing problem</strong> — many ger districts have no formal street addresses. Mongolia adopted <strong className={heading}>what3words</strong> and <strong className={heading}>plus codes</strong> for postal delivery, making it one of the first countries to use coordinate-based addressing at national scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mining Boom */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Mining Superpower & Genghis Khan&apos;s Legacy</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Mongolia sits on vast <strong className={heading}>mineral wealth</strong>: the <strong className={heading}>Oyu Tolgoi</strong> copper-gold mine is one of the world&apos;s largest, and the country has significant coal, uranium, and rare earth deposits. Mining accounts for <strong className={heading}>~25% of GDP and ~90% of exports</strong>.
            </p>
            <p>
              <strong className={heading}>Genghis Khan</strong> (Chinggis Khaan) — born in 1162 — built the <strong className={heading}>largest contiguous empire in history</strong>, spanning from Korea to Hungary. His empire pioneered the <strong className={heading}>Yam relay postal system</strong> — one of history&apos;s first rapid communication networks, with relay stations every 25-30 km across the steppe. Genghis Khan is Mongolia&apos;s national hero — the airport, main square, and largest statue are all named after him.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Mongolian Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Ulaanbaatar', pop: '1.6M', note: 'Capital (UTC+8), coldest capital' },
              { city: 'Erdenet', pop: '100K', note: 'Copper mining city (UTC+8)' },
              { city: 'Darkhan', pop: '85K', note: 'Industrial, northern (UTC+8)' },
              { city: 'Choibalsan', pop: '45K', note: 'Eastern hub (UTC+8)' },
              { city: 'Hovd', pop: '32K', note: 'Western capital (UTC+7)' },
              { city: '\u00d6lgii', pop: '35K', note: 'Eagle hunters, Kazakh culture (UTC+7)' },
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
