'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { City } from '@/lib/cities'
import { citiesCore } from '@/lib/cities-client'
const cities = citiesCore as unknown as City[]
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'
import CitySelectSearch from '@/components/CitySelectSearch'
import { flightTimeSEO } from '@/data/seo/flight-time-seo'

export default function FlightTimeClient() {
  const { theme, isLight } = useCityContext()

  const [departureCity, setDepartureCity] = useState<City>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('whattime-meeting-cities')
        if (saved) {
          const slugs = JSON.parse(saved) as string[]
          if (slugs[0]) {
            const city = cities.find(c => c.slug === slugs[0])
            if (city) return city
          }
        }
      } catch {}
    }
    return cities.find(c => c.city === 'New York') || cities[0]
  })

  const [arrivalCity, setArrivalCity] = useState<City>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('whattime-meeting-cities')
        if (saved) {
          const slugs = JSON.parse(saved) as string[]
          if (slugs[1]) {
            const city = cities.find(c => c.slug === slugs[1])
            if (city) return city
          }
        }
      } catch {}
    }
    return cities.find(c => c.city === 'London') || cities[1]
  })

  const [departureHour, setDepartureHour] = useState(10)
  const [departureMinute, setDepartureMinute] = useState(0)
  const [flightDuration, setFlightDuration] = useState({ hours: 7, minutes: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const slugs = [departureCity.slug, arrivalCity.slug]
        localStorage.setItem('whattime-meeting-cities', JSON.stringify(slugs))
      } catch {}
    }
  }, [departureCity.slug, arrivalCity.slug])

  const getArrivalTime = () => {
    const departure = new Date()
    departure.setHours(departureHour, departureMinute, 0, 0)
    const arrivalUTC = new Date(departure.getTime() + (flightDuration.hours * 60 + flightDuration.minutes) * 60 * 1000)
    const depOffset = new Date(departure.toLocaleString('en-US', { timeZone: departureCity.timezone }))
    const arrOffset = new Date(departure.toLocaleString('en-US', { timeZone: arrivalCity.timezone }))
    const tzDiff = arrOffset.getTime() - depOffset.getTime()
    const arrivalLocal = new Date(arrivalUTC.getTime() + tzDiff)
    return {
      time: arrivalLocal.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      nextDay: arrivalLocal.getDate() !== departure.getDate()
    }
  }

  const arrival = getArrivalTime()
  const { content } = flightTimeSEO

  const cardClass = `rounded-2xl p-6 backdrop-blur-xl border ${theme.card}`
  const boxClass = isLight ? 'bg-white/60 border border-white/70 rounded-xl' : 'bg-slate-800/60 border border-slate-600/60 rounded-xl'
  const inputClass = isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'

  return (
    <ToolPageWrapper footer={<Footer />}>
      <ToolsMiniNav />

      {/* Hero */}
      <div className="text-center mb-6">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          {content.h1}
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          {content.intro}
        </p>
      </div>

      {/* Calculator */}
      <div className={`${cardClass} mb-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className={`font-medium mb-3 ${theme.text}`}>Departure</h3>
            <div className="mb-3">
              <CitySelectSearch
                value={departureCity}
                onChange={setDepartureCity}
                isLight={isLight}
                inputClass={inputClass}
                placeholder="Search departure city…"
              />
            </div>
            <div className="flex gap-2">
              <select value={departureHour} onChange={(e) => setDepartureHour(parseInt(e.target.value))} className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}>
                {Array.from({ length: 24 }, (_, i) => (<option key={i} value={i}>{i.toString().padStart(2, '0')}:00</option>))}
              </select>
              <select value={departureMinute} onChange={(e) => setDepartureMinute(parseInt(e.target.value))} className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}>
                {[0, 15, 30, 45].map(m => (<option key={m} value={m}>:{m.toString().padStart(2, '0')}</option>))}
              </select>
            </div>
          </div>
          <div>
            <h3 className={`font-medium mb-3 ${theme.text}`}>Arrival</h3>
            <div className="mb-3">
              <CitySelectSearch
                value={arrivalCity}
                onChange={setArrivalCity}
                isLight={isLight}
                inputClass={inputClass}
                placeholder="Search arrival city…"
              />
            </div>
            <div className={`text-center py-2 text-2xl font-bold ${theme.accentText}`}>
              {arrival.time} {arrival.nextDay && <span className="text-sm">(+1 day)</span>}
            </div>
          </div>
        </div>
        <div className={`mt-6 pt-6 border-t ${isLight ? 'border-slate-200/50' : 'border-slate-600/50'}`}>
          <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Flight Duration</label>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <input type="number" min="0" max="24" value={flightDuration.hours}
                onChange={(e) => setFlightDuration({ ...flightDuration, hours: parseInt(e.target.value) || 0 })}
                className={`w-20 px-3 py-2 rounded-lg border text-center ${inputClass}`} />
              <span className={theme.textMuted}>hours</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="0" max="59" value={flightDuration.minutes}
                onChange={(e) => setFlightDuration({ ...flightDuration, minutes: parseInt(e.target.value) || 0 })}
                className={`w-20 px-3 py-2 rounded-lg border text-center ${inputClass}`} />
              <span className={theme.textMuted}>minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          {content.useCases.map((uc, i) => (
            <li key={i} className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div><strong>{uc.title}</strong> — {uc.description}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Who Is It For */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>Who Is This Tool For?</h2>
        <p className={theme.textMuted}>{content.whoIsItFor}</p>
      </section>

      {/* Content Sections */}
      {content.sections.map((section, i) => (
        <section key={i} className={`${cardClass} mb-4`}>
          <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>{section.title}</h2>
          <p className={theme.textMuted}>{section.content}</p>
        </section>
      ))}

      {/* Popular Routes Reference Table */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-2 ${theme.text}`}>Popular Flight Routes — Arrival Time Examples</h2>
        <p className={`text-sm mb-4 ${theme.textMuted}`}>Sample calculations for common international routes. Actual times vary by date and DST status.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <th className={`text-left py-2 pr-3 font-semibold ${theme.text}`}>Route</th>
                <th className={`text-left py-2 pr-3 font-semibold ${theme.text}`}>Duration</th>
                <th className={`text-left py-2 pr-3 font-semibold ${theme.text}`}>Depart</th>
                <th className={`text-left py-2 pr-3 font-semibold ${theme.text}`}>Arrive (local)</th>
                <th className={`text-left py-2 font-semibold ${theme.text} hidden sm:table-cell`}>TZ Shift</th>
              </tr>
            </thead>
            <tbody className={`${theme.textMuted} divide-y ${isLight ? 'divide-slate-100' : 'divide-slate-700/50'}`}>
              {content.popularRoutes.map((r) => (
                <tr key={r.route}>
                  <td className={`py-2 pr-3 font-medium ${theme.text}`}>{r.route}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.duration}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.depart}</td>
                  <td className={`py-2 pr-3 tabular-nums font-medium ${theme.accentText}`}>{r.arrive}</td>
                  <td className="py-2 hidden sm:table-cell">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Tools */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {content.internalLinks.map((link, i) => (
            <Link key={i} href={link.href} className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
              <div className={`text-sm font-medium ${theme.text}`}>{link.text}</div>
              <div className={`text-xs ${theme.textMuted}`}>{link.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Frequently Asked Questions</h2>
        <div className={`space-y-4 ${theme.textMuted}`}>
          {content.faq.map((item, i) => (
            <div key={i}>
              <h3 className={`font-medium mb-1 ${theme.text}`}>{item.question}</h3>
              <p className="text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* E-E-A-T Footer */}
      <p className={`text-xs text-center mt-4 ${theme.textMuted}`}>{content.eeatFooter}</p>
    </ToolPageWrapper>
  )
}
