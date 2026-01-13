'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

interface CountryPageWrapperProps {
  children: ReactNode
}

export default function CountryPageWrapper({ children }: CountryPageWrapperProps) {
  const { theme } = useCityContext()
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
