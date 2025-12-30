/**
 * Middleware - URL Normalization
 * Ensures city slugs are always in alphabetical order with -vs- separator
 * ONLY normalizes URLs that already have -vs- separator
 * Single cities with dashes (los-angeles, new-york) are passed through
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle /meeting/[cities] routes
  if (pathname.startsWith('/meeting/') && pathname !== '/meeting/') {
    // Extract cities part
    const cities = pathname.replace('/meeting/', '').replace(/\/$/, '')
    
    // Skip if no cities
    if (!cities || cities === '') {
      return NextResponse.next()
    }

    // ONLY normalize if URL contains -vs- separator
    // This prevents breaking single cities with dashes like "los-angeles" or "new-york"
    if (cities.includes('-vs-')) {
      // Split by -vs- separator
      const cityParts = cities.split('-vs-')
      
      // Sort alphabetically
      const sorted = [...cityParts].sort()
      const normalized = sorted.join('-vs-')
      
      // Redirect if not normalized
      if (cities !== normalized) {
        const newUrl = new URL(`/meeting/${normalized}/`, request.url)
        return NextResponse.redirect(newUrl, 301)
      }
    }
    
    // All other cases (single city, old format) - pass through
    // Let the page handle parsing
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/meeting/:path*',
}
