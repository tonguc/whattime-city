'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function CityError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('City page error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-slate-200 mb-3">Couldn&apos;t load city</h1>
        <p className="text-slate-400 mb-6">
          Something went wrong loading this city page. This is usually temporary.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/cities"
            className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
          >
            Browse all cities
          </Link>
        </div>
      </div>
    </div>
  )
}
