/**
 * Weather API Route (Server-side)
 *
 * API key güvenli şekilde server'da kalır.
 * Client /api/weather?city=Istanbul şeklinde çağırır.
 */

import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.WEATHER_API_KEY || ''
const BASE_URL = 'https://api.weatherapi.com/v1'

// Simple in-memory cache (server-side, per warm instance only)
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 10 * 60 * 1000 // 10 minutes

// CDN cache: let Vercel's edge serve repeat requests for the same city
// straight from cache, without invoking this function. Weather changes
// slowly; 30 min fresh + 24h stale-while-revalidate collapses tens of
// thousands of invocations/day down to a few hundred.
const CDN_CACHE = 'public, s-maxage=1800, stale-while-revalidate=86400'
// "City not found" is stable — cache it hard so junk slugs from crawlers
// stop hitting the function and the upstream API.
const CDN_CACHE_NEGATIVE = 'public, s-maxage=86400, stale-while-revalidate=604800'

// IP-based rate limiter: max 10 requests per minute per IP
const ipRequestLog = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 10

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = ipRequestLog.get(ip) ?? []
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW)
  if (recent.length >= RATE_LIMIT_MAX) return true
  recent.push(now)
  ipRequestLog.set(ip, recent)
  // Cleanup old IPs occasionally to prevent memory leak
  if (ipRequestLog.size > 5000) {
    for (const [key, ts] of Array.from(ipRequestLog.entries())) {
      if (ts.every(t => now - t >= RATE_LIMIT_WINDOW)) ipRequestLog.delete(key)
    }
  }
  return false
}

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, {
      status: 429,
      headers: { 'Retry-After': '60' },
    })
  }

  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city')

  // Validation
  if (!city) {
    return NextResponse.json({ error: 'City parameter required' }, { status: 400 })
  }

  // Sanitize input (allow only alphanumeric, spaces, hyphens)
  const sanitizedCity = city.replace(/[^a-zA-Z0-9\s\-,.']/g, '').slice(0, 100)
  
  if (!sanitizedCity) {
    return NextResponse.json({ error: 'Invalid city name' }, { status: 400 })
  }

  // Check cache
  const cacheKey = sanitizedCity.toLowerCase()
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data, {
      headers: { 'X-Cache': 'HIT', 'Cache-Control': CDN_CACHE }
    })
  }

  // Check API key
  if (!API_KEY) {
    console.error('WEATHER_API_KEY not configured')
    return NextResponse.json({ error: 'Weather service unavailable' }, { status: 503 })
  }

  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(sanitizedCity)}&aqi=no`,
      { next: { revalidate: 600 } } // 10 min cache at edge
    )

    if (!response.ok) {
      if (response.status === 400) {
        return NextResponse.json({ error: 'City not found' }, {
          status: 404,
          headers: { 'Cache-Control': CDN_CACHE_NEGATIVE },
        })
      }
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data = await response.json()

    // Cache the result
    cache.set(cacheKey, { data, timestamp: Date.now() })

    return NextResponse.json(data, {
      headers: { 'X-Cache': 'MISS', 'Cache-Control': CDN_CACHE }
    })
  } catch (error) {
    console.error('Weather API error:', error)
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 })
  }
}
