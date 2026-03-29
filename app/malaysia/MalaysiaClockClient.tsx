'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MalaysiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Kuala_Lumpur', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
        <div className="rounded-2xl text-white p-6 text-center bg-blue-800">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">
            Current Time in Malaysia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">MYT · UTC+8</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Kuala Lumpur</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Malaysia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'Malaysia Time (MYT)' },
              { label: 'UTC Offset', value: 'UTC+8 (always)' },
              { label: 'Geographic Zone', value: 'Should be UTC+7 based on longitude' },
              { label: 'DST Status', value: 'Never observed' },
              { label: 'IANA Identifier', value: 'Asia/Kuala_Lumpur' },
              { label: 'Same Offset As', value: 'China, Singapore, Hong Kong, Philippines' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Malaysia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Malaysia Time vs World</h2>
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
                  { zone: 'New York (ET)', winter: 'Malaysia +13 hrs', summer: 'Malaysia +12 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Malaysia +16 hrs', summer: 'Malaysia +15 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Malaysia +8 hrs', summer: 'Malaysia +7 hrs' },
                  { zone: 'India (IST)', winter: 'Malaysia +2:30', summer: 'Malaysia +2:30' },
                  { zone: 'Japan (JST)', winter: 'Malaysia −1 hr', summer: 'Malaysia −1 hr' },
                  { zone: 'Singapore (SGT)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Sydney (AET)', winter: 'Malaysia −3 hrs', summer: 'Malaysia −2 hrs' },
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

      {/* Wrong Time Zone */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Is Malaysia on UTC+8 Instead of UTC+7?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Peninsular Malaysia lies at roughly <strong className={heading}>100–104°E longitude</strong>, which geographically corresponds to <strong className={heading}>UTC+7</strong> — the same as Thailand and Vietnam. Yet Malaysia uses <strong className={heading}>UTC+8</strong>, a full hour ahead.
            </p>
            <p>
              The shift happened in <strong className={heading}>1982</strong> when Prime Minister Mahathir moved Malaysian clocks forward by 30 minutes (from UTC+7:30 to UTC+8) to align with <strong className={heading}>Singapore and Hong Kong</strong> for economic reasons. Before that, Malaysia had used UTC+7:30 since 1941.
            </p>
            <p>
              The result: solar noon in Kuala Lumpur occurs around <strong className={heading}>1:05 PM</strong> — over an hour late. This makes Malaysian mornings darker than they should be, but <strong className={heading}>synchronization with China, Singapore, and Hong Kong</strong> was deemed more valuable for trade.
            </p>
          </div>
          <div className={`${innerCard} mt-4`}>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              {[
                { label: 'Thailand (UTC+7)', value: 'Geographic match', note: 'Same longitude as KL' },
                { label: 'Malaysia (UTC+8)', value: '1 hr ahead', note: 'Aligned with Singapore' },
                { label: 'Singapore (UTC+8)', value: 'Same time', note: 'Economic twin' },
              ].map(z => (
                <div key={z.label}>
                  <div className={mutedText}>{z.label}</div>
                  <div className={`font-bold ${heading}`}>{z.value}</div>
                  <div className={mutedText}>{z.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* East vs West Malaysia */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Peninsular vs East Malaysia</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Malaysia is split into two landmasses separated by the <strong className={heading}>South China Sea</strong>: Peninsular Malaysia (west) and East Malaysia (Sabah & Sarawak on Borneo). Despite being <strong className={heading}>1,400 km apart</strong>, both use the same UTC+8 timezone.
            </p>
            <p>
              Historically, East Malaysia (Borneo) used <strong className={heading}>UTC+8 before the peninsula did</strong>, as it&apos;s geographically further east. The 1982 unification simply brought the peninsula up to Borneo&apos;s existing time — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Malaysian Cities — All on MYT (UTC+8)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Kuala Lumpur', pop: '8.4M metro', note: 'Capital, Petronas Towers' },
              { city: 'Penang', pop: '1.8M metro', note: 'Tech hub, UNESCO heritage' },
              { city: 'Johor Bahru', pop: '2.1M metro', note: 'Singapore border, southern hub' },
              { city: 'Kota Kinabalu', pop: '500K', note: 'Sabah, East Malaysia, Mt. Kinabalu' },
              { city: 'Kuching', pop: '700K metro', note: 'Sarawak capital, East Malaysia' },
              { city: 'Ipoh', pop: '820K metro', note: 'Perak, food capital, tin heritage' },
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
