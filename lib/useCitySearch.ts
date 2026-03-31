'use client'

import { useState, useEffect, useRef } from 'react'

// Matches CityCore — all fields needed by downstream components
export interface CitySearchResult {
  slug: string
  city: string
  country: string
  countryCode: string
  timezone: string
  lat: number
  lng: number
  tier: number
  continent: string
  state?: string
  stateCode?: string
}

export function useCitySearch(query: string, limit = 8) {
  const [results, setResults] = useState<CitySearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (abortRef.current) abortRef.current.abort()

    if (query.length === 0) {
      setResults([])
      return
    }

    const delay = query.length < 2 ? 0 : 280

    timerRef.current = setTimeout(async () => {
      const controller = new AbortController()
      abortRef.current = controller
      setLoading(true)
      try {
        const url = `/api/cities/search?q=${encodeURIComponent(query)}&limit=${limit}`
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error('Search failed')
        setResults(await res.json())
      } catch (e) {
        if ((e as Error).name !== 'AbortError') setResults([])
      } finally {
        setLoading(false)
      }
    }, delay)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (abortRef.current) abortRef.current.abort()
    }
  }, [query, limit])

  return { results, loading }
}
