'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem, MobileTableOfContents } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function TimeZonesContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  const dateStr = cityTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const tableHeaderBg = isLight ? 'bg-slate-100' : 'bg-slate-700'
  
  const tocItems: TocItem[] = [
    { id: 'current-time', title: 'Current Time', icon: '🕐' },
    { id: 'timezone-info', title: 'Time Zone Info', icon: '🌍' },
    { id: 'world-times', title: 'World Times', icon: '🗺️' },
    { id: 'dst', title: 'Daylight Saving', icon: '☀️' },
    { id: 'tips', title: 'Time Zone Tips', icon: '💡' },
    { id: 'tools', title: 'Useful Tools', icon: '🛠️' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-6">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {city.city} Time Zone Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Current time, UTC offset, and world time comparisons
        </p>
      </header>
      
      {/* Mobile TOC */}
      <MobileTableOfContents items={tocItems} isLight={isLight} />
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="current-time" className={`p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-48`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>🕐 Current Time in {city.city}</h2>
            <div className="text-center py-4">
              <p className={`text-4xl sm:text-5xl font-bold ${headingColor}`}>{timeStr}</p>
              <p className={`mt-2 ${mutedColor}`}>{dateStr}</p>
            </div>
          </section>
          
          <section id="timezone-info" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🌍 Time Zone Information</h2>
            <div className={`p-4 rounded-xl ${cardBg}`}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className={`text-sm ${mutedColor}`}>Time Zone</p>
                  <p className={`font-medium ${headingColor}`}>{city.timezone}</p>
                </div>
                <div>
                  <p className={`text-sm ${mutedColor}`}>IANA Zone</p>
                  <p className={`font-mono text-sm ${headingColor}`}>{city.timezone}</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="world-times" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🗺️ When it's noon in {city.city}</h2>
            <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
              <div className="min-w-[400px] px-4 sm:px-0">
                <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                  <thead className={tableHeaderBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">City</th>
                      <th className="text-left p-3 font-medium">Time</th>
                      <th className="text-left p-3 font-medium">Diff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 whitespace-nowrap">🇺🇸 New York</td>
                      <td className="p-3 font-medium">Varies</td>
                      <td className="p-3">-5h to -4h</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 whitespace-nowrap">🇬🇧 London</td>
                      <td className="p-3 font-medium">Varies</td>
                      <td className="p-3">0h to +1h</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 whitespace-nowrap">🇯🇵 Tokyo</td>
                      <td className="p-3 font-medium">Varies</td>
                      <td className="p-3">+9h</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 whitespace-nowrap">🇦🇺 Sydney</td>
                      <td className="p-3 font-medium">Varies</td>
                      <td className="p-3">+10h to +11h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className={`text-xs mt-2 ${mutedColor}`}>← Swipe to see more</p>
          </section>
          
          <section id="dst" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>☀️ Daylight Saving Time</h2>
            <div className={`p-4 rounded-xl ${cardBg}`}>
              <p>Daylight saving time affects the time difference with other cities. Always verify current time differences when scheduling international meetings.</p>
            </div>
          </section>
          
          <section id="tips" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💡 Time Zone Tips</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>📅 Use World Clock</h4>
                <p className="text-sm opacity-80 mt-1">Add cities to your phone's clock app</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>🔔 Set Reminders</h4>
                <p className="text-sm opacity-80 mt-1">Account for DST changes twice a year</p>
              </div>
            </div>
          </section>
          
          <section id="tools" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🛠️ Useful Tools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/time-converter/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">🔄</span>
                <h3 className={`font-medium ${headingColor}`}>Time Converter</h3>
                <p className="text-sm opacity-70">Convert between cities</p>
              </Link>
              <Link href="/meeting/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">📅</span>
                <h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3>
                <p className="text-sm opacity-70">Find overlap hours</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
