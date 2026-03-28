'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import { getSunTimes, formatSunTime } from '@/lib/sun-calculator'
import { cities } from '@/lib/cities'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CityData {
  slug: string
  city: string
  cityLabel: string
  country: string
  countryCode: string
  timezone: string
  tzAbbr: string
  hasDST: boolean
  lat: number
  lng: number
}

interface Props {
  city: CityData
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDaylight(hours: number): string {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return `${h}h ${m.toString().padStart(2, '0')}m`
}

function formatDiff(diff: number): string {
  const sign = diff >= 0 ? '+' : '−'
  const abs = Math.abs(diff)
  const h = Math.floor(abs)
  const m = Math.round((abs - h) * 60)
  if (h === 0) return `${sign}${m}m`
  if (m === 0) return `${sign}${h}h`
  return `${sign}${h}h ${m}m`
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DaylightBar({ dawn, sunrise, sunset, dusk }: {
  dawn: number; sunrise: number; sunset: number; dusk: number
}) {
  const toPercent = (h: number) => `${(h / 24) * 100}%`
  const widthPercent = (a: number, b: number) => `${((b - a) / 24) * 100}%`

  return (
    <div className="relative w-full h-10 rounded-xl overflow-hidden bg-slate-800">
      {/* Night left */}
      <div
        className="absolute top-0 h-full bg-slate-900"
        style={{ left: 0, width: toPercent(dawn) }}
      />
      {/* Dawn */}
      <div
        className="absolute top-0 h-full bg-amber-900/70"
        style={{ left: toPercent(dawn), width: widthPercent(dawn, sunrise) }}
      />
      {/* Day */}
      <div
        className="absolute top-0 h-full bg-amber-400"
        style={{ left: toPercent(sunrise), width: widthPercent(sunrise, sunset) }}
      />
      {/* Dusk */}
      <div
        className="absolute top-0 h-full bg-violet-800/70"
        style={{ left: toPercent(sunset), width: widthPercent(sunset, dusk) }}
      />
      {/* Night right */}
      <div
        className="absolute top-0 h-full bg-slate-900"
        style={{ left: toPercent(dusk), width: widthPercent(dusk, 24) }}
      />

      {/* Hour markers */}
      {[0, 3, 6, 9, 12, 15, 18, 21, 24].map(h => (
        <div
          key={h}
          className="absolute top-0 bottom-0 w-px bg-slate-600/40"
          style={{ left: toPercent(h) }}
        />
      ))}

      {/* Labels */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-white/80 select-none pointer-events-none">
        <span>12am</span>
        <span>6am</span>
        <span>12pm</span>
        <span>6pm</span>
        <span>12am</span>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SunPageClient({ city }: Props) {
  const [now, setNow] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])

  // Today's sun times
  const today = useMemo(() => {
    const d = now ?? new Date()
    return getSunTimes(d, city.lat, city.lng, city.timezone)
  }, [now, city.lat, city.lng, city.timezone])

  // Tomorrow's sun times
  const tomorrow = useMemo(() => {
    const d = now ?? new Date()
    const tm = new Date(d)
    tm.setDate(tm.getDate() + 1)
    return getSunTimes(tm, city.lat, city.lng, city.timezone)
  }, [now, city.lat, city.lng, city.timezone])

  // Monthly table (1st of each month, 2026)
  const monthlyData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2026, i, 1)
      const st = getSunTimes(date, city.lat, city.lng, city.timezone)
      return {
        month: date.toLocaleString('en', { month: 'long' }),
        ...st,
      }
    })
  }, [city.lat, city.lng, city.timezone])

  // Current local time in city
  const localTimeStr = useMemo(() => {
    if (!now) return '--:--'
    return now.toLocaleTimeString('en-US', {
      timeZone: city.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }, [now, city.timezone])

  // Local decimal hour for sun-up indicator
  const localDecimalHour = useMemo(() => {
    if (!now) return 12
    const parts = now.toLocaleTimeString('en-US', {
      timeZone: city.timezone,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).split(':').map(Number)
    return (parts[0] ?? 12) + (parts[1] ?? 0) / 60
  }, [now, city.timezone])

  const sunIsUp = localDecimalHour >= today.sunrise && localDecimalHour < today.sunset

  // Nearby cities — same timezone, pick up to 6, exclude self
  const nearbyCities = useMemo(() => {
    return cities
      .filter(c => c.timezone === city.timezone && c.slug !== city.slug)
      .slice(0, 6)
  }, [city.slug, city.timezone])

  // ─── Slate light-theme classes (no dark: variants) ───────────────────────

  const cardClass = 'rounded-2xl border border-slate-100 bg-white p-6 shadow-sm'
  const nestedCard = 'rounded-xl border border-slate-100 bg-slate-50 p-4'
  const heading = 'text-slate-800'
  const muted = 'text-slate-500'
  const text = 'text-slate-700'
  const linkCls = 'text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors'
  const badgeCls = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium'

  return (
    <ContentPageWrapper>
      <div className={`space-y-6 ${text}`}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav className={`flex items-center gap-1.5 text-sm ${muted}`} aria-label="Breadcrumb">
          <Link href="/" className={linkCls}>Home</Link>
          <span>/</span>
          <Link href={`/${city.slug}/`} className={linkCls}>{city.cityLabel}</Link>
          <span>/</span>
          <span className="text-slate-400">Sunrise &amp; Sunset</span>
        </nav>

        {/* ── Page header ────────────────────────────────────────────────── */}
        <header>
          <h1 className={`text-3xl font-bold md:text-4xl ${heading}`}>
            Sunrise &amp; Sunset in {city.cityLabel}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className={`${badgeCls} bg-amber-50 text-amber-700 border border-amber-200`}>
              <span className="text-base leading-none">☀</span>
              {city.tzAbbr}
            </span>
            {mounted && (
              <span className={`${badgeCls} ${sunIsUp ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                <span className={`w-2 h-2 rounded-full ${sunIsUp ? 'bg-amber-500' : 'bg-slate-400'}`} />
                Sun is currently {sunIsUp ? 'up' : 'down'}
              </span>
            )}
            <span className={`${badgeCls} bg-slate-100 text-slate-600 border border-slate-200`}>
              {city.country}
            </span>
          </div>
        </header>

        {/* ── Live Sun Card ──────────────────────────────────────────────── */}
        <section className={cardClass} aria-label="Today's sun times">
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>
            Today&apos;s Sun Times
            {mounted && (
              <span className={`ml-2 text-sm font-normal ${muted}`}>
                Local time: <span className="tabular-nums">{localTimeStr}</span>
              </span>
            )}
          </h2>

          {/* Sunrise + Sunset big display */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-amber-50 border border-amber-100 p-5 text-center">
              <div className="text-3xl mb-1">🌅</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">Sunrise</div>
              <div className={`text-3xl font-bold tabular-nums text-amber-700 ${!mounted ? 'opacity-0' : ''}`}>
                {formatSunTime(today.sunrise)}
              </div>
            </div>
            <div className="rounded-xl bg-violet-50 border border-violet-100 p-5 text-center">
              <div className="text-3xl mb-1">🌇</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-1">Sunset</div>
              <div className={`text-3xl font-bold tabular-nums text-violet-700 ${!mounted ? 'opacity-0' : ''}`}>
                {formatSunTime(today.sunset)}
              </div>
            </div>
          </div>

          {/* Secondary details */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Dawn', value: formatSunTime(today.dawn), icon: '🌄', color: 'text-amber-600' },
              { label: 'Solar noon', value: formatSunTime(today.solarNoon), icon: '☀️', color: 'text-yellow-600' },
              { label: 'Dusk', value: formatSunTime(today.dusk), icon: '🌆', color: 'text-violet-600' },
              { label: 'Daylight', value: formatDaylight(today.daylightHours), icon: '⏱', color: 'text-slate-700' },
            ].map(({ label, value, icon, color }) => (
              <div key={label} className={nestedCard + ' text-center'}>
                <div className="text-xl mb-0.5">{icon}</div>
                <div className={`text-xs font-medium uppercase tracking-wide ${muted} mb-0.5`}>{label}</div>
                <div className={`text-lg font-semibold tabular-nums ${color} ${!mounted ? 'opacity-0' : ''}`}>{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Today vs Tomorrow ─────────────────────────────────────────── */}
        <section className={cardClass} aria-label="Today vs tomorrow comparison">
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Today vs Tomorrow</h2>
          <div className={`overflow-x-auto rounded-xl border border-slate-100`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className={`text-left px-4 py-3 font-semibold ${heading}`}></th>
                  <th className={`text-center px-4 py-3 font-semibold ${heading}`}>Sunrise</th>
                  <th className={`text-center px-4 py-3 font-semibold ${heading}`}>Sunset</th>
                  <th className={`text-center px-4 py-3 font-semibold ${heading}`}>Daylight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-50">
                  <td className={`px-4 py-3 font-medium ${text}`}>Today</td>
                  <td className={`px-4 py-3 text-center tabular-nums text-amber-600 font-semibold ${!mounted ? 'opacity-0' : ''}`}>
                    {formatSunTime(today.sunrise)}
                  </td>
                  <td className={`px-4 py-3 text-center tabular-nums text-violet-600 font-semibold ${!mounted ? 'opacity-0' : ''}`}>
                    {formatSunTime(today.sunset)}
                  </td>
                  <td className={`px-4 py-3 text-center tabular-nums ${text} ${!mounted ? 'opacity-0' : ''}`}>
                    {formatDaylight(today.daylightHours)}
                  </td>
                </tr>
                <tr>
                  <td className={`px-4 py-3 font-medium ${text}`}>Tomorrow</td>
                  <td className={`px-4 py-3 text-center tabular-nums text-amber-600 font-semibold ${!mounted ? 'opacity-0' : ''}`}>
                    {formatSunTime(tomorrow.sunrise)}
                  </td>
                  <td className={`px-4 py-3 text-center tabular-nums text-violet-600 font-semibold ${!mounted ? 'opacity-0' : ''}`}>
                    {formatSunTime(tomorrow.sunset)}
                  </td>
                  <td className={`px-4 py-3 text-center tabular-nums ${text} ${!mounted ? 'opacity-0' : ''}`}>
                    {formatDaylight(tomorrow.daylightHours)}
                  </td>
                </tr>
                <tr className="bg-slate-50 border-t border-slate-100">
                  <td className={`px-4 py-3 font-medium ${muted} text-xs`}>Change</td>
                  <td className={`px-4 py-3 text-center text-xs tabular-nums ${!mounted ? 'opacity-0' : ''}`}>
                    <ChangeChip diff={tomorrow.sunrise - today.sunrise} invert />
                  </td>
                  <td className={`px-4 py-3 text-center text-xs tabular-nums ${!mounted ? 'opacity-0' : ''}`}>
                    <ChangeChip diff={tomorrow.sunset - today.sunset} />
                  </td>
                  <td className={`px-4 py-3 text-center text-xs tabular-nums ${!mounted ? 'opacity-0' : ''}`}>
                    <ChangeChip diff={tomorrow.daylightHours - today.daylightHours} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={`mt-3 text-xs ${muted}`}>
            Positive change in sunset / daylight = days are getting longer.
            Negative change in sunrise = sun is rising earlier.
          </p>
        </section>

        {/* ── 24-hour Daylight Bar ───────────────────────────────────────── */}
        <section className={cardClass} aria-label="24-hour daylight visualisation">
          <h2 className={`text-lg font-semibold mb-2 ${heading}`}>24-Hour Daylight Timeline</h2>
          <p className={`text-sm mb-4 ${muted}`}>
            Today&apos;s light segments for {city.cityLabel}. Amber = daylight, violet = twilight, dark = night.
          </p>
          {mounted ? (
            <DaylightBar
              dawn={today.dawn}
              sunrise={today.sunrise}
              sunset={today.sunset}
              dusk={today.dusk}
            />
          ) : (
            <div className="w-full h-10 rounded-xl bg-slate-100 animate-pulse" />
          )}
          <div className={`mt-3 flex flex-wrap gap-4 text-xs ${muted}`}>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-slate-900 border border-slate-300" /> Night
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-amber-900/70" /> Dawn / Dusk
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-amber-400" /> Daylight
            </span>
          </div>
        </section>

        {/* ── Monthly Table ──────────────────────────────────────────────── */}
        <section className={cardClass} aria-label="Monthly sunrise and sunset times">
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Monthly Sun Times — 2026</h2>
          <p className={`text-sm mb-4 ${muted}`}>
            Sunrise and sunset on the 1st of each month in {city.cityLabel}.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className={`text-left px-4 py-3 font-semibold ${heading}`}>Month</th>
                  <th className={`text-center px-4 py-3 font-semibold text-amber-600`}>Sunrise</th>
                  <th className={`text-center px-4 py-3 font-semibold text-violet-600`}>Sunset</th>
                  <th className={`text-center px-4 py-3 font-semibold ${heading}`}>Daylight</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row, i) => (
                  <tr
                    key={row.month}
                    className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className={`px-4 py-2.5 font-medium ${text}`}>{row.month}</td>
                    <td className="px-4 py-2.5 text-center tabular-nums text-amber-600 font-semibold">
                      {formatSunTime(row.sunrise)}
                    </td>
                    <td className="px-4 py-2.5 text-center tabular-nums text-violet-600 font-semibold">
                      {formatSunTime(row.sunset)}
                    </td>
                    <td className={`px-4 py-2.5 text-center tabular-nums ${text}`}>
                      {formatDaylight(row.daylightHours)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── About section ──────────────────────────────────────────────── */}
        <section className={cardClass} aria-label="About sun times in this city">
          <h2 className={`text-lg font-semibold mb-3 ${heading}`}>
            About Sunrise &amp; Sunset in {city.cityLabel}
          </h2>
          <div className={`space-y-3 text-sm leading-relaxed ${text}`}>
            <p>
              {city.cityLabel} is located at{' '}
              <strong>{Math.abs(city.lat).toFixed(2)}°{city.lat >= 0 ? 'N' : 'S'}</strong>,{' '}
              <strong>{Math.abs(city.lng).toFixed(2)}°{city.lng >= 0 ? 'E' : 'W'}</strong>.
              Its latitude determines how dramatically daylight hours change through the year.
            </p>
            <p>
              The city uses the <strong>{city.timezone}</strong> timezone ({city.tzAbbr}).{' '}
              {city.hasDST
                ? 'It observes Daylight Saving Time, so sunrise and sunset times shift by one hour in spring and autumn.'
                : 'It does not observe Daylight Saving Time, so solar times shift gradually through the year without abrupt clock changes.'}
            </p>
            <p>
              Solar noon — the moment the sun reaches its highest point in the sky — occurs when
              the sun crosses the local meridian. In {city.cityLabel} this falls around{' '}
              <strong>{formatSunTime(monthlyData[5].solarNoon)}</strong> in mid-summer and{' '}
              <strong>{formatSunTime(monthlyData[11].solarNoon)}</strong> in December,
              reflecting UTC offset and any DST adjustments.
            </p>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section className={cardClass} aria-label="Frequently asked questions">
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {[
              {
                q: `What time is sunrise in ${city.cityLabel} today?`,
                a: mounted
                  ? `Sunrise in ${city.cityLabel} today is at ${formatSunTime(today.sunrise)} ${city.tzAbbr}. This is based on the city's coordinates (${city.lat.toFixed(2)}°, ${city.lng.toFixed(2)}°) and the current date.`
                  : `Sunrise in ${city.cityLabel} varies by season. Use the live calculator above for today's exact time in ${city.timezone}.`,
              },
              {
                q: `What time does the sun set in ${city.cityLabel}?`,
                a: mounted
                  ? `Sunset in ${city.cityLabel} today is at ${formatSunTime(today.sunset)} ${city.tzAbbr}, giving ${formatDaylight(today.daylightHours)} of daylight.`
                  : `Sunset in ${city.cityLabel} depends on the season and DST status. See the live card above.`,
              },
              {
                q: `How many hours of daylight does ${city.cityLabel} get today?`,
                a: mounted
                  ? `${city.cityLabel} has ${formatDaylight(today.daylightHours)} of daylight today, from sunrise at ${formatSunTime(today.sunrise)} to sunset at ${formatSunTime(today.sunset)}.`
                  : `Daylight hours in ${city.cityLabel} range from roughly 9 hours in winter to 15 hours in summer depending on latitude (${city.lat.toFixed(1)}°).`,
              },
              {
                q: `Does ${city.cityLabel} observe Daylight Saving Time?`,
                a: city.hasDST
                  ? `Yes, ${city.cityLabel} observes Daylight Saving Time. Clocks shift forward in spring and back in autumn, advancing sunrise and sunset times by one hour for part of the year.`
                  : `No, ${city.cityLabel} does not observe Daylight Saving Time. Solar times change gradually through the year due to Earth's orbit, with no abrupt one-hour clock change.`,
              },
            ].map(({ q, a }) => (
              <div key={q} className={`${nestedCard}`}>
                <dt className={`font-semibold mb-1 ${heading}`}>{q}</dt>
                <dd className={`text-sm ${text}`}>{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Related links ──────────────────────────────────────────────── */}
        <section className={cardClass} aria-label="Related pages">
          <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Related Pages</h2>
          <div className="space-y-3">
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wide ${muted} mb-2`}>{city.cityLabel}</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/${city.slug}/`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm text-amber-700 hover:bg-amber-100 transition-colors"
                >
                  🕐 Current time in {city.cityLabel}
                </Link>
                <Link
                  href="/sunrise-sunset/"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  ☀️ Sunrise &amp; sunset hub
                </Link>
              </div>
            </div>

            {nearbyCities.length > 0 && (
              <div>
                <h3 className={`text-sm font-semibold uppercase tracking-wide ${muted} mb-2`}>
                  Same timezone ({city.tzAbbr})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyCities.map(nc => (
                    <Link
                      key={nc.slug}
                      href={`/${nc.slug}/sun/`}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:border-amber-200 transition-colors"
                    >
                      {nc.city} sun times
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    </ContentPageWrapper>
  )
}

// ─── Small helper component ───────────────────────────────────────────────────

function ChangeChip({ diff, invert = false }: { diff: number; invert?: boolean }) {
  // For sunrise: earlier (negative diff) is "gaining light" = green
  // For sunset / daylight: positive diff = "gaining light" = green
  const isPositive = invert ? diff < 0 : diff > 0
  const isNeutral = Math.abs(diff) < 0.0083 // less than 30 seconds

  if (isNeutral) {
    return <span className="text-slate-400">—</span>
  }

  return (
    <span className={`font-medium tabular-nums ${isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
      {formatDiff(diff)}
    </span>
  )
}
