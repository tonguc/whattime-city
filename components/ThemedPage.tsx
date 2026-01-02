'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

interface ThemedPageProps {
  children: ReactNode
}

export default function ThemedPage({ children }: ThemedPageProps) {
  const { theme, isLight } = useCityContext()
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className={theme.text}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
