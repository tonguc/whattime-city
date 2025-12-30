'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MeetingLayout({ children }: { children: ReactNode }) {
  const { theme, isLight } = useCityContext()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <Header />
      {/* Same wrapper as ToolPageWrapper for consistent nav positioning */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {children}
      </div>
      <Footer isLight={isLight} />
    </div>
  )
}
