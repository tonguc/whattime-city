'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { City, searchCities } from '@/lib/cities'

// --- DROPDOWN BİLEŞENİ (Portal Yok, Fixed Position Var) ---
interface DropdownProps {
  isOpen: boolean
  results: City[]
  onSelect: (city: City) => void
  inputRef: React.RefObject<HTMLInputElement>
  isLight: boolean
}

function Dropdown({ isOpen, results, onSelect, inputRef, isLight }: DropdownProps) {
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })

  // Pozisyon hesaplama (Fixed stratejisi)
  const updatePosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect()
      setCoords({
        top: rect.bottom + 4, // Inputun altı
        left: rect.left,      // Inputun solu
        width: rect.width     // Input genişliği
      })
    }
  }

  useEffect(() => {
    if (isOpen) {
      updatePosition()
      // Scroll ve Resize durumunda menü kaysın istemeyiz, takip etsin
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)
    }
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  if (!isOpen || results.length === 0) return null

  return (
    <div
      style={{
        position: 'fixed', // KRİTİK NOKTA: Absolute değil Fixed!
        top: coords.top,
        left: coords.left,
        width: coords.width,
        zIndex: 99999, // En üst katman
        maxHeight: '300px'
      }}
      className={`rounded-xl overflow-y-auto shadow-2xl ${
        isLight ? 'bg-white border border-slate-200' : 'bg-slate-800 border border-slate-700'
      }`}
      // Mouse down eventini durdur ki input blur olmasın
      onMouseDown={(e) => e.preventDefault()}
    >
      {results.map((c) => (
        <button
          key={c.slug}
          type="button"
          onClick={() => onSelect(c)}
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
    </div>
  )
}

// --- ANA WIDGET ---

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
  
  const [fromResults, setFromResults] = useState<City[]>([])
  const [toResults, setToResults] = useState<City[]>([])
  
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)

  // From Arama
  useEffect(() => {
    if (fromQuery.length >= 1 && !fromCity) {
      setFromResults(searchCities(fromQuery).slice(0, 6))
      setShowFromDropdown(true)
    } else {
      setFromResults([])
      setShowFromDropdown(false)
    }
  }, [fromQuery, fromCity])

  // To Arama
  useEffect(() => {
    if (toQuery.length >= 1 && !toCity) {
      setToResults(searchCities(toQuery).slice(0, 6))
      setShowToDropdown(true)
    } else {
      setToResults([])
      setShowToDropdown(false)
    }
  }, [toQuery, toCity])

  // Dışarı tıklama kontrolü
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      // Dropdownlar fixed olduğu için ref kontrolü zor olabilir, 
      // en temizi inputlara tıklanmadıysa kapatmaktır.
      if (fromInputRef.current && !fromInputRef.current.contains(target)) {
        setShowFromDropdown(false)
      }
      if (toInputRef.current && !toInputRef.current.contains(target)) {
        setShowToDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
        <div className="relative flex-1 w-full">
          <input 
            ref={fromInputRef}
            type="text" 
            value={fromQuery}
            onChange={(e) => { 
              setFromQuery(e.target.value)
              setFromCity(null)
            }}
            onFocus={() => {
              if (fromQuery && !fromCity) setShowFromDropdown(true)
            }}
            placeholder="From city..."
            className={`w-full h-10 md:h-14 px-3 pr-10 rounded-xl border text-center text-sm md:text-base ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' 
                : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
            } outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          
          {fromQuery && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setFromQuery('')
                setFromCity(null)
                setShowFromDropdown(false)
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${
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

          {/* DROPDOWN (Fixed Position) */}
          <Dropdown 
            isOpen={showFromDropdown}
            results={fromResults}
            onSelect={(c) => {
              setFromCity(c)
              setFromQuery(c.city)
              setShowFromDropdown(false)
            }}
            inputRef={fromInputRef}
            isLight={isLight}
          />
        </div>
        
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
        >
          <svg className="w-5 h-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        
        {/* TO INPUT */}
        <div className="relative flex-1 w-full">
          <input 
            ref={toInputRef}
            type="text" 
            value={toQuery}
            onChange={(e) => { 
              setToQuery(e.target.value)
              setToCity(null)
            }}
            onFocus={() => {
              if (toQuery && !toCity) setShowToDropdown(true)
            }}
            placeholder="To city..."
            className={`w-full h-10 md:h-14 px-3 pr-10 rounded-xl border text-center text-sm md:text-base ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400' 
                : 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
            } outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          
          {toQuery && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setToQuery('')
                setToCity(null)
                setShowToDropdown(false)
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all hover:scale-110 z-10 ${
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

          {/* DROPDOWN (Fixed Position) */}
          <Dropdown 
            isOpen={showToDropdown}
            results={toResults}
            onSelect={(c) => {
              setToCity(c)
              setToQuery(c.city)
              setShowToDropdown(false)
            }}
            inputRef={toInputRef}
            isLight={isLight}
          />
        </div>
        
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