'use client'

import { ReactNode } from 'react'
import { CityProvider } from '@/lib/CityContext'
import ScrollToTop from '@/components/ScrollToTop'

export default function GlobalProviders({ children }: { children: ReactNode }) {
  return (
    <CityProvider>
      {children}
      <ScrollToTop />
    </CityProvider>
  )
}
