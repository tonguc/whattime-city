'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import { calculatePrayerTimes, CALCULATION_METHODS } from '@/lib/prayer-times'
import type { CalculationMethod } from '@/lib/prayer-times'
import { searchCities } from '@/lib/cities'

/* ───── popular cities for quick access ───── */

const POPULAR_CITIES = [
  { name: 'New York', slug: 'new-york', lat: 40.7128, lng: -74.006, tz: 'America/New_York', country: 'US' },
  { name: 'London', slug: 'london', lat: 51.5074, lng: -0.1278, tz: 'Europe/London', country: 'GB' },
  { name: 'Istanbul', slug: 'istanbul', lat: 41.0082, lng: 28.9784, tz: 'Europe/Istanbul', country: 'TR' },
  { name: 'Dubai', slug: 'dubai', lat: 25.2048, lng: 55.2708, tz: 'Asia/Dubai', country: 'AE' },
  { name: 'Karachi', slug: 'karachi', lat: 24.8607, lng: 67.0011, tz: 'Asia/Karachi', country: 'PK' },
  { name: 'Jakarta', slug: 'jakarta', lat: -6.2088, lng: 106.8456, tz: 'Asia/Jakarta', country: 'ID' },
  { name: 'Cairo', slug: 'cairo', lat: 30.0444, lng: 31.2357, tz: 'Africa/Cairo', country: 'EG' },
  { name: 'Riyadh', slug: 'riyadh', lat: 24.7136, lng: 46.6753, tz: 'Asia/Riyadh', country: 'SA' },
  { name: 'Kuala Lumpur', slug: 'kuala-lumpur', lat: 3.139, lng: 101.6869, tz: 'Asia/Kuala_Lumpur', country: 'MY' },
  { name: 'Chicago', slug: 'chicago', lat: 41.8781, lng: -87.6298, tz: 'America/Chicago', country: 'US' },
  { name: 'Los Angeles', slug: 'los-angeles', lat: 34.0522, lng: -118.2437, tz: 'America/Los_Angeles', country: 'US' },
  { name: 'Toronto', slug: 'toronto', lat: 43.6532, lng: -79.3832, tz: 'America/Toronto', country: 'CA' },
  { name: 'Dhaka', slug: 'dhaka', lat: 23.8103, lng: 90.4125, tz: 'Asia/Dhaka', country: 'BD' },
  { name: 'Lahore', slug: 'lahore', lat: 31.5204, lng: 74.3587, tz: 'Asia/Karachi', country: 'PK' },
  { name: 'Makkah', slug: 'makkah', lat: 21.3891, lng: 39.8579, tz: 'Asia/Riyadh', country: 'SA' },
  { name: 'Madinah', slug: 'madinah', lat: 24.5247, lng: 39.5692, tz: 'Asia/Riyadh', country: 'SA' },
]

interface SelectedCity {
  name: string
  lat: number
  lng: number
  timezone: string
}

const PRAYER_NAMES = [
  { key: 'fajr', label: 'Fajr', arabic: 'الفجر', desc: 'Pre-dawn' },
  { key: 'sunrise', label: 'Sunrise', arabic: 'الشروق', desc: 'Sunrise' },
  { key: 'dhuhr', label: 'Dhuhr', arabic: 'الظهر', desc: 'Midday' },
  { key: 'asr', label: 'Asr', arabic: 'العصر', desc: 'Afternoon' },
  { key: 'maghrib', label: 'Maghrib', arabic: 'المغرب', desc: 'Sunset' },
  { key: 'isha', label: 'Isha', arabic: 'العشاء', desc: 'Night' },
] as const

