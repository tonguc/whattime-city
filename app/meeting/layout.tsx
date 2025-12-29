'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MeetingLayout({ children }: { children: ReactNode }) {
  // FORCE LIGHT MODE for tool pages - consistent professional look
  const forcedBg = 'from-slate-50 via-gray-50 to-slate-100'

  return (
    <div className={`min-h-screen bg-gradient-to-br ${forcedBg} transition-colors duration-500`}>
      <Header />
      {children}
      <Footer isLight={true} />
    </div>
  )
}
