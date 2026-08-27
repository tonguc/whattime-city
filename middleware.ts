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

// Known scraper / bad bot UA fragments (lowercase match).
// These are blocked (429) on the expensive combinatorial routes only
// (/time/<a>/<b>/, /meeting/, /<city>/guide/). robots.txt asks nicely;
// this enforces it for crawlers that ignore robots.txt.
const BAD_BOT_UA = [
  // generic HTTP clients / scraping frameworks
  'python-requests',
  'python-httpx',
  'aiohttp',
  'go-http-client',
  'node-fetch',
  'okhttp',
  'scrapy',
  'java/',
  'jakarta',
  'wget/',
  'curl/',
  'libwww-perl',
  'axios/',
  'got (',
  // AI / LLM crawlers
  'gptbot',
  'oai-searchbot',
  'chatgpt-user',
  'claudebot',
  'claude-web',
  'anthropic-ai',
  'perplexitybot',
  'perplexity-user',
  'google-extended',
  'applebot-extended',
  'meta-externalagent',
  'amazonbot',
  'bytespider',
  'ccbot',
  'cohere-ai',
  'diffbot',
  'omgilibot',
  'timpibot',
  'youbot',
  // SEO / backlink / marketing crawlers
  'petalbot',
  'ahrefsbot',
  'semrushbot',
  'dataforseobot',
  'dotbot',
  'mj12bot',
  'blexbot',
  'rogerbot',
  'barkrowler',
  'zoominfobot',
  'imagesiftbot',
  'serpstatbot',
  'seokicks',
  'sistrix',
  'megaindex',
  'linkdexbot',
  // misc low-value regional / spam crawlers
  'baiduspider',
  'yandexbot',
  'seznambot',
  'sogou',
  'exabot',
  'mauibot',
  'gigabot',
  'dnyzbot',
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
  // BOT BLOCKING — pahalı kombinatoryal rotalar
  // /time/<a>/<b>/, /meeting/<cities>/, /<city>/guide/<slug>
  // Bu rotalar ISR ile üretiliyor: her yeni bot isteği function
  // invocation + ISR write yakıyor. robots.txt'yi umursamayan
  // crawler'ları burada 429 ile kesiyoruz.
  // =============================================
  const isExpensiveRoute =
    (pathname.startsWith('/time/') && pathname !== '/time/') ||
    (pathname.startsWith('/meeting/') && pathname !== '/meeting/') ||
    /^\/[^/]+\/guide\/[^/]+/.test(pathname)

  if (isExpensiveRoute) {
    const ua = request.headers.get('user-agent') || ''
    if (isBadBot(ua)) {
      return new NextResponse(null, { status: 429, headers: { 'Retry-After': '86400' } })
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
  // 1. /meeting URL Normalization + Limit
  // =============================================
  if (pathname.startsWith('/meeting/') && pathname !== '/meeting/') {
    const citiesPath = pathname.replace('/meeting/', '').replace(/\/$/, '')
    if (citiesPath && citiesPath.includes('-vs-')) {
      const cityParts = citiesPath.split('-vs-')

      // Parametrik explosion koruması: max 5 şehir
      if (cityParts.length > 5) {
        return new NextResponse(null, { status: 400 })
      }

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
