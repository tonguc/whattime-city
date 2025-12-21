'use client'

import { useState, useEffect, ReactNode } from 'react'
import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'

interface ThemedPageProps {
  children: ReactNode
}

export default function ThemedPage({ children }: ThemedPageProps) {
  const [isLight, setIsLight] = useState(false)
  
  useEffect(() => {
    // localStorage'dan tema tercihini oku
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme === 'light') {
      setIsLight(true)
    } else if (savedTheme === 'dark') {
      setIsLight(false)
    } else {
      // Auto mode - sistem tercihine bak
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsLight(!prefersDark)
    }
  }, [])
  
  return (
    <div className={`min-h-screen ${isLight 
      ? 'bg-gradient-to-br from-slate-100 via-white to-slate-100' 
      : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'
    }`}>
      <SimpleHeader isLight={isLight} />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className={isLight ? 'text-slate-800' : 'text-white'}>
          {children}
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
