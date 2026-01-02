'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'
import { useCityContext } from '@/lib/CityContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CompareWidget from '@/components/CompareWidget'

interface TimeComparisonContentProps {
  fromCity: City
  toCity: City
}

// Get timezone offset in hours
function getTimezoneOffset(timezone: string): number {
  const now = new Date()
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }))
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
  return (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60)
}

// Format timezone with UTC offset
function formatTimezone(timezone: string, offset: number): string {
  const hours = Math.floor(Math.abs(offset))
  const minutes = Math.round((Math.abs(offset) - hours) * 60)
  const sign = offset >= 0 ? '+' : '-'
  const utc = minutes > 0 
    ? `UTC${sign}${hours}:${minutes.toString().padStart(2, '0')}`
    : `UTC${sign}${hours}`
  return `${timezone.split('/').pop()?.replace('_', ' ')} (${utc})`
}

// Format time difference nicely
function formatTimeDifference(hours: number): string {
  const absHours = Math.abs(hours)
  const h = Math.floor(absHours)
  const m = Math.round((absHours - h) * 60)
  
  if (m === 0) {
    return `${h} hour${h !== 1 ? 's' : ''}`
  }
  return `${h} hour${h !== 1 ? 's' : ''} ${m} min`
}

// Phone codes for countries
const PHONE_CODES: Record<string, string> = {
  'TR': '+90', 'GB': '+44', 'US': '+1', 'DE': '+49', 'FR': '+33',
  'JP': '+81', 'CN': '+86', 'AU': '+61', 'IN': '+91', 'BR': '+55',
  'IT': '+39', 'ES': '+34', 'NL': '+31', 'BE': '+32', 'CH': '+41',
  'AT': '+43', 'PL': '+48', 'SE': '+46', 'NO': '+47', 'DK': '+45',
  'FI': '+358', 'PT': '+351', 'GR': '+30', 'CZ': '+420', 'HU': '+36',
  'RO': '+40', 'IE': '+353', 'RU': '+7', 'UA': '+380', 'ZA': '+27',
  'EG': '+20', 'NG': '+234', 'KE': '+254', 'MA': '+212', 'AE': '+971',
  'SA': '+966', 'IL': '+972', 'SG': '+65', 'MY': '+60', 'TH': '+66',
  'VN': '+84', 'ID': '+62', 'PH': '+63', 'KR': '+82', 'TW': '+886',
  'HK': '+852', 'NZ': '+64', 'MX': '+52', 'AR': '+54', 'CL': '+56',
  'CO': '+57', 'PE': '+51', 'CA': '+1', 'QA': '+974', 'KW': '+965',
  'BH': '+973', 'OM': '+968', 'PK': '+92', 'BD': '+880', 'LK': '+94',
}

// Currency codes for countries
const CURRENCY_CODES: Record<string, { code: string, symbol: string }> = {
  'TR': { code: 'TRY', symbol: '₺' },
  'GB': { code: 'GBP', symbol: '£' },
  'US': { code: 'USD', symbol: '$' },
  'EU': { code: 'EUR', symbol: '€' },
  'DE': { code: 'EUR', symbol: '€' },
  'FR': { code: 'EUR', symbol: '€' },
  'IT': { code: 'EUR', symbol: '€' },
  'ES': { code: 'EUR', symbol: '€' },
  'NL': { code: 'EUR', symbol: '€' },
  'BE': { code: 'EUR', symbol: '€' },
  'AT': { code: 'EUR', symbol: '€' },
  'PT': { code: 'EUR', symbol: '€' },
  'GR': { code: 'EUR', symbol: '€' },
  'IE': { code: 'EUR', symbol: '€' },
  'FI': { code: 'EUR', symbol: '€' },
  'JP': { code: 'JPY', symbol: '¥' },
  'CN': { code: 'CNY', symbol: '¥' },
  'AU': { code: 'AUD', symbol: 'A$' },
  'IN': { code: 'INR', symbol: '₹' },
  'BR': { code: 'BRL', symbol: 'R$' },
  'CH': { code: 'CHF', symbol: 'CHF' },
  'SE': { code: 'SEK', symbol: 'kr' },
  'NO': { code: 'NOK', symbol: 'kr' },
  'DK': { code: 'DKK', symbol: 'kr' },
  'PL': { code: 'PLN', symbol: 'zł' },
  'CZ': { code: 'CZK', symbol: 'Kč' },
  'HU': { code: 'HUF', symbol: 'Ft' },
  'RO': { code: 'RON', symbol: 'lei' },
  'RU': { code: 'RUB', symbol: '₽' },
  'UA': { code: 'UAH', symbol: '₴' },
  'ZA': { code: 'ZAR', symbol: 'R' },
  'AE': { code: 'AED', symbol: 'د.إ' },
  'SA': { code: 'SAR', symbol: 'ر.س' },
  'IL': { code: 'ILS', symbol: '₪' },
  'SG': { code: 'SGD', symbol: 'S$' },
  'MY': { code: 'MYR', symbol: 'RM' },
  'TH': { code: 'THB', symbol: '฿' },
  'ID': { code: 'IDR', symbol: 'Rp' },
  'PH': { code: 'PHP', symbol: '₱' },
  'KR': { code: 'KRW', symbol: '₩' },
  'TW': { code: 'TWD', symbol: 'NT$' },
  'HK': { code: 'HKD', symbol: 'HK$' },
  'NZ': { code: 'NZD', symbol: 'NZ$' },
  'MX': { code: 'MXN', symbol: '$' },
  'AR': { code: 'ARS', symbol: '$' },
  'CA': { code: 'CAD', symbol: 'C$' },
  'QA': { code: 'QAR', symbol: 'ر.ق' },
}

