'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-white mb-4">500</h1>
        <p className="text-xl text-slate-300 mb-2">Something went wrong!</p>
        <p className="text-sm text-slate-400 mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all mr-2"
          >
            Try again
          </button>
          
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
