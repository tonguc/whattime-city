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
    
    // Check format
    if (cities.includes('-vs-')) {
      // Already has -vs- separator (2+ cities)
      cityParts = cities.split('-vs-')
    } else if (cities.includes('-')) {
      // Could be old format (istanbul-london) or single city with dash (new-york)
      // Let parseCities handle complex cases
      cityParts = cities.split('-')
    } else {
      // Single city slug (no dashes)
      // Don't normalize, just pass through
      return NextResponse.next()
    }

    // Only normalize if we have 2+ city parts
    if (cityParts.length === 1) {
      // Single city, no normalization needed
      return NextResponse.next()
    }

    // Normalize to alphabetical order with -vs- (for 2+ cities)
    const sorted = [...cityParts].sort()
    const normalized = sorted.join('-vs-')
    
    // Redirect if not normalized
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
