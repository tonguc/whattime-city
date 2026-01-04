'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { cities, City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

// 16 Major World Cities for Event Time Display
const FEATURED_CITIES = [
  'new-york', 'london', 'tokyo', 'paris',
  'dubai', 'singapore', 'sydney', 'istanbul',
  'los-angeles', 'hong-kong', 'berlin', 'mumbai',
  'toronto', 'sao-paulo', 'seoul', 'amsterdam'
]

// Inner component that uses useSearchParams
function EventTimeContent() {
  const { theme, isLight } = useCityContext()
  const searchParams = useSearchParams()
  
  // Check URL params first, then localStorage, then defaults
  const [eventCity, setEventCity] = useState<City>(() => {
    // 1. Check URL params
    const urlCity = searchParams.get('city')
    if (urlCity) {
      const city = cities.find(c => c.slug === urlCity)
      if (city) return city
    }
    
    // 2. Check localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('whattime-meeting-cities')
        if (saved) {
          const slugs = JSON.parse(saved) as string[]
          if (slugs[0]) {
            const city = cities.find(c => c.slug === slugs[0])
            if (city) return city
          }
        }
      } catch {}
    }
    return cities.find(c => c.city === 'New York') || cities[0]
  })
  
  const [eventHour, setEventHour] = useState(() => {
    const urlHour = searchParams.get('hour')
    return urlHour ? parseInt(urlHour) : 14
  })
  
  const [eventMinute, setEventMinute] = useState(() => {
    const urlMinute = searchParams.get('minute')
    return urlMinute ? parseInt(urlMinute) : 0
  })
  
  const [eventName, setEventName] = useState(() => {
    const urlName = searchParams.get('name')
    return urlName || 'My Event'
  })
  
  const [copyFeedback, setCopyFeedback] = useState(false)
  
  // Sync city to localStorage for cross-tool persistence
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('whattime-meeting-cities')
        let secondCity = ''
        if (saved) {
          const slugs = JSON.parse(saved) as string[]
          if (slugs[1]) secondCity = slugs[1]
        }
        const newSlugs = secondCity ? [eventCity.slug, secondCity] : [eventCity.slug]
        localStorage.setItem('whattime-meeting-cities', JSON.stringify(newSlugs))
      } catch {}
    }
  }, [eventCity.slug])
  
  // Generate shareable URL
  const getShareUrl = () => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams({
      city: eventCity.slug,
      hour: eventHour.toString(),
      minute: eventMinute.toString(),
      name: eventName
    })
    return `${window.location.origin}/event-time?${params.toString()}`
  }
  
  // Copy share URL to clipboard
  const handleShare = async () => {
    const url = getShareUrl()
    try {
      await navigator.clipboard.writeText(url)
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    }
  }

  // Get 16 featured cities
  const featuredCities = FEATURED_CITIES
    .map(slug => cities.find(c => c.slug === slug))
    .filter((c): c is City => c !== undefined)

  const getEventTimeIn = (targetTimezone: string) => {
    const eventDate = new Date()
    eventDate.setHours(eventHour, eventMinute, 0, 0)
    
    const eventOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: eventCity.timezone }))
    const targetOffset = new Date(eventDate.toLocaleString('en-US', { timeZone: targetTimezone }))
    const diff = targetOffset.getTime() - eventOffset.getTime()
    
    const targetTime = new Date(eventDate.getTime() + diff)
    return targetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }

  // Dynamic styles based on theme (like HomePage)
  const cardClass = `rounded-2xl p-6 backdrop-blur-xl border ${theme.card}`
  const boxClass = isLight 
    ? 'bg-white/60 border border-white/70 rounded-xl' 
    : 'bg-slate-800/60 border border-slate-600/60 rounded-xl'
  const inputClass = isLight 
    ? 'bg-white border-slate-200 text-slate-800' 
    : 'bg-slate-700 border-slate-600 text-white'

  return (
    <>
      <div className="text-center mb-6">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          Event Time Converter
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          Share event times across time zones
        </p>
      </div>

      <div className={`${cardClass} mb-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g., Team Standup"
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Event Location</label>
            <select
              value={eventCity.slug}
              onChange={(e) => setEventCity(cities.find(c => c.slug === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 rounded-xl border ${inputClass}`}
            >
              {cities.map(city => (
                <option key={city.slug} value={city.slug}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
            Event Time (local to {eventCity.city})
          </label>
          <div className="flex gap-2 max-w-xs">
            <select
              value={eventHour}
              onChange={(e) => setEventHour(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
              ))}
            </select>
            <span className={`flex items-center ${theme.textMuted}`}>:</span>
            <select
              value={eventMinute}
              onChange={(e) => setEventMinute(parseInt(e.target.value))}
              className={`flex-1 px-3 py-2 rounded-lg border ${inputClass}`}
            >
              {[0, 15, 30, 45].map(m => (
                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`font-medium ${theme.text}`}>"{eventName}" in other time zones:</h3>
            
            {/* Share Event Button */}
            <button
              onClick={handleShare}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                copyFeedback
                  ? 'bg-green-500 text-white'
                  : isLight
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {copyFeedback ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share Event</span>
                </>
              )}
            </button>
          </div>
          
          {/* 16 Cities Grid - 4x4 on desktop, 4x4 on mobile */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {featuredCities.map(city => (
              <div key={city.slug} className={`p-2 sm:p-3 rounded-xl text-center ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
                <div className={`text-[10px] sm:text-xs ${theme.textMuted} truncate`}>{city.city}</div>
                <div className={`text-sm sm:text-lg font-semibold ${city.slug === eventCity.slug ? theme.accentText : theme.text}`}>
                  {getEventTimeIn(city.timezone)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Share URL Preview */}
          <div className={`mt-4 p-3 rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-700/30'}`}>
            <p className={`text-xs ${theme.textMuted} mb-1`}>📎 Shareable link:</p>
            <p className={`text-xs font-mono break-all ${theme.text}`}>
              {getShareUrl()}
            </p>
          </div>
        </div>
      </div>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Live streaming announcements</strong> — Let global audiences know when to tune in.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Webinar invitations</strong> — Show attendees the event time in their local zone.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Product launches</strong> — Coordinate global release timing.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Sports events</strong> — Share kickoff times for international fans.</div></li>
        </ul>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-3 ${theme.text}`}>Who Is This Tool For?</h2>
        <p className={theme.textMuted}>
          Content creators, event organizers, marketing teams, and community managers will find this tool 
          invaluable. It helps you communicate event times clearly to a global audience without confusion 
          about time zone conversions.
        </p>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/meeting" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Meeting Planner</div>
            <div className={`text-xs ${theme.textMuted}`}>Find overlap hours</div>
          </Link>
          <Link href="/time" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Time Converter</div>
            <div className={`text-xs ${theme.textMuted}`}>Quick conversions</div>
          </Link>
          <Link href="/flight-time" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Flight Time</div>
            <div className={`text-xs ${theme.textMuted}`}>Calculate arrivals</div>
          </Link>
        </div>
      </section>

      <section className={`${cardClass} mb-4`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Frequently Asked Questions</h2>
        <div className={`space-y-4 ${theme.textMuted}`}>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Can I share these times with others?</h3>
            <p className="text-sm">Yes! Click the "Share Event" button to copy a link that opens this exact event configuration.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>Does it account for DST?</h3>
            <p className="text-sm">Yes, all conversions automatically account for Daylight Saving Time in each location.</p>
          </div>
          <div>
            <h3 className={`font-medium mb-1 ${theme.text}`}>How many cities are shown?</h3>
            <p className="text-sm">We display 16 major world cities covering all major time zones. Use the Time Converter for specific lookups.</p>
          </div>
        </div>
      </section>
    </>
  )
}

// Loading fallback
function EventTimeLoading() {
  return (
    <div className="text-center py-12">
      <div className="animate-pulse">
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto mb-4"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-48 mx-auto"></div>
      </div>
    </div>
  )
}

// Main page component with Suspense wrapper
export default function EventTimePage() {
  return (
    <ToolPageWrapper footer={<Footer />}>
      <ToolsMiniNav />
      <Suspense fallback={<EventTimeLoading />}>
        <EventTimeContent />
      </Suspense>
    </ToolPageWrapper>
  )
}
