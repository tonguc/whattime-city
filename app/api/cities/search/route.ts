import { NextRequest, NextResponse } from 'next/server'
import { citiesCore } from '@/data/cities-core'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const q = (searchParams.get('q') ?? '').toLowerCase().trim()
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '8'), 20)

  let results
  if (q.length < 2) {
    results = citiesCore.filter(c => c.tier === 1).slice(0, limit)
  } else {
    results = citiesCore
      .filter(c =>
        c.city.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.slug.includes(q) ||
        (c.state && c.state.toLowerCase().includes(q))
      )
      .slice(0, limit)
  }

  return NextResponse.json(
    results.map(c => ({
      slug: c.slug,
      city: c.city,
      country: c.country,
      countryCode: c.countryCode,
      timezone: c.timezone,
      state: c.state,
      stateCode: c.stateCode,
    })),
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  )
}
