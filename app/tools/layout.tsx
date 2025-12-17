'use client'

import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCityContext } from '@/lib/city-context'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import Search from '@/components/Search'

// Default coordinates (NYC) - fallback only
const DEFAULT_LAT = 40.71
const DEFAULT_LNG = -74.01

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [coords, setCoords] = useState({ lat: DEFAULT_LAT, lng: DEFAULT_LNG })
  const [isClient, setIsClient] = useState(false)

  // Read city context on client
  useEffect(() => {
    const ctx = getCityContext()
    console.log('=== TOOLS LAYOUT DEBUG ===')
    console.log('getCityContext() returned:', ctx)
    if (ctx) {
      console.log('Setting coords to:', ctx.lat, ctx.lng)
      setCoords({ lat: ctx.lat, lng: ctx.lng })
    } else {
      console.log('No context found, using defaults:', DEFAULT_LAT, DEFAULT_LNG)
    }
    setIsClient(true)
  }, [])

  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate theme from coordinates
  const timeOfDay = getTimeOfDay(currentTime, coords.lat, coords.lng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)
  
  // Don't render until we've read the context
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4" />
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      {/* Sticky Header - FULL WIDTH */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-xl ${isLight ? 'bg-white/70' : 'bg-slate-900/70'}`}>
        <div className="max-w-6xl mx-auto px-4 py-2 sm:py-3 flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Logo - same as WorldClock */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-11 sm:h-14"
            />
          </Link>
          
          {/* Search + Nav - same layout as WorldClock */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3 w-full sm:w-auto">
            <Search theme={theme} currentTheme={timeOfDay} />
            
            <div className="flex items-center justify-center w-full sm:w-auto gap-1 sm:gap-2">
              <Link 
                href="/"
                className={`px-4 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                World Clock
              </Link>
              <Link 
                href="/tools"
                className={`px-4 sm:px-4 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}
              >
                Tools
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-4">
        {children}
      </div>
    </div>
  )
}
