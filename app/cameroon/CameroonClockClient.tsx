'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function CameroonClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Africa/Douala', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Africa/Douala', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
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
          <span className="inline-block rounded-md bg-green-700 px-2 py-0.5 text-xs font-semibold text-white">WAT</span>
          <span className={`text-sm font-medium ${subText}`}>UTC+1 &middot; No DST</span>
        </div>
        <div className={`mt-3 text-5xl font-bold tracking-tight ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {mounted ? time : '--:--:--'}
        </div>
        <p className={`mt-1 text-sm ${subText}`}>{mounted ? date : '\u00A0'}</p>
        <p className={`mt-2 text-xs ${mutedText}`}>Cameroon observes West Africa Time (WAT) at UTC+1 year-round with no DST.</p>
      </div>

      {/* Quick Facts */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['Population', '~28 million'],
            ['Capital', 'Yaound\u00E9'],
            ['Time Zone', 'WAT (UTC+1)'],
            ['Languages', 'French & English'],
          ].map(([label, value]) => (
            <div key={label} className={innerCard}>
              <p className={`text-xs ${mutedText}`}>{label}</p>
              <p className={`text-sm font-semibold ${subText}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Africa in Miniature */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>&ldquo;Africa in Miniature&rdquo;</h3>
        <ul className={`list-inside list-disc space-y-1 text-sm ${subText}`}>
          <li>Cameroon is called &ldquo;Africa in miniature&rdquo; because it contains every climate and landscape found on the continent.</li>
          <li>Mount Cameroon (4,095 m) is the highest peak in West Africa and an active volcano near the coast.</li>
          <li>Waza National Park in the far north is home to elephants, lions, giraffes, and over 370 bird species.</li>
          <li>The country is one of only a few in Africa that is officially bilingual&mdash;French and English.</li>
        </ul>
      </div>

      {/* Football &amp; Culture */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Football &amp; Culture</h3>
        <p className={`text-sm ${subText}`}>
          The Indomitable Lions are among Africa&apos;s most storied football teams, having appeared in seven FIFA World Cups.
          Roger Milla&apos;s iconic corner-flag dance at the 1990 World Cup remains one of football&apos;s most celebrated moments.
          Cameroon&apos;s culture blends over 250 ethnic groups, with vibrant traditions in music, dance, and craftsmanship
          spanning from the Bamileke highlands to the Sawa coastal peoples.
        </p>
      </div>

      {/* Major Cities */}
      <div className={card}>
        <h3 className={`mb-3 text-lg font-semibold ${heading}`}>Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Yaound\u00E9', '4M', 'Capital'],
            ['Douala', '3.7M', 'Economic hub'],
            ['Bamenda', '500K', 'Northwest'],
            ['Garoua', '436K', 'Northern'],
            ['Bafoussam', '360K', 'West'],
            ['Maroua', '319K', 'Far North'],
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
