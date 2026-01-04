'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem } from '@/components/TableOfContents'

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
  const highlightBg = isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-900/20 border-amber-700'
  
  const itinerary = [
    { time: '7:00 AM', hours: [7], emoji: '🌅', title: 'Early Morning', activity: 'Wake up and freshen up', details: 'Start your day early to maximize your time.' },
    { time: '8:00 AM', hours: [8], emoji: '🥐', title: 'Breakfast', activity: 'Local breakfast experience', details: `Find a local café for an authentic ${city.city} breakfast.` },
    { time: '9:00 AM', hours: [9, 10], emoji: '🏛️', title: 'Morning Sightseeing', activity: 'Must-see attractions', details: 'Visit top attractions while crowds are manageable.' },
    { time: '11:00 AM', hours: [11], emoji: '🚶', title: 'Explore', activity: 'Walking tour', details: `Explore a famous neighborhood or join a walking tour.` },
    { time: '12:30 PM', hours: [12, 13], emoji: '🍽️', title: 'Lunch', activity: 'Midday meal', details: 'Try a popular local restaurant.' },
    { time: '2:00 PM', hours: [14, 15], emoji: '🎨', title: 'Afternoon Culture', activity: 'Museum or landmark', details: 'Visit a world-class museum or explore a major landmark.' },
    { time: '4:00 PM', hours: [16], emoji: '☕', title: 'Coffee Break', activity: 'Relax and recharge', details: 'Find a charming café and people-watch.' },
    { time: '5:00 PM', hours: [17, 18], emoji: '🛍️', title: 'Shopping', activity: 'Markets and shops', details: 'Browse local markets and pick up souvenirs.' },
    { time: '7:00 PM', hours: [19], emoji: '🌆', title: 'Golden Hour', activity: 'Sunset views', details: 'Find a viewpoint or rooftop bar for sunset.' },
    { time: '8:00 PM', hours: [20, 21], emoji: '🍷', title: 'Dinner', activity: 'Evening meal', details: 'Treat yourself to a memorable dinner.' },
    { time: '10:00 PM', hours: [22, 23], emoji: '🌙', title: 'Nightlife', activity: 'Evening entertainment', details: `Experience ${city.city}'s nightlife.` },
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
    { id: 'customize', title: 'Customize Your Day', icon: '🎨' },
    { id: 'related', title: 'More Guides', icon: '📖' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
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
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="overview" className={`p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>⚡ Day at a Glance</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div><span className="text-2xl">🌅</span><p className="text-sm font-medium mt-1">Morning</p><p className="text-xs opacity-70">Sightseeing</p></div>
              <div><span className="text-2xl">🍽️</span><p className="text-sm font-medium mt-1">Midday</p><p className="text-xs opacity-70">Lunch & Culture</p></div>
              <div><span className="text-2xl">🌆</span><p className="text-sm font-medium mt-1">Afternoon</p><p className="text-xs opacity-70">Explore & Shop</p></div>
              <div><span className="text-2xl">🌙</span><p className="text-sm font-medium mt-1">Evening</p><p className="text-xs opacity-70">Dine & Nightlife</p></div>
            </div>
          </section>
          
          <section id="current" className={`p-4 rounded-xl ${cardBg} scroll-mt-24`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="text-sm opacity-70">It's currently {timeStr} in {city.city}</p>
                {currentActivity && <p className={`font-medium ${headingColor}`}>Right now: {currentActivity.emoji} {currentActivity.activity}</p>}
              </div>
            </div>
          </section>
          
          <section id="itinerary" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📅 Hour-by-Hour Itinerary</h2>
            
            <div id="morning" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌅 Morning (7 AM - 12 PM)</h3>
              <div className="space-y-4">
                {itinerary.filter(i => i.hours.some(h => h >= 7 && h < 12)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-center min-w-[70px]"><span className="text-2xl">{item.emoji}</span><p className={`text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>{isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}</div>
                        <div className="flex-1"><h4 className={`font-semibold ${headingColor}`}>{item.title}</h4><p className={`font-medium text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p><p className="text-sm mt-1 opacity-80">{item.details}</p></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div id="afternoon" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>☀️ Afternoon (12 PM - 6 PM)</h3>
              <div className="space-y-4">
                {itinerary.filter(i => i.hours.some(h => h >= 12 && h < 18)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-center min-w-[70px]"><span className="text-2xl">{item.emoji}</span><p className={`text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>{isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}</div>
                        <div className="flex-1"><h4 className={`font-semibold ${headingColor}`}>{item.title}</h4><p className={`font-medium text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p><p className="text-sm mt-1 opacity-80">{item.details}</p></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div id="evening" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌙 Evening (6 PM - 11 PM)</h3>
              <div className="space-y-4">
                {itinerary.filter(i => i.hours.some(h => h >= 18 || h < 7)).map((item, idx) => {
                  const isNow = item.hours.includes(currentHour)
                  return (
                    <div key={idx} className={`p-4 rounded-xl border-2 ${isNow ? highlightBg : `${cardBg} border-transparent`}`}>
                      <div className="flex items-start gap-4">
                        <div className="text-center min-w-[70px]"><span className="text-2xl">{item.emoji}</span><p className={`text-sm font-medium mt-1 ${headingColor}`}>{item.time}</p>{isNow && <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">NOW</span>}</div>
                        <div className="flex-1"><h4 className={`font-semibold ${headingColor}`}>{item.title}</h4><p className={`font-medium text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>{item.activity}</p><p className="text-sm mt-1 opacity-80">{item.details}</p></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          
          <section id="tips" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💡 Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>👟 Comfortable Shoes</h4><p className="text-sm opacity-80">You'll walk a lot! Break in shoes before the trip.</p></div>
              <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>🎫 Book Ahead</h4><p className="text-sm opacity-80">Skip lines by pre-booking tickets online.</p></div>
              <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>🗺️ Offline Maps</h4><p className="text-sm opacity-80">Download Google Maps offline in case of poor signal.</p></div>
              <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>💳 Carry Cash</h4><p className="text-sm opacity-80">Some local spots may be cash-only.</p></div>
            </div>
          </section>
          
          <section id="customize" className={`p-6 rounded-2xl ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>🎨 Customize Your Day</h2>
            <p className="mb-4 opacity-80">This is a general itinerary. Adjust based on your interests:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}><p className="font-medium">🎭 Culture Lover</p><p className="text-sm opacity-70">Add more museum time</p></div>
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}><p className="font-medium">🍴 Foodie</p><p className="text-sm opacity-70">Add food tour, market visit</p></div>
              <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}><p className="font-medium">📸 Photographer</p><p className="text-sm opacity-70">Visit spots during golden hour</p></div>
            </div>
          </section>
          
          <section id="related" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📖 More {city.city} Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href={`/${city.slug}/guide/travel-guide/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">✈️</span><h3 className={`font-medium ${headingColor}`}>Travel Planning</h3><p className="text-sm opacity-70">Best time to visit, holidays, tips</p></Link>
              <Link href={`/${city.slug}/guide/time-zones/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">🌍</span><h3 className={`font-medium ${headingColor}`}>Time Zone Info</h3><p className="text-sm opacity-70">Current time and world comparisons</p></Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
