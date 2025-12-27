'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom' // Portal için gerekli
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'

// --- ALT BİLEŞEN: PORTAL KULLANAN INPUT ---
// Bu bileşen dropdown'ı sayfanın en tepesine render eder.

interface PortalCityInputProps {
  value: string
  onChange: (val: string) => void
  onSelect: (city: City) => void
  onClear: () => void
  placeholder: string
  isLight: boolean
}

function PortalCityInput({ value, onChange, onSelect, onClear, placeholder, isLight }: PortalCityInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<City[]>([])
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })
  const [mounted, setMounted] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)

  // SSR hatası almamak için component mount olunca portalı aktif et
  useEffect(() => {
    setMounted(true)
  }, [])

  // Arama sonuçlarını güncelle
  useEffect(() => {
    if (value.length >= 1) {
      setResults(searchCities(value).slice(0, 6))
    } else {
      setResults([])
    }
  }, [value])

  // Dropdown pozisyonunu hesapla
  const updatePosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect()
      setCoords({
        top: rect.bottom + window.scrollY + 4, // Inputun 4px altı
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }

  // Input odaklanınca veya yazınca pozisyonu güncelle ve aç
  const handleFocusOrChange = () => {
    updatePosition()
    setIsOpen(true)
  }

  // Scroll veya Resize durumunda menüyü takip ettir
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', updatePosition)
      window.addEventListener('resize', updatePosition)
    }
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  // Dışarı tıklayınca kapat
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      // Inputa tıklanırsa kapatma
      if (inputRef.current && inputRef.current.contains(e.target as Node)) return
      // Boşluğa tıklanırsa kapat
      setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            handleFocusOrChange()
          }}
          onFocus={handleFocusOrChange}
          placeholder={placeholder}
          className={`w-full h-10 md:h-14 px-3 pr-10 rounded-xl border text-center text-sm md:text-base ${
            isLight 
              ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' 
              : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
          } outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        />

        {/* X BUTONU - MOUSE DOWN KULLANIYORUZ (BLUR OLMASIN DİYE) */}
        {value && (
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault() // Input focus kaybetmesin
              e.stopPropagation()
              onClear()
              setIsOpen(false)
            }}
            className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 ${
              isLight 
                ? 'hover:bg-slate-200 text-slate-400 hover:text-slate-600' 
                : 'hover:bg-slate-700 text-slate-500 hover:text-slate-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* PORTAL DROPDOWN - SAYFA GÖVDESİNE RENDER EDİLİR */}
      {mounted && isOpen && results.length > 0 && createPortal(
        <div
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left,
            width: coords.width,
            zIndex: 99999, // En üst katman
          }}
          className={`rounded-xl overflow-y-auto shadow-2xl max-h-[300px] ${
            isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
          }`}
        >
          {results.map((c) => (
            <button
              key={c.slug}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault() // Focus kaybını önle
                onSelect(c)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors border-b last:border-0 ${
                isLight 
                  ? 'hover:bg-slate-100 border-slate-100' 
                  : 'hover:bg-slate-700 border-slate-700'
              }`}
            >
              <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {c.city}
              </span>
              <span className={`text-xs ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {c.country}
              </span>
            </button>
          ))}
        </div>,
        document.body // Portal Hedefi
      )}
    </div>
  )
}

// --- ANA BİLEŞEN ---

interface CompareWidgetProps {
  initialFromCity?: City | null
  initialToCity?: City | null
  isLight?: boolean
  className?: string
}

export default function CompareWidget({ 
  initialFromCity = null, 
  initialToCity = null,
  isLight = false,
  className = ""
}: CompareWidgetProps) {
  const router = useRouter()
  
  const [fromCity, setFromCity] = useState<City | null>(initialFromCity)
  const [toCity, setToCity] = useState<City | null>(initialToCity)
  const [fromQuery, setFromQuery] = useState(initialFromCity?.city || '')
  const [toQuery, setToQuery] = useState(initialToCity?.city || '')

  useEffect(() => {
    if (initialFromCity && !fromCity) {
      setFromCity(initialFromCity)
      setFromQuery(initialFromCity.city)
    }
  }, [initialFromCity, fromCity])

  useEffect(() => {
    if (initialToCity && !toCity) {
      setToCity(initialToCity)
      setToQuery(initialToCity.city)
    }
  }, [initialToCity, toCity])

  const handleCompare = () => {
    if (fromCity && toCity) {
      router.push(`/time/${fromCity.slug}/${toCity.slug}`)
    }
  }

  const handleSwap = () => {
    const tempCity = fromCity
    const tempQuery = fromQuery
    setFromCity(toCity)
    setFromQuery(toQuery)
    setToCity(tempCity)
    setToQuery(tempQuery)
  }

  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        
        {/* FROM INPUT */}
        <PortalCityInput
          value={fromQuery}
          onChange={(val) => {
            setFromQuery(val)
            setFromCity(null)
          }}
          onSelect={(city) => {
            setFromCity(city)
            setFromQuery(city.city)
          }}
          onClear={() => {
            setFromQuery('')
            setFromCity(null)
          }}
          placeholder="From city..."
          isLight={isLight}
        />
        
        {/* SWAP BUTTON */}
        <button
          type="button"
          onClick={handleSwap}
          disabled={!fromCity || !toCity}
          className={`flex-shrink-0 p-2 md:p-3 rounded-xl transition-all ${
            fromCity && toCity 
              ? (isLight ? 'hover:bg-slate-200 text-slate-600' : 'hover:bg-slate-700 text-slate-400') 
              : 'opacity-30 cursor-not-allowed text-slate-400'
          }`}
          title="Swap cities"
        >
          <svg className="w-5 h-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        
        {/* TO INPUT */}
        <PortalCityInput
          value={toQuery}
          onChange={(val) => {
            setToQuery(val)
            setToCity(null)
          }}
          onSelect={(city) => {
            setToCity(city)
            setToQuery(city.city)
          }}
          onClear={() => {
            setToQuery('')
            setToCity(null)
          }}
          placeholder="To city..."
          isLight={isLight}
        />
        
        {/* COMPARE BUTTON */}
        <button 
          onClick={handleCompare}
          disabled={!fromCity || !toCity}
          className="w-full md:w-auto h-10 md:h-14 px-6 md:px-8 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
        >
          Compare Time
        </button>
      </div>
      
      <p className={`text-xs mt-2 text-center md:text-left ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
        Compare cities or find meeting overlap
      </p>
    </div>
  )
}