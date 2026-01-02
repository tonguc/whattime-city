'use client'

import { useState, useMemo, useCallback } from 'react'
import { useThemeClasses } from '@/lib/useThemeClasses'
import { City } from '@/lib/cities'

interface OverlapHeatmapProps {
  cities: City[]
  referenceTimezone?: string
}

interface HourData {
  hour: number
  awakeScore: number // 0-1: uyanık şehir oranı
  businessScore: number // 0-1: business hours'ta olan şehir oranı
  cityStatuses: {
    city: City
    localHour: number
    isAwake: boolean
    isBusiness: boolean
    status: 'sleep' | 'early' | 'business' | 'evening' | 'late'
  }[]
}

interface BestTimeResult {
  type: 'business' | 'awake' // business = best time, awake = compromise
  startHour: number
  endHour: number
  duration: number
}

// Varsayılan uyanık saatler (07:00-23:00)
const AWAKE_START = 7
const AWAKE_END = 23

// İş saatleri (09:00-17:00)
const BUSINESS_START = 9
const BUSINESS_END = 17

// Saat durumunu belirle
function getHourStatus(hour: number): 'sleep' | 'early' | 'business' | 'evening' | 'late' {
  if (hour >= 0 && hour < 6) return 'sleep'
  if (hour >= 6 && hour < 9) return 'early'
  if (hour >= 9 && hour < 17) return 'business'
  if (hour >= 17 && hour < 22) return 'evening'
  return 'late' // 22-24
}

// Saat uyanık mı?
function isAwakeHour(hour: number): boolean {
  return hour >= AWAKE_START && hour < AWAKE_END
}

// İş saati mi?
function isBusinessHour(hour: number): boolean {
  return hour >= BUSINESS_START && hour < BUSINESS_END
}

// Belirli bir timezone'da şu anki saati al
function getHourInTimezone(timezone: string, offsetHours: number = 0): number {
  const now = new Date()
  const adjusted = new Date(now.getTime() + offsetHours * 60 * 60 * 1000)
  const timeStr = adjusted.toLocaleString('en-US', { 
    timeZone: timezone, 
    hour: 'numeric', 
    hour12: false 
  })
  return parseInt(timeStr) % 24
}

// Şehir için belirli bir saatteki yerel saati hesapla
function getCityHourAt(city: City, referenceHour: number, referenceTimezone: string): number {
  const now = new Date()
  
  // Referans timezone'daki şu anki saat
  const refCurrentHour = getHourInTimezone(referenceTimezone)
  
  // Hedef şehirdeki şu anki saat
  const cityCurrentHour = getHourInTimezone(city.timezone)
  
  // Fark
  const diff = cityCurrentHour - refCurrentHour
  
  // Referans saatine göre şehrin saati
  return (referenceHour + diff + 24) % 24
}