const faqItems = [
  {
    q: 'What are the 5 daily prayer times in Islam?',
    a: 'The five daily prayers (Salah) are: Fajr (pre-dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer has a specific time window determined by the position of the sun.',
  },
  {
    q: 'How are Islamic prayer times calculated?',
    a: 'Prayer times are calculated based on the position of the sun. Fajr begins at dawn when the sun is 15°-19.5° below the horizon (depending on method). Dhuhr starts at solar noon. Asr when the shadow of an object equals its height (Shafi) or twice its height (Hanafi). Maghrib at sunset. Isha when twilight disappears.',
  },
  {
    q: 'What is the difference between ISNA and MWL methods?',
    a: 'ISNA (Islamic Society of North America) uses 15° for both Fajr and Isha — giving later Fajr and earlier Isha, which is practical at higher latitudes. MWL (Muslim World League) uses 18° for Fajr and 17° for Isha — more conservative and widely used globally.',
  },
  {
    q: 'What is the difference between Shafi and Hanafi Asr time?',
    a: 'In the Shafi method, Asr begins when an object\'s shadow equals its height. In the Hanafi method, Asr begins when the shadow is twice the object\'s height. Hanafi Asr is typically 30-60 minutes later.',
  },
  {
    q: 'What time is Fajr prayer today?',
    a: 'Fajr time varies by location and date. Enter your city above to see today\'s exact Fajr time. Fajr is the pre-dawn prayer that begins when the first horizontal light appears.',
  },
]

