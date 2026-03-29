'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function KenyaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Nairobi', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
            Current Time in Kenya
          </div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {mounted ? time : '--:--:--'}
          </div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-white/40">EAT · UTC+3 (always)</span>
            <span className="px-3 py-1 rounded-full font-medium bg-red-400/30">No DST — Equatorial</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Nairobi</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Kenya Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'EAT — East Africa Time (UTC+3)' },
              { label: 'DST Status', value: 'Never — equator = ~12h daylight year-round' },
              { label: 'IANA Identifier', value: 'Africa/Nairobi' },
              { label: 'Population', value: '~56 million' },
              { label: 'Equator Position', value: 'Equator crosses Kenya at 0° latitude' },
              { label: 'Famous For', value: 'M-Pesa, Safari, marathons, Silicon Savannah' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kenya vs World */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Kenya Time vs World</h2>
          <p className={`text-sm mb-4 ${subText}`}>
            Kenya uses EAT (UTC+3) year-round with no DST. This means the offset to other countries changes when <em>they</em> switch clocks.
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
                  { zone: 'New York (ET)', winter: 'Kenya +8 hrs', summer: 'Kenya +7 hrs' },
                  { zone: 'Los Angeles (PT)', winter: 'Kenya +11 hrs', summer: 'Kenya +10 hrs' },
                  { zone: 'London (GMT/BST)', winter: 'Kenya +3 hrs', summer: 'Kenya +2 hrs' },
                  { zone: 'Berlin (CET/CEST)', winter: 'Kenya +2 hrs', summer: 'Kenya +1 hr' },
                  { zone: 'India (IST)', winter: 'Kenya −2:30', summer: 'Kenya −2:30' },
                  { zone: 'South Africa (SAST)', winter: 'Kenya +1 hr', summer: 'Kenya +1 hr' },
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

      {/* Swahili Time */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Swahili Time — When 7 AM Is &ldquo;Hour One&rdquo;</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kenya (and much of East Africa) has a fascinating <strong className={heading}>dual time system</strong>. In <strong className={heading}>Swahili time</strong>, the clock starts at <strong className={heading}>sunrise (~6 AM)</strong>, not midnight. So <strong className={heading}>7:00 AM = &ldquo;saa moja&rdquo; (hour one)</strong>, 8:00 AM = &ldquo;saa mbili&rdquo; (hour two), and so on.
            </p>
            <p>
              This makes intuitive sense near the <strong className={heading}>equator</strong>: sunrise is always around 6:00 AM and sunset around 6:00 PM, so Swahili time divides the day into two natural <strong className={heading}>12-hour halves starting at sunrise and sunset</strong>.
            </p>
            <p>
              In practice, many Kenyans <strong className={heading}>switch between both systems</strong> daily. Business and tech use &ldquo;English time&rdquo; (standard AM/PM), while social plans might use Swahili time. If a Kenyan friend says &ldquo;let&apos;s meet at <em>saa tisa</em>&rdquo; (hour nine), they mean <strong className={heading}>3:00 PM</strong>, not 9:00 AM.
            </p>
          </div>
        </div>
      </section>

      {/* M-Pesa & Silicon Savannah */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>M-Pesa & Silicon Savannah — Kenya&apos;s Tech Revolution</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kenya leapfrogged the banking era with <strong className={heading}>M-Pesa</strong> (launched 2007) — the world&apos;s most successful mobile money platform. Over <strong className={heading}>50 million transactions daily</strong> flow through M-Pesa. Kenyans pay for everything via phone: rent, groceries, salaries, school fees. <strong className={heading}>GDP flows through M-Pesa equal ~50% of Kenya&apos;s total GDP</strong>.
            </p>
            <p>
              Nairobi&apos;s <strong className={heading}>iHub</strong> and the broader <strong className={heading}>&ldquo;Silicon Savannah&rdquo;</strong> ecosystem has made Kenya <strong className={heading}>Africa&apos;s leading tech startup hub</strong>. Major companies: <strong className={heading}>Safaricom</strong> (M-Pesa parent), <strong className={heading}>Twiga Foods</strong> (agri-tech), <strong className={heading}>Andela</strong> (developer training). Google, Microsoft, and IBM all have African HQs in Nairobi.
            </p>
            <p>
              Kenya&apos;s EAT timezone (UTC+3) gives Nairobi tech workers <strong className={heading}>overlap with both European mornings and Middle Eastern business hours</strong> — making it a natural bridge for Africa-Europe-Gulf tech collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Marathon Nation */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Marathon Nation — The 5 AM Training Runs of Iten</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Kenya dominates long-distance running like no other country. The small town of <strong className={heading}>Iten (2,400m altitude)</strong> in the Rift Valley has produced more Olympic and World Championship medalists than entire continents. Runners train at <strong className={heading}>5:00 AM EAT</strong> — dawn, before the equatorial heat.
            </p>
            <p>
              <strong className={heading}>Eliud Kipchoge</strong> ran the first sub-2-hour marathon (1:59:40) in 2019. Kenya&apos;s running dominance is partly <strong className={heading}>altitude + equatorial consistency</strong>: year-round ~12 hours of daylight and moderate temperatures at altitude create perfect training conditions without seasonal disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Major Kenyan Cities — All on EAT (UTC+3)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Nairobi', pop: '5M metro', note: 'Capital, Silicon Savannah, UN-Habitat HQ' },
              { city: 'Mombasa', pop: '1.3M', note: 'Coastal hub, East Africa\'s largest port' },
              { city: 'Kisumu', pop: '610K', note: 'Lake Victoria, western gateway' },
              { city: 'Nakuru', pop: '570K', note: 'Rift Valley, flamingo lake' },
              { city: 'Eldoret', pop: '475K', note: 'Near Iten, marathon runners\' hub' },
              { city: 'Malindi', pop: '120K', note: 'Coast, Italian tourism, marine park' },
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
