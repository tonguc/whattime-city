'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

interface ContentPageWrapperProps {
  children: ReactNode
}

export default function ContentPageWrapper({ children }: ContentPageWrapperProps) {
  const { theme, isLight } = useCityContext()

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg} transition-colors duration-1000${!isLight ? ' dark' : ''}`}>
      <Header />
      <div className="flex-1 max-w-6xl mx-auto px-4 py-6 w-full">
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
