/**
 * Middleware - URL Normalization + Cache Headers
 * 
 * 1. Ensures city slugs are always in alphabetical order with -vs- separator
 * 2. Adds Cache-Control headers for /time and /meeting routes (CDN caching)
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // =============================================
  // 1. /meeting URL Normalization
  // =============================================
  if (pathname.startsWith('/meeting/') && pathname !== '/meeting/') {
    const cities = pathname.replace('/meeting/', '').replace(/\/$/, '')
    
    if (!cities || cities === '') {
      return addCacheHeaders(NextResponse.next(), pathname)
    }

    // ONLY normalize if URL contains -vs- separator
    if (cities.includes('-vs-')) {
      const cityParts = cities.split('-vs-')
      const sorted = [...cityParts].sort()
      const normalized = sorted.join('-vs-')
      
      if (cities !== normalized) {
        const newUrl = new URL(`/meeting/${normalized}/`, request.url)
        return NextResponse.redirect(newUrl, 301)
      }
    }
    
    return addCacheHeaders(NextResponse.next(), pathname)
  }

  // =============================================
  // 2. /time routes - Add Cache Headers
  // =============================================
  if (pathname.startsWith('/time/') && pathname !== '/time/') {
    return addCacheHeaders(NextResponse.next(), pathname)
  }

  return NextResponse.next()
}

/**
 * Add Cache-Control headers for tool pages
 * - s-maxage=86400: CDN cache for 1 day
 * - stale-while-revalidate=604800: Serve stale for 7 days while revalidating
 */
function addCacheHeaders(response: NextResponse, pathname: string): NextResponse {
  // Only add cache headers for /time and /meeting dynamic routes
  if (pathname.startsWith('/time/') || pathname.startsWith('/meeting/')) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=604800'
    )
    // Also set CDN-Cache-Control for Vercel Edge Network
    response.headers.set(
      'CDN-Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=604800'
    )
    // Vercel-specific header
    response.headers.set(
      'Vercel-CDN-Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=604800'
    )
  }
  return response
}

export const config = {
  matcher: ['/meeting/:path*', '/time/:path*'],
}