// Time of day icons with visual representation
const TimeOfDayIcon = ({ timeOfDay, size = 'md' }: { timeOfDay: string, size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClass = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'
  
  if (timeOfDay === 'night') {
    return (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
      </svg>
    )
  }
  if (timeOfDay === 'dawn' || timeOfDay === 'dusk') {
    return (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="17" r="5" fill="#fb923c" stroke="#f97316" strokeWidth="1.5"/>
        <path d="M12 2v3M4.22 10.22l2.12 2.12M1 17h3M4.22 23.78l2.12-2.12M12 28v-3M19.78 23.78l-2.12-2.12M23 17h-3M19.78 10.22l-2.12 2.12" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M0 17h24" stroke="#94a3b8" strokeWidth="2"/>
      </svg>
    )
  }
  // Day
  return (
    <svg className={sizeClass} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

// FAQ Accordion Item
const FAQItem = ({ question, answer, isLight }: { question: string, answer: string, isLight: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`border-b ${isLight ? 'border-gray-200' : 'border-slate-700'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-4 flex items-center justify-between text-left ${isLight ? 'text-slate-700' : 'text-slate-200'}`}
      >
        <span className="font-medium pr-4">{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`pb-4 text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default function TimeComparisonContent({ fromCity: initialFromCity, toCity: initialToCity }: TimeComparisonContentProps) {
  const context = useCityContext()
  const [time, setTime] = useState(new Date())
  const [currentFromCity, setCurrentFromCity] = useState<City>(initialFromCity)
  const [currentToCity, setCurrentToCity] = useState<City>(initialToCity)
  
  // Interactive slider state - starts at current hour
  const [sliderHour, setSliderHour] = useState(() => {
    const now = new Date()
    return now.getHours()
  })
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  // Weather state
  const [fromWeather, setFromWeather] = useState<any>(null)
  const [toWeather, setToWeather] = useState<any>(null)
  
  // Copy feedback
  const [copyFeedback, setCopyFeedback] = useState(false)
  
  // Meeting planner state
  const [useExtendedHours, setUseExtendedHours] = useState(false)
  const [selectedMeetingHour, setSelectedMeetingHour] = useState<number | null>(null)
  const [meetingCopyFeedback, setMeetingCopyFeedback] = useState(false)
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const fromCity = currentFromCity
  const toCity = currentToCity
  
  // Fetch weather for both cities
  useEffect(() => {
    const fetchWeather = async (city: City, setWeather: (w: any) => void) => {
      try {
        const res = await fetch(`/api/weather?city=${encodeURIComponent(city.city)}`)
        if (res.ok) {
          const data = await res.json()
          setWeather(data)
        }
      } catch (e) {
        console.log('Weather fetch failed')
      }
    }
    
    fetchWeather(fromCity, setFromWeather)
    fetchWeather(toCity, setToWeather)
  }, [fromCity, toCity])
  
  // Calculate times
  const fromTime = time.toLocaleTimeString('en-US', { 
    timeZone: fromCity.timezone, 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: context.use12Hour 
  })
  const toTime = time.toLocaleTimeString('en-US', { 
    timeZone: toCity.timezone, 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: context.use12Hour 
  })
  
  const fromDate = time.toLocaleDateString('en-US', { 
    timeZone: fromCity.timezone, 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  const toDate = time.toLocaleDateString('en-US', { 
    timeZone: toCity.timezone, 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
  
  // Time of day
  const fromTimeOfDay = getTimeOfDay(time, fromCity.lat, fromCity.lng, fromCity.timezone)
  const toTimeOfDay = getTimeOfDay(time, toCity.lat, toCity.lng, toCity.timezone)
  
  // Calculate time difference
  const fromOffset = getTimezoneOffset(fromCity.timezone)
  const toOffset = getTimezoneOffset(toCity.timezone)
  const diffHours = toOffset - fromOffset
  
  // USE CONTEXT THEME DIRECTLY - same as HomePage!
  // CityContext already handles themeMode (auto/light/dark) calculation
  const mainTheme = context.theme
  const isLight = context.isLight
  
  // Format timezones
  const fromTimezoneStr = formatTimezone(fromCity.timezone, fromOffset)
  const toTimezoneStr = formatTimezone(toCity.timezone, toOffset)
  
  // Phone codes
  const fromPhoneCode = PHONE_CODES[fromCity.countryCode] || ''
  const toPhoneCode = PHONE_CODES[toCity.countryCode] || ''
  
  // Currency info
  const fromCurrency = CURRENCY_CODES[fromCity.countryCode]
  const toCurrency = CURRENCY_CODES[toCity.countryCode]
  
  // Interactive slider - calculate corresponding hour in toCity
  const getToHour = (fromHour: number) => {
    return (fromHour + diffHours + 24) % 24
  }
  
  const sliderToHour = getToHour(sliderHour)
  
  // Determine time of day for slider hours
  const getHourTimeOfDay = (hour: number): string => {
    if (hour >= 6 && hour < 8) return 'dawn'
    if (hour >= 8 && hour < 18) return 'day'
    if (hour >= 18 && hour < 20) return 'dusk'
    return 'night'
  }
  
  // Slider drag handlers
  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, x / rect.width))
    const hour = Math.round(percentage * 23)
    setSliderHour(hour)
  }, [])
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleSliderMove(e.clientX)
  }
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX)
    }
  }, [isDragging, handleSliderMove])
  
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])
  
  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    handleSliderMove(e.touches[0].clientX)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleSliderMove(e.touches[0].clientX)
    }
  }
  
  // Google Calendar link generator
  const generateGoogleCalendarLink = (hour: number) => {
    const now = new Date()
    const startDate = new Date(now)
    startDate.setHours(hour, 0, 0, 0)
    if (hour < now.getHours()) {
      startDate.setDate(startDate.getDate() + 1)
    }
    const endDate = new Date(startDate)
    endDate.setHours(hour + 1)
    
    const formatGCalDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const title = encodeURIComponent(`Call: ${fromCity.city} ↔ ${toCity.city}`)
    const details = encodeURIComponent(`Time in ${fromCity.city}: ${hour}:00\nTime in ${toCity.city}: ${getToHour(hour)}:00`)
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatGCalDate(startDate)}/${formatGCalDate(endDate)}&details=${details}`
  }
  
  // Copy to clipboard
  const copyToClipboard = () => {
    const text = `📅 Meeting Time:\n${fromCity.city}: ${sliderHour.toString().padStart(2, '0')}:00\n${toCity.city}: ${sliderToHour.toString().padStart(2, '0')}:00\n\n🔗 ${typeof window !== 'undefined' ? window.location.href : ''}`
    navigator.clipboard.writeText(text)
    setCopyFeedback(true)
    setTimeout(() => setCopyFeedback(false), 2000)
  }
  
  // Share link with time parameter
  const getShareLink = () => {
    if (typeof window === 'undefined') return ''
    const baseUrl = window.location.origin
    return `${baseUrl}/time/${fromCity.slug}/${toCity.slug}?hour=${sliderHour}`
  }
  
  // Business hours overlap calculation
  const getOverlapHours = () => {
    const overlaps: { fromHour: number; toHour: number; label: string }[] = []
    
    for (let fromHour = 9; fromHour <= 17; fromHour++) {
      const toHour = (fromHour + diffHours + 24) % 24
      if (toHour >= 9 && toHour < 17) {
        overlaps.push({ 
          fromHour, 
          toHour, 
          label: `${fromHour}:00 ${fromCity.city} = ${toHour}:00 ${toCity.city}` 
        })
      }
    }
    return overlaps
  }
  
  const overlapHours = getOverlapHours()
  
  // Best calling times - TIME AWARE
  const getBestCallTimes = () => {
    const fromCityNow = new Date(time.toLocaleString('en-US', { timeZone: fromCity.timezone }))
    const currentHour = fromCityNow.getHours()
    const currentTimeDecimal = currentHour + fromCityNow.getMinutes() / 60
    
    interface CallTimeSuggestion {
      fromStart: number
      fromEnd: number
      fromLabel: string
      toLabel: string
      quality: 'excellent' | 'good'
      status: 'upcoming' | 'passed' | 'current'
      isToday: boolean
    }
    
    const suggestions: CallTimeSuggestion[] = []
    
    // Morning call window (8-10 AM)
    const morningToStart = (8 + diffHours + 24) % 24
    const morningToEnd = (10 + diffHours + 24) % 24
    if (morningToStart >= 7 && morningToStart <= 22) {
      const quality = (morningToStart >= 9 && morningToStart <= 17) ? 'excellent' : 'good'
      let status: 'upcoming' | 'passed' | 'current' = 'upcoming'
      if (currentTimeDecimal >= 10) status = 'passed'
      else if (currentTimeDecimal >= 8) status = 'current'
      
      suggestions.push({
        fromStart: 8, fromEnd: 10,
        fromLabel: '8:00 – 10:00 AM',
        toLabel: `${morningToStart.toString().padStart(2, '0')}:00 – ${morningToEnd.toString().padStart(2, '0')}:00`,
        quality, status, isToday: status !== 'passed'
      })
    }
    
    // Midday window (11 AM - 1 PM)
    const middayToStart = (11 + diffHours + 24) % 24
    const middayToEnd = (13 + diffHours + 24) % 24
    if (middayToStart >= 7 && middayToStart <= 22) {
      const quality = (middayToStart >= 9 && middayToStart <= 17) ? 'excellent' : 'good'
      let status: 'upcoming' | 'passed' | 'current' = 'upcoming'
      if (currentTimeDecimal >= 13) status = 'passed'
      else if (currentTimeDecimal >= 11) status = 'current'
      
      suggestions.push({
        fromStart: 11, fromEnd: 13,
        fromLabel: '11:00 AM – 1:00 PM',
        toLabel: `${middayToStart.toString().padStart(2, '0')}:00 – ${middayToEnd.toString().padStart(2, '0')}:00`,
        quality, status, isToday: status !== 'passed'
      })
    }
    
    // Evening window (6-8 PM)
    const eveningToStart = (18 + diffHours + 24) % 24
    const eveningToEnd = (20 + diffHours + 24) % 24
    if (eveningToStart >= 7 && eveningToStart <= 23) {
      const quality = (eveningToStart >= 9 && eveningToStart <= 17) ? 'excellent' : 'good'
      let status: 'upcoming' | 'passed' | 'current' = 'upcoming'
      if (currentTimeDecimal >= 20) status = 'passed'
      else if (currentTimeDecimal >= 18) status = 'current'
      
      suggestions.push({
        fromStart: 18, fromEnd: 20,
        fromLabel: '6:00 – 8:00 PM',
        toLabel: `${eveningToStart.toString().padStart(2, '0')}:00 – ${eveningToEnd.toString().padStart(2, '0')}:00`,
        quality, status, isToday: status !== 'passed'
      })
    }
    
    return suggestions
  }
  
  const callTimes = getBestCallTimes()
  
  // Call time status
  const getCallTimeStatus = () => {
    const availableToday = callTimes.filter(ct => ct.isToday)
    const passedToday = callTimes.filter(ct => !ct.isToday)
    
    if (availableToday.length > 0) {
      const currentTime = availableToday.find(ct => ct.status === 'current')
      return {
        type: currentTime ? 'now' as const : 'today' as const,
        title: currentTime ? '📞 Best Time to Call – Right Now!' : '📞 Best Time to Call Today',
        availableTimes: availableToday,
        hasTodayOptions: true
      }
    } else if (passedToday.length > 0) {
      const tomorrowBest = callTimes.find(ct => ct.quality === 'excellent') || callTimes[0]
      return {
        type: 'tomorrow' as const,
        title: '📞 Next Best Time to Call',
        bestTime: tomorrowBest,
        availableTimes: callTimes,
        hasTodayOptions: false
      }
    }
    
    return { type: 'none' as const, title: '📞 Best Time to Call', availableTimes: [], hasTodayOptions: false }
  }
  
  const callTimeStatus = getCallTimeStatus()
  
  // Swap handler
  const handleCitiesChange = (newFromCity: City | null, newToCity: City | null) => {
    if (newFromCity) setCurrentFromCity(newFromCity)
    if (newToCity) setCurrentToCity(newToCity)
  }
  
  // Estimated flight time (rough calculation based on distance)
  const calculateFlightTime = () => {
    const R = 6371 // Earth radius in km
    const dLat = (toCity.lat - fromCity.lat) * Math.PI / 180
    const dLon = (toCity.lng - fromCity.lng) * Math.PI / 180
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(fromCity.lat * Math.PI / 180) * Math.cos(toCity.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const distance = R * c
    
    // Average cruising speed ~850 km/h + 1h for takeoff/landing
    const flightHours = Math.round((distance / 850 + 1) * 10) / 10
    
    return { distance: Math.round(distance), hours: flightHours }
  }
  
  const flightInfo = calculateFlightTime()
  
  // FAQ data
  const faqData = [
    {
      question: `What is the time difference between ${fromCity.city} and ${toCity.city}?`,
      answer: `${toCity.city} is ${Math.abs(diffHours)} hour${Math.abs(diffHours) !== 1 ? 's' : ''} ${diffHours > 0 ? 'ahead of' : diffHours < 0 ? 'behind' : 'the same as'} ${fromCity.city}. When it's noon in ${fromCity.city}, it's ${(12 + diffHours + 24) % 24}:00 in ${toCity.city}.`
    },
    {
      question: `What is the best time to call between ${fromCity.city} and ${toCity.city}?`,
      answer: `The best times for calls are during overlapping business hours. ${overlapHours.length > 0 ? `You have ${overlapHours.length} hours of overlap between 9 AM - 5 PM in both cities.` : 'There is no overlap during standard business hours, so consider early morning or late evening calls.'}`
    },
    {
      question: `How long is the flight from ${fromCity.city} to ${toCity.city}?`,
      answer: `The approximate distance is ${flightInfo.distance.toLocaleString()} km. A direct flight typically takes around ${flightInfo.hours} hours, though actual times may vary based on routes and connections.`
    },
    {
      question: `Do ${fromCity.city} and ${toCity.city} observe Daylight Saving Time?`,
      answer: `Daylight Saving Time practices vary by country and can temporarily change the time difference by an hour. Always verify current times when scheduling important meetings during DST transition periods (typically March/April and October/November).`
    },
    {
      question: `What are the country codes for calling between these cities?`,
      answer: `${fromCity.city}, ${fromCity.country}: ${fromPhoneCode || 'varies'}\n${toCity.city}, ${toCity.country}: ${toPhoneCode || 'varies'}`
    }
  ]
  
  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${mainTheme.bg}`} style={{ overflow: 'visible' }}>
      <Header isLight={isLight} />

      <main className="max-w-6xl mx-auto px-4 py-8" style={{ overflow: 'visible' }}>
        {/* Title */}
        <h1 className={`text-2xl sm:text-3xl font-bold text-center mb-2 ${mainTheme.text} transition-all duration-300`}>
          Time Difference between {fromCity.city} and {toCity.city}
        </h1>
        
        <p className={`text-sm text-center mb-6 ${mainTheme.textMuted}`}>
          {fromTimezoneStr} → {toTimezoneStr}
        </p>
        
        {/* Compare Widget */}
        <div className="mb-8" style={{ position: 'relative', zIndex: 50, overflow: 'visible' }}>
          <CompareWidget 
            initialFromCity={fromCity}
            initialToCity={toCity}
            onCitiesChange={handleCitiesChange}
            isLight={isLight}
          />
        </div>
        
        {/* Current Time Cards with Weather & Phone Codes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* From City */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${mainTheme.card}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <TimeOfDayIcon timeOfDay={fromTimeOfDay} size="lg" />
                <div>
                  <h2 className={`text-lg font-semibold ${mainTheme.text}`}>{fromCity.city}</h2>
                  <p className={`text-xs ${mainTheme.textMuted}`}>{fromCity.country}</p>
                </div>
              </div>
              {fromWeather && (
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm ${isLight ? 'bg-gray-100' : 'bg-slate-700'}`}>
                  <img src={`https:${fromWeather.current.condition.icon}`} alt="" className="w-6 h-6" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-200'}>{Math.round(fromWeather.current.temp_c)}°</span>
                </div>
              )}
            </div>
            <div className={`text-4xl font-bold mb-2 ${mainTheme.text}`}>{fromTime}</div>
            <p className={`text-sm ${mainTheme.textMuted}`}>{fromDate}</p>
            <div className={`mt-3 pt-3 border-t ${isLight ? 'border-gray-200' : 'border-slate-700'} flex flex-wrap gap-3 text-xs`}>
              {fromPhoneCode && (
                <span className={`px-2 py-1 rounded ${isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                  📞 {fromPhoneCode}
                </span>
              )}
              {fromCurrency && (
                <span className={`px-2 py-1 rounded ${isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                  💱 {fromCurrency.code}
                </span>
              )}
            </div>
          </div>
          
          {/* To City */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${mainTheme.card}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <TimeOfDayIcon timeOfDay={toTimeOfDay} size="lg" />
                <div>
                  <h2 className={`text-lg font-semibold ${mainTheme.text}`}>{toCity.city}</h2>
                  <p className={`text-xs ${mainTheme.textMuted}`}>{toCity.country}</p>
                </div>
              </div>
              {toWeather && (
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm ${isLight ? 'bg-gray-100' : 'bg-slate-700'}`}>
                  <img src={`https:${toWeather.current.condition.icon}`} alt="" className="w-6 h-6" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-200'}>{Math.round(toWeather.current.temp_c)}°</span>
                </div>
              )}
            </div>
            <div className={`text-4xl font-bold mb-2 ${mainTheme.text}`}>{toTime}</div>
            <p className={`text-sm ${mainTheme.textMuted}`}>{toDate}</p>
            <div className={`mt-3 pt-3 border-t ${isLight ? 'border-gray-200' : 'border-slate-700'} flex flex-wrap gap-3 text-xs`}>
              {toPhoneCode && (
                <span className={`px-2 py-1 rounded ${isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                  📞 {toPhoneCode}
                </span>
              )}
              {toCurrency && (
                <span className={`px-2 py-1 rounded ${isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-700 text-slate-300'}`}>
                  💱 {toCurrency.code}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Time Difference Badge */}
        <div className={`text-center mb-8 py-3 px-6 rounded-full inline-flex mx-auto items-center gap-2 border ${mainTheme.card}`} style={{ display: 'flex', width: 'fit-content', margin: '0 auto 2rem auto' }}>
          <span className="text-2xl">⏱️</span>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <span className={`font-bold ${mainTheme.text}`}>
              {formatTimeDifference(Math.abs(diffHours))}
            </span>
            {' '}{diffHours > 0 ? `ahead` : diffHours < 0 ? `behind` : `same time`}
          </p>
        </div>
        
        {/* Interactive Time Slider */}
        <div className={`p-6 rounded-3xl backdrop-blur-xl border mb-8 ${mainTheme.card}`}>
          <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${mainTheme.text}`}>
            🕐 Interactive Time Explorer
          </h3>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${isLight ? 'text-blue-600' : 'text-blue-400'} transition-all duration-300`}>
            When it's {sliderHour.toString().padStart(2, '0')}:00 in {fromCity.city}, it's {sliderToHour.toString().padStart(2, '0')}:00 in {toCity.city}
          </h2>
          <p className={`text-sm mb-4 ${mainTheme.textMuted}`}>
            Drag the slider to see corresponding times in both cities
          </p>
          
          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className={`relative h-16 rounded-xl cursor-pointer select-none ${isLight ? 'bg-gray-100' : 'bg-slate-700'}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Hour markers */}
            <div className="absolute inset-0 flex">
              {Array.from({ length: 24 }, (_, i) => {
                return (
                  <div 
                    key={i} 
                    className={`flex-1 ${i < 6 || i >= 20 ? (isLight ? 'bg-indigo-100' : 'bg-indigo-900/30') : i < 8 || i >= 18 ? (isLight ? 'bg-orange-100' : 'bg-orange-900/30') : (isLight ? 'bg-amber-100' : 'bg-amber-900/20')}`}
                    style={{ borderRight: i < 23 ? `1px solid ${isLight ? '#e2e8f0' : '#475569'}` : 'none' }}
                  />
                )
              })}
            </div>
            
            {/* Current position indicator */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-blue-500 rounded-full shadow-lg transition-all"
              style={{ left: `${(sliderHour / 23) * 100}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className={`px-3 py-1 rounded-lg text-sm font-medium shadow-lg ${isLight ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'}`}>
                  {sliderHour.toString().padStart(2, '0')}:00
                </div>
              </div>
            </div>
            
            {/* Hour labels */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs">
              {[0, 6, 12, 18, 23].map(h => (
                <span key={h} className={isLight ? 'text-slate-400' : 'text-slate-500'}>{h}:00</span>
              ))}
            </div>
          </div>
          
          {/* Time Display */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TimeOfDayIcon timeOfDay={getHourTimeOfDay(sliderHour)} size="sm" />
                <span className={`text-sm font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{fromCity.city}</span>
              </div>
              <div className={`text-3xl font-bold ${mainTheme.text}`}>
                {sliderHour.toString().padStart(2, '0')}:00
              </div>
            </div>
            <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TimeOfDayIcon timeOfDay={getHourTimeOfDay(sliderToHour)} size="sm" />
                <span className={`text-sm font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{toCity.city}</span>
              </div>
              <div className={`text-3xl font-bold ${mainTheme.text}`}>
                {sliderToHour.toString().padStart(2, '0')}:00
                {diffHours > 0 && sliderHour + diffHours >= 24 && <span className="text-sm ml-1 text-blue-500">(+1)</span>}
                {diffHours < 0 && sliderHour + diffHours < 0 && <span className="text-sm ml-1 text-orange-500">(-1)</span>}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <a
              href={generateGoogleCalendarLink(sliderHour)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isLight ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/50'}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
              Add to Google Calendar
            </a>
            
            <button
              onClick={copyToClipboard}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
            >
              {copyFeedback ? (
                <>
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
            
            <button
              onClick={() => {
                if (typeof navigator !== 'undefined' && navigator.share) {
                  navigator.share({ title: `${fromCity.city} to ${toCity.city} Time`, url: getShareLink() })
                } else if (typeof navigator !== 'undefined') {
                  navigator.clipboard.writeText(getShareLink())
                  setCopyFeedback(true)
                  setTimeout(() => setCopyFeedback(false), 2000)
                }
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isLight ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-green-900/50 text-green-300 hover:bg-green-800/50'}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share Link
            </button>
          </div>
        </div>
        
        {/* Best Meeting Times - Unified Card */}
        <div className={`p-6 rounded-3xl backdrop-blur-xl border mb-8 ${mainTheme.card}`}>
          {/* Header - Mobile: Title + Cities on same row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <h3 className={`text-lg font-semibold ${mainTheme.text}`}>
              🤝 Best Meeting Times
            </h3>
            <span className={`text-sm ${mainTheme.textMuted}`}>
              {fromCity.city} & {toCity.city}
            </span>
          </div>
          
          {/* Tab Buttons - Full width */}
          <div className={`flex rounded-xl p-1 mb-5 ${isLight ? 'bg-slate-100' : 'bg-slate-800'}`}>
            <button
              onClick={() => setUseExtendedHours(false)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                !useExtendedHours 
                  ? (isLight ? 'bg-white text-green-700 shadow-sm' : 'bg-slate-700 text-green-400')
                  : (isLight ? 'text-slate-500 hover:text-slate-700' : 'text-slate-400 hover:text-slate-200')
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${!useExtendedHours ? 'bg-green-500' : (isLight ? 'bg-slate-300' : 'bg-slate-600')}`} />
              Business Hours
              <span className={`text-xs ${!useExtendedHours ? '' : 'opacity-60'}`}>(9-17)</span>
            </button>
            <button
              onClick={() => setUseExtendedHours(true)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                useExtendedHours 
                  ? (isLight ? 'bg-white text-amber-700 shadow-sm' : 'bg-slate-700 text-amber-400')
                  : (isLight ? 'text-slate-500 hover:text-slate-700' : 'text-slate-400 hover:text-slate-200')
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${useExtendedHours ? 'bg-amber-500' : (isLight ? 'bg-slate-300' : 'bg-slate-600')}`} />
              Extended Hours
              <span className={`text-xs ${useExtendedHours ? '' : 'opacity-60'}`}>(8-22)</span>
            </button>
          </div>
          
          {/* Meeting Slots */}
          {(() => {
            const businessStart = useExtendedHours ? 8 : 9
            const businessEnd = useExtendedHours ? 22 : 17
            
            // Calculate all meeting slots
            const slots: { fromHour: number; toHour: number; quality: 'excellent' | 'good' | 'avoid' }[] = []
            
            for (let fromHour = 0; fromHour < 24; fromHour++) {
              const toHour = (fromHour + diffHours + 24) % 24
              
              const fromInBusiness = fromHour >= businessStart && fromHour < businessEnd
              const toInBusiness = toHour >= businessStart && toHour < businessEnd
              
              // Only show reasonable hours (6-23)
              if (fromHour >= 6 && fromHour <= 23) {
                if (fromInBusiness && toInBusiness) {
                  slots.push({ fromHour, toHour, quality: 'excellent' })
                } else if ((fromInBusiness || toInBusiness) && (fromHour >= 7 && fromHour <= 21) && (toHour >= 7 && toHour <= 21)) {
                  slots.push({ fromHour, toHour, quality: 'good' })
                }
              }
            }
            
            const excellentSlots = slots.filter(s => s.quality === 'excellent')
            const goodSlots = slots.filter(s => s.quality === 'good')
            
            return (
              <div className="space-y-4">
                {/* City Time Reference */}
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${isLight ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-blue-900/30 text-blue-300 border border-blue-800'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
                  </svg>
                  <span>Times shown in <strong>{fromCity.city}</strong> time</span>
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Excellent - Both in office</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Good - Flexible hours</span>
                  </div>
                </div>
                
                {/* Excellent Slots */}
                {excellentSlots.length > 0 && (
                  <div>
                    <p className={`text-xs font-medium mb-2 ${isLight ? 'text-green-700' : 'text-green-400'}`}>
                      ✓ Perfect Match ({excellentSlots.length} hours)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {excellentSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedMeetingHour(selectedMeetingHour === slot.fromHour ? null : slot.fromHour)}
                          className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedMeetingHour === slot.fromHour
                              ? 'bg-green-500 text-white ring-2 ring-green-300 ring-offset-2'
                              : isLight 
                                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                : 'bg-green-900/50 text-green-300 hover:bg-green-800/50'
                          }`}
                        >
                          {slot.fromHour.toString().padStart(2, '0')}:00
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Good Slots */}
                {goodSlots.length > 0 && (
                  <div>
                    <p className={`text-xs font-medium mb-2 ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>
                      ◐ Extended Hours ({goodSlots.length} hours)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {goodSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedMeetingHour(selectedMeetingHour === slot.fromHour ? null : slot.fromHour)}
                          className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedMeetingHour === slot.fromHour
                              ? 'bg-amber-500 text-white ring-2 ring-amber-300 ring-offset-2'
                              : isLight 
                                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                                : 'bg-amber-900/50 text-amber-300 hover:bg-amber-800/50'
                          }`}
                        >
                          {slot.fromHour.toString().padStart(2, '0')}:00
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* No slots available */}
                {excellentSlots.length === 0 && goodSlots.length === 0 && (
                  <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-100' : 'bg-slate-800/50'}`}>
                    <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                      Large time difference - consider async communication or try Extended Hours mode
                    </p>
                  </div>
                )}
                
                {/* Selected Time Detail */}
                {selectedMeetingHour !== null && (
                  <div className={`mt-4 p-4 rounded-xl border-2 ${
                    excellentSlots.some(s => s.fromHour === selectedMeetingHour)
                      ? (isLight ? 'bg-green-50 border-green-300' : 'bg-green-900/30 border-green-700')
                      : (isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-900/30 border-amber-700')
                  }`}>
                    <p className={`text-sm font-medium mb-3 ${
                      excellentSlots.some(s => s.fromHour === selectedMeetingHour)
                        ? (isLight ? 'text-green-700' : 'text-green-300')
                        : (isLight ? 'text-amber-700' : 'text-amber-300')
                    }`}>
                      {excellentSlots.some(s => s.fromHour === selectedMeetingHour)
                        ? '✅ Excellent! Both locations are within standard business hours.'
                        : '⚡ Good choice! One party may be slightly outside standard hours.'}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className={`p-3 rounded-lg text-center border ${mainTheme.card}`}>
                        <p className={`text-xs mb-1 ${mainTheme.textMuted}`}>🇹🇷 {fromCity.city}</p>
                        <p className={`text-xl font-bold ${mainTheme.text}`}>
                          {selectedMeetingHour.toString().padStart(2, '0')}:00
                        </p>
                        <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                          {selectedMeetingHour < 12 ? 'AM' : 'PM'}
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg text-center border ${mainTheme.card}`}>
                        <p className={`text-xs mb-1 ${mainTheme.textMuted}`}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 {toCity.city}</p>
                        <p className={`text-xl font-bold ${mainTheme.text}`}>
                          {((selectedMeetingHour + diffHours + 24) % 24).toString().padStart(2, '0')}:00
                        </p>
                        <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                          {((selectedMeetingHour + diffHours + 24) % 24) < 12 ? 'AM' : 'PM'}
                          {diffHours > 0 && selectedMeetingHour + diffHours >= 24 && ' (+1 day)'}
                          {diffHours < 0 && selectedMeetingHour + diffHours < 0 && ' (-1 day)'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          const text = `📅 Meeting Time:\n${fromCity.city}: ${selectedMeetingHour.toString().padStart(2, '0')}:00\n${toCity.city}: ${((selectedMeetingHour + diffHours + 24) % 24).toString().padStart(2, '0')}:00`
                          navigator.clipboard.writeText(text)
                          setMeetingCopyFeedback(true)
                          setTimeout(() => setMeetingCopyFeedback(false), 2000)
                        }}
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          isLight ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                        }`}
                      >
                        {meetingCopyFeedback ? (
                          <>
                            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                            </svg>
                            Copy for Invite
                          </>
                        )}
                      </button>
                      
                      <a
                        href={(() => {
                          const now = new Date()
                          const startDate = new Date(now)
                          startDate.setHours(selectedMeetingHour, 0, 0, 0)
                          if (selectedMeetingHour < now.getHours()) {
                            startDate.setDate(startDate.getDate() + 1)
                          }
                          const endDate = new Date(startDate)
                          endDate.setHours(selectedMeetingHour + 1)
                          
                          const formatGCalDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
                          const title = encodeURIComponent(`Meeting: ${fromCity.city} ↔ ${toCity.city}`)
                          const details = encodeURIComponent(`${fromCity.city}: ${selectedMeetingHour.toString().padStart(2, '0')}:00\n${toCity.city}: ${((selectedMeetingHour + diffHours + 24) % 24).toString().padStart(2, '0')}:00`)
                          
                          return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatGCalDate(startDate)}/${formatGCalDate(endDate)}&details=${details}`
                        })()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          isLight ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                        </svg>
                        Add to Calendar
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })()}
        </div>
        
        {/* Flight & Travel Info with Affiliate */}
        <div className={`p-6 rounded-3xl backdrop-blur-xl border mb-8 ${mainTheme.card}`}>
          <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${mainTheme.text}`}>
            ✈️ Travel Information
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <p className={`text-xs ${mainTheme.textMuted}`}>Distance</p>
              <p className={`text-xl font-bold ${mainTheme.text}`}>
                {flightInfo.distance.toLocaleString()} km
              </p>
            </div>
            <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <p className={`text-xs ${mainTheme.textMuted}`}>Est. Flight Time</p>
              <p className={`text-xl font-bold ${mainTheme.text}`}>
                ~{flightInfo.hours}h
              </p>
            </div>
            <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
              <p className={`text-xs ${mainTheme.textMuted}`}>Time Difference</p>
              <p className={`text-xl font-bold ${mainTheme.text}`}>
                {diffHours > 0 ? '+' : ''}{diffHours}h
              </p>
            </div>
            {/* NEW: Business Hours Overlap */}
            {(() => {
              // Calculate overlap of 9-17 business hours
              const fromStart = 9, fromEnd = 17
              const toStart = (9 - diffHours + 24) % 24
              const toEnd = (17 - diffHours + 24) % 24
              
              // Simple overlap calculation for same-day scenario
              let overlapHours = 0
              for (let h = 9; h < 17; h++) {
                const correspondingToHour = (h + diffHours + 24) % 24
                if (correspondingToHour >= 9 && correspondingToHour < 17) {
                  overlapHours++
                }
              }
              
              return (
                <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <p className={`text-xs ${mainTheme.textMuted}`}>Work Hours Overlap</p>
                  <p className={`text-xl font-bold ${overlapHours >= 4 ? (isLight ? 'text-green-600' : 'text-green-400') : overlapHours > 0 ? (isLight ? 'text-amber-600' : 'text-amber-400') : (isLight ? 'text-red-600' : 'text-red-400')}`}>
                    {overlapHours}h
                  </p>
                  <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {overlapHours >= 6 ? 'Excellent' : overlapHours >= 4 ? 'Good' : overlapHours > 0 ? 'Limited' : 'None'}
                  </p>
                </div>
              )
            })()}
            {/* NEW: Best Call Window - LIVE INDICATOR */}
            {(() => {
              // Find all overlapping hours (both cities in 9-17 range)
              const overlapHours: number[] = []
              for (let h = 9; h < 17; h++) {
                const correspondingToHour = (h + diffHours + 24) % 24
                if (correspondingToHour >= 9 && correspondingToHour < 17) {
                  overlapHours.push(h)
                }
              }
              
              // Get current hour in fromCity
              const now = new Date()
              const fromCityTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
              const currentFromHour = fromCityTime.getHours()
              const currentFromMinute = fromCityTime.getMinutes()
              
              // Check if current time is within overlap range
              const isGoodTime = overlapHours.includes(currentFromHour)
              
              // Format overlap range string
              const overlapRangeStr = overlapHours.length > 0 
                ? `${overlapHours[0].toString().padStart(2, '0')}:00 - ${(overlapHours[overlapHours.length - 1] + 1).toString().padStart(2, '0')}:00`
                : 'No overlap'
              
              // Calculate next available slot
              let nextSlotStr = ''
              if (!isGoodTime && overlapHours.length > 0) {
                const firstOverlapHour = overlapHours[0]
                if (currentFromHour < firstOverlapHour) {
                  // Today, later
                  nextSlotStr = `Today ${firstOverlapHour.toString().padStart(2, '0')}:00`
                } else {
                  // Tomorrow
                  nextSlotStr = `Tomorrow ${firstOverlapHour.toString().padStart(2, '0')}:00`
                }
              } else if (overlapHours.length === 0) {
                nextSlotStr = 'No overlap available'
              }
              
              if (isGoodTime) {
                return (
                  <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-green-50 border border-green-200' : 'bg-green-900/30 border border-green-800'}`}>
                    <p className={`text-xs ${isLight ? 'text-green-600' : 'text-green-400'}`}>
                      🟢 Good to Call Now
                    </p>
                    <p className={`text-lg font-bold ${isLight ? 'text-green-700' : 'text-green-300'}`}>
                      {currentFromHour.toString().padStart(2, '0')}:{currentFromMinute.toString().padStart(2, '0')}
                    </p>
                    <p className={`text-xs mt-0.5 ${isLight ? 'text-green-500' : 'text-green-400'}`}>
                      {overlapRangeStr}
                    </p>
                  </div>
                )
              } else {
                return (
                  <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-red-50 border border-red-200' : 'bg-red-900/30 border border-red-800'}`}>
                    <p className={`text-xs ${isLight ? 'text-red-600' : 'text-red-400'}`}>
                      🔴 Office Closed
                    </p>
                    <p className={`text-sm font-bold ${isLight ? 'text-red-700' : 'text-red-300'}`}>
                      {nextSlotStr}
                    </p>
                    <p className={`text-xs mt-0.5 ${isLight ? 'text-red-500' : 'text-red-400'}`}>
                      {overlapRangeStr}
                    </p>
                  </div>
                )
              }
            })()}
          </div>
        </div>
        
        {/* Quick Conversion Table */}
        <div className={`p-6 rounded-3xl backdrop-blur-xl border mb-8 ${mainTheme.card}`}>
          <h3 className={`text-lg font-semibold mb-4 ${mainTheme.text}`}>
            ⏰ Quick Conversion
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[6, 9, 12, 15, 18, 21, 0, 3].map(hour => {
              const toHour = (hour + diffHours + 24) % 24
              const nextDay = hour + diffHours >= 24 || hour + diffHours < 0
              const hourTod = getHourTimeOfDay(hour)
              return (
                <div key={hour} className={`p-3 rounded-xl text-center ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TimeOfDayIcon timeOfDay={hourTod} size="sm" />
                    <p className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                      {hour.toString().padStart(2, '0')}:00
                    </p>
                  </div>
                  <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{fromCity.city}</p>
                  <p className={`mt-1 text-lg font-bold ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                    {toHour.toString().padStart(2, '0')}:00
                  </p>
                  <p className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {toCity.city} {nextDay && diffHours > 0 ? '(+1)' : nextDay && diffHours < 0 ? '(-1)' : ''}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* City Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link 
            href={`/${fromCity.slug}`}
            className={`p-4 rounded-2xl text-center transition-all hover:scale-[1.02] border ${mainTheme.card} ${mainTheme.text}`}
          >
            View {fromCity.city} Details →
          </Link>
          <Link 
            href={`/${toCity.slug}`}
            className={`p-4 rounded-2xl text-center transition-all hover:scale-[1.02] border ${mainTheme.card} ${mainTheme.text}`}
          >
            View {toCity.city} Details →
          </Link>
        </div>
        
        {/* Reverse Link */}
        <div className="text-center mb-8">
          <Link 
            href={`/time/${toCity.slug}/${fromCity.slug}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${isLight ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-800 hover:bg-slate-100'}`}
          >
            🔄 View {toCity.city} to {fromCity.city}
          </Link>
        </div>
        
        {/* FAQ Section */}
        <section className={`rounded-3xl p-6 mb-8 border ${mainTheme.card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${mainTheme.text}`}>
            ❓ Frequently Asked Questions
          </h2>
          <div>
            {faqData.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} isLight={isLight} />
            ))}
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section className={`rounded-2xl p-6 border ${mainTheme.card}`}>
          <h2 className={`text-xl font-semibold mb-4 ${mainTheme.text}`}>
            Time Difference Between {fromCity.city} and {toCity.city}
          </h2>
          <div className={`space-y-4 text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <p>
              {fromCity.city}, {fromCity.country} and {toCity.city}, {toCity.country} are separated by a time 
              difference of {formatTimeDifference(Math.abs(diffHours))}. When it's noon in {fromCity.city}, 
              it's {diffHours > 0 ? `${formatTimeDifference(diffHours)} later` : diffHours < 0 ? `${formatTimeDifference(Math.abs(diffHours))} earlier` : 'the same time'} in {toCity.city}.
            </p>
            <p>
              {fromCity.city} operates on {fromCity.timezone.replace('_', ' ')} timezone, while {toCity.city} uses {toCity.timezone.replace('_', ' ')}. 
              Both cities may observe Daylight Saving Time at different dates, which can temporarily change 
              the time difference by an hour.
            </p>
            
            <h3 className={`text-base font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Best Time to Call
            </h3>
            <p>
              {Math.abs(diffHours) <= 3 
                ? `With only ${formatTimeDifference(Math.abs(diffHours))} difference, scheduling calls between ${fromCity.city} and ${toCity.city} is relatively easy.`
                : Math.abs(diffHours) <= 6
                ? `To catch business hours in both cities, consider scheduling calls during ${diffHours > 0 ? `early morning in ${fromCity.city}` : `late afternoon in ${fromCity.city}`}.`
                : `Due to the ${formatTimeDifference(Math.abs(diffHours))} difference, finding overlapping business hours can be challenging.`
              }
            </p>
            
            <h3 className={`text-base font-medium mt-4 ${isLight ? 'text-slate-700' : 'text-white'}`}>
              Flight Considerations
            </h3>
            <p>
              The distance between {fromCity.city} and {toCity.city} is approximately {flightInfo.distance.toLocaleString()} km. 
              A direct flight typically takes around {flightInfo.hours} hours. When traveling, remember that your arrival time 
              will be in local time. Use our <Link href="/flight-time/" className="text-cyan-500 hover:underline">Flight Time Calculator</Link> for accurate arrival predictions.
            </p>
          </div>
        </section>
      </main>

      <Footer isLight={isLight} />
    </div>
  )
}
