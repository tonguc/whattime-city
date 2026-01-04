'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function TimeZonesContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
  const dateStr = cityTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const compareCities = [
    { name: 'New York', timezone: 'America/New_York', flag: '🇺🇸' },
    { name: 'London', timezone: 'Europe/London', flag: '🇬🇧' },
    { name: 'Dubai', timezone: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'Singapore', timezone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'Paris', timezone: 'Europe/Paris', flag: '🇫🇷' },
  ].filter(c => c.timezone !== city.timezone)
  
  const getTimeDiff = (targetTimezone: string) => {
    const targetTime = new Date(time.toLocaleString('en-US', { timeZone: targetTimezone }))
    const diffMs = targetTime.getTime() - cityTime.getTime()
    return Math.round(diffMs / (1000 * 60 * 60))
  }
  
  const getTimeInCity = (timezone: string) => {
    return new Date(time.toLocaleString('en-US', { timeZone: timezone }))
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }
  
  const tocItems: TocItem[] = [
    { id: 'current-time', title: 'Current Time', icon: '🕐' },
    { id: 'quick-facts', title: 'Quick Facts', icon: '⚡' },
    { id: 'time-difference', title: 'Time Differences', icon: '🌍' },
    { id: 'understanding', title: 'Understanding Timezones', icon: '📚' },
    { id: 'iana-timezone', title: 'IANA Timezone', icon: '🔧', level: 'h3' },
    { id: 'dst-info', title: 'Daylight Saving', icon: '☀️', level: 'h3' },
    { id: 'utc-explained', title: 'UTC Explained', icon: '🌐', level: 'h3' },
    { id: 'tools', title: 'Time Tools', icon: '🛠️' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {city.city} Time Zone
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Current time, UTC offset, daylight saving info, and world time differences
        </p>
      </header>
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="current-time" className={`p-6 rounded-2xl ${cardBg} text-center scroll-mt-24`}>
            <p className={`text-sm mb-2 ${mutedColor}`}>Current time in {city.city}</p>
            <p className={`text-5xl md:text-6xl font-bold ${headingColor} font-mono`}>{timeStr}</p>
            <p className={`mt-2 ${mutedColor}`}>{dateStr}</p>
            <p className={`mt-2 text-sm`}>Timezone: <strong>{city.timezone}</strong></p>
          </section>
          
          <section id="quick-facts" className={`p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>⚡ Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div><p className="text-sm opacity-70">IANA Timezone</p><p className="font-medium">{city.timezone}</p></div>
              <div><p className="text-sm opacity-70">Country</p><p className="font-medium">{city.country}</p></div>
              <div><p className="text-sm opacity-70">Coordinates</p><p className="font-medium">{city.lat.toFixed(2)}°N, {city.lng.toFixed(2)}°E</p></div>
              <div><p className="text-sm opacity-70">Observes DST</p><p className="font-medium">Check locally</p></div>
            </div>
          </section>
          
          <section id="time-difference" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🌍 Time Difference from {city.city}</h2>
            <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
              <table className="w-full text-sm">
                <thead className={cardBg}>
                  <tr><th className="text-left p-3 font-medium">City</th><th className="text-left p-3 font-medium">Current Time</th><th className="text-left p-3 font-medium">Difference</th></tr>
                </thead>
                <tbody>
                  {compareCities.map((compareCity) => {
                    const diff = getTimeDiff(compareCity.timezone)
                    const diffStr = diff === 0 ? 'Same time' : diff > 0 ? `+${diff}h` : `${diff}h`
                    return (
                      <tr key={compareCity.name} className={`border-t ${tableBorder}`}>
                        <td className="p-3"><span className="mr-2">{compareCity.flag}</span>{compareCity.name}</td>
                        <td className="p-3 font-mono">{getTimeInCity(compareCity.timezone)}</td>
                        <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${diff === 0 ? 'bg-green-100 text-green-700' : diff > 0 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>{diffStr}</span></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
          
          <section id="understanding" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📚 Understanding Timezones</h2>
            
            <div id="iana-timezone" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🔧 What is {city.timezone}?</h3>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <p className="text-sm opacity-80">{city.timezone} is the IANA timezone identifier for {city.city}. This standardized format is used by computers and scheduling software worldwide to accurately represent local time, including automatic daylight saving time adjustments.</p>
              </div>
            </div>
            
            <div id="dst-info" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>☀️ Daylight Saving Time (DST)</h3>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <p className="text-sm opacity-80">Many regions observe DST, moving clocks forward in spring and back in fall. This affects time differences with other cities. Always verify current offsets when scheduling important meetings.</p>
              </div>
            </div>
            
            <div id="utc-explained" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌐 UTC vs Local Time</h3>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <p className="text-sm opacity-80">UTC (Coordinated Universal Time) is the global time standard. Local time in {city.city} is expressed as UTC plus or minus a certain number of hours, which may change during DST periods.</p>
              </div>
            </div>
          </section>
          
          <section id="tools" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🛠️ Time Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/time-converter/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">🔄</span><h3 className={`font-medium ${headingColor}`}>Time Converter</h3><p className="text-sm opacity-70">Convert any time to/from {city.city}</p></Link>
              <Link href="/meeting/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">📅</span><h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3><p className="text-sm opacity-70">Find overlap with other time zones</p></Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
