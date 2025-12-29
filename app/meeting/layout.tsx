'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MeetingLayout({ children }: { children: ReactNode }) {
  // Use CityContext for auto mode (like homepage)
  const { theme, isLight } = useCityContext()

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <Header />
      {children}
      <Footer isLight={isLight} />
    </div>
  )
}
