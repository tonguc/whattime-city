'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'
import { City } from '@/lib/cities'
import { WORLD_MAP_URL, isCityVisible } from './data'

// Type for city data returned by getCityData
interface CityData {
  city: City
  timeStr: string
  timeOfDay: string
  theme: {
    bg: string
    text: string
    textMuted: string
    card: string
    accent: string
    accentText: string
  }
}

interface MapSVGProps {
  isLight: boolean
  zoom: number
  setZoom: (zoom: number) => void
  selectedCity: string | null
  onCitySelect: (slug: string | null) => void
  getCityData: (slug: string) => CityData | null
  cities: City[]
  focusedCity?: City | null // Arama sonucu odaklanılacak şehir
}

export default function MapSVG({
  isLight,
  zoom,
  setZoom,
  selectedCity,
  onCitySelect,
  getCityData,
  cities,
  focusedCity,
}: MapSVGProps) {
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 20],
    zoom: 1,
  })

  // Sync external zoom with internal position
  useEffect(() => {
    setPosition(prev => ({ ...prev, zoom }))
  }, [zoom])

  // Focus on searched city
  useEffect(() => {
    if (focusedCity) {
      setPosition({
        coordinates: [focusedCity.lng, focusedCity.lat],
        zoom: 4,
      })
      setZoom(4)
      onCitySelect(focusedCity.slug)
    }
  }, [focusedCity, setZoom, onCitySelect])

  // Handle zoom from ZoomableGroup
  const handleMoveEnd = (pos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(pos)
    setZoom(pos.zoom)
  }

  // Filter cities based on zoom level (tier-based)
  const visibleCities = useMemo(() => {
    return cities.filter(city => {
      // Always show selected city
      if (city.slug === selectedCity) return true
      // Always show focused city
      if (focusedCity && city.slug === focusedCity.slug) return true
      // Filter by tier (default to tier 3 if undefined)
      const tier = city.tier ?? 3
      return isCityVisible(tier, position.zoom)
    })
  }, [cities, position.zoom, selectedCity, focusedCity])

  // Count cities by tier for display
  const cityCount = useMemo(() => {
    const tier1 = cities.filter(c => (c.tier ?? 3) === 1).length
    const tier2 = cities.filter(c => (c.tier ?? 3) === 2).length
    const tier3 = cities.filter(c => (c.tier ?? 3) === 3).length
    return { tier1, tier2, tier3, total: cities.length, visible: visibleCities.length }
  }, [cities, visibleCities])

  // Colors based on theme
  const oceanColor = isLight ? '#bfdbfe' : '#0c4a6e'
  const landColor = isLight ? '#94a3b8' : '#334155'
  const landStroke = isLight ? '#64748b' : '#475569'

  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      style={{ minHeight: '500px' }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
          center: [0, 20],
        }}
        style={{
          width: '100%',
          height: '500px',
          background: oceanColor,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
        >
          {/* World Map */}
          <Geographies geography={WORLD_MAP_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={landColor}
                  stroke={landStroke}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: isLight ? '#64748b' : '#475569' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* City Markers */}
          {visibleCities.map((city) => {
            const data = getCityData(city.slug)
            if (!data) return null

            const { timeStr, timeOfDay } = data
            const isSelected = selectedCity === city.slug
            const isFocused = focusedCity?.slug === city.slug
            const isNight = timeOfDay === 'night'
            const isDusk = timeOfDay === 'dusk'
            const isDawn = timeOfDay === 'dawn'

            // Dot colors based on time of day
            const dotColor = isNight 
              ? '#22d3ee' 
              : isDusk 
                ? '#f97316' 
                : isDawn 
                  ? '#f472b6' 
                  : '#fbbf24'

            // Dot size based on tier and selection
            const tier = city.tier ?? 3
            const baseDotSize = tier === 1 ? 5 : tier === 2 ? 4 : 3
            const dotSize = isSelected || isFocused ? 8 : baseDotSize

            return (
              <Marker
                key={city.slug}
                coordinates={[city.lng, city.lat]}
                onClick={() => onCitySelect(isSelected ? null : city.slug)}
              >
                {/* Glow effect for selected/focused */}
                {(isSelected || isFocused) && (
                  <circle
                    r={12}
                    fill={dotColor}
                    opacity={0.3}
                    className="animate-pulse"
                  />
                )}
                
                {/* City dot */}
                <circle
                  r={dotSize}
                  fill={dotColor}
                  stroke="#fff"
                  strokeWidth={tier === 1 ? 1.5 : 1}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                />

                {/* Time label - show on select or when zoomed in enough */}
                {(isSelected || isFocused || (position.zoom >= 3 && tier <= 2)) && (
                  <g>
                    <rect
                      x={-20}
                      y={-28}
                      width={40}
                      height={16}
                      rx={4}
                      fill={isNight ? '#164e63' : '#92400e'}
                      opacity={0.95}
                    />
                    <text
                      textAnchor="middle"
                      y={-16}
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '10px',
                        fontWeight: 700,
                        fill: '#fff',
                      }}
                    >
                      {timeStr}
                    </text>
                  </g>
                )}

                {/* City name on select/focus */}
                {(isSelected || isFocused) && (
                  <text
                    textAnchor="middle"
                    y={20}
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      fill: isLight ? '#1e293b' : '#f1f5f9',
                    }}
                  >
                    {city.city}
                  </text>
                )}
              </Marker>
            )
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom level & city count indicator */}
      <div
        className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-medium ${
          isLight ? 'bg-white/90 text-slate-700' : 'bg-slate-800/90 text-white'
        }`}
      >
        <div>{position.zoom.toFixed(1)}x zoom</div>
        <div className="text-[10px] opacity-70">
          {cityCount.visible} / {cityCount.total} cities
        </div>
      </div>

      {/* Instructions */}
      <div
        className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs ${
          isLight ? 'bg-white/80 text-slate-600' : 'bg-slate-800/80 text-slate-300'
        }`}
      >
        🖱️ Drag to pan • Scroll to zoom • Click city for details
      </div>
    </div>
  )
}
