'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CompareWidget from '@/components/CompareWidget'

interface TimeComparisonContentProps {
  fromCity: City
  toCity: City
}

// Get timezone offset in hours
function getTimezoneOffset(timezone: string): number {
  const now = new Date()
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  return (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60)
}

// Format time difference nicely
function formatTimeDifference(hours: number): string {
  const absHours = Math.abs(hours)
  const h = Math.floor(absHours)
  const m = Math.round((absHours - h) * 60)
  
  if (m === 0) {
    return `${h} hour${h !== 1 ? 's' : ''}`
  }
  return `${h} hour${h !== 1 ? 's' : ''} ${m} min`
}

// Time icons
const TimeIcon = ({ timeOfDay }: { timeOfDay: string }) => {
  const icons: Record<string, string> = {
    dawn: '🌅',
    day: '☀️',
    dusk: '🌆',
    night: '🌙'
  }
  return <span className="text-2xl">{icons[timeOfDay] || '🕐'}</span>
}

export default function TimeComparisonContent({ fromCity, toCity }: TimeComparisonContentProps) {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Calculate times
  const fromTime = time.toLocaleTimeString('en-US', { 
    timeZone: fromCity.timezone, 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  const toTime = time.toLocaleTimeString('en-US', { 
    timeZone: toCity.timezone, 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const fromDate = time.toLocaleDateString('en-US', { 
    timeZone: fromCity.timezone, 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  const toDate = time.toLocaleDateString('en-US', { 
    timeZone: toCity.timezone, 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  
  // Time of day
  const fromTimeOfDay = getTimeOfDay(time, fromCity.lat, fromCity.lng, fromCity.timezone)
  const toTimeOfDay = getTimeOfDay(time, toCity.lat, toCity.lng, toCity.timezone)
  
  // Calculate time difference
  const fromOffset = getTimezoneOffset(fromCity.timezone)
  const toOffset = getTimezoneOffset(toCity.timezone)
  const diffHours = toOffset - fromOffset
  
  // Theme based on "from" city
  const mainTheme = themes[fromTimeOfDay]
  const isLight = isLightTheme(fromTimeOfDay)
  
  // Business hours overlap calculation (9 AM - 5 PM)
  const getOverlapHours = () => {
    const overlaps: { fromHour: number; toHour: number; label: string }[] = []
    
    for (let fromHour = 9; fromHour <= 17; fromHour++) {
      const toHour = (fromHour + diffHours + 24) % 24
      if (toHour >= 9 && toHour < 17) {
        overlaps.push({ 
          fromHour, 
          toHour, 
          label: `${fromHour}:00 ${fromCity.city} = ${toHour}:00 ${toCity.city}` 
        })
      }
    }
    return overlaps
  }
  
  const overlapHours = getOverlapHours()
  
  // Best calling times
  const getBestCallTimes = () => {
    const suggestions = []
    
    // Morning call (8-10 AM from city)
    const morningToHour = (9 + diffHours + 24) % 24
    if (morningToHour >= 8 && morningToHour <= 22) {
      suggestions.push({
        from: '8-10 AM',
        to: `${((8 + diffHours + 24) % 24).toString().padStart(2, '0')}:00 - ${((10 + diffHours + 24) % 24).toString().padStart(2, '0')}:00`,
        quality: morningToHour >= 9 && morningToHour <= 18 ? 'excellent' : 'good'
      })
    }
    
    // Evening call (6-8 PM from city)
    const eveningToHour = (19 + diffHours + 24) % 24
    if (eveningToHour >= 6 && eveningToHour <= 23) {
      suggestions.push({
        from: '6-8 PM',
        to: `${((18 + diffHours + 24) % 24).toString().padStart(2, '0')}:00 - ${((20 + diffHours + 24) % 24).toString().padStart(2, '0')}:00`,
        quality: eveningToHour >= 9 && eveningToHour <= 18 ? 'excellent' : 'good'
      })
    }
    
    return suggestions
  }
  
  const callTimes = getBestCallTimes()
  
  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`} style={{ overflow: 'visible' }}>
      {/* Shared Header */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8" style={{ overflow: 'visible' }}>
        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl font-bold text-center mb-6 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          {fromCity.city} → {toCity.city} Time
        </h1>
        
        {/* Compare Widget - TOP PLACEMENT */}
        <div className="max-w-2xl mx-auto mb-8" style={{ overflow: 'visible' }}>
          <CompareWidget 
            initialFromCity={fromCity}
            initialToCity={toCity}
            isLight={isLight}
          />
        </div>
        
        {/* Live Clocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* From City Clock */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
            isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <TimeIcon timeOfDay={fromTimeOfDay} />
              <div>
                <h2 className={`text-xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {fromCity.city}
                </h2>
                <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {fromCity.country}
                </p>
              </div>
            </div>
            <div className={`text-5xl font-bold mb-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {fromTime}
            </div>
            <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {fromDate}
            </p>
            <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
              isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-300'
            }`}>
              {fromTimeOfDay.charAt(0).toUpperCase() + fromTimeOfDay.slice(1)}
            </div>
          </div>
          
          {/* To City Clock */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
            isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <TimeIcon timeOfDay={toTimeOfDay} />
              <div>
                <h2 className={`text-xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>
                  {toCity.city}
                </h2>
                <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {toCity.country}
                </p>
              </div>
            </div>
            <div className={`text-5xl font-bold mb-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {toTime}
            </div>
            <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {toDate}
            </p>
            <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
              isLight ? 'bg-slate-200 text-slate-600' : 'bg-slate-700 text-slate-300'
            }`}>
              {toTimeOfDay.charAt(0).toUpperCase() + toTimeOfDay.slice(1)}
            </div>
          </div>
        </div>
        
        {/* Time Difference Banner */}
        <div className={`p-6 rounded-3xl mb-8 text-center ${
          isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/30 border border-blue-800/50'
        }`}>
          <p className={`text-sm mb-1 ${isLight ? 'text-blue-600' : 'text-blue-300'}`}>Time Difference</p>
          <p className={`text-3xl font-bold ${isLight ? 'text-blue-800' : 'text-blue-100'}`}>
            {diffHours === 0 
              ? 'Same time zone' 
              : `${toCity.city} is ${formatTimeDifference(Math.abs(diffHours))} ${diffHours > 0 ? 'ahead' : 'behind'}`
            }
          </p>
        </div>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Best Time to Call */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
            isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              📞 Best Time to Call
            </h3>
            {callTimes.length > 0 ? (
              <div className="space-y-3">
                {callTimes.map((ct, idx) => (
                  <div key={idx} className={`p-3 rounded-xl ${
                    ct.quality === 'excellent' 
                      ? (isLight ? 'bg-green-50 border border-green-200' : 'bg-green-900/30 border border-green-800/50')
                      : (isLight ? 'bg-yellow-50 border border-yellow-200' : 'bg-yellow-900/30 border border-yellow-800/50')
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                          Your {ct.from}
                        </p>
                        <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                          → {ct.to} in {toCity.city}
                        </p>
                      </div>
                      {ct.quality === 'excellent' && (
                        <span className="text-green-500 text-sm font-medium">✓ Best</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={`${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Large time difference - consider async communication
              </p>
            )}
          </div>
          
          {/* Business Hours Overlap */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
            isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              📅 Business Hours Overlap
            </h3>
            {overlapHours.length > 0 ? (
              <div className="space-y-2">
                <p className={`text-sm mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {overlapHours.length} hour{overlapHours.length > 1 ? 's' : ''} of overlap (9 AM - 5 PM)
                </p>
                <div className="flex flex-wrap gap-2">
                  {overlapHours.map((oh, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                      isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {oh.fromHour}:00
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className={`${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                No overlap during standard business hours (9 AM - 5 PM)
              </p>
            )}
          </div>
        </div>
        
        {/* Quick Conversion Table */}
        <div className={`p-6 rounded-3xl backdrop-blur-xl border mb-8 ${
          isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            ⏰ Quick Conversion
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[6, 9, 12, 15, 18, 21, 0, 3].map(hour => {
              const toHour = (hour + diffHours + 24) % 24
              const nextDay = hour + diffHours >= 24 || hour + diffHours < 0
              return (
                <div key={hour} className={`p-3 rounded-xl text-center ${
                  isLight ? 'bg-slate-50' : 'bg-slate-800/50'
                }`}>
                  <p className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                    {hour.toString().padStart(2, '0')}:00
                  </p>
                  <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {fromCity.city}
                  </p>
                  <p className={`mt-1 text-lg font-bold ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                    {toHour.toString().padStart(2, '0')}:00
                  </p>
                  <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {toCity.city} {nextDay && diffHours > 0 ? '(+1)' : nextDay && diffHours < 0 ? '(-1)' : ''}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* City Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link 
            href={`/${fromCity.slug}`}
            className={`p-4 rounded-2xl text-center transition-all hover:scale-[1.02] ${
              isLight 
                ? 'bg-white/60 hover:bg-white/80 text-slate-700' 
                : 'bg-slate-800/60 hover:bg-slate-700/60 text-slate-200'
            }`}
          >
            View {fromCity.city} Details →
          </Link>
          <Link 
            href={`/${toCity.slug}`}
            className={`p-4 rounded-2xl text-center transition-all hover:scale-[1.02] ${
              isLight 
                ? 'bg-white/60 hover:bg-white/80 text-slate-700' 
                : 'bg-slate-800/60 hover:bg-slate-700/60 text-slate-200'
            }`}
          >
            View {toCity.city} Details →
          </Link>
        </div>
        
        {/* Reverse Link */}
        <div className="text-center">
          <Link 
            href={`/time/${toCity.slug}/${fromCity.slug}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              isLight 
                ? 'bg-slate-800 text-white hover:bg-slate-700' 
                : 'bg-white text-slate-800 hover:bg-slate-100'
            }`}
          >
            🔄 View {toCity.city} to {fromCity.city}
          </Link>
        </div>
        
        {/* SEO Content Section */}
        <section className={`mt-12 rounded-2xl p-6 ${isLight ? 'bg-white/60' : 'bg-slate-800/40'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Time Difference Between {fromCity.city} and {toCity.city}
          </h2>
          <div className={`space-y-4 text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              {fromCity.city}, {fromCity.country} and {toCity.city}, {toCity.country} are separated by a time 
              difference of {formatTimeDifference(Math.abs(diffHours))}. When it's noon in {fromCity.city}, 
              it's {diffHours > 0 ? `${formatTimeDifference(diffHours)} later` : diffHours < 0 ? `${formatTimeDifference(Math.abs(diffHours))} earlier` : 'the same time'} in {toCity.city}.
            </p>
            <p>
              {fromCity.city} operates on {fromCity.timezone.replace('_', ' ')} timezone, while {toCity.city} uses {toCity.timezone.replace('_', ' ')}. 
              Both cities may observe Daylight Saving Time at different dates, which can temporarily change 
              the time difference by an hour.
            </p>
            
            <h3 className={`text-base font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Best Time to Call
            </h3>
            <p>
              {Math.abs(diffHours) <= 3 
                ? `With only ${formatTimeDifference(Math.abs(diffHours))} difference, scheduling calls between ${fromCity.city} and ${toCity.city} is relatively easy. Standard business hours (9 AM - 5 PM) in one city will largely overlap with the other.`
                : Math.abs(diffHours) <= 6
                ? `To catch business hours in both cities, consider scheduling calls during ${diffHours > 0 ? `early morning in ${fromCity.city} (which is afternoon in ${toCity.city})` : `late afternoon in ${fromCity.city} (which is morning in ${toCity.city})`}.`
                : `Due to the ${formatTimeDifference(Math.abs(diffHours))} difference, finding overlapping business hours can be challenging. Consider ${diffHours > 0 ? `early morning calls from ${fromCity.city}` : `late evening calls from ${fromCity.city}`} to reach ${toCity.city} during their work day.`
              }
            </p>
            
            <h3 className={`text-base font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Flight Considerations
            </h3>
            <p>
              When traveling between {fromCity.city} and {toCity.city}, remember that your arrival time will be 
              in local time. A flight departing {fromCity.city} in the {diffHours > 0 ? 'morning might arrive in the evening' : 'evening might arrive earlier than expected'} due 
              to the timezone change. Use our <Link href="/tools/flight-times" className="text-cyan-500 hover:underline">Flight Time Calculator</Link> for 
              accurate arrival time predictions.
            </p>
            
            <h3 className={`text-base font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Common Use Cases
            </h3>
            <p>
              This time converter is useful for scheduling video calls, coordinating international business meetings, 
              planning travel itineraries, watching live events, or simply staying in touch with friends and family 
              across {fromCity.city} and {toCity.city}. Bookmark this page for quick reference.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer isLight={isLight} />
    </div>
  )
}
