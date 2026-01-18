'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense, useRef } from 'react'

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void
  }
}

/**
 * Route Tracker for SPA Navigation
 * 
 * IMPORTANT: This only tracks client-side navigation (Next.js Link clicks)
 * Initial page load is handled by gtag config in layout.tsx
 * 
 * This prevents duplicate page_view events.
 */
function RouteTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    // Skip first load - GA config already sent page_view
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }

    // Only track subsequent SPA navigations
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('event', 'page_view', {
        page_path: url,
        page_location: window.location.origin + url,
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
