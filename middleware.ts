/**
 * Middleware - Bot Blocking + URL Normalization + Cache Headers
 *
 * 1. Blocks known scraper/bot User-Agents on /time/ routes
 * 2. Ensures city slugs are always in alphabetical order with -vs- separator
 * 3. Adds Cache-Control headers for /time and /meeting routes (CDN caching)
 * 4. Redirects old guide URLs to new structure
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Known scraper / bad bot UA fragments (lowercase match)
const BAD_BOT_UA = [
  'python-requests',
  'go-http-client',
  'scrapy',
  'java/',
  'wget/',
  'curl/',
  'axios/',
  'bytespider',
  'petalbot',
  'ahrefsbot',
  'semrushbot',
  'dotbot',
  'mj12bot',
  'blexbot',
  'baiduspider',
  'yandexbot',
  'seznambot',
  'sogou',
  'exabot',
]

function isBadBot(ua: string): boolean {
  if (!ua) return true
  const lower = ua.toLowerCase()
  if (BAD_BOT_UA.some(p => lower.includes(p))) return true
  // Very short UA without any browser token = likely bot
  const hasBrowserToken = lower.includes('mozilla') || lower.includes('chrome') ||
    lower.includes('safari') || lower.includes('firefox') ||
    lower.includes('googlebot') || lower.includes('bingbot')
  if (ua.length < 20 && !hasBrowserToken) return true
  return false
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // =============================================
  // BOT BLOCKING — /time/ ve /meeting/ rotaları
  // =============================================
  if (
    (pathname.startsWith('/time/') && pathname !== '/time/') ||
    (pathname.startsWith('/meeting/') && pathname !== '/meeting/')
  ) {
    const ua = request.headers.get('user-agent') || ''
    if (isBadBot(ua)) {
      return new NextResponse(null, { status: 429, headers: { 'Retry-After': '3600' } })
    }
  }

  // =============================================
  // 0. Guide URL Redirects (Old → New Structure)
  // =============================================
  if (pathname.includes('/guide/')) {
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
    const guideMatch = pathname.match(/\/guide\/([^/]+)\/?$/)
    if (guideMatch) {
      const currentSlug = guideMatch[1]
      if (redirectMap[currentSlug]) {
        const newSlug = redirectMap[currentSlug]
        const newPathname = pathname.replace(`/guide/${currentSlug}`, `/guide/${newSlug}`)
        return NextResponse.redirect(new URL(newPathname, request.url), 301)
      }
    }
  }

  // =============================================
  // 1. /meeting URL Normalization
  // =============================================
  if (pathname.startsWith('/meeting/') && pathname !== '/meeting/') {
    const citiesPath = pathname.replace('/meeting/', '').replace(/\/$/, '')
    if (citiesPath && citiesPath.includes('-vs-')) {
      const cityParts = citiesPath.split('-vs-')
      const sorted = [...cityParts].sort()
      const normalized = sorted.join('-vs-')
      if (citiesPath !== normalized) {
        return NextResponse.redirect(new URL(`/meeting/${normalized}/`, request.url), 301)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/meeting/:path*', '/time/:path*', '/:city/guide/:path*'],
}
