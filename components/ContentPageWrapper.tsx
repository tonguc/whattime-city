'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ContentPageWrapperProps {
  children: ReactNode
}

export default function ContentPageWrapper({ children }: ContentPageWrapperProps) {
  const { theme } = useCityContext()

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}
