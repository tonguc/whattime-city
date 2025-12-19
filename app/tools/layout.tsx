'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const { theme } = useCityContext()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      {/* Shared Header - Same as HomePage and WorldClock */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-4">
        {children}
      </div>
    </div>
  )
}
