'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'

export default function BosniaAndHerzegovinaClockClient() {
  const { isLight } = useCityContext()
  const [time, setTime] = useState('--:--:--')
  const [date, setDate] = useState('')
  const [isDST, setIsDST] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Sarajevo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { timeZone: 'Europe/Sarajevo', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: 'Europe/Sarajevo' })
      const nowStr = now.toLocaleString('en-US', { timeZone: 'Europe/Sarajevo' })
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
      <section>
        <div className="rounded-2xl text-white p-6 text-center bg-blue-700">
          <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Current Time in Bosnia and Herzegovina</div>
          <div className="text-6xl font-bold tracking-tight mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>{mounted ? time : '--:--:--'}</div>
          <div className="text-sm opacity-80 mb-3">{mounted ? date : ''}</div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 rounded-full font-medium bg-yellow-400/40">{isDST ? 'CEST · UTC+2' : 'CET · UTC+1'}</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">EU-style DST</span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/20">Sarajevo</span>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Bosnia &amp; Herzegovina Time Facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Time Zone', value: 'CET (UTC+1) / CEST (UTC+2)' },
              { label: 'DST Rule', value: 'Last Sunday Mar → Last Sunday Oct' },
              { label: 'IANA Identifier', value: 'Europe/Sarajevo' },
              { label: 'Population', value: '~3.2 million' },
              { label: 'Structure', value: '2 entities — Federation BiH + Republika Srpska' },
              { label: 'Famous For', value: 'Sarajevo, Mostar Bridge, Ottoman heritage' },
            ].map(({ label, value }) => (
              <div key={label} className={innerCard}>
                <div className={`text-xs ${mutedText} mb-1`}>{label}</div>
                <div className={`text-sm font-semibold ${heading}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Sarajevo — Where East Meets West on One Street</h2>
          <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
            <p>
              Sarajevo is one of the <strong className={heading}>only cities in Europe where a mosque, Catholic cathedral, Orthodox church, and synagogue</strong> coexist within <strong className={heading}>500 meters</strong>. The city hosted the <strong className={heading}>1984 Winter Olympics</strong> — one of the few times the Games came to a multi-ethnic, multi-faith city.
            </p>
            <p>
              The famous <strong className={heading}>Stari Most (Old Bridge)</strong> in Mostar, originally built by the Ottomans in 1566 and reconstructed in 2004, is a <strong className={heading}>UNESCO World Heritage symbol</strong> of reconciliation. Bosnia&apos;s <strong className={heading}>CET timezone</strong> keeps it synchronized with <strong className={heading}>Croatia, Serbia, and Central Europe</strong> — crucial for a country navigating between EU aspirations and Balkan realities.
            </p>
            <p>
              BiH has a unique <strong className={heading}>caf&eacute; culture</strong> centered on <strong className={heading}>Bosnian coffee (bosanska kafa)</strong> — slow-brewed in a d&zcaron;ezva pot and served with rahat lokum. The ritual can take <strong className={heading}>hours</strong>, reflecting a <strong className={heading}>Mediterranean-meets-Ottoman sense of time</strong>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-3 ${heading}`}>Bosnia &amp; Herzegovina Key Cities — All on CET/CEST</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { city: 'Sarajevo', pop: '420K', note: 'Capital, 1984 Olympics, Ba\u0161\u010dar\u0161ija' },
              { city: 'Banja Luka', pop: '185K', note: 'RS capital, Vrbas River, Kastel' },
              { city: 'Tuzla', pop: '110K', note: '3rd city, salt lakes, industrial' },
              { city: 'Mostar', pop: '60K', note: 'Stari Most UNESCO, Herzegovina' },
              { city: 'Zenica', pop: '100K', note: 'Steel city, central Bosnia' },
              { city: 'Bi\u0107a\u0107', pop: '55K', note: 'NW hub, Una River, rafting' },
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
