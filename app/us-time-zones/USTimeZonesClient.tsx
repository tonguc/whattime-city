'use client'

import { useState, useEffect } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Link from 'next/link'

const US_ZONES = [
  {
    abbr: 'ET',
    fullName: 'Eastern Time',
    stdAbbr: 'EST',
    dstAbbr: 'EDT',
    utcOffset: 'UTC-5 / UTC-4',
    tz: 'America/New_York',
    color: 'bg-blue-500',
    states: ['New York', 'Florida', 'Georgia', 'Pennsylvania', 'Ohio', 'Michigan', 'North Carolina', 'Virginia', 'Massachusetts', 'New Jersey', 'Maryland', 'Connecticut', 'Maine', 'Vermont', 'New Hampshire', 'Rhode Island', 'Delaware', 'Washington D.C.', 'West Virginia', 'South Carolina', 'Indiana (most)'],
    majorCities: ['New York City', 'Miami', 'Atlanta', 'Boston', 'Washington D.C.', 'Philadelphia'],
    cityLinks: ['/new-york/', '/miami/', '/atlanta/', '/boston/', '/washington-dc/'],
  },
  {
    abbr: 'CT',
    fullName: 'Central Time',
    stdAbbr: 'CST',
    dstAbbr: 'CDT',
    utcOffset: 'UTC-6 / UTC-5',
    tz: 'America/Chicago',
    color: 'bg-green-500',
    states: ['Illinois', 'Texas', 'Minnesota', 'Wisconsin', 'Iowa', 'Missouri', 'Kansas', 'Nebraska', 'Oklahoma', 'Arkansas', 'Louisiana', 'Mississippi', 'Alabama', 'Tennessee (most)', 'Kentucky (west)', 'North Dakota (west)', 'South Dakota (most)'],
    majorCities: ['Chicago', 'Houston', 'Dallas', 'Minneapolis', 'New Orleans', 'Kansas City'],
    cityLinks: ['/chicago/', '/houston/', '/dallas/'],
  },
  {
    abbr: 'MT',
    fullName: 'Mountain Time',
    stdAbbr: 'MST',
    dstAbbr: 'MDT',
    utcOffset: 'UTC-7 / UTC-6',
    tz: 'America/Denver',
    color: 'bg-orange-500',
    states: ['Colorado', 'Montana', 'Wyoming', 'New Mexico', 'Idaho (most)', 'Utah', 'Arizona (except Navajo Nation)', 'North Dakota (west)', 'South Dakota (west)', 'Kansas (west)', 'Nebraska (west)'],
    majorCities: ['Denver', 'Salt Lake City', 'Albuquerque', 'Tucson', 'Boise', 'El Paso'],
    cityLinks: ['/denver/', '/salt-lake-city/'],
  },
  {
    abbr: 'PT',
    fullName: 'Pacific Time',
    stdAbbr: 'PST',
    dstAbbr: 'PDT',
    utcOffset: 'UTC-8 / UTC-7',
    tz: 'America/Los_Angeles',
    color: 'bg-purple-500',
    states: ['California', 'Washington', 'Oregon', 'Nevada', 'Idaho (north)', 'Montana (west tip)'],
    majorCities: ['Los Angeles', 'San Francisco', 'Seattle', 'Portland', 'Las Vegas', 'San Diego'],
    cityLinks: ['/los-angeles/', '/san-francisco/', '/seattle/', '/las-vegas/'],
  },
  {
    abbr: 'AKT',
    fullName: 'Alaska Time',
    stdAbbr: 'AKST',
    dstAbbr: 'AKDT',
    utcOffset: 'UTC-9 / UTC-8',
    tz: 'America/Anchorage',
    color: 'bg-teal-500',
    states: ['Alaska (most)'],
    majorCities: ['Anchorage', 'Fairbanks', 'Juneau'],
    cityLinks: [],
  },
  {
    abbr: 'HST',
    fullName: 'Hawaii–Aleutian Time',
    stdAbbr: 'HST',
    dstAbbr: 'HST',
    utcOffset: 'UTC-10 (no DST)',
    tz: 'Pacific/Honolulu',
    color: 'bg-rose-500',
    states: ['Hawaii', 'Aleutian Islands (AK)'],
    majorCities: ['Honolulu', 'Hilo', 'Kailua-Kona'],
    cityLinks: ['/honolulu/'],
  },
]

