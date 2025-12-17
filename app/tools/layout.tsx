'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import Search from '@/components/Search'

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const { theme, isLight, timeOfDay } = useCityContext()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* SINGLE SHARED HEADER - Same on ALL tools pages */}
        <header className="sticky top-0 z-50 flex items-center justify-between gap-4 mb-6 py-3 -mx-4 px-4 backdrop-blur-xl">
          {/* Logo - EXACT same size as WorldClock: h-11 sm:h-14 */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
                alt="whattime.city" 
                className="h-11 sm:h-14"
              />
            </Link>
          </div>

          {/* Search - centered */}
          <div className="flex-1 flex justify-center max-w-md">
            <Search theme={theme} currentTheme={timeOfDay} />
          </div>

          {/* Navigation */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link 
              href="/"
              className={`whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-all ${
                isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              World Clock
            </Link>
            <Link 
              href="/tools"
              className={`px-3 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}
            >
              Tools
            </Link>
          </div>
        </header>

        {/* Page content */}
        {children}
      </div>
    </div>
  )
}
