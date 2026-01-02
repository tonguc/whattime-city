'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void
  }
}

function RouteTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Wrap in Suspense for useSearchParams
export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <RouteTrackerInner />
    </Suspense>
  )
}
