'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Meeting Planner Redirect Page
 * Redirects to /meeting/[cities] route with default cities
 */
export default function MeetingPlannerRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to meeting page with default cities (alphabetical)
    router.replace('/meeting/istanbul-vs-london')
  }, [router])
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-pulse text-lg text-slate-600">
          Redirecting to Meeting Planner...
        </div>
      </div>
    </div>
  )
}
