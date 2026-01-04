'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem, MobileTableOfContents } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function TwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  const timeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const highlightBg = isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-900/30 border-amber-600'
  
  const itinerary = [
    { time: '7:00 AM', hours: [7], emoji: '🌅', title: 'Early Morning', activity: 'Wake up and freshen up' },
    { time: '8:00 AM', hours: [8], emoji: '🥐', title: 'Breakfast', activity: 'Local breakfast experience' },
    { time: '9:00 AM', hours: [9, 10], emoji: '🏛️', title: 'Morning Sightseeing', activity: 'Must-see attractions' },
    { time: '11:00 AM', hours: [11], emoji: '🚶', title: 'Explore', activity: 'Walking tour' },
    { time: '12:30 PM', hours: [12, 13], emoji: '🍽️', title: 'Lunch', activity: 'Midday meal' },
    { time: '2:00 PM', hours: [14, 15], emoji: '🎨', title: 'Afternoon Culture', activity: 'Museum or landmark' },
    { time: '4:00 PM', hours: [16], emoji: '☕', title: 'Coffee Break', activity: 'Relax and recharge' },
    { time: '5:00 PM', hours: [17, 18], emoji: '🛍️', title: 'Shopping', activity: 'Markets and shops' },
    { time: '7:00 PM', hours: [19], emoji: '🌆', title: 'Golden Hour', activity: 'Sunset views' },
    { time: '8:00 PM', hours: [20, 21], emoji: '🍷', title: 'Dinner', activity: 'Evening meal' },
    { time: '10:00 PM', hours: [22, 23], emoji: '🌙', title: 'Nightlife', activity: 'Evening entertainment' },
  ]
  
  const getCurrentActivity = () => itinerary.find(item => item.hours.includes(currentHour)) || null
  const currentActivity = getCurrentActivity()
  
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Day at a Glance', icon: '⚡' },
    { id: 'current', title: 'Right Now', icon: '📍' },
    { id: 'itinerary', title: 'Hour-by-Hour', icon: '📅' },
    { id: 'morning', title: 'Morning (7-12)', icon: '🌅', level: 'h3' },
    { id: 'afternoon', title: 'Afternoon (12-6)', icon: '☀️', level: 'h3' },
    { id: 'evening', title: 'Evening (6-11)', icon: '🌙', level: 'h3' },
    { id: 'tips', title: 'Pro Tips', icon: '💡' },
    { id: 'related', title: 'More Guides', icon: '📖' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-6">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24 Hours in {city.city}
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          The perfect one-day itinerary to experience the best of {city.city}
        </p>
      </header>
      
      {/* Mobile TOC */}
      <MobileTableOfContents items={tocItems} isLight={isLight} />
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="overview" className={`p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-40`}>
            <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>⚡ Day at a Glance</h2>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div><span className="text-xl sm:text-2xl">🌅</span><p className="text-xs sm:text-sm font-medium mt-1">Morning</p></div>
              <div><span className="text-xl sm:text-2xl">🍽️</span><p className="text-xs sm:text-sm font-medium mt-1">Midday</p></div>
              <div><span className="text-xl sm:text-2xl">🌆</span><p className="text-xs sm:text-sm font-medium mt-1">Afternoon</p></div>
              <div><span className="text-xl sm:text-2xl">🌙</span><p className="text-xs sm:text-sm font-medium mt-1">Evening</p></div>
            </div>
          </section>
          
          <section id="current" className={`p-4 rounded-xl ${cardBg} scroll-mt-40`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="text-sm opacity-70">It's currently {timeStr} in {city.city}</p>
                {currentActivity && <p className={`font-medium ${headingColor}`}>Right now: {currentActivity.emoji} {currentActivity.activity}</p>}
              </div>
            </div>
          </section>
          
          <section id="itinerary" className="scroll-mt-40">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📅 Hour-by-Hour Itinerary</h2>
            
            <div id="morning" className="mb-8 scroll-mt-40">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌅 Morning (7 AM - 12 PM)</h3>
              <div className="space-y-3">
                {itinerary.filter(i => i.hours.some(h => h >= 7 && h < 12)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-3 sm:p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="text-center min-w-[50px] sm:min-w-[70px]">
                          <span className="text-xl sm:text-2xl">{item.emoji}</span>
                          <p className={`text-xs sm:text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>
                          {isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${headingColor}`}>{item.title}</h4>
                          <p className={`text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div id="afternoon" className="mb-8 scroll-mt-40">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>☀️ Afternoon (12 PM - 6 PM)</h3>
              <div className="space-y-3">
                {itinerary.filter(i => i.hours.some(h => h >= 12 && h < 18)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-3 sm:p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="text-center min-w-[50px] sm:min-w-[70px]">
                          <span className="text-xl sm:text-2xl">{item.emoji}</span>
                          <p className={`text-xs sm:text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>
                          {isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${headingColor}`}>{item.title}</h4>
                          <p className={`text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div id="evening" className="scroll-mt-40">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌙 Evening (6 PM - 11 PM)</h3>
              <div className="space-y-3">
                {itinerary.filter(i => i.hours.some(h => h >= 18 || h < 7)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-3 sm:p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="text-center min-w-[50px] sm:min-w-[70px]">
                          <span className="text-xl sm:text-2xl">{item.emoji}</span>
                          <p className={`text-xs sm:text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>
                          {isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${headingColor}`}>{item.title}</h4>
                          <p className={`text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          
          <section id="tips" className="scroll-mt-40">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💡 Pro Tips</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>👟 Comfortable Shoes</h4>
                <p className="text-sm opacity-80 mt-1">You'll walk a lot! Break in shoes before the trip.</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>🎫 Book Ahead</h4>
                <p className="text-sm opacity-80 mt-1">Skip lines by pre-booking tickets online.</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>🗺️ Offline Maps</h4>
                <p className="text-sm opacity-80 mt-1">Download maps in case of poor signal.</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>💳 Carry Cash</h4>
                <p className="text-sm opacity-80 mt-1">Some spots may be cash-only.</p>
              </div>
            </div>
          </section>
          
          <section id="related" className="scroll-mt-40">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📖 More {city.city} Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href={`/${city.slug}/guide/travel-guide/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">✈️</span>
                <h3 className={`font-medium ${headingColor}`}>Travel Planning</h3>
                <p className="text-sm opacity-70">Best time to visit, holidays</p>
              </Link>
              <Link href={`/${city.slug}/guide/time-zones/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">🌍</span>
                <h3 className={`font-medium ${headingColor}`}>Time Zone Info</h3>
                <p className="text-sm opacity-70">World time comparisons</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