export default function PrayerTimesClient() {
  const { isLight } = useCityContext()

  const [city, setCity] = useState<SelectedCity>({ name: POPULAR_CITIES[0].name, lat: POPULAR_CITIES[0].lat, lng: POPULAR_CITIES[0].lng, timezone: POPULAR_CITIES[0].tz })
  const [method, setMethod] = useState<CalculationMethod>(CALCULATION_METHODS[0])
  const [madhab, setMadhab] = useState<'shafi' | 'hanafi'>('shafi')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof POPULAR_CITIES>([])
  const [showSearch, setShowSearch] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const today = useMemo(() => new Date(), [])

  const prayerTimes = useMemo(
    () => calculatePrayerTimes(today, city.lat, city.lng, city.timezone, method, madhab),
    [today, city, method, madhab],
  )

  // Weekly prayer times
  const weeklyTimes = useMemo(() => {
    const days: { date: Date; dayName: string; times: ReturnType<typeof calculatePrayerTimes> }[] = []
    for (let i = 0; i < 7; i++) {
      const d = new Date(today)
      d.setDate(d.getDate() + i)
      days.push({
        date: d,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        times: calculatePrayerTimes(d, city.lat, city.lng, city.timezone, method, madhab),
      })
    }
    return days
  }, [today, city, method, madhab])

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q)
    if (q.length < 2) {
      setSearchResults([])
      return
    }
    const results = searchCities(q).slice(0, 8).map(c => ({
      name: c.city,
      slug: c.slug,
      lat: c.lat,
      lng: c.lng,
      tz: c.timezone,
      country: c.countryCode,
    }))
    setSearchResults(results)
  }, [])

  const selectCity = useCallback((c: { name: string; lat: number; lng: number; tz: string }) => {
    setCity({ name: c.name, lat: c.lat, lng: c.lng, timezone: c.tz })
    setShowSearch(false)
    setSearchQuery('')
    setSearchResults([])
  }, [])

  /* ───── styles ───── */
  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white'
    : 'rounded-2xl border border-slate-700 bg-slate-800'
  const nestedCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const accent = isLight ? 'text-emerald-600' : 'text-emerald-400'
  const accentBg = isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-900/30 border-emerald-700/50'
  const tableHead = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const tableHeadText = isLight ? 'text-slate-600' : 'text-slate-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-700'
  const inputClass = isLight
    ? 'bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-emerald-500'
    : 'bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-emerald-400'
  const dropdownBg = isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-600'
  const hoverBg = isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'

  const todayStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="w-full space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Prayer Times</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Prayer Times Today
        </h1>
        <p className={`text-lg ${subText}`}>
          Accurate <strong>Salah times</strong> for any city worldwide.
          Fajr, Dhuhr, Asr, Maghrib &amp; Isha.
        </p>
      </header>

      {/* ───── City Selector ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search city..."
              value={showSearch ? searchQuery : city.name}
              onFocus={() => { setShowSearch(true); setSearchQuery('') }}
              onChange={e => handleSearch(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl text-sm outline-none ${inputClass}`}
            />
            {showSearch && searchResults.length > 0 && (
              <div className={`absolute top-full mt-1 left-0 right-0 rounded-xl border shadow-lg z-50 max-h-60 overflow-y-auto ${dropdownBg}`}>
                {searchResults.map(c => (
                  <button
                    key={c.slug}
                    onClick={() => selectCity(c)}
                    className={`w-full text-left px-4 py-2.5 text-sm ${heading} ${hoverBg} transition-colors`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
            {showSearch && searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className={`absolute top-full mt-1 left-0 right-0 rounded-xl border shadow-lg z-50 px-4 py-3 text-sm ${mutedText} ${dropdownBg}`}>
                No cities found
              </div>
            )}
          </div>

          <select
            value={method.name}
            onChange={e => setMethod(CALCULATION_METHODS.find(m => m.name === e.target.value) || CALCULATION_METHODS[0])}
            className={`px-3 py-3 rounded-xl text-sm outline-none ${inputClass}`}
          >
            {CALCULATION_METHODS.map(m => (
              <option key={m.name} value={m.name}>{m.label}</option>
            ))}
          </select>

          <select
            value={madhab}
            onChange={e => setMadhab(e.target.value as 'shafi' | 'hanafi')}
            className={`px-3 py-3 rounded-xl text-sm outline-none ${inputClass}`}
          >
            <option value="shafi">Shafi / Standard</option>
            <option value="hanafi">Hanafi</option>
          </select>
        </div>

        {/* Popular cities */}
        <div className="flex flex-wrap gap-2">
          {POPULAR_CITIES.slice(0, 8).map(c => (
            <button
              key={c.slug}
              onClick={() => selectCity(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                city.name === c.name
                  ? isLight ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-emerald-900/40 text-emerald-300 border border-emerald-600'
                  : isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Today's Prayer Times ───── */}
      <section className={`${card} p-6 sm:p-8 space-y-4`}>
        <div className="text-center">
          <h2 className={`text-xl font-bold ${heading}`}>
            Prayer Times in {city.name}
          </h2>
          <p className={`text-sm ${mutedText} mt-1`}>{todayStr}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PRAYER_NAMES.map(p => {
            const time = prayerTimes[p.key as keyof typeof prayerTimes]
            const isSunrise = p.key === 'sunrise'
            return (
              <div
                key={p.key}
                className={`${isSunrise ? nestedCard : `rounded-xl border ${accentBg}`} p-4 text-center`}
              >
                <p className={`text-xs font-medium ${isSunrise ? mutedText : accent} mb-0.5`}>
                  {p.arabic}
                </p>
                <p className={`text-sm font-semibold ${heading}`}>{p.label}</p>
                <p
                  className={`text-2xl font-bold mt-1 ${isSunrise ? subText : accent}`}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {time}
                </p>
                <p className={`text-xs ${mutedText} mt-0.5`}>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ───── 7-Day Table ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>
          7-Day Prayer Timetable — {city.name}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-2 text-left font-medium ${tableHeadText}`}>Day</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText}`}>Fajr</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText} hidden sm:table-cell`}>Sunrise</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText}`}>Dhuhr</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText}`}>Asr</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText}`}>Maghrib</th>
                <th className={`py-2.5 px-2 text-center font-medium ${tableHeadText}`}>Isha</th>
              </tr>
            </thead>
            <tbody>
              {weeklyTimes.map((day, i) => (
                <tr
                  key={i}
                  className={`border-t ${tableBorder} ${
                    i === 0 ? (isLight ? 'bg-emerald-50/50' : 'bg-emerald-900/10') : ''
                  }`}
                >
                  <td className={`py-2.5 px-2 font-medium ${heading}`}>
                    {day.dayName} {day.date.getDate()}
                  </td>
                  {(['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'] as const).map(key => (
                    <td
                      key={key}
                      className={`py-2.5 px-2 text-center ${subText} ${key === 'sunrise' ? 'hidden sm:table-cell' : ''}`}
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {day.times[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ───── More Cities Grid ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Prayer Times in Popular Cities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {POPULAR_CITIES.slice(0, 12).map(c => {
            const times = calculatePrayerTimes(today, c.lat, c.lng, c.tz, method, madhab)
            return (
              <button
                key={c.slug}
                onClick={() => { selectCity(c); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className={`${nestedCard} p-3 text-left transition-transform hover:scale-[1.01]`}
              >
                <p className={`font-semibold text-sm ${heading}`}>{c.name}</p>
                <div className={`flex gap-3 mt-1 text-xs ${mutedText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                  <span>Fajr {times.fajr}</span>
                  <span>Dhuhr {times.dhuhr}</span>
                  <span>Asr {times.asr}</span>
                  <span>Maghrib {times.maghrib}</span>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* ───── Info Section ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Understanding Prayer Times</h2>
        <div className={`text-sm space-y-3 ${subText}`}>
          <p>
            Islamic prayer times are determined by the position of the sun in the sky.
            Because the Earth tilts on its axis and orbits the sun, prayer times shift
            slightly every day and vary significantly by location and season.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Fajr', desc: 'Begins at true dawn — when the first light appears as a horizontal line on the eastern horizon. The exact angle varies by calculation method (15°–19.5° below horizon).' },
              { name: 'Dhuhr', desc: 'Starts a few minutes after the sun crosses the local meridian (solar noon). This is when the sun begins its descent from its highest point.' },
              { name: 'Asr', desc: 'In the Shafi school, Asr begins when an object\'s shadow equals its own length. In the Hanafi school, it begins when the shadow is twice the length.' },
              { name: 'Maghrib', desc: 'Begins immediately at sunset — when the upper edge of the sun dips below the western horizon. This prayer has the shortest window.' },
              { name: 'Isha', desc: 'Begins when the red twilight (or white twilight in some schools) disappears from the sky. The angle varies by method (15°–18° below horizon).' },
            ].map(item => (
              <div key={item.name} className={`${nestedCard} p-3`}>
                <h3 className={`font-semibold ${heading} mb-1`}>{item.name}</h3>
                <p className="text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Calculation Methods Explained ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Calculation Methods Compared</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={tableHead}>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText}`}>Method</th>
                <th className={`py-2.5 px-3 text-center font-medium ${tableHeadText}`}>Fajr Angle</th>
                <th className={`py-2.5 px-3 text-center font-medium ${tableHeadText}`}>Isha</th>
                <th className={`py-2.5 px-3 text-left font-medium ${tableHeadText} hidden sm:table-cell`}>Used In</th>
              </tr>
            </thead>
            <tbody>
              {[
                { m: 'ISNA', fajr: '15°', isha: '15°', region: 'North America' },
                { m: 'MWL', fajr: '18°', isha: '17°', region: 'Europe, Far East, worldwide' },
                { m: 'Egyptian', fajr: '19.5°', isha: '17.5°', region: 'Africa, Syria, Lebanon' },
                { m: 'Umm Al-Qura', fajr: '18.5°', isha: '90 min', region: 'Saudi Arabia, Gulf' },
                { m: 'Karachi', fajr: '18°', isha: '18°', region: 'Pakistan, Bangladesh, India' },
                { m: 'Tehran', fajr: '17.7°', isha: '14°', region: 'Iran, Shia communities' },
                { m: 'Diyanet', fajr: '18°', isha: '17°', region: 'Turkey' },
              ].map((row, i) => (
                <tr key={row.m} className={`border-t ${tableBorder} ${i % 2 !== 0 ? (isLight ? 'bg-slate-50/50' : 'bg-slate-800/30') : ''}`}>
                  <td className={`py-2.5 px-3 font-medium ${heading}`}>{row.m}</td>
                  <td className={`py-2.5 px-3 text-center ${subText}`}>{row.fajr}</td>
                  <td className={`py-2.5 px-3 text-center ${subText}`}>{row.isha}</td>
                  <td className={`py-2.5 px-3 ${mutedText} hidden sm:table-cell`}>{row.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`${nestedCard} overflow-hidden`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium ${heading}`}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className={`px-4 pb-4 text-sm ${subText}`}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───── Related Tools ───── */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/sunrise-sunset/', label: 'Sunrise & Sunset' },
            { href: '/days-from-today/', label: 'Days Calculator' },
            { href: '/time-converter/', label: 'Time Converter' },
            { href: '/meeting/', label: 'Meeting Planner' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${nestedCard} p-3 text-center text-sm font-medium ${heading} hover:scale-[1.02] transition-transform`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <p className={`text-center text-xs ${mutedText}`}>
        Prayer times are calculated using astronomical formulas based on your selected method and location.
        Times may vary by 1-2 minutes from your local mosque. Always confirm with your local religious authority.
      </p>
    </div>
  )
}
