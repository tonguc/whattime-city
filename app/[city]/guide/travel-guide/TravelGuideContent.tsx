'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem } from '@/components/TableOfContents'

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
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December']
  
  // Table of Contents items
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview', icon: '⚡' },
    { id: 'best-time', title: 'Best Time to Visit', icon: '🌤️' },
    { id: 'seasons', title: 'Season Guide', icon: '📊', level: 'h3' },
    { id: 'monthly-weather', title: 'Monthly Weather', icon: '🌡️', level: 'h3' },
    { id: 'holidays', title: 'Public Holidays', icon: '📅' },
    { id: 'holiday-calendar', title: '2025 Calendar', icon: '🗓️', level: 'h3' },
    { id: 'holiday-tips', title: 'Holiday Tips', icon: '⚠️', level: 'h3' },
    { id: 'planning', title: 'Travel Planning', icon: '✈️' },
    { id: 'before-you-go', title: 'Before You Go', icon: '📋', level: 'h3' },
    { id: 'timing-tips', title: 'Timing Tips', icon: '🕐', level: 'h3' },
    { id: 'packing', title: 'Packing Guide', icon: '🧳', level: 'h3' },
    { id: 'tools', title: 'Travel Tools', icon: '🛠️' },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {city.city} Complete Travel Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Best time to visit, public holidays, and essential travel planning tips
        </p>
        
        {/* Current Season Indicator */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-xl">📅</span>
          <span className="text-sm">
            Currently <strong>{monthNames[currentMonth]}</strong> in {city.city}
          </span>
        </div>
      </header>
      
      {/* Layout: ToC + Content */}
      <div className="flex gap-8">
        {/* Sticky ToC - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-12">
          
          {/* Overview Section */}
          <section id="overview" className={`p-6 rounded-2xl border-l-4 border-green-500 ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
              ⚡ Quick Overview
            </h2>
            <p>
              The best time to visit {city.city} is typically during <strong>spring (March-May)</strong> and 
              <strong> autumn (September-November)</strong> when the weather is pleasant and tourist crowds are manageable.
              Plan around public holidays to avoid closures or enjoy festive atmospheres.
            </p>
          </section>
          
          {/* Best Time to Visit Section */}
          <section id="best-time" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              🌤️ Best Time to Visit {city.city}
            </h2>
            <p className="mb-6 opacity-80">
              Choosing the right time to visit can make or break your trip. Consider weather, crowds, 
              prices, and special events when planning your {city.city} adventure.
            </p>
            
            {/* Seasons */}
            <div id="seasons" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                📊 Season-by-Season Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${headingColor}`}>🌸 Spring</h4>
                    <span className="text-sm">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-sm opacity-70 mb-1">March - May</p>
                  <p className="text-sm">Mild weather, beautiful blooms, fewer crowds. Ideal for sightseeing.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${headingColor}`}>☀️ Summer</h4>
                    <span className="text-sm">⭐⭐⭐</span>
                  </div>
                  <p className="text-sm opacity-70 mb-1">June - August</p>
                  <p className="text-sm">Peak season, can be hot and crowded. Higher prices, longer days.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${headingColor}`}>🍂 Autumn</h4>
                    <span className="text-sm">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-sm opacity-70 mb-1">September - November</p>
                  <p className="text-sm">Beautiful colors, pleasant weather, shoulder season savings.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${headingColor}`}>❄️ Winter</h4>
                    <span className="text-sm">⭐⭐⭐</span>
                  </div>
                  <p className="text-sm opacity-70 mb-1">December - February</p>
                  <p className="text-sm">Cold but festive atmosphere. Lower prices, holiday markets.</p>
                </div>
              </div>
            </div>
            
            {/* Monthly Weather */}
            <div id="monthly-weather" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🌡️ Monthly Weather Overview
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Month</th>
                      <th className="text-left p-3 font-medium">Weather</th>
                      <th className="text-left p-3 font-medium">Crowds</th>
                      <th className="text-left p-3 font-medium">Prices</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => (
                      <tr key={month} className={`border-t ${tableBorder} ${idx === currentMonth ? (isLight ? 'bg-amber-50' : 'bg-amber-900/20') : ''}`}>
                        <td className="p-3 font-medium">{month} {idx === currentMonth && '← Now'}</td>
                        <td className="p-3">{idx >= 5 && idx <= 7 ? '☀️ Hot' : idx >= 11 || idx <= 1 ? '❄️ Cold' : '🌤️ Mild'}</td>
                        <td className="p-3">{idx >= 5 && idx <= 7 ? '📈 High' : idx >= 11 || idx <= 1 ? '📉 Low' : '📊 Medium'}</td>
                        <td className="p-3">{idx >= 5 && idx <= 7 ? '💰💰💰' : idx >= 11 || idx <= 1 ? '💰' : '💰💰'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Holidays Section */}
          <section id="holidays" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              📅 Public Holidays in {city.country}
            </h2>
            <p className="mb-6 opacity-80">
              Public holidays affect business hours, public transport, and tourist site availability. 
              Plan around major holidays to avoid closures or take advantage of festive atmospheres.
            </p>
            
            {/* Holiday Calendar */}
            <div id="holiday-calendar" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🗓️ 2025 Public Holidays
              </h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Date</th>
                      <th className="text-left p-3 font-medium">Holiday</th>
                      <th className="text-left p-3 font-medium">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 font-medium">Jan 1</td>
                      <td className="p-3">New Year's Day</td>
                      <td className="p-3"><span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">Public</span></td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 font-medium">Varies</td>
                      <td className="p-3">Easter</td>
                      <td className="p-3"><span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">Public</span></td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 font-medium">May 1</td>
                      <td className="p-3">Labor Day</td>
                      <td className="p-3"><span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">Public</span></td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 font-medium">Dec 25</td>
                      <td className="p-3">Christmas Day</td>
                      <td className="p-3"><span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">Public</span></td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3 font-medium">Dec 26</td>
                      <td className="p-3">Boxing Day</td>
                      <td className="p-3"><span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">Observed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={`mt-3 text-sm ${mutedColor}`}>
                Note: Some holidays vary by region within {city.country}. Always verify locally.
              </p>
            </div>
            
            {/* Holiday Tips */}
            <div id="holiday-tips" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                ⚠️ What to Expect on Holidays
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🏪 Shops & Stores</h4>
                  <p className="text-sm opacity-80">Most closed on major holidays. Some tourist areas remain open.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🍽️ Restaurants</h4>
                  <p className="text-sm opacity-80">Many close or have limited hours. Book ahead for open venues.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🚇 Public Transport</h4>
                  <p className="text-sm opacity-80">Reduced schedules typical. Check holiday timetables.</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🏛️ Tourist Sites</h4>
                  <p className="text-sm opacity-80">May have special hours. Some offer holiday events.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Planning Section */}
          <section id="planning" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              ✈️ Travel Planning Tips
            </h2>
            <p className="mb-6 opacity-80">
              Visiting {city.city}? Here's everything you need to know about timing your trip, 
              handling jet lag, and making the most of your visit.
            </p>
            
            {/* Before You Go */}
            <div id="before-you-go" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                📋 Before You Go
              </h3>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl ${cardBg} flex gap-4`}>
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className={`font-medium ${headingColor}`}>Set Your Clock</h4>
                    <p className="text-sm opacity-80">Adjust your watch to {city.city} time a day before departure</p>
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${cardBg} flex gap-4`}>
                  <span className="text-2xl">😴</span>
                  <div>
                    <h4 className={`font-medium ${headingColor}`}>Plan for Jet Lag</h4>
                    <p className="text-sm opacity-80">Start adjusting sleep schedule 3-4 days before travel</p>
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${cardBg} flex gap-4`}>
                  <span className="text-2xl">📅</span>
                  <div>
                    <h4 className={`font-medium ${headingColor}`}>Check Holiday Calendar</h4>
                    <p className="text-sm opacity-80">Avoid arriving on major holidays when services may be limited</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timing Tips */}
            <div id="timing-tips" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🕐 Timing Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌅 Best Arrival Time</h4>
                  <p className="text-sm opacity-80">Morning arrivals help you stay awake and adjust faster</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🏨 Hotel Check-in</h4>
                  <p className="text-sm opacity-80">Standard check-in 3 PM, check-out 11 AM</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🍳 Meal Times</h4>
                  <p className="text-sm opacity-80">Eat at local times to help your body adjust</p>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>☀️ Sunlight Exposure</h4>
                  <p className="text-sm opacity-80">Get natural light during day to reset circadian rhythm</p>
                </div>
              </div>
            </div>
            
            {/* Packing */}
            <div id="packing" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                🧳 Packing Guide by Season
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>🌸 Spring/Fall</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Light layers</li>
                    <li>• Rain jacket</li>
                    <li>• Comfortable walking shoes</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>☀️ Summer</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Light, breathable clothing</li>
                    <li>• Sunscreen & sunglasses</li>
                    <li>• Water bottle</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>❄️ Winter</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Warm coat</li>
                    <li>• Layers for heated indoors</li>
                    <li>• Hat, gloves, scarf</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-xl ${cardBg}`}>
                  <h4 className={`font-medium mb-2 ${headingColor}`}>📱 Always Bring</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Universal adapter</li>
                    <li>• Phone charger</li>
                    <li>• Travel documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tools Section */}
          <section id="tools" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
              🛠️ Travel Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/jet-lag-advisor/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">😴</span>
                <h3 className={`font-medium ${headingColor}`}>Jet Lag Calculator</h3>
                <p className="text-sm opacity-70">Plan your sleep schedule for {city.city}</p>
              </Link>
              <Link 
                href="/flight-time/"
                className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
              >
                <span className="text-2xl mb-2 block">✈️</span>
                <h3 className={`font-medium ${headingColor}`}>Flight Time Calculator</h3>
                <p className="text-sm opacity-70">Estimate flight duration to {city.city}</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
