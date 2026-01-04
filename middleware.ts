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
  // 0. Guide URL Redirects (Old → New Structure)
  // =============================================
  if (pathname.includes('/guide/')) {
    // Map old guide slugs to new consolidated pages
    const redirectMap: { [key: string]: string } = {
      'business-hours': 'time-business',
      'call-times': 'time-business',
      'stock-market': 'time-business',
      'best-time-to-visit': 'travel-guide',
      'travel-planning': 'travel-guide',
      'holidays': 'travel-guide',
      'remote-work': 'work-remote',
      'digital-nomad': 'work-remote',
      'time-difference': 'time-zones',
      '24-hours': '24-hours-itinerary',
    }
    
    for (const [oldSlug, newSlug] of Object.entries(redirectMap)) {
      if (pathname.includes(`/guide/${oldSlug}`)) {
        const newPathname = pathname.replace(`/guide/${oldSlug}`, `/guide/${newSlug}`)
        return NextResponse.redirect(new URL(newPathname, request.url), 301)
      }
    }
  }

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
  matcher: ['/meeting/:path*', '/time/:path*', '/:city/guide/:path*'],
}
