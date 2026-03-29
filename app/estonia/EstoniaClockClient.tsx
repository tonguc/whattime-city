'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function EstoniaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Tallinn', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Tallinn', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Tallinn' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Tallinn' })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
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
            Current Time in Estonia
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400/40">
              {isDST ? 'EEST · UTC+3' : 'EET · UTC+2'}
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">World&apos;s Most Digital Nation</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Tallinn</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Estonia Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EET (UTC+2) / EEST (UTC+3)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct (EU)' },
              { label: 'IANA Identifier', value: 'Europe/Tallinn' },
              { label: 'Population', value: '~1.4 million' },
              { label: 'E-Residency', value: '100,000+ digital residents worldwide' },
              { label: 'Famous For', value: 'Skype, e-governance, digital ID, startups' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estonia vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Estonia Time vs World</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`text-left ${mutedText}`}>
                  <th className="pb-2 pr-4">Location</th>
                  <th className="pb-2 pr-4">EE Winter (EET)</th>
                  <th className="pb-2">EE Summer (EEST)</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
                {[
                  { zone: 'New York (ET)', winter: 'EE +7 hrs', summer: 'EE +7 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'EE +2 hrs', summer: 'EE +2 hrs' },
                  { zone: 'Finland (EET/EEST)', winter: 'Same time!', summer: 'Same time!' },
                  { zone: 'Germany (CET/CEST)', winter: 'EE −1 hr', summer: 'EE −1 hr' },
                  { zone: 'India (IST)', winter: 'EE −3:30', summer: 'EE −2:30' },
                  { zone: 'Japan (JST)', winter: 'EE −7 hrs', summer: 'EE −6 hrs' },
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

      {/* Digital Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>World&apos;s Most Digital Nation — Government in the Cloud</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Estonia is the <strong className={heading}>world&apos;s most digitally advanced society</strong>. <strong className={heading}>99% of government services</strong> are available online 24/7. Estonians can <strong className={heading}>vote online, file taxes in 3 minutes, start a company in 18 minutes</strong>, and sign contracts digitally — all from any timezone using their <strong className={heading}>digital ID</strong>.
            </p>
            <p>
              The <strong className={heading}>e-Residency program</strong> (launched 2014) allows anyone in the world to become a &ldquo;digital resident&rdquo; of Estonia — running an EU company without physically being there. Over <strong className={heading}>100,000 e-residents from 170+ countries</strong> have signed up, managing businesses across all timezones from Estonia&apos;s digital infrastructure.
            </p>
            <p>
              <strong className={heading}>Skype was invented in Estonia</strong> (2003) by Estonian developers Ahti Heinla, Priit Kasesalu, and Jaan Tallinn. Today, Tallinn has the <strong className={heading}>highest number of startups per capita in Europe</strong>. Other Estonian unicorns: <strong className={heading}>Wise (TransferWise), Bolt, Playtech, Pipedrive</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* White Nights */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>White Nights &amp; Dark Winters — Estonia&apos;s Extreme Light Cycle</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              At latitude <strong className={heading}>59°N</strong> (same as Juneau, Alaska), Estonia experiences <strong className={heading}>extreme daylight variation</strong>: in June, Tallinn gets <strong className={heading}>~19 hours of daylight</strong> with &ldquo;white nights&rdquo; where it never gets fully dark. In December, only <strong className={heading}>~6 hours of daylight</strong> — sunrise at 9:15 AM, sunset at 3:20 PM.
            </p>
            <p>
              This creates a <strong className={heading}>unique work culture</strong>: Estonian tech companies often have <strong className={heading}>flexible hours</strong>, with employees working late during dark winters (when there&apos;s nothing to do outside) and taking <strong className={heading}>long summer breaks</strong> during the white nights. Estonia&apos;s <strong className={heading}>same timezone as Finland</strong> (EET/EEST) means Tallinn-Helsinki form a <strong className={heading}>twin-city tech corridor</strong> — connected by a <strong className={heading}>2-hour ferry</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Estonia Key Cities — All on EET/EEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Tallinn', pop: '450K', note: 'Capital, medieval Old Town, tech hub' },
              { city: 'Tartu', pop: '100K', note: 'University city (1632), cultural capital' },
              { city: 'Narva', pop: '55K', note: 'Russia border, 93% Russian-speaking' },
              { city: 'P\u00e4rnu', pop: '50K', note: 'Summer capital, beach resort' },
              { city: 'Viljandi', pop: '17K', note: 'Folk music festival, castle ruins' },
              { city: 'Saaremaa', pop: '31K', note: 'Largest island, spa & nature' },
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
