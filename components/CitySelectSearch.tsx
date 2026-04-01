'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { City } from '@/lib/cities'
import { citiesCore } from '@/lib/cities-client'
const allCities = citiesCore as unknown as City[]
import { useCitySearch } from '@/lib/useCitySearch'

interface Props {
  value: City
  onChange: (city: City) => void
  isLight: boolean
  inputClass: string
  placeholder?: string
}

/**
 * Searchable city selector — replaces plain <select> for large city lists.
 * Shows selected city name; click opens search input + dropdown.
 */
export default function CitySelectSearch({ value, onChange, isLight, inputClass, placeholder }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlightIndex, setHighlightIndex] = useState(0)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 })

  const triggerRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { results, loading } = useCitySearch(query, 8)

  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setDropdownPos({
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      width: rect.width,
    })
  }

  const openDropdown = () => {
    updatePosition()
    setOpen(true)
    setQuery('')
    setHighlightIndex(0)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const closeDropdown = () => {
    setOpen(false)
    setQuery('')
  }

  const selectCity = (slug: string) => {
    const city = allCities.find(c => c.slug === slug)
    if (city) onChange(city)
    closeDropdown()
  }

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        containerRef.current?.contains(target) ||
        target.closest('[data-city-select-dropdown]')
      ) return
      closeDropdown()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Reposition on scroll/resize while open
  useEffect(() => {
    if (!open) return
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[highlightIndex]) selectCity(results[highlightIndex].slug)
    } else if (e.key === 'Escape') {
      closeDropdown()
    }
  }

  const textColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const hoverBg = isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700'
  const highlightBg = isLight ? 'bg-blue-50' : 'bg-blue-900/40'

  return (
    <div ref={containerRef} className="relative">
      {!open ? (
        <button
          ref={triggerRef}
          type="button"
          onClick={openDropdown}
          className={`w-full px-4 py-3 rounded-xl border text-left flex items-center justify-between gap-2 ${inputClass}`}
        >
          <span className="truncate">{value.city}, {value.country}</span>
          <svg className={`w-4 h-4 flex-shrink-0 ${mutedColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      ) : (
        <div className={`w-full px-4 py-3 rounded-xl border flex items-center gap-2 ${inputClass}`}>
          <svg className={`w-4 h-4 flex-shrink-0 ${mutedColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setHighlightIndex(0) }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder ?? `Search (${value.city})...`}
            className={`flex-1 bg-transparent outline-none ${textColor}`}
            style={{ fontSize: '16px' }}
          />
          <button
            type="button"
            onClick={closeDropdown}
            className={`flex-shrink-0 ${mutedColor} hover:opacity-80`}
          >
            ✕
          </button>
        </div>
      )}

      {open && typeof window !== 'undefined' && createPortal(
        <div
          data-city-select-dropdown="true"
          style={{
            position: 'absolute',
            top: dropdownPos.top,
            left: dropdownPos.left,
            width: Math.max(dropdownPos.width, 240),
            maxHeight: 280,
            overflowY: 'auto',
            zIndex: 999999,
          }}
          className={`rounded-xl shadow-2xl border ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
          }`}
        >
          {query.length === 0 && (
            <p className={`px-4 py-3 text-sm ${mutedColor}`}>
              Type to search from 2,000+ cities…
            </p>
          )}
          {query.length > 0 && !loading && results.length === 0 && (
            <p className={`px-4 py-3 text-sm ${mutedColor}`}>
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
          {results.map((city, i) => (
            <button
              key={city.slug}
              type="button"
              data-city-select-dropdown="true"
              onMouseDown={e => { e.preventDefault(); selectCity(city.slug) }}
              className={`w-full px-4 py-2.5 text-left flex items-center gap-2 transition-colors ${
                i === highlightIndex ? highlightBg : hoverBg
              }`}
            >
              <span className={`font-medium ${textColor}`}>{city.city}</span>
              <span className={`text-sm ${mutedColor}`}>{city.country}</span>
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  )
}
