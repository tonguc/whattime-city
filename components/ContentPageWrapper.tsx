'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ContentPageWrapperProps {
  children: ReactNode
}

export default function ContentPageWrapper({ children }: ContentPageWrapperProps) {
  const { theme, isLight } = useCityContext()

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <Header />
      <div className="flex-1 max-w-6xl mx-auto px-4 py-6 w-full">
        <div className={`max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 ${isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/60 border border-slate-700'}`}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
