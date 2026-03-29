'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function NepalClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Kathmandu', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-900">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Nepal
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/40">NPT &middot; UTC+5:45 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">World&apos;s Only :45 Offset!</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Kathmandu</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Nepal Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'NPT — Nepal Time (UTC+5:45)' },
              { label: 'Unique Offset', value: 'World\'s ONLY :45 offset timezone' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Kathmandu' },
              { label: 'Population', value: '~30 million' },
              { label: 'Famous For', value: 'Everest, Himalaya, Bikram Sambat calendar' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Nepal Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Nepal&apos;s :45 offset means it&apos;s never exactly on the hour with most countries — creating unique scheduling challenges.
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
                  { zone: 'New York (ET)', winter: 'NP +10:45', summer: 'NP +9:45' },
                  { zone: 'London (GMT/BST)', winter: 'NP +5:45', summer: 'NP +4:45' },
                  { zone: 'India (IST)', winter: 'NP +0:15', summer: 'NP +0:15' },
                  { zone: 'China (CST)', winter: 'NP −2:15', summer: 'NP −2:15' },
                  { zone: 'Japan (JST)', winter: 'NP −3:15', summer: 'NP −3:15' },
                  { zone: 'Dubai (GST)', winter: 'NP −1:45', summer: 'NP −1:45' },
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

      {/* :45 Offset */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why UTC+5:45? The World&apos;s Strangest Timezone Offset</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Nepal is the <strong className={heading}>only country in the world with a :45 offset</strong>. Most countries use full-hour offsets, a few use :30 (India, Iran, Myanmar), but <strong className={heading}>only Nepal uses :45</strong>. This creates bizarre time math: when it&apos;s <strong className={heading}>12:00 noon in London, it&apos;s 5:45 PM in Nepal</strong>.
            </p>
            <p>
              The offset was chosen in <strong className={heading}>1986</strong> to assert Nepal&apos;s <strong className={heading}>independence from India&apos;s IST (UTC+5:30)</strong>. The <strong className={heading}>15-minute difference</strong> from India is a constant source of confusion for travelers crossing the border — every clock needs manual adjustment by an awkward 15 minutes.
            </p>
            <p>
              Before 1986, Nepal used <strong className={heading}>UTC+5:40</strong> — based on the <strong className={heading}>solar noon at the Gaurishankar peak</strong> (7,134m), a sacred mountain east of Kathmandu. The switch to +5:45 was simply for <strong className={heading}>mathematical convenience</strong> (divisible by 15).
            </p>
          </div>
        </div>
      </section>

      {/* Bikram Sambat */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bikram Sambat — Nepal&apos;s Calendar Is 56 Years Ahead</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Nepal uses the <strong className={heading}>Bikram Sambat (BS) calendar</strong> as its official calendar — currently in <strong className={heading}>year ~2082/2083 BS</strong>. When the Gregorian world says 2026, Nepal says <strong className={heading}>2082/83</strong>. The Nepali New Year falls in <strong className={heading}>mid-April</strong> (Baisakh 1).
            </p>
            <p>
              The BS calendar has <strong className={heading}>different month lengths each year</strong> (28-32 days), making it one of the world&apos;s <strong className={heading}>most complex calendars to program</strong>. Nepali software developers must maintain <strong className={heading}>lookup tables</strong> for each year — there&apos;s no simple formula to convert between BS and Gregorian dates.
            </p>
            <p>
              Nepal&apos;s weekend is <strong className={heading}>Saturday only</strong> — one of the few countries with a <strong className={heading}>6-day workweek</strong>. Saturday is the holy day in Hindu tradition. This means when Americans have a 2-day weekend, Nepalis are working — creating <strong className={heading}>unique coordination windows</strong> for US-Nepal business.
            </p>
          </div>
        </div>
      </section>

      {/* Everest */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Everest Time — Summit Windows and Climbing Schedules</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Mount Everest (<strong className={heading}>8,849m, world&apos;s tallest</strong>) has a narrow <strong className={heading}>summit window</strong> in May when jet stream winds briefly abate. Climbers leave Camp 4 at <strong className={heading}>9-10 PM NPT</strong> for an overnight push, aiming to summit by <strong className={heading}>6-9 AM NPT</strong> and descend before afternoon storms.
            </p>
            <p>
              Nepal&apos;s tourism industry revolves around <strong className={heading}>trekking seasons</strong>: October-November (post-monsoon, clear skies) and March-May (pre-monsoon, rhododendron bloom). The <strong className={heading}>Annapurna Circuit</strong> and <strong className={heading}>Everest Base Camp</strong> treks attract 200,000+ trekkers annually — all navigating Nepal&apos;s unique <strong className={heading}>:45 timezone</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Nepali Cities — All on NPT (UTC+5:45)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kathmandu', pop: '1.5M', note: 'Capital, temples, Durbar Square' },
              { city: 'Pokhara', pop: '500K', note: 'Trekking gateway, Phewa Lake' },
              { city: 'Lalitpur (Patan)', pop: '300K', note: 'Ancient city, Newari architecture' },
              { city: 'Biratnagar', pop: '250K', note: 'Eastern hub, India border trade' },
              { city: 'Bharatpur', pop: '200K', note: 'Chitwan gateway, jungle safaris' },
              { city: 'Lumbini', pop: '—', note: 'Buddha\'s birthplace, UNESCO site' },
            ].map(c => (
              <div key={c.city} className={innerCard}>
                <div className={`font-semibold text-sm ${heading}`}>{c.city}</div>
                <div className={`text-xs ${mutedText}`}>{c.pop !== '—' ? `Pop. ${c.pop}` : 'Sacred site'}</div>
                <div className={`text-xs ${subText} mt-0.5`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
