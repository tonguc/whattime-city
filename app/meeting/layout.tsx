'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MeetingLayout({ children }: { children: ReactNode }) {
  // Always use light mode background (like homepage)
  const isLight = true
  const lightBg = 'from-gray-50 via-white to-gray-100'

  return (
    <div className={`min-h-screen bg-gradient-to-br ${lightBg} transition-colors duration-1000`}>
      <Header />
      {children}
      <Footer isLight={isLight} />
    </div>
  )
}