function LiveClock({ tz }: { tz: string }) {
  const [time, setTime] = useState('--:--:--')
  const [abbr, setAbbr] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
      setAbbr(now.toLocaleTimeString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop() ?? '')
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [tz])

  return (
    <div className="text-center">
      <div className="text-3xl font-bold tabular-nums tracking-tight">
        {mounted ? time : '--:--:--'}
      </div>
      <div className="text-xs mt-1 font-medium opacity-80">
        {mounted && abbr ? abbr : '—'}
      </div>
    </div>
  )
}

export default function USTimeZonesClient() {
  const { isLight } = useCityContext()

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white'
    : 'rounded-2xl border border-slate-700 bg-slate-800'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className="space-y-4">
      {/* Live Clocks Grid */}
      <section>
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Current Time in Each US Time Zone</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {US_ZONES.map(zone => (
              <div key={zone.abbr} className={`rounded-xl p-4 text-white ${zone.color}`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-90">
                  {zone.abbr} · {zone.fullName}
                </div>
                <LiveClock tz={zone.tz} />
                <div className="text-xs mt-2 opacity-75">{zone.utcOffset}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Zone Strip */}
      <section>
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>US Time Zone Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                  <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Zone</th>
                  <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Standard / DST</th>
                  <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>Offset</th>
                  <th className={`text-left py-2 font-semibold ${heading}`}>Major Cities</th>
                </tr>
              </thead>
              <tbody>
                {US_ZONES.map((zone, i) => (
                  <tr key={zone.abbr} className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-700'} ${i === US_ZONES.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${zone.color}`} />
                        <span className={`font-semibold ${heading}`}>{zone.abbr}</span>
                      </div>
                      <div className={`text-xs ${mutedText}`}>{zone.fullName}</div>
                    </td>
                    <td className={`py-3 pr-4 ${subText}`}>{zone.stdAbbr} / {zone.dstAbbr}</td>
                    <td className={`py-3 pr-4 font-mono text-xs ${subText}`}>{zone.utcOffset}</td>
                    <td className={`py-3 ${subText} text-xs`}>{zone.majorCities.slice(0, 3).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* States by Zone */}
      <section>
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>US States by Time Zone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {US_ZONES.map(zone => (
              <div key={zone.abbr} className={innerCard}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-3 h-3 rounded-full ${zone.color}`} />
                  <span className={`font-semibold text-sm ${heading}`}>{zone.abbr} — {zone.fullName}</span>
                </div>
                <p className={`text-xs leading-relaxed ${subText}`}>
                  {zone.states.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Converter Quick Links */}
      <section>
        <div className={`${card} p-6`}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>US Time Zone Converters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'CST to EST', href: '/cst-to-est/' },
              { label: 'PST to EST', href: '/pst-to-est/' },
              { label: 'CST to PST', href: '/cst-to-pst/' },
              { label: 'EST to PST', href: '/est-to-pst/' },
              { label: 'PST to CST', href: '/pst-to-cst/' },
              { label: 'MST to EST', href: '/mst-to-est/' },
              { label: 'EST to GMT', href: '/est-to-gmt/' },
              { label: 'GMT to EST', href: '/gmt-to-est/' },
              { label: 'Full Converter', href: '/time-converter/' },
              { label: 'Eastern Time Zone', href: '/eastern-time-zone/' },
              { label: 'Central Time Zone', href: '/central-time-zone/' },
              { label: 'Mountain Time Zone', href: '/mountain-time-zone/' },
              { label: 'Pacific Time Zone', href: '/pacific-time-zone/' },
              { label: 'Alaska Time Zone', href: '/alaska-time-zone/' },
              { label: 'Hawaii Time Zone', href: '/hawaii-time-zone/' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl border transition-colors text-center ${
                  isLight
                    ? 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                    : 'border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
