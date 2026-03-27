'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'
import { countries } from '@/lib/cities'
import { getFlagUrl } from '@/shared/utils'

interface DropdownPos { top: number; left: number; width: number }

export default function CountrySearchModal() {
  const { isLight } = useCityContext()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<DropdownPos | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const results = query.trim().length > 0
    ? countries.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.capital.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : []

  const updatePos = useCallback(() => {
    if (inputRef.current) {
      const r = inputRef.current.getBoundingClientRect()
      setPos({ top: r.bottom + 4, left: r.left, width: r.width })
    }
  }, [])

  const handleFocus = () => {
    updatePos()
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    window.addEventListener('scroll', updatePos, true)
    window.addEventListener('resize', updatePos)
    return () => {
      window.removeEventListener('scroll', updatePos, true)
      window.removeEventListener('resize', updatePos)
    }
  }, [open, updatePos])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (
        inputRef.current && !inputRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleSelect = (slug: string) => {
    setOpen(false)
    setQuery('')
    router.push(`/country/${slug}/`)
  }

  const inputClass = isLight
    ? 'bg-slate-100 border-slate-200 text-slate-800 placeholder-slate-400 focus-within:border-cyan-400 focus-within:bg-white'
    : 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus-within:border-cyan-500'

  const dropdownClass = isLight
    ? 'bg-white border-slate-200 shadow-xl'
    : 'bg-slate-900 border-slate-700 shadow-xl'

  const resultClass = isLight
    ? 'hover:bg-slate-50 text-slate-800 border-slate-100'
    : 'hover:bg-slate-800 text-slate-100 border-slate-800'

  const subText = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <div className="mb-6 max-w-sm">
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-colors ${inputClass}`}>
        <svg className={`w-4 h-4 flex-shrink-0 ${subText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); updatePos() }}
          onFocus={handleFocus}
          placeholder="Search another country…"
          className="flex-1 bg-transparent outline-none text-sm"
          style={{ fontSize: '16px' }}
          autoComplete="off"
        />
        {query && (
          <button onClick={() => { setQuery(''); setOpen(false) }} className={`${subText} hover:text-current`}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown — fixed position to avoid any overflow/layout issues */}
      {open && results.length > 0 && pos && (
        <div
          ref={dropdownRef}
          className={`fixed z-[99999] rounded-xl border overflow-hidden ${dropdownClass}`}
          style={{ top: pos.top, left: pos.left, width: Math.max(pos.width, 260) }}
        >
          {results.map(c => (
            <button
              key={c.slug}
              onMouseDown={(e) => { e.preventDefault(); handleSelect(c.slug) }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-left border-b last:border-0 transition-colors ${resultClass}`}
            >
              <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-7 h-[18px] object-cover rounded-sm flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{c.name}</div>
                <div className={`text-xs ${subText}`}>{c.capital} · {c.timezones[0]}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
