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
      ).slice(0, 12)
    : countries.slice(0, 12)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

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

  const bg = isLight ? 'bg-white' : 'bg-slate-950'
  const inputBg = isLight ? 'bg-slate-100' : 'bg-slate-800'
  const inputText = isLight ? 'text-slate-800 placeholder-slate-400' : 'text-white placeholder-slate-500'
  const resultHover = isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-800'
  const resultText = isLight ? 'text-slate-800' : 'text-slate-100'
  const subText = isLight ? 'text-slate-500' : 'text-slate-400'
  const divider = isLight ? 'border-slate-200' : 'border-slate-800'
  const cancelClass = isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'

  const triggerClass = isLight
    ? 'text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200'
    : 'text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700'

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1.5 text-sm mb-6 px-3 py-1.5 rounded-lg transition-colors ${triggerClass}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search another country
      </button>

      {open && (
        <div className={`fixed inset-0 z-[99999] flex flex-col ${bg}`}>
          {/* Search header */}
          <div className={`flex items-center gap-2 px-4 py-3 border-b ${divider} flex-shrink-0`}>
            <svg className={`w-5 h-5 flex-shrink-0 ${subText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search country or capital…"
              className={`flex-1 bg-transparent outline-none ${inputText}`}
              style={{ fontSize: '16px' }}
              autoComplete="off"
            />
            <button onClick={() => setOpen(false)} className={`text-sm font-medium px-2 py-1 transition-colors ${cancelClass}`}>
              Cancel
            </button>
          </div>

          {/* Results list — scrollable */}
          <div className="flex-1 overflow-y-auto">
            {results.map(c => (
              <button
                key={c.slug}
                onClick={() => handleSelect(c.slug)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b ${divider} ${resultHover} transition-colors`}
              >
                <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-8 h-5 object-cover rounded-sm flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${resultText}`}>{c.name}</div>
                  <div className={`text-sm ${subText}`}>{c.capital} · {c.timezones[0]}</div>
                </div>
              </button>
            ))}
            {query.trim().length > 0 && results.length === 0 && (
              <p className={`px-4 py-8 text-center text-sm ${subText}`}>No countries found for "{query}"</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
