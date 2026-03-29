'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function MalawiClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Blantyre', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Blantyre', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white p-6' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50 p-4' : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clock */}
      <div className={card}>
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-block rounded-md bg-red-800 px-2 py-0.5 text-xs font-semibold text-white">CAT</span>
          <span className={`text-sm font-medium ${subText}`}>UTC+2 &middot; No DST</span>
        </div>
        <div className={`mt-3 text-5xl font-bold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>Malawi observes Central Africa Time (CAT) at UTC+2 year-round with no DST.</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~20 million'],
            ['Capital', 'Lilongwe'],
            ['Time Zone', 'CAT (UTC+2)'],
            ['Nickname', 'Warm Heart of Africa'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lake Malawi */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Lake Malawi &mdash; A Freshwater Sea</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Lake Malawi is the 9th largest lake in the world and the 3rd largest in Africa, stretching 580 km north to south.</li>
          <li>It is a UNESCO World Heritage Site, home to over 1,000 species of cichlid fish&mdash;more than any other lake on Earth.</li>
          <li>The lake covers roughly one-third of Malawi&apos;s total area and is vital for fishing, transport, and tourism.</li>
          <li>Cape Maclear on the southern shore is one of East Africa&apos;s most popular freshwater diving destinations.</li>
        </ul>
      </div>

      {/* Nature & Agriculture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Nature &amp; Agriculture</h3>
        <p className={`text-sm ${subText}`}>
          Mount Mulanje, at 3,002 m, is the highest peak in Central Africa and a premier hiking destination with endemic cedar forests.
          Malawi&apos;s economy relies heavily on agriculture&mdash;tea plantations around Thyolo and Mulanje produce world-class tea,
          while tobacco remains the country&apos;s largest export crop.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Lilongwe', '989K', 'Capital'],
            ['Blantyre', '800K', 'Commercial'],
            ['Mzuzu', '220K', 'Northern'],
            ['Zomba', '105K', 'Former capital'],
            ['Kasungu', '65K', 'Central'],
            ['Mangochi', '54K', 'Lakeside'],
          ].map(([city, pop, note]) => (
            <div key={city} className={innerCard}>
              <p className={`text-sm font-semibold ${heading}`}>{city}</p>
              <p className={`text-xs ${mutedText}`}>{pop} &middot; {note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
