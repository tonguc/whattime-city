'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem, MobileTableOfContents } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function TravelGuideContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentMonth = cityTime.getMonth()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const tableHeaderBg = isLight ? 'bg-slate-100' : 'bg-slate-700'
  
  const seasons = ['Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Fall', 'Fall', 'Fall', 'Winter']
  const currentSeason = seasons[currentMonth]
  
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview', icon: '⚡' },
    { id: 'best-time', title: 'Best Time to Visit', icon: '📅' },
    { id: 'weather', title: 'Weather by Month', icon: '🌡️', level: 'h3' },
    { id: 'peak-seasons', title: 'Peak Seasons', icon: '📊', level: 'h3' },
    { id: 'events', title: 'Events & Holidays', icon: '🎉' },
    { id: 'tips', title: 'Travel Tips', icon: '💡' },
    { id: 'related', title: 'Related Guides', icon: '📖' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-6">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit {city.city}
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Weather, events, and seasonal tips for planning your trip to {city.city}
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span>📅</span>
          <span className="text-sm">Current Season: <strong>{currentSeason}</strong></span>
        </div>
      </header>
      
      {/* Mobile TOC */}
      <MobileTableOfContents items={tocItems} isLight={isLight} />
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="overview" className={`p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-48`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>⚡ Quick Overview</h2>
            <p>The best time to visit {city.city} depends on your preferences for weather, crowds, and events. Generally, spring and fall offer the best balance of pleasant weather and moderate tourist numbers.</p>
          </section>
          
          <section id="best-time" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📅 Best Time to Visit</h2>
            
            <div id="weather" className="mb-8 scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌡️ Weather by Month</h3>
              <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
                <div className="min-w-[500px] px-4 sm:px-0">
                  <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                    <thead className={tableHeaderBg}>
                      <tr>
                        <th className="text-left p-3 font-medium">Season</th>
                        <th className="text-left p-3 font-medium">Months</th>
                        <th className="text-left p-3 font-medium">Weather</th>
                        <th className="text-left p-3 font-medium">Crowds</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">🌸 Spring</td>
                        <td className="p-3">Mar-May</td>
                        <td className="p-3">Mild, pleasant</td>
                        <td className="p-3 font-medium text-green-600">Moderate</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">☀️ Summer</td>
                        <td className="p-3">Jun-Aug</td>
                        <td className="p-3">Warm, sunny</td>
                        <td className="p-3 font-medium text-red-600">High</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">🍂 Fall</td>
                        <td className="p-3">Sep-Nov</td>
                        <td className="p-3">Cool, crisp</td>
                        <td className="p-3 font-medium text-green-600">Moderate</td>
                      </tr>
                      <tr className={`border-t ${tableBorder}`}>
                        <td className="p-3">❄️ Winter</td>
                        <td className="p-3">Dec-Feb</td>
                        <td className="p-3">Cold</td>
                        <td className="p-3 font-medium text-amber-600">Low-Mod</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className={`text-xs mt-2 ${mutedColor}`}>← Swipe to see more</p>
            </div>
            
            <div id="peak-seasons" className="scroll-mt-48">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>📊 Peak vs Off-Peak</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg} border-l-4 border-green-500`}>
                  <h4 className={`font-medium ${headingColor}`}>✅ Best Value</h4>
                  <p className="text-sm opacity-80 mt-1">Spring & Fall - fewer crowds, lower prices</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg} border-l-4 border-red-500`}>
                  <h4 className={`font-medium ${headingColor}`}>⚠️ Peak Season</h4>
                  <p className="text-sm opacity-80 mt-1">Summer & Holidays - book early!</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="events" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🎉 Events & Holidays</h2>
            <p className="mb-4 opacity-80">Major events can affect availability and prices. Plan accordingly!</p>
            <div className={`p-4 rounded-xl ${cardBg}`}>
              <p className="text-sm">Check local event calendars for specific dates and plan your trip around major festivals or avoid them if you prefer fewer crowds.</p>
            </div>
          </section>
          
          <section id="tips" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💡 Travel Tips</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>🎫 Book Early</h4>
                <p className="text-sm opacity-80 mt-1">Popular attractions sell out - book 2+ weeks ahead</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>💳 Local Currency</h4>
                <p className="text-sm opacity-80 mt-1">Get some local cash before arrival</p>
              </div>
            </div>
          </section>
          
          <section id="related" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📖 Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href={`/${city.slug}/guide/24-hours-itinerary/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">🌆</span>
                <h3 className={`font-medium ${headingColor}`}>24 Hours in {city.city}</h3>
                <p className="text-sm opacity-70">Perfect day itinerary</p>
              </Link>
              <Link href={`/${city.slug}/guide/time-business/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">💼</span>
                <h3 className={`font-medium ${headingColor}`}>Business Hours</h3>
                <p className="text-sm opacity-70">When things are open</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