export default function OverlapHeatmap({ cities, referenceTimezone }: OverlapHeatmapProps) {
  const { isLight, textMuted, text } = useThemeClasses()
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number, y: number } | null>(null)
  
  // Referans timezone (ilk şehir veya prop)
  const refTimezone = referenceTimezone || cities[0]?.timezone || 'UTC'
  
  // Her saat için overlap verisi hesapla
  const hourlyData: HourData[] = useMemo(() => {
    if (cities.length === 0) return []
    
    return Array.from({ length: 24 }, (_, hour) => {
      const cityStatuses = cities.map(city => {
        const localHour = getCityHourAt(city, hour, refTimezone)
        const isAwake = isAwakeHour(localHour)
        const isBusiness = isBusinessHour(localHour)
        const status = getHourStatus(localHour)
        
        return { city, localHour, isAwake, isBusiness, status }
      })
      
      // Awake score: uyanık şehir sayısı / toplam
      const awakeCount = cityStatuses.filter(s => s.isAwake).length
      const awakeScore = cities.length > 0 ? awakeCount / cities.length : 0
      
      // Business score: business hours'ta olan şehir sayısı / toplam
      const businessCount = cityStatuses.filter(s => s.isBusiness).length
      const businessScore = cities.length > 0 ? businessCount / cities.length : 0
      
      return { hour, awakeScore, businessScore, cityStatuses }
    })
  }, [cities, refTimezone])
  
  // En iyi zaman penceresini bul
  // Öncelik: 1) Business hours intersection 2) Awake hours intersection
  const bestTime: BestTimeResult | null = useMemo(() => {
    if (cities.length < 2) return null
    
    // 1. Önce business hours intersection'ı kontrol et
    const fullBusinessHours = hourlyData
      .filter(h => h.businessScore === 1) // Tüm şehirler business hours'ta
      .map(h => h.hour)
    
    if (fullBusinessHours.length > 0) {
      // Business intersection VAR → "Best time for your meeting"
      const blocks = findContinuousBlocks(fullBusinessHours)
      const best = selectBestBlock(blocks)
      if (best) {
        return { type: 'business', ...best }
      }
    }
    
    // 2. Business intersection YOK → Awake hours intersection'a bak
    const fullAwakeHours = hourlyData
      .filter(h => h.awakeScore === 1) // Tüm şehirler uyanık
      .map(h => h.hour)
    
    if (fullAwakeHours.length > 0) {
      const blocks = findContinuousBlocks(fullAwakeHours)
      const best = selectBestBlock(blocks)
      if (best) {
        return { type: 'awake', ...best }
      }
    }
    
    // 3. Hiçbir tam overlap yoksa, en iyi awake overlap'i bul
    const maxAwakeScore = Math.max(...hourlyData.map(h => h.awakeScore))
    if (maxAwakeScore > 0) {
      const bestAwakeHours = hourlyData
        .filter(h => h.awakeScore === maxAwakeScore)
        .map(h => h.hour)
      
      const blocks = findContinuousBlocks(bestAwakeHours)
      const best = selectBestBlock(blocks)
      if (best) {
        return { type: 'awake', ...best }
      }
    }
    
    return null
  }, [hourlyData, cities.length])
  
  // Sürekli blokları bul
  function findContinuousBlocks(hours: number[]): { start: number, end: number, duration: number }[] {
    if (hours.length === 0) return []
    
    const sorted = [...hours].sort((a, b) => a - b)
    const blocks: { start: number, end: number, duration: number }[] = []
    
    let blockStart = sorted[0]
    let blockEnd = sorted[0]
    
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === blockEnd + 1) {
        blockEnd = sorted[i]
      } else {
        blocks.push({ start: blockStart, end: blockEnd, duration: blockEnd - blockStart + 1 })
        blockStart = sorted[i]
        blockEnd = sorted[i]
      }
    }
    blocks.push({ start: blockStart, end: blockEnd, duration: blockEnd - blockStart + 1 })
    
    return blocks
  }
  
  // En iyi bloğu seç (en uzun, eşitlik durumunda 09-17'ye en yakın)
  function selectBestBlock(blocks: { start: number, end: number, duration: number }[]): { startHour: number, endHour: number, duration: number } | null {
    if (blocks.length === 0) return null
    
    // En uzun bloğu bul
    const maxDuration = Math.max(...blocks.map(b => b.duration))
    const longestBlocks = blocks.filter(b => b.duration === maxDuration)
    
    // Eşitlik varsa, 09-17 aralığına en yakın olanı seç
    const businessCenter = 13 // 09-17'nin ortası
    const best = longestBlocks.reduce((closest, block) => {
      const blockCenter = (block.start + block.end) / 2
      const closestCenter = (closest.start + closest.end) / 2
      
      const blockDist = Math.abs(blockCenter - businessCenter)
      const closestDist = Math.abs(closestCenter - businessCenter)
      
      return blockDist < closestDist ? block : closest
    })
    
    return {
      startHour: best.start,
      endHour: best.end,
      duration: best.duration
    }
  }
  
  // Saat için renk al (3 seviyeli)
  // 1. Full business overlap → en koyu (dark blue)
  // 2. Awake but outside business → orta (medium blue)
  // 3. No overlap / night → açık (light/gray)
  const getHourColor = useCallback((data: HourData, isBestTime: boolean): string => {
    const { awakeScore, businessScore } = data
    
    if (isBestTime) {
      // Best time - ring vurgusu
      return isLight 
        ? 'bg-blue-600 ring-2 ring-blue-400 ring-offset-1' 
        : 'bg-blue-500 ring-2 ring-blue-300 ring-offset-1 ring-offset-slate-800'
    }
    
    // Seviye 1: Full business overlap (tüm şehirler 09-17)
    if (businessScore === 1) {
      return isLight ? 'bg-blue-600' : 'bg-blue-500'
    }
    
    // Seviye 2: Partial business overlap
    if (businessScore > 0 && awakeScore === 1) {
      return isLight ? 'bg-blue-500' : 'bg-blue-400'
    }
    
    // Seviye 3: Full awake overlap (tüm şehirler uyanık ama business dışı)
    if (awakeScore === 1) {
      return isLight ? 'bg-blue-400' : 'bg-blue-500/70'
    }
    
    // Seviye 4: Partial awake overlap
    if (awakeScore > 0) {
      if (awakeScore >= 0.75) return isLight ? 'bg-blue-300' : 'bg-blue-600/60'
      if (awakeScore >= 0.5) return isLight ? 'bg-blue-200' : 'bg-blue-700/50'
      return isLight ? 'bg-blue-100' : 'bg-blue-800/40'
    }
    
    // Seviye 5: No overlap (gece saatleri)
    return isLight ? 'bg-slate-100' : 'bg-slate-700/50'
  }, [isLight])
  
  // Tooltip içeriği
  const getTooltipContent = useCallback((data: HourData) => {
    const allAwake = data.awakeScore === 1
    const allBusiness = data.businessScore === 1
    const noneAwake = data.awakeScore === 0
    
    // En çok fedakarlık yapan şehri bul
    const worstCity = data.cityStatuses.reduce((worst, current) => {
      if (!worst) return current
      
      // Sleep durumu en kötü
      if (current.status === 'sleep' && worst.status !== 'sleep') return current
      if (current.status !== 'sleep' && worst.status === 'sleep') return worst
      
      // Early/late durumları kötü
      const badStatuses = ['early', 'late']
      const currentIsBad = badStatuses.includes(current.status)
      const worstIsBad = badStatuses.includes(worst.status)
      
      if (currentIsBad && !worstIsBad) return current
      
      return worst
    }, data.cityStatuses[0])
    
    return { allAwake, allBusiness, noneAwake, worstCity, cityStatuses: data.cityStatuses }
  }, [])
  
  // Saat etiketini formatla
  const formatHour = (hour: number): string => {
    return `${hour.toString().padStart(2, '0')}:00`
  }
  
  // Segment'e tıklama/hover
  const handleSegmentInteraction = (hour: number, event: React.MouseEvent | React.TouchEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const scrollY = window.scrollY || document.documentElement.scrollTop
    const scrollX = window.scrollX || document.documentElement.scrollLeft
    
    setSelectedHour(hour)
    setTooltipPosition({
      x: rect.left + scrollX + rect.width / 2,
      y: rect.top + scrollY
    })
  }
  
  const handleSegmentLeave = () => {
    setSelectedHour(null)
    setTooltipPosition(null)
  }
  
  // Referans şehir adı
  const refCityName = cities[0]?.city || 'UTC'
  
  // Eğer şehir yoksa veya tek şehir varsa
  if (cities.length === 0) {
    return (
      <div className={`text-center py-8 ${textMuted}`}>
        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-medium">Add cities to find overlap</p>
        <p className="text-sm mt-1">Select at least 2 cities to see the best meeting times</p>
      </div>
    )
  }
  
  if (cities.length === 1) {
    return (
      <div className={`text-center py-6 ${textMuted}`}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">🌍</span>
          <span className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
            {cities[0].city} added
          </span>
        </div>
        <p className="text-sm">Add at least one more city to find overlap</p>
      </div>
    )
  }
  
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <h3 className={`text-lg font-bold ${text}`}>
            📊 Overlap Heatmap
          </h3>
          <p className={`text-sm ${textMuted}`}>
            All times shown in <span className={`font-semibold ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>{refCityName} time</span> • Darker = better overlap
          </p>
        </div>
        
        {bestTime && (
          <div className="relative group">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium cursor-help ${
              bestTime.type === 'business'
                ? isLight ? 'bg-green-100 text-green-700' : 'bg-green-900/50 text-green-300'
                : isLight ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                {bestTime.type === 'business' ? 'Best:' : 'Overlap:'} {formatHour(bestTime.startHour)} - {formatHour(bestTime.endHour + 1)}
              </span>
              <span className={`text-xs ${
                bestTime.type === 'business'
                  ? isLight ? 'text-green-500' : 'text-green-400'
                  : isLight ? 'text-blue-500' : 'text-blue-400'
              }`}>
                ({bestTime.duration}h)
              </span>
            </div>
            {/* Hover tooltip with all hours */}
            <div className={`absolute top-full right-0 mt-2 px-3 py-2 rounded-lg shadow-lg border text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-700' 
                : 'bg-slate-800 border-slate-600 text-slate-200'
            }`}>
              <div className="font-medium mb-1">All {bestTime.duration} hours:</div>
              <div className={bestTime.type === 'business' ? 'text-green-600' : 'text-blue-600'}>
                {Array.from({ length: bestTime.duration }, (_, i) => {
                  const hour = (bestTime.startHour + i) % 24
                  return `${hour.toString().padStart(2, '0')}:00`
                }).join(', ')}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Timeline Grid */}
      <div className="relative">
        {/* Saat etiketleri (üst) */}
        <div className="flex mb-1">
          {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22].map(hour => (
            <div 
              key={hour} 
              className={`text-xs ${textMuted}`}
              style={{ width: `${100/12}%` }}
            >
              {hour.toString().padStart(2, '0')}
            </div>
          ))}
        </div>
        
        {/* Heatmap çubuğu wrapper - tooltip için relative container */}
        <div className="relative">
          {/* Tooltip - heatmap bar üstünde */}
          {selectedHour !== null && (
            <div 
              className={`absolute bottom-full mb-2 px-4 py-3 rounded-xl shadow-2xl border max-w-[280px] pointer-events-none ${
                isLight 
                  ? 'bg-white border-slate-200 text-slate-800' 
                  : 'bg-slate-800 border-slate-600 text-white'
              }`}
              style={{
                left: `${(selectedHour / 24) * 100}%`,
                transform: selectedHour < 3 ? 'translateX(0)' : selectedHour > 21 ? 'translateX(-100%)' : 'translateX(-50%)',
                zIndex: 50
              }}
            >
              {(() => {
                const data = hourlyData[selectedHour]
                const tooltip = getTooltipContent(data)
                
                return (
                  <>
                    {/* Ana başlık */}
                    <div className="font-semibold mb-2">
                      {formatHour(selectedHour)} ({refCityName})
                    </div>
                    
                    {/* Durum mesajı */}
                    {tooltip.allBusiness ? (
                      <div className={`flex items-center gap-2 mb-2 ${
                        isLight ? 'text-green-600' : 'text-green-400'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">All in business hours</span>
                      </div>
                    ) : tooltip.allAwake ? (
                      <>
                        <div className={`flex items-center gap-2 mb-1 ${
                          isLight ? 'text-blue-600' : 'text-blue-400'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">All participants awake</span>
                        </div>
                        {/* Business hours note */}
                        <div className={`text-xs mb-2 pl-6 ${textMuted}`}>
                          Outside business hours for some
                        </div>
                      </>
                    ) : tooltip.noneAwake ? (
                      <div className={`flex items-center gap-2 mb-2 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span className="font-medium">Outside typical hours</span>
                      </div>
                    ) : (
                      <div className={`flex items-center gap-2 mb-2 ${
                        isLight ? 'text-amber-600' : 'text-amber-400'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-medium">Partial overlap ({Math.round(data.awakeScore * 100)}%)</span>
                      </div>
                    )}
                    
                    {/* Şehir bazlı durum */}
                    <div className="space-y-1.5 text-sm">
                      {tooltip.cityStatuses.map(({ city, localHour, isAwake }) => (
                        <div key={city.slug} className="flex items-center justify-between gap-3">
                          <span className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                            {city.city}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className={`font-mono text-xs ${textMuted}`}>
                              {formatHour(localHour)}
                            </span>
                            {isAwake ? (
                              <span className="text-green-500">✓</span>
                            ) : (
                              <span className="text-slate-400">🌙</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Varsayım notu */}
                    <div className={`mt-2 pt-2 border-t text-xs ${
                      isLight ? 'border-slate-200 text-slate-400' : 'border-slate-600 text-slate-500'
                    }`}>
                      Based on 07:00-23:00 local time
                    </div>
                  </>
                )
              })()}
            </div>
          )}
          
          {/* Heatmap çubuğu */}
          <div 
            className="flex h-12 md:h-14 rounded-lg overflow-hidden"
            role="group"
            aria-label="24-hour overlap heatmap"
          >
            {hourlyData.map((data) => {
              // Bu saat best time penceresinde mi?
              const isBestTime = bestTime !== null && 
                data.hour >= bestTime.startHour && 
                data.hour <= bestTime.endHour
              
              return (
                <button
                  key={data.hour}
                  className={`flex-1 relative transition-all duration-150 ${getHourColor(data, isBestTime)} ${
                    selectedHour === data.hour ? 'scale-y-110 z-10' : ''
                  } hover:scale-y-105 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  onMouseEnter={(e) => handleSegmentInteraction(data.hour, e)}
                  onMouseLeave={handleSegmentLeave}
                  onClick={(e) => handleSegmentInteraction(data.hour, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSegmentInteraction(data.hour, e as unknown as React.MouseEvent)
                    }
                  }}
                  aria-label={`${formatHour(data.hour)}: ${Math.round(data.awakeScore * 100)}% overlap`}
                  tabIndex={0}
                >
                  {/* Best time / Overlap marker */}
                  {isBestTime && data.hour === bestTime?.startHour && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                        bestTime.type === 'business'
                          ? isLight ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                          : isLight ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {bestTime.type === 'business' ? 'Best Time' : 'Overlap'}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
        
        {/* Alt etiketler */}
        <div className="flex mt-1 justify-between">
          <span className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>00:00</span>
          <span className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>12:00</span>
          <span className={`text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>24:00</span>
        </div>
      </div>
      
      {/* Legend - 4 states */}
      <div className={`flex flex-wrap items-center justify-center gap-3 mt-4 pt-4 border-t ${
        isLight ? 'border-slate-200' : 'border-slate-700'
      }`}>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-4 h-4 rounded ${isLight ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Business hours (all)</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-4 h-4 rounded ${isLight ? 'bg-blue-400' : 'bg-blue-500/70'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>All awake (outside business)</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-4 h-4 rounded ${isLight ? 'bg-blue-200' : 'bg-blue-700/50'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Partial overlap</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <div className={`w-4 h-4 rounded ${isLight ? 'bg-slate-100 border border-slate-300' : 'bg-slate-700/50 border border-slate-600'}`}></div>
          <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Night / No overlap</span>
        </div>
      </div>
      
      {/* Best time / Overlap summary - PRIMARY DECISION AREA */}
      {bestTime && (
        <div className={`mt-6 p-5 rounded-xl ${
          bestTime.type === 'business'
            ? isLight ? 'bg-green-50 border-2 border-green-300' : 'bg-green-900/30 border-2 border-green-700/50'
            : isLight ? 'bg-amber-50 border-2 border-amber-300' : 'bg-amber-900/30 border-2 border-amber-700/50'
        }`}>
          <div className="flex items-start gap-3">
            {bestTime.type === 'business' ? (
              <svg className={`w-6 h-6 mt-0.5 ${isLight ? 'text-green-600' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 mt-0.5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <div className="flex-1">
              {/* Title - different based on type */}
              <div className={`text-lg font-bold ${
                bestTime.type === 'business'
                  ? isLight ? 'text-green-700' : 'text-green-300'
                  : isLight ? 'text-amber-700' : 'text-amber-300'
              }`}>
                {bestTime.type === 'business' 
                  ? `✓ Best time for your meeting: ${formatHour(bestTime.startHour)}–${formatHour(bestTime.endHour + 1)} (${refCityName})`
                  : `Best overlap window: ${formatHour(bestTime.startHour)}–${formatHour(bestTime.endHour + 1)} (${refCityName})`
                }
              </div>
              
              {/* Subtitle / Warning for awake-only */}
              {bestTime.type === 'awake' && (
                <div className={`mt-1 text-sm ${isLight ? 'text-amber-600' : 'text-amber-400'}`}>
                  ⚠️ No common business hours overlap
                </div>
              )}
              
              {/* Breakdown - her şehrin durumu */}
              <div className={`mt-3 space-y-1 text-sm ${
                bestTime.type === 'business'
                  ? isLight ? 'text-green-600' : 'text-green-400'
                  : isLight ? 'text-amber-700' : 'text-amber-400'
              }`}>
                {(() => {
                  const bestHourData = hourlyData[bestTime.startHour]
                  if (!bestHourData) return null
                  
                  const awakeCount = bestHourData.cityStatuses.filter(s => s.isAwake).length
                  const businessCount = bestHourData.cityStatuses.filter(s => s.isBusiness).length
                  const outsideBusinessCities = bestHourData.cityStatuses.filter(s => s.isAwake && !s.isBusiness)
                  
                  return (
                    <>
                      {bestTime.type === 'business' ? (
                        // Business overlap - all in working hours
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>All participants within working hours (9-17)</span>
                        </div>
                      ) : (
                        // Awake overlap - show who is awake and who is outside business
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>{awakeCount}/{cities.length} cities awake</span>
                          </div>
                          {businessCount > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span>{businessCount} {businessCount === 1 ? 'city' : 'cities'} within business hours</span>
                            </div>
                          )}
                          {outsideBusinessCities.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-amber-500">⚠</span>
                              <span>{outsideBusinessCities.map(s => s.city.city).join(', ')}: outside business hours</span>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )
                })()}
              </div>
              
              {/* Duration info */}
              <div className={`mt-2 text-xs ${
                bestTime.type === 'business'
                  ? isLight ? 'text-green-500' : 'text-green-500'
                  : isLight ? 'text-amber-600' : 'text-amber-500'
              }`}>
                {bestTime.duration} hour{bestTime.duration > 1 ? 's' : ''} available in this window
              </div>
              
              {/* Micro-closure - decision moment */}
              <div className={`mt-3 pt-3 border-t text-sm font-medium ${
                bestTime.type === 'business'
                  ? isLight ? 'border-green-200 text-green-700' : 'border-green-700 text-green-300'
                  : isLight ? 'border-amber-200 text-amber-700' : 'border-amber-700 text-amber-300'
              }`}>
                {bestTime.type === 'business' 
                  ? '→ All participants are within their working hours.'
                  : '→ All participants are awake, but some are outside working hours.'
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
