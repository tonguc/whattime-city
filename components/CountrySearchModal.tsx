'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'
import { countries } from '@/lib/cities'
import { getFlagUrl } from '@/shared/utils'

export default function CountrySearchModal() {
  const { isLight } = useCityContext()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length > 0
    ? countries.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.capital.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10)
    : []

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleSelect = (slug: string) => {
    setOpen(false)
    router.push(`/country/${slug}/`)
  }

  const triggerClass = isLight
    ? 'text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200'
    : 'text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700'

  const overlayBg = isLight ? 'bg-black/40' : 'bg-black/60'
  const modalBg = isLight ? 'bg-white' : 'bg-slate-900'
  const inputBg = isLight
    ? 'bg-slate-100 text-slate-800 placeholder-slate-400'
    : 'bg-slate-800 text-white placeholder-slate-500'
  const resultHover = isLight ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-slate-800 text-slate-200'
  const textMuted = isLight ? 'text-slate-400' : 'text-slate-500'
  const divider = isLight ? 'border-slate-200' : 'border-slate-700'

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1.5 text-sm mb-6 px-3 py-1.5 rounded-lg transition-colors ${triggerClass}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search another country
      </button>

      {/* Full-screen modal */}
      {open && (
        <div
          className={`fixed inset-0 z-[99999] flex flex-col ${overlayBg}`}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className={`${modalBg} w-full`}>
            {/* Search input row */}
            <div className={`flex items-center gap-3 px-4 py-3 border-b ${divider}`}>
              <svg className={`w-5 h-5 flex-shrink-0 ${textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search country or capital…"
                className={`flex-1 bg-transparent outline-none text-base ${inputBg.replace('bg-slate-100', '').replace('bg-slate-800', '')}`}
                style={{ fontSize: '16px' }}
                autoComplete="off"
              />
              <button
                onClick={() => setOpen(false)}
                className={`flex-shrink-0 text-sm px-2 py-1 rounded ${triggerClass}`}
              >
                Cancel
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-[60vh] overflow-y-auto">
                {results.map(c => (
                  <button
                    key={c.slug}
                    onClick={() => handleSelect(c.slug)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b ${divider} ${resultHover} transition-colors`}
                  >
                    <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-7 h-5 object-cover rounded-sm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{c.name}</div>
                      <div className={`text-sm ${textMuted}`}>{c.capital} · {c.timezones[0]}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {query.trim().length > 0 && results.length === 0 && (
              <p className={`px-4 py-6 text-center text-sm ${textMuted}`}>No countries found for "{query}"</p>
            )}

            {query.trim().length === 0 && (
              <p className={`px-4 py-6 text-center text-sm ${textMuted}`}>Type a country name or capital city</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
