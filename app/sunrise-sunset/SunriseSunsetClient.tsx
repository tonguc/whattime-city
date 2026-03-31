'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { City } from '@/lib/cities'
import { citiesCore } from '@/lib/cities-client'
import { useCitySearch } from '@/lib/useCitySearch'
const cities = citiesCore as unknown as City[]
import { getSunTimes } from '@/lib/sun-calculator'
import { useCityContext } from '@/lib/CityContext'

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatTime12h(decimalHour: number): string {
  const h = Math.floor(decimalHour)
  const m = Math.round((decimalHour - h) * 60)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`
}

function formatDuration(hours: number): string {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return `${h}h ${m}m`
}

function formatDurationDiff(diffHours: number): string {
  const totalMinutes = Math.round(diffHours * 60)
  if (totalMinutes === 0) return '—'
  const sign = totalMinutes > 0 ? '+' : ''
  return `${sign}${totalMinutes} min`
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const POPULAR_CITIES = [
  'new-york', 'london', 'los-angeles', 'tokyo', 'paris', 'dubai',
  'sydney', 'chicago', 'toronto', 'singapore', 'berlin', 'amsterdam',
  'hong-kong', 'seoul', 'mexico-city', 'sao-paulo', 'moscow', 'istanbul',
  'mumbai', 'cairo',
]

const DEFAULT_CITY = cities.find(c => c.slug === 'new-york') ?? cities[0]

// ─── Main Client Component ───────────────────────────────────────────────────

export default function SunriseSunsetClient() {
  const { isLight } = useCityContext()
  const [selectedCity, setSelectedCity] = useState<City>(DEFAULT_CITY)
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [now, setNow] = useState<Date | null>(null)

  const { results: searchResults } = useCitySearch(searchQuery, 8)

  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setShowDropdown(query.trim().length >= 1)
  }, [])

  // Keep dropdown in sync with results
  useEffect(() => {
    if (searchQuery.trim().length >= 1) {
      setShowDropdown(searchResults.length > 0)
    }
  }, [searchResults, searchQuery])

  const selectCity = (city: City | { slug: string; city: string; timezone: string; lat: number; lng: number; country: string; countryCode: string }) => {
    setSelectedCity(city as City)
    setSearchQuery('')
    setShowDropdown(false)
  }

  // ── Theme classes ──
  const card = isLight
    ? 'border border-slate-100 bg-white shadow-sm'
    : 'border border-slate-700/50 bg-slate-800/60'
  const cardAlt = isLight
    ? 'border border-slate-100 bg-slate-50'
    : 'border border-slate-700/50 bg-slate-800/40'
  const heading = isLight ? 'text-slate-800' : 'text-slate-100'
  const subheading = isLight ? 'text-slate-700' : 'text-slate-200'
  const body = isLight ? 'text-slate-600' : 'text-slate-300'
  const muted = isLight ? 'text-slate-500' : 'text-slate-400'
  const faint = isLight ? 'text-slate-400' : 'text-slate-500'
  const label = isLight ? 'text-slate-600' : 'text-slate-300'
  const inputCls = isLight
    ? 'border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:border-amber-400 focus:ring-amber-200'
    : 'border-slate-600 bg-slate-700/60 text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:ring-amber-800'
  const dropdownCls = isLight
    ? 'border-slate-200 bg-white shadow-lg'
    : 'border-slate-600 bg-slate-800 shadow-xl'
  const dropdownItem = isLight
    ? 'text-slate-700 hover:bg-amber-50 hover:text-amber-700'
    : 'text-slate-200 hover:bg-slate-700 hover:text-amber-400'
  const tableHead = isLight
    ? 'bg-slate-50 border-b border-slate-100'
    : 'bg-slate-700/40 border-b border-slate-700/50'
  const tableDivide = isLight ? 'divide-y divide-slate-50' : 'divide-y divide-slate-700/30'
  const rowAlt = isLight ? 'bg-slate-50/40' : 'bg-slate-700/20'
  const sectionHead = isLight ? 'text-slate-700' : 'text-slate-200'
  const cityLinkCls = isLight
    ? 'border-slate-100 bg-white text-slate-700 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700'
    : 'border-slate-700/50 bg-slate-800/40 text-slate-200 hover:border-amber-600/50 hover:bg-slate-700 hover:text-amber-400'
  const statBox = isLight
    ? 'border-slate-100 bg-slate-50'
    : 'border-slate-700/50 bg-slate-800/40'
  const heroDivide = isLight ? 'divide-x divide-slate-100' : 'divide-x divide-slate-700/50'
  const heroBorderT = isLight ? 'border-t border-slate-100 bg-slate-50' : 'border-t border-slate-700/50 bg-slate-800/40'

  if (!now) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className={`text-sm ${muted}`}>Loading sun calculator…</div>
      </div>
    )
  }

  const today = new Date(now)
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const { lat, lng, timezone } = selectedCity
  const todaySun = getSunTimes(today, lat, lng, timezone)
  const tomorrowSun = getSunTimes(tomorrow, lat, lng, timezone)

  const daylightDiff = tomorrowSun.daylightHours - todaySun.daylightHours

  const currentHour = now.getHours() + now.getMinutes() / 60
  let sunStatus = 'Daylight'
  let sunStatusColor = 'text-amber-600'
  if (currentHour < todaySun.dawn || currentHour >= todaySun.dusk) {
    sunStatus = 'Night'
    sunStatusColor = isLight ? 'text-slate-500' : 'text-slate-400'
  } else if (currentHour < todaySun.sunrise) {
    sunStatus = 'Dawn / Civil Twilight'
    sunStatusColor = 'text-orange-500'
  } else if (currentHour >= todaySun.sunset) {
    sunStatus = 'Dusk / Civil Twilight'
    sunStatusColor = 'text-purple-500'
  }

  const year = now.getFullYear()
  const monthlyData = MONTH_NAMES.map((name, i) => {
    const d = new Date(year, i, 1)
    const sun = getSunTimes(d, lat, lng, timezone)
    return { name, ...sun }
  })

  const popularCityObjects = POPULAR_CITIES
    .map(slug => cities.find(c => c.slug === slug))
    .filter(Boolean) as City[]

  const dawnPct = (todaySun.dawn / 24) * 100
  const sunrisePct = (todaySun.sunrise / 24) * 100
  const sunsetPct = (todaySun.sunset / 24) * 100
  const duskPct = (todaySun.dusk / 24) * 100
  const daylightWidth = sunsetPct - sunrisePct
  const dawnWidth = sunrisePct - dawnPct
  const duskWidth = duskPct - sunsetPct

  return (
    <div className="space-y-8">

      {/* ── Page Header ── */}
      <div>
        <h1 className={`text-3xl font-bold ${heading} mb-2`}>
          Sunrise &amp; Sunset Times
        </h1>
        <p className={`${muted} text-base`}>
          Live sun calculator — dawn, dusk, solar noon, and daylight hours for any city.
        </p>
      </div>

      {/* ── City Selector ── */}
      <div className="relative">
        <label htmlFor="city-search" className={`block text-sm font-medium ${label} mb-1`}>
          Select a city
        </label>
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <input
              id="city-search"
              type="text"
              value={searchQuery}
              placeholder={`${selectedCity.city}, ${selectedCity.country}`}
              onChange={e => handleSearch(e.target.value)}
              onFocus={() => searchQuery && setShowDropdown(searchResults.length > 0)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 ${inputCls}`}
            />
            {showDropdown && (
              <ul className={`absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border overflow-hidden ${dropdownCls}`}>
                {searchResults.map(city => (
                  <li key={city.slug}>
                    <button
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${dropdownItem}`}
                      onMouseDown={() => selectCity(city)}
                    >
                      <span className="font-medium">{city.city}</span>
                      <span className={`${faint} ml-1`}>{city.country}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`text-sm ${muted}`}>
            <span className={`font-medium ${subheading}`}>{selectedCity.city}</span>
            {' · '}
            <span>{selectedCity.timezone}</span>
          </div>
        </div>
      </div>

      {/* ── Hero Sun Card ── */}
      <div className={`rounded-2xl overflow-hidden ${card}`}>
        <div className={`px-6 pt-5 pb-4 flex items-center justify-between border-b ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
          <div>
            <div className={`text-xs ${faint} uppercase tracking-wider mb-0.5`}>Sun status now</div>
            <div className={`text-lg font-semibold ${sunStatusColor}`}>{sunStatus}</div>
          </div>
          <div className="text-right">
            <div className={`text-xs ${faint} uppercase tracking-wider mb-0.5`}>Daylight today</div>
            <div className={`text-lg font-semibold ${subheading} tabular-nums`}>
              {formatDuration(todaySun.daylightHours)}
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 ${heroDivide}`}>
          <div className="px-6 py-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🌅</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">Sunrise</span>
            </div>
            <div className="text-4xl font-bold text-amber-600 tabular-nums">
              {formatTime12h(todaySun.sunrise)}
            </div>
            <div className={`text-xs ${faint} mt-1`}>
              Dawn: {formatTime12h(todaySun.dawn)}
            </div>
          </div>
          <div className="px-6 py-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🌇</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-500">Sunset</span>
            </div>
            <div className="text-4xl font-bold text-purple-500 tabular-nums">
              {formatTime12h(todaySun.sunset)}
            </div>
            <div className={`text-xs ${faint} mt-1`}>
              Dusk: {formatTime12h(todaySun.dusk)}
            </div>
          </div>
        </div>

        <div className={`px-6 py-4 flex items-center justify-between ${heroBorderT}`}>
          <div>
            <div className={`text-xs ${faint} uppercase tracking-wider mb-0.5`}>Solar Noon</div>
            <div className={`text-base font-semibold ${subheading} tabular-nums`}>
              {formatTime12h(todaySun.solarNoon)}
            </div>
          </div>
          <div className="text-right">
            <div className={`text-xs ${faint} uppercase tracking-wider mb-0.5`}>Golden Hour end</div>
            <div className={`text-base font-semibold ${subheading} tabular-nums`}>
              {formatTime12h(todaySun.sunrise + 1)}
            </div>
          </div>
          <div className="text-right">
            <div className={`text-xs ${faint} uppercase tracking-wider mb-0.5`}>Golden Hour start</div>
            <div className={`text-base font-semibold ${subheading} tabular-nums`}>
              {formatTime12h(todaySun.sunset - 1)}
            </div>
          </div>
        </div>
      </div>

      {/* ── Today vs Tomorrow ── */}
      <div>
        <h2 className={`text-lg font-semibold ${sectionHead} mb-3`}>Today vs Tomorrow</h2>
        <div className={`rounded-xl overflow-hidden ${card}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`text-left px-4 py-3 ${muted} font-medium w-1/3`}></th>
                <th className={`text-right px-4 py-3 ${subheading} font-semibold`}>Today</th>
                <th className={`text-right px-4 py-3 ${subheading} font-semibold`}>Tomorrow</th>
                <th className={`text-right px-4 py-3 ${muted} font-medium`}>Change</th>
              </tr>
            </thead>
            <tbody className={tableDivide}>
              <tr>
                <td className={`px-4 py-3 ${body} font-medium`}>🌅 Sunrise</td>
                <td className="px-4 py-3 text-right tabular-nums text-amber-600 font-semibold">
                  {formatTime12h(todaySun.sunrise)}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-amber-500">
                  {formatTime12h(tomorrowSun.sunrise)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${faint} text-xs`}>
                  {formatDurationDiff(tomorrowSun.sunrise - todaySun.sunrise)}
                </td>
              </tr>
              <tr>
                <td className={`px-4 py-3 ${body} font-medium`}>🌇 Sunset</td>
                <td className="px-4 py-3 text-right tabular-nums text-purple-500 font-semibold">
                  {formatTime12h(todaySun.sunset)}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-purple-400">
                  {formatTime12h(tomorrowSun.sunset)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${faint} text-xs`}>
                  {formatDurationDiff(tomorrowSun.sunset - todaySun.sunset)}
                </td>
              </tr>
              <tr>
                <td className={`px-4 py-3 ${body} font-medium`}>☀️ Daylight</td>
                <td className={`px-4 py-3 text-right tabular-nums ${subheading} font-semibold`}>
                  {formatDuration(todaySun.daylightHours)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${body}`}>
                  {formatDuration(tomorrowSun.daylightHours)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums text-xs font-medium ${daylightDiff > 0 ? 'text-green-500' : daylightDiff < 0 ? 'text-red-400' : faint}`}>
                  {formatDurationDiff(daylightDiff)}
                </td>
              </tr>
              <tr>
                <td className={`px-4 py-3 ${body} font-medium`}>🕛 Solar Noon</td>
                <td className={`px-4 py-3 text-right tabular-nums ${subheading} font-semibold`}>
                  {formatTime12h(todaySun.solarNoon)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${body}`}>
                  {formatTime12h(tomorrowSun.solarNoon)}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${faint} text-xs`}>
                  {formatDurationDiff(tomorrowSun.solarNoon - todaySun.solarNoon)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 24-Hour Sun Timeline ── */}
      <div>
        <h2 className={`text-lg font-semibold ${sectionHead} mb-3`}>24-Hour Sun Timeline</h2>
        <div className={`rounded-xl p-5 ${card}`}>
          <div className="relative h-10 rounded-full overflow-hidden bg-slate-900 flex">
            <div style={{ width: `${dawnPct}%` }} className="h-full bg-slate-900" />
            <div style={{ width: `${dawnWidth}%` }} className="h-full bg-gradient-to-r from-slate-700 to-orange-300" />
            <div style={{ width: `${daylightWidth}%` }} className="h-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300" />
            <div style={{ width: `${duskWidth}%` }} className="h-full bg-gradient-to-r from-orange-300 to-purple-700" />
            <div style={{ width: `${100 - duskPct}%` }} className="h-full bg-slate-900" />
          </div>

          <div className="relative mt-2 h-8">
            <TimeLabel pct={dawnPct} label="Dawn" color="text-orange-400" />
            <TimeLabel pct={sunrisePct} label="Sunrise" color="text-amber-500" />
            <TimeLabel pct={(todaySun.solarNoon / 24) * 100} label="Noon" color="text-yellow-500" />
            <TimeLabel pct={sunsetPct} label="Sunset" color="text-purple-500" />
            <TimeLabel pct={duskPct} label="Dusk" color="text-purple-400" />
          </div>

          <div className={`relative mt-1 flex justify-between text-xs ${faint} tabular-nums px-0`}>
            {[0, 4, 8, 12, 16, 20, 24].map(h => (
              <span key={h}>{h === 0 ? '12am' : h === 12 ? '12pm' : h < 12 ? `${h}am` : `${h - 12}pm`}</span>
            ))}
          </div>

          <div className={`flex flex-wrap gap-4 mt-4 text-xs ${muted}`}>
            <LegendItem color="bg-slate-900" label="Night" />
            <LegendItem color="bg-orange-300" label="Dawn / Dusk (civil twilight)" />
            <LegendItem color="bg-amber-300" label="Daylight" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <SunStat label="Dawn" value={formatTime12h(todaySun.dawn)} color="text-orange-500" statBox={statBox} faint={faint} />
            <SunStat label="Sunrise" value={formatTime12h(todaySun.sunrise)} color="text-amber-600" statBox={statBox} faint={faint} />
            <SunStat label="Sunset" value={formatTime12h(todaySun.sunset)} color="text-purple-500" statBox={statBox} faint={faint} />
            <SunStat label="Dusk" value={formatTime12h(todaySun.dusk)} color="text-purple-400" statBox={statBox} faint={faint} />
          </div>
        </div>
      </div>

      {/* ── Monthly Table ── */}
      <div>
        <h2 className={`text-lg font-semibold ${sectionHead} mb-3`}>
          Monthly Sunrise &amp; Sunset — {selectedCity.city} {year}
        </h2>
        <div className={`rounded-xl overflow-hidden ${card}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={tableHead}>
                  <th className={`text-left px-4 py-3 ${muted} font-medium`}>Month</th>
                  <th className="text-right px-4 py-3 text-amber-600 font-semibold">Sunrise</th>
                  <th className="text-right px-4 py-3 text-purple-500 font-semibold">Sunset</th>
                  <th className={`text-right px-4 py-3 ${body} font-medium`}>Daylight</th>
                  <th className={`text-right px-4 py-3 ${muted} font-medium`}>Solar Noon</th>
                </tr>
              </thead>
              <tbody className={tableDivide}>
                {monthlyData.map((row, i) => (
                  <tr key={row.name} className={i % 2 !== 0 ? rowAlt : ''}>
                    <td className={`px-4 py-2.5 ${subheading} font-medium`}>{row.name.slice(0, 3)} 1</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-amber-600">
                      {formatTime12h(row.sunrise)}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-purple-500">
                      {formatTime12h(row.sunset)}
                    </td>
                    <td className={`px-4 py-2.5 text-right tabular-nums ${body} font-medium`}>
                      {formatDuration(row.daylightHours)}
                    </td>
                    <td className={`px-4 py-2.5 text-right tabular-nums ${muted}`}>
                      {formatTime12h(row.solarNoon)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Popular City Links ── */}
      <div>
        <h2 className={`text-lg font-semibold ${sectionHead} mb-3`}>
          Sunrise &amp; Sunset for Popular Cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {popularCityObjects.map(city => (
            <Link
              key={city.slug}
              href={`/${city.slug}/sun/`}
              className={`rounded-xl border px-4 py-3 text-sm transition-colors shadow-sm ${cityLinkCls}`}
            >
              <div className="font-medium">{city.city}</div>
              <div className={`text-xs ${faint} mt-0.5`}>{city.country}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── SEO Content ── */}
      <div className={`rounded-xl border px-6 py-6 ${cardAlt}`}>
        <h2 className={`text-lg font-semibold ${sectionHead} mb-3`}>
          About Sunrise &amp; Sunset Times
        </h2>
        <div className={`space-y-4 text-sm ${body} leading-relaxed`}>
          <p>
            Sunrise and sunset times change every day as Earth orbits the Sun. The exact times depend
            on your latitude, longitude, and the time of year. Cities near the equator have relatively
            consistent daylight hours year-round (about 12 hours), while cities at higher latitudes
            experience dramatic seasonal changes. New York, for example, ranges from about 9 hours
            15 minutes of daylight at the winter solstice to over 15 hours at the summer solstice.
          </p>
          <p>
            The calculation above uses astronomical algorithms based on the USNO method (via the
            SunCalc library). Sunrise is defined as the moment the top edge of the solar disk
            appears above the horizon; sunset is when it disappears below. Civil twilight (dawn and
            dusk) begins or ends when the sun is 6° below the horizon — enough light for most
            outdoor activities without artificial lighting.
          </p>
          <p>
            <strong className={subheading}>Solar noon</strong> is not always at 12:00 PM on
            your clock. It shifts by up to 30 minutes depending on your exact longitude within your
            time zone and on the equation of time — the difference between clock time and solar time
            caused by Earth&apos;s elliptical orbit and axial tilt.
          </p>
          <p>
            <strong className={subheading}>Daylight Saving Time</strong> shifts clock-reported
            sunrise and sunset times by 1 hour in regions that observe it. The actual astronomical
            event doesn&apos;t change — only the label on your clock does. Our calculator accounts
            for DST automatically using the selected city&apos;s time zone.
          </p>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <div>
        <h2 className={`text-xl font-semibold ${sectionHead} mb-4`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`rounded-xl border px-5 py-4 ${card}`}>
              <h3 className={`font-semibold ${subheading} mb-1`}>{item.q}</h3>
              <p className={`text-sm ${muted} leading-relaxed`}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function TimeLabel({ pct, label, color }: { pct: number; label: string; color: string }) {
  return (
    <div
      className={`absolute text-xs font-medium ${color} transform -translate-x-1/2`}
      style={{ left: `${pct}%` }}
    >
      {label}
    </div>
  )
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`inline-block w-3 h-3 rounded-sm ${color}`} />
      {label}
    </span>
  )
}

function SunStat({ label, value, color, statBox, faint }: {
  label: string; value: string; color: string; statBox: string; faint: string
}) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-center ${statBox}`}>
      <div className={`text-xs ${faint} mb-0.5`}>{label}</div>
      <div className={`text-sm font-semibold tabular-nums ${color}`}>{value}</div>
    </div>
  )
}

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What time is sunrise today?',
    a: 'Sunrise time depends on your location and the date. Use the city selector above to find the exact sunrise time for any city. For New York, sunrise typically ranges from around 7:20 AM in January to 5:25 AM in mid-June.',
  },
  {
    q: 'What time does the sun set today?',
    a: "Sunset time varies by location and date. Select your city above to see today's sunset time. In New York, sunset ranges from around 4:28 PM in December to 8:31 PM in late June.",
  },
  {
    q: 'How many hours of daylight are there today?',
    a: 'Daylight hours vary by location and season. At the equator, daylight is nearly constant at 12 hours year-round. In New York, daylight ranges from about 9 hours 15 minutes at the winter solstice to 15 hours 5 minutes at the summer solstice.',
  },
  {
    q: 'What is solar noon?',
    a: 'Solar noon is the moment when the sun reaches its highest point in the sky for the day. It is not always at 12:00 PM clock time — it depends on your exact longitude within your time zone and whether Daylight Saving Time is in effect.',
  },
  {
    q: 'What is civil twilight (dawn and dusk)?',
    a: 'Civil twilight (dawn and dusk) is the period when the sun is between 0° and 6° below the horizon. During civil twilight there is enough natural light for most outdoor activities without artificial lighting. Dawn is civil twilight before sunrise; dusk is civil twilight after sunset.',
  },
  {
    q: 'Do sunrise and sunset times change every day?',
    a: 'Yes, sunrise and sunset times shift by 1–3 minutes daily as Earth orbits the Sun. The change is fastest around the spring and autumn equinoxes, and slowest near the solstices. Over the course of a year the total shift from shortest to longest day can exceed 6 hours at mid-latitudes.',
  },
]
