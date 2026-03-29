'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function IndiaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in India
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">
            {mounted ? date : ''}
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">IST · UTC+5:30</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">No DST — Year-round</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">1.4 Billion People</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>India Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'India Standard Time (IST)' },
              { label: 'UTC Offset', value: 'UTC+5:30 (always)' },
              { label: 'Daylight Saving', value: 'Never — India does not observe DST' },
              { label: 'IANA Identifier', value: 'Asia/Kolkata' },
              { label: 'Single Time Zone', value: '1 zone for 3,287 km east-west span' },
              { label: 'Major Cities', value: 'Delhi, Mumbai, Bangalore, Chennai' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India vs World Time Zones */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>India Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            IST (UTC+5:30) never changes. Differences with countries that observe DST shift twice a year.
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
                  { zone: 'New York (ET)', winter: 'IST is +10:30', summer: 'IST is +9:30' },
                  { zone: 'Chicago (CT)', winter: 'IST is +11:30', summer: 'IST is +10:30' },
                  { zone: 'Los Angeles (PT)', winter: 'IST is +13:30', summer: 'IST is +12:30' },
                  { zone: 'London (GMT/BST)', winter: 'IST is +5:30', summer: 'IST is +4:30' },
                  { zone: 'Dubai (GST)', winter: 'IST is +1:30', summer: 'IST is +1:30' },
                  { zone: 'Singapore (SGT)', winter: 'IST is −2:30', summer: 'IST is −2:30' },
                  { zone: 'Tokyo (JST)', winter: 'IST is −3:30', summer: 'IST is −3:30' },
                  { zone: 'Sydney (AET)', winter: 'IST is −5:30', summer: 'IST is −4:30' },
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
            Example: When it is 12:00 PM IST in India, it is 1:30 AM EST (2:30 AM EDT) in New York — the same calendar day in winter, previous day in some cases.
          </p>
        </div>
      </section>

      {/* Why UTC+5:30? */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Why Does India Use UTC+5:30 — The Half-Hour Offset?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              India&apos;s <strong className={heading}>UTC+5:30</strong> offset is based on the longitude of <strong className={heading}>82.5°E</strong>, which passes through Mirzapur, Uttar Pradesh — chosen as the reference point for India Standard Time. The half-hour offset reflects India&apos;s actual geographic position between the UTC+5 and UTC+6 zones.
            </p>
            <p>
              Several other countries use half-hour offsets: <strong className={heading}>Nepal (UTC+5:45)</strong>, Iran (UTC+3:30), Afghanistan (UTC+4:30), Myanmar (UTC+6:30), and the Chatham Islands of New Zealand (UTC+12:45). India&apos;s offset is the most widely used — covering <strong className={heading}>1.4 billion people</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* One Time Zone Debate */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Should India Have Multiple Time Zones?</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              India spans <strong className={heading}>3,287 km from east to west</strong> — roughly the same width as the continental US, which has 4 time zones. The sun rises nearly <strong className={heading}>2 hours earlier</strong> in Arunachal Pradesh (northeast) than in Gujarat (west).
            </p>
            <p>
              Researchers and the tea industry in Assam have long advocated for a second time zone (sometimes called &ldquo;Chaibagaan Time&rdquo; or &ldquo;Bagaan Time&rdquo;). However, the Indian government maintains a single time zone for <strong className={heading}>national unity and administrative simplicity</strong>. The debate continues, with studies showing eastern states would benefit from an earlier clock.
            </p>
            <div className={innerCard}>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className={`text-xs ${mutedText} mb-1`}>Easternmost (Dong, Arunachal)</div>
                  <div className={`text-sm font-bold ${heading}`}>Sunrise ~4:30 AM</div>
                  <div className={`text-xs ${mutedText}`}>97.4°E longitude</div>
                </div>
                <div>
                  <div className={`text-xs ${mutedText} mb-1`}>Westernmost (Ghuar Mota, Gujarat)</div>
                  <div className={`text-sm font-bold ${heading}`}>Sunrise ~6:30 AM</div>
                  <div className={`text-xs ${mutedText}`}>68.1°E longitude</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Call India */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Best Time to Call India From the US</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'US East Coast (ET)', best: '8:00 AM – 10:00 AM ET', india: '6:30 PM – 8:30 PM IST', note: 'India evening, US morning' },
              { label: 'US West Coast (PT)', best: '6:00 AM – 8:00 AM PT', india: '6:30 PM – 8:30 PM IST', note: 'India evening, US early morning' },
              { label: 'US East Coast (ET)', best: '8:00 PM – 10:00 PM ET', india: '6:30 AM – 8:30 AM IST (next day)', note: 'India morning, US evening' },
              { label: 'Business Overlap', best: '8:30 AM – 11:00 AM ET', india: '7:00 PM – 9:30 PM IST', note: 'Popular for US-India IT teams' },
            ].map(item => (
              <div key={item.best} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{item.label}</div>
                <div className={`text-sm font-bold ${heading}`}>{item.best}</div>
                <div className={`text-xs ${subText} mt-1`}>= {item.india}</div>
                <div className={`text-xs ${mutedText} mt-0.5`}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Indian Cities — All on IST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'New Delhi', pop: '32M metro', note: 'National capital, NCR region' },
              { city: 'Mumbai', pop: '21M metro', note: 'Financial capital, Bollywood' },
              { city: 'Bangalore', pop: '13M metro', note: 'IT capital, Silicon Valley of India' },
              { city: 'Chennai', pop: '11M metro', note: 'Auto hub, cultural capital of South' },
              { city: 'Kolkata', pop: '15M metro', note: 'Eastern hub, former British capital' },
              { city: 'Hyderabad', pop: '10M metro', note: 'Tech hub, Cyberabad' },
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
