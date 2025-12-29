/**
 * Middleware - URL Normalization
 * Ensures city slugs are always in alphabetical order with -vs- separator
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle /meeting/[cities] routes
  if (pathname.startsWith('/meeting/') && !pathname.endsWith('/meeting/')) {
    // Extract cities part
    const cities = pathname.replace('/meeting/', '').replace(/\/$/, '')
    
    // Skip if no cities
    if (!cities || cities === '') {
      return NextResponse.next()
    }

    let cityParts: string[]
    let needsRedirect = false
    
    // Check format
    if (cities.includes('-vs-')) {
      // Already has -vs- separator
      cityParts = cities.split('-vs-')
    } else {
      // Old format (istanbul-london) - needs redirect to -vs- format
      // Split by dashes and try to detect cities
      const parts = cities.split('-')
      
      // Simple heuristic: if 2 parts, assume 2 single-word cities
      if (parts.length === 2) {
        cityParts = parts
        needsRedirect = true
      } else {
        // Complex case - let Next.js parseCities handle it
        return NextResponse.next()
      }
    }

    // Normalize to alphabetical order with -vs-
    const sorted = [...cityParts].sort()
    const normalized = sorted.join('-vs-')
    
    // Redirect if not normalized or missing -vs-
    if (cities !== normalized) {
      const newUrl = new URL(`/meeting/${normalized}/`, request.url)
      return NextResponse.redirect(newUrl, 301) // Permanent redirect
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/meeting/:path*',
}
