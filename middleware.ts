/**
 * Middleware - URL Normalization
 * Ensures city pairs are always in alphabetical order
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle /meeting/[cities] routes
  if (pathname.startsWith('/meeting/') && !pathname.endsWith('/meeting/')) {
    // Extract cities part
    const cities = pathname.replace('/meeting/', '').replace(/\/$/, '')
    
    // Skip if no cities or it's the base meeting page
    if (!cities || cities === '') {
      return NextResponse.next()
    }

    // Handle different formats
    let cityParts: string[]
    
    if (cities.includes('-vs-')) {
      // Format: "london-vs-new-york"
      cityParts = cities.split('-vs-')
    } else {
      // Format: "london-new-york" - need to find split point
      // For now, check if it's already normalized by splitting and checking
      // This is a simple implementation - the full logic is in parseCityPair
      cityParts = cities.split('-')
      
      // If we can't determine, let Next.js handle it
      if (cityParts.length < 2) {
        return NextResponse.next()
      }
    }

    // Normalize to alphabetical order
    if (cityParts.length === 2) {
      const sorted = [...cityParts].sort()
      const normalized = sorted.join('-')
      
      // Redirect if not normalized (with trailing slash)
      if (cities !== normalized) {
        const newUrl = new URL(`/meeting/${normalized}/`, request.url)
        return NextResponse.redirect(newUrl, 301) // Permanent redirect
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/meeting/:path*',
}
