'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { City, cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import TimeIcons from './TimeIcons'
import Footer from '@/components/Footer'

export default function SharedMeetingView() {
  const searchParams = useSearchParams()
  const [time, setTime] = useState(new Date())
  const [copied, setCopied] = useState(false)
  
  // Parse cities from URL
  const citySlugs = searchParams.get('c')?.split(',') || []
  const selectedCities = citySlugs
    .map(slug => cities.find(c => c.slug === slug.trim()))
    .filter((c): c is City => c !== undefined)
  
  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Use first city for theme, or default to day
  const firstCity = selectedCities[0]
  const timeOfDay = firstCity 
    ? getTimeOfDay(time, firstCity.lat, firstCity.lng, firstCity.timezone)
    : 'day'
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  
  // Get UTC offset for a city
  const getUTCOffset = (city: City): number => {
    const now = new Date()
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }))
    const diff = (cityTime.getTime() - utcTime) / 3600000
    return Math.round(diff)
  }
  
  // Calculate working hours overlap
  const findOverlap = (): { start: number; end: number } | null => {
    if (selectedCities.length < 2) return null
    
    let overlapStart = 0
    let overlapEnd = 24
    
    for (const city of selectedCities) {
      const offset = getUTCOffset(city)
      const workStartUTC = (9 - offset + 24) % 24
      const workEndUTC = (17 - offset + 24) % 24
      
      if (workStartUTC < workEndUTC) {
        overlapStart = Math.max(overlapStart, workStartUTC)
        overlapEnd = Math.min(overlapEnd, workEndUTC)
      }
    }
    
    if (overlapStart >= overlapEnd) return null
    return { start: overlapStart, end: overlapEnd }
  }
  
  // Convert UTC hour to city local hour
  const utcToLocal = (utcHour: number, city: City): number => {
    const offset = getUTCOffset(city)
    return (utcHour + offset + 24) % 24
  }
  
  const formatHour = (hour: number): string => {
    const h = hour % 12 || 12
    const period = hour >= 12 ? 'PM' : 'AM'
    return `${h} ${period}`
  }
  
  const formatTime = (date: Date, timezone: string): string => {
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }
  
  const formatDate = (date: Date, timezone: string): string => {
    return date.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }
  
  const overlap = findOverlap()
  
  // Copy link
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  // Add to Google Calendar
  const addToGoogleCalendar = () => {
    if (!overlap || selectedCities.length < 2) return
    
    const title = `Meeting: ${selectedCities.map(c => c.city).join(', ')}`
    const details = selectedCities.map(c => 
      `${c.city}: ${formatHour(utcToLocal(overlap.start, c))} - ${formatHour(utcToLocal(overlap.end, c))}`
    ).join('\n')
    
    // Create date for today at the overlap start time
    const startDate = new Date()
    startDate.setUTCHours(overlap.start, 0, 0, 0)
    const endDate = new Date()
    endDate.setUTCHours(overlap.end, 0, 0, 0)
    
    const formatGoogleDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`
    
    window.open(url, '_blank')
  }
  
  // No cities selected
  if (selectedCities.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.bg}`}>
        <div className={`text-center p-8 rounded-3xl backdrop-blur-xl border ${theme.card}`}>
          <p className={`text-xl mb-4 ${theme.text}`}>No cities selected</p>
          <Link 
            href="/tools/meeting-planner"
            className={`inline-block px-6 py-3 rounded-full font-medium ${theme.accentBg} text-white`}
          >
            Create a Meeting
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${theme.bg}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl ${isLight ? 'bg-white/70' : 'bg-slate-900/70'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-10 sm:h-12"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={copyLink}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : isLight 
                    ? 'bg-white/60 text-slate-600 hover:bg-white/80' 
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
              } backdrop-blur-xl`}
            >
              {copied ? '✓ Copied!' : '🔗 Copy Link'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${theme.text}`}>
            Meeting Time
          </h1>
          <p className={`text-sm ${theme.textMuted}`}>
            {selectedCities.map(c => c.city).join(' • ')}
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {selectedCities.map(city => {
            const cityTimeOfDay = getTimeOfDay(time, city.lat, city.lng, city.timezone)
            const TimeIcon = TimeIcons[cityTimeOfDay]
            const offset = getUTCOffset(city)
            
            return (
              <div 
                key={city.slug}
                className={`p-5 rounded-2xl backdrop-blur-xl border ${theme.card}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TimeIcon className="w-5 h-5" />
                  <span className={`font-semibold ${theme.text}`}>{city.city}</span>
                </div>
                
                <div className={`text-3xl font-bold mb-1 ${theme.text}`}>
                  {formatTime(time, city.timezone)}
                </div>
                
                <div className={`text-sm ${theme.textMuted}`}>
                  {formatDate(time, city.timezone)} • UTC{offset >= 0 ? '+' : ''}{offset}
                </div>
                
                {overlap && (
                  <div className={`mt-3 pt-3 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                    <p className={`text-xs ${theme.textMuted}`}>Best time locally:</p>
                    <p className={`font-medium ${theme.text}`}>
                      {formatHour(utcToLocal(overlap.start, city))} – {formatHour(utcToLocal(overlap.end, city))}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Overlap Result */}
        {selectedCities.length >= 2 && (
          <div className={`p-6 rounded-3xl backdrop-blur-xl border text-center ${theme.card}`}>
            {overlap ? (
              <>
                <p className={`text-sm mb-2 ${theme.textMuted}`}>Best meeting window</p>
                <p className={`text-2xl font-bold mb-4 ${theme.text}`}>
                  {formatHour(overlap.start)} – {formatHour(overlap.end)} UTC
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={addToGoogleCalendar}
                    className={`px-5 py-2.5 rounded-full font-medium ${theme.accentBg} text-white hover:opacity-90 transition-opacity`}
                  >
                    📅 Add to Google Calendar
                  </button>
                  
                  <button
                    onClick={copyLink}
                    className={`px-5 py-2.5 rounded-full font-medium ${
                      isLight 
                        ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' 
                        : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                    } transition-colors`}
                  >
                    {copied ? '✓ Link Copied!' : '🔗 Share Link'}
                  </button>
                </div>
              </>
            ) : (
              <p className={`${theme.textMuted}`}>
                No overlapping working hours found (9 AM – 5 PM)
              </p>
            )}
          </div>
        )}

        {/* Edit Link */}
        <div className="text-center mt-8">
          <Link 
            href={`/tools/meeting-planner`}
            className={`text-sm ${theme.textMuted} hover:underline`}
          >
            ✏️ Create your own meeting plan
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer isLight={isLight} />
    </div>
  )
}
